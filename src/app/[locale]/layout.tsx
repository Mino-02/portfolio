import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  isLocale,
  localeLabels,
  locales,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { siteConfig, siteUrl } from "@/lib/site";

import "../globals.css";

type LocaleLayoutProps = Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>;

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);
  const canonical = `/${locale}`;

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: `${siteConfig.name} — ${dictionary.metadata.role}`,
      template: `%s — ${siteConfig.shortName}`,
    },
    description: dictionary.metadata.description,
    applicationName: dictionary.metadata.applicationName,
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    keywords: [...dictionary.metadata.keywords],
    alternates: {
      canonical,
      languages: {
        "es-CO": "/es",
        en: "/en",
        "x-default": "/es",
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "es" ? "es_CO" : "en_US",
      alternateLocale: locale === "es" ? ["en_US"] : ["es_CO"],
      url: canonical,
      title: `${siteConfig.name} — ${dictionary.metadata.role}`,
      description: dictionary.metadata.description,
      siteName: dictionary.metadata.applicationName,
    },
    twitter: {
      card: "summary_large_image",
      title: `${siteConfig.name} — ${dictionary.metadata.role}`,
      description: dictionary.metadata.description,
    },
    manifest: "/manifest.webmanifest",
  };
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
  themeColor: "#183b31",
};

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);

  return (
    <html lang={localeLabels[locale].html}>
      <body>
        <a className="skip-link" href="#content">
          {dictionary.skipLink}
        </a>
        <SiteHeader locale={locale} />
        {children}
        <SiteFooter locale={locale} />
      </body>
    </html>
  );
}
