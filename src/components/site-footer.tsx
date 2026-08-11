import Link from "next/link";

import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  SparkIcon,
} from "@/components/icons";
import { getPortfolio } from "@/data/portfolio";
import { localizePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { siteConfig } from "@/lib/site";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const dictionary = getDictionary(locale);
  const { profile } = getPortfolio(locale);

  return (
    <footer className="site-footer" id="contact">
      <div className="shell">
        <section className="contact-panel" aria-labelledby="contact-title">
          <p className="contact-kicker">
            <SparkIcon />
            {dictionary.footer.kicker}
          </p>
          <div className="contact-grid">
            <div>
              <p className="section-index">{dictionary.footer.index}</p>
              <h2 id="contact-title">{dictionary.footer.title}</h2>
            </div>
            <div className="contact-copy">
              <p>{profile.availability}</p>
              <a className="contact-email" href={`mailto:${siteConfig.email}`}>
                <MailIcon />
                <span>{siteConfig.email}</span>
                <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </section>

        <div className="footer-bar">
          <Link className="footer-brand" href={localizePath(locale)}>
            <SparkIcon />
            <span>{siteConfig.shortName}</span>
          </Link>
          <p>© {new Date().getFullYear()} · {dictionary.footer.copyright}</p>
          <div className="social-links" aria-label={dictionary.footer.socialAria}>
            <a
              href={siteConfig.links.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={dictionary.footer.linkedinAria}
            >
              <LinkedinIcon />
            </a>
            <a
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label={dictionary.footer.githubAria}
            >
              <GithubIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
