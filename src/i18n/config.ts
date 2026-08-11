export const locales = ["es", "en"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "es";

export const localeLabels = {
  es: {
    short: "ES",
    long: "Español",
    html: "es-CO",
  },
  en: {
    short: "EN",
    long: "English",
    html: "en",
  },
} as const satisfies Record<Locale, { short: string; long: string; html: string }>;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizePath(locale: Locale, path = ""): string {
  const normalizedPath = !path || path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${normalizedPath}`;
}

export function swapLocaleInPath(pathname: string, targetLocale: Locale): string {
  const segments = pathname.split("/");

  if (isLocale(segments[1] ?? "")) {
    segments[1] = targetLocale;
    return segments.join("/") || `/${targetLocale}`;
  }

  return localizePath(targetLocale, pathname);
}
