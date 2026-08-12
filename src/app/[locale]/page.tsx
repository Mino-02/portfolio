import Link from "next/link";
import { notFound } from "next/navigation";

import { HeroArtifact } from "@/components/hero-artifact";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CodeIcon,
  DownloadIcon,
  LocationIcon,
  ResearchIcon,
} from "@/components/icons";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { getPortfolio } from "@/data/portfolio";
import { isLocale, localizePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { siteConfig, siteUrl } from "@/lib/site";

type HomePageProps = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: HomePageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);
  const { processPrinciples, profile, projects } = getPortfolio(locale);
  const homePath = localizePath(locale);

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    url: `${siteUrl}${homePath}`,
    jobTitle: dictionary.home.jsonLdJobTitle,
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cali",
      addressCountry: "CO",
    },
    sameAs: [siteConfig.links.linkedin, siteConfig.links.github],
    knowsLanguage: ["es", "en"],
  };

  return (
    <main id="content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />

      <section className="hero-section" id="home" aria-labelledby="hero-title">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <p className="availability-pill">
              <span className="availability-pill__dot" aria-hidden="true" />
              <span className="availability-pill__text">
                {profile.availability}
              </span>
            </p>
            <p className="hero-eyebrow">{dictionary.home.heroEyebrow}</p>
            <h1 id="hero-title">
              {dictionary.home.heroTitleBefore}
              <em>{dictionary.home.heroTitleEmphasis}</em>
              {dictionary.home.heroTitleAfter}
            </h1>
            <p className="hero-intro">{profile.intro}</p>

            <div className="hero-actions">
              <Link className="button button--primary" href="#projects">
                {dictionary.home.primaryCta}
                <ArrowRightIcon />
              </Link>
              <a className="button button--ghost" href={profile.cv} download>
                <DownloadIcon />
                {dictionary.home.cvCta}
              </a>
            </div>

            <p className="hero-location">
              <LocationIcon />
              {profile.location}
              <i aria-hidden="true" />
              <span>{dictionary.home.locationTail}</span>
            </p>
          </div>

          <HeroArtifact locale={locale} />
        </div>

        <dl
          className="shell hero-metrics"
          aria-label={dictionary.home.metricsAria}
        >
          {profile.metrics.map((metric) => (
            <div className="hero-metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <div>
                <span>{metric.label}</span>
                {metric.detail ? <small>{metric.detail}</small> : null}
              </div>
            </div>
          ))}
        </dl>
      </section>

      <section
        className="projects-section"
        id="projects"
        aria-labelledby="projects-title"
      >
        <div className="shell">
          <SectionHeading
            id="projects-title"
            index="01"
            eyebrow={dictionary.home.projects.eyebrow}
            title={dictionary.home.projects.title}
            dark
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                locale={locale}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        className="process-section"
        id="process"
        aria-labelledby="process-title"
      >
        <div className="shell">
          <SectionHeading
            id="process-title"
            index="02"
            eyebrow={dictionary.home.process.eyebrow}
            title={dictionary.home.process.title}
          />

          <ol className="process-grid">
            {processPrinciples.map((step) => (
              <li key={step.number}>
                <div className="process-number">
                  <span>{step.number}</span>
                  <i aria-hidden="true" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>

          <div
            className="process-bridge"
            aria-label={dictionary.home.process.bridgeAria}
          >
            <div>
              <ResearchIcon />
              {dictionary.home.process.research}
            </div>
            <div className="process-bridge__line" aria-hidden="true">
              <i />
            </div>
            <p>{dictionary.home.process.bridgeText}</p>
            <div className="process-bridge__line" aria-hidden="true">
              <i />
            </div>
            <div>
              <CodeIcon />
              {dictionary.home.process.frontend}
            </div>
          </div>
        </div>
      </section>

      <section
        className="about-section"
        id="about"
        aria-labelledby="about-title"
      >
        <div className="shell about-grid">
          <div className="about-intro">
            <p className="section-index">{dictionary.home.about.index}</p>
            <h2 id="about-title">{dictionary.home.about.title}</h2>
            <div className="about-copy">
              {profile.about.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <a
              className="text-link"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              {dictionary.home.about.linkedin}
              <ArrowUpRightIcon />
              <span className="sr-only">
                {dictionary.home.about.externalNote}
              </span>
            </a>
          </div>

          <div className="principles-stack">
            {profile.principles.map((principle, index) => (
              <article key={principle.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="capabilities-section"
        aria-labelledby="capabilities-title"
      >
        <div className="shell capabilities-panel">
          <div className="capabilities-intro">
            <p className="section-index">
              {dictionary.home.capabilities.index}
            </p>
            <h2 id="capabilities-title">
              {dictionary.home.capabilities.title}
            </h2>
            <p>{dictionary.home.capabilities.intro}</p>
          </div>
          <div className="capabilities-grid">
            {profile.capabilities.map((group, index) => (
              <article key={group.title}>
                <div className="capability-heading">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{group.title}</h3>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="experience-section"
        id="experience"
        aria-labelledby="experience-title"
      >
        <div className="shell">
          <SectionHeading
            id="experience-title"
            index="05"
            eyebrow={dictionary.home.experience.eyebrow}
            title={dictionary.home.experience.title}
          />

          <div className="experience-grid">
            <div>
              <p className="timeline-label">
                {dictionary.home.experience.professional}
              </p>
              {profile.experience.map((item) => (
                <article
                  className="timeline-item"
                  key={`${item.period}-${item.role}`}
                >
                  <time>{item.period}</time>
                  <div>
                    <h3>{item.role}</h3>
                    <strong>{item.company}</strong>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <aside
              className="education-block"
              aria-label={dictionary.home.experience.educationAria}
            >
              <p className="timeline-label">
                {dictionary.home.experience.education}
              </p>
              {profile.education.map((item) => (
                <article key={item.title}>
                  <time>{item.period}</time>
                  <h3>{item.title}</h3>
                  <p>{item.place}</p>
                </article>
              ))}
              <a
                className="button button--dark"
                href={`mailto:${profile.email}`}
              >
                {dictionary.home.experience.cta}
                <ArrowUpRightIcon />
              </a>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
