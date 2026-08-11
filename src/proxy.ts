import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  defaultLocale,
  isLocale,
  locales,
  type Locale,
} from "@/i18n/config";

const localeCookie = "NEXT_LOCALE";
const oneYear = 60 * 60 * 24 * 365;

function getPreferredLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(localeCookie)?.value;

  if (cookieLocale && isLocale(cookieLocale)) {
    return cookieLocale;
  }

  const accepted = (request.headers.get("accept-language") ?? "")
    .split(",")
    .map((entry) => {
      const [tag, quality = "q=1"] = entry.trim().split(";");
      const score = Number.parseFloat(quality.replace("q=", "")) || 0;
      return { tag: tag.toLowerCase(), score };
    })
    .sort((a, b) => b.score - a.score);

  for (const { tag, score } of accepted) {
    if (score <= 0) {
      continue;
    }

    const baseLanguage = tag.split("-")[0];

    if (isLocale(baseLanguage)) {
      return baseLanguage;
    }
  }

  return defaultLocale;
}

function localeFromPathname(pathname: string): Locale | null {
  return locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
  ) ?? null;
}

function rememberLocale(response: NextResponse, locale: Locale) {
  response.cookies.set(localeCookie, locale, {
    path: "/",
    maxAge: oneYear,
    sameSite: "lax",
  });

  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameLocale = localeFromPathname(pathname);

  if (pathnameLocale) {
    return rememberLocale(NextResponse.next(), pathnameLocale);
  }

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;

  return rememberLocale(NextResponse.redirect(url), locale);
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|_next/data|favicon.ico|robots.txt|sitemap.xml|manifest.webmanifest|.*\\..*).*)",
  ],
};
