"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";

import {
  localeLabels,
  locales,
  swapLocaleInPath,
  type Locale,
} from "@/i18n/config";

type LanguageSwitcherProps = {
  locale: Locale;
  ariaLabel: string;
  compact?: boolean;
};

export function LanguageSwitcher({
  locale,
  ariaLabel,
  compact = false,
}: LanguageSwitcherProps) {
  const pathname = usePathname() || `/${locale}`;

  function rememberLocale(targetLocale: Locale, event: MouseEvent<HTMLAnchorElement>) {
    document.cookie = `NEXT_LOCALE=${targetLocale}; path=/; max-age=31536000; samesite=lax`;

    if (window.location.hash) {
      event.preventDefault();
      window.location.assign(
        `${swapLocaleInPath(pathname, targetLocale)}${window.location.hash}`,
      );
    }
  }

  return (
    <div
      className={`language-switcher${compact ? " language-switcher--compact" : ""}`}
      aria-label={ariaLabel}
      role="group"
    >
      {locales.map((targetLocale) => (
        <Link
          href={swapLocaleInPath(pathname, targetLocale)}
          hrefLang={localeLabels[targetLocale].html}
          lang={localeLabels[targetLocale].html}
          aria-current={targetLocale === locale ? "page" : undefined}
          aria-label={localeLabels[targetLocale].long}
          onClick={(event: MouseEvent<HTMLAnchorElement>) => rememberLocale(targetLocale, event)}
          key={targetLocale}
        >
          {localeLabels[targetLocale].short}
        </Link>
      ))}
    </div>
  );
}
