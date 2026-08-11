import Link from "next/link";

import { ArrowUpRightIcon, MenuIcon, SparkIcon } from "@/components/icons";
import { LanguageSwitcher } from "@/components/language-switcher";
import { getDictionary } from "@/i18n/dictionaries";
import { localizePath, type Locale } from "@/i18n/config";
import { siteConfig } from "@/lib/site";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const dictionary = getDictionary(locale);
  const homePath = localizePath(locale);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href={homePath} aria-label={dictionary.header.homeAria}>
          <span className="brand-mark" aria-hidden="true">
            <SparkIcon />
          </span>
          <span className="brand-copy">
            <strong>{siteConfig.shortName}</strong>
            <span>{dictionary.header.brandRole}</span>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label={dictionary.header.navAria}>
          {dictionary.header.navigation.map((item) => (
            <Link key={item.hash} href={`${homePath}#${item.hash}`}>
              {item.label}
            </Link>
          ))}
          <LanguageSwitcher
            locale={locale}
            ariaLabel={dictionary.header.languageAria}
          />
          <a className="nav-cta" href={`mailto:${siteConfig.email}`}>
            {dictionary.header.contact}
            <ArrowUpRightIcon />
          </a>
        </nav>

        <details className="mobile-nav">
          <summary>
            <span>{dictionary.header.menu}</span>
            <MenuIcon />
          </summary>
          <nav aria-label={dictionary.header.mobileNavAria}>
            {dictionary.header.navigation.map((item) => (
              <Link key={item.hash} href={`${homePath}#${item.hash}`}>
                {item.label}
              </Link>
            ))}
            <a href={`mailto:${siteConfig.email}`}>{dictionary.header.contact}</a>
            <LanguageSwitcher
              locale={locale}
              ariaLabel={dictionary.header.languageAria}
              compact
            />
          </nav>
        </details>
      </div>
    </header>
  );
}
