import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { CaseStudyProcess } from "@/components/case-study-process";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
} from "@/components/icons";
import { getPortfolio, getProjectBySlug, projectSlugs } from "@/data/portfolio";
import { isLocale, localizePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type ProjectPageProps = {
  params: Promise<{ locale: string; slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projectSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const locale: Locale = localeParam;
  const project = getProjectBySlug(locale, slug);

  if (!project) {
    return {};
  }

  const dictionary = getDictionary(locale);
  const canonical = localizePath(locale, `/projects/${project.slug}`);

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical,
      languages: {
        "es-CO": `/es/projects/${project.slug}`,
        en: `/en/projects/${project.slug}`,
        "x-default": `/es/projects/${project.slug}`,
      },
    },
    openGraph: {
      title: `${project.title} — ${dictionary.metadata.caseStudySuffix}`,
      description: project.shortOutcome,
      type: "article",
      url: canonical,
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { locale: localeParam, slug } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);
  const { profile, projects } = getPortfolio(locale);
  const project = getProjectBySlug(locale, slug);

  if (!project) {
    notFound();
  }

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const homePath = localizePath(locale);

  return (
    <main id="content">
      <article className="case-page" data-accent={project.accent}>
        <section className="case-hero">
          <div className="shell">
            <nav
              className="case-breadcrumbs"
              aria-label={dictionary.caseStudy.breadcrumbsAria}
            >
              <Link href={`${homePath}#projects`}>
                <ArrowLeftIcon />
                {dictionary.caseStudy.allProjects}
              </Link>
              <span aria-hidden="true">/</span>
              <span>{project.index}</span>
            </nav>

            <div className="case-hero__grid">
              <div className="case-hero__copy">
                <p className="case-eyebrow">{project.eyebrow}</p>
                <h1
                  className={
                    project.title.length > 18
                      ? "case-title case-title--long"
                      : "case-title"
                  }
                >
                  {project.title}
                </h1>
                <p className="case-summary">{project.summary}</p>

                <div
                  className="case-tags"
                  aria-label={dictionary.caseStudy.methodsAria}
                >
                  {project.methods.map((method) => (
                    <span key={method}>{method}</span>
                  ))}
                </div>

                {project.links.length ? (
                  <div className="case-links">
                    {project.links.map((link, index) => (
                      <a
                        className={
                          index === 0
                            ? "button button--primary"
                            : "button button--ghost"
                        }
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        key={link.href}
                      >
                        {link.label}
                        <ArrowUpRightIcon />
                        <span className="sr-only">
                          {dictionary.caseStudy.externalNote}
                        </span>
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>

              <figure className="case-hero__visual">
                <Image
                  src={project.cover}
                  alt={project.coverAlt}
                  width={1200}
                  height={760}
                  preload
                  unoptimized
                  sizes="(max-width: 900px) 100vw, 52vw"
                />
                <figcaption>
                  <span>{project.index}</span>
                  <span>{project.year}</span>
                </figcaption>
              </figure>
            </div>

            <dl className="case-meta">
              <div>
                <dt>{dictionary.caseStudy.meta.role}</dt>
                <dd>{project.role}</dd>
              </div>
              <div>
                <dt>{dictionary.caseStudy.meta.team}</dt>
                <dd>{project.team}</dd>
              </div>
              <div>
                <dt>{dictionary.caseStudy.meta.context}</dt>
                <dd>{project.context}</dd>
              </div>
              <div>
                <dt>{dictionary.caseStudy.meta.stack}</dt>
                <dd>{project.stack.join(" · ")}</dd>
              </div>
            </dl>
          </div>
        </section>

        <nav
          className="case-jump-nav"
          aria-label={dictionary.caseStudy.jumpAria}
        >
          <div className="shell case-jump-nav__inner">
            <span>{dictionary.caseStudy.jumpLabel}</span>
            <div>
              {project.process.map((step, index) => (
                <a href={`#${step.id}`} key={step.id}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {step.phase}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <section className="case-brief" aria-labelledby="brief-title">
          <div className="shell case-brief__grid">
            <div>
              <p className="section-index">{dictionary.caseStudy.briefIndex}</p>
              <h2 id="brief-title">{dictionary.caseStudy.briefTitle}</h2>
            </div>
            <div className="case-brief__cards">
              <article>
                <span>{dictionary.caseStudy.problem}</span>
                <p>{project.challenge}</p>
              </article>
              <article>
                <span>{dictionary.caseStudy.response}</span>
                <p>{project.response}</p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="case-results"
          aria-label={dictionary.caseStudy.resultsAria}
        >
          <div className="shell">
            <dl className="case-metrics">
              {project.metrics.map((metric) => (
                <div key={`${metric.value}-${metric.label}`}>
                  <dt>{metric.value}</dt>
                  <dd>{metric.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section
          className="case-process-section"
          aria-labelledby="case-process-title"
        >
          <div className="shell">
            <div className="case-process-heading">
              <div>
                <p className="section-index">
                  {dictionary.caseStudy.processIndex}
                </p>
                <h2 id="case-process-title">
                  {dictionary.caseStudy.processTitle}
                </h2>
              </div>
            </div>

            <CaseStudyProcess steps={project.process} locale={locale} />
          </div>
        </section>

        <section className="case-reflection" aria-labelledby="reflection-title">
          <div className="shell case-reflection__grid">
            <div>
              <p className="section-index">
                {dictionary.caseStudy.reflectionIndex}
              </p>
              <h2 id="reflection-title">
                {dictionary.caseStudy.reflectionTitle}
              </h2>
            </div>
            <blockquote>{project.reflection}</blockquote>
          </div>
        </section>

        <section className="next-case" data-accent={nextProject.accent}>
          <Link
            href={localizePath(locale, `/projects/${nextProject.slug}`)}
            className="shell next-case__link"
          >
            <div>
              <span>{dictionary.caseStudy.nextCase}</span>
              <strong>{nextProject.title}</strong>
              <p>{nextProject.shortOutcome}</p>
            </div>
            <span className="next-case__icon" aria-hidden="true">
              <ArrowRightIcon />
            </span>
            <span className="next-case__checks" aria-hidden="true">
              <CheckIcon />
              <CheckIcon />
              <CheckIcon />
            </span>
          </Link>
        </section>

        <div className="shell case-author">
          <span>{dictionary.caseStudy.authorLabel}</span>
          <strong>
            {profile.name} · {profile.location}
          </strong>
        </div>
      </article>
    </main>
  );
}
