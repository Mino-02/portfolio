import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { getPortfolio } from "@/data/portfolio";
import { isLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

 type ProjectsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: ProjectsPageProps): Promise<Metadata> {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    return {};
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.metadata.projectsTitle,
    description: dictionary.metadata.projectsDescription,
    alternates: {
      canonical: `/${locale}/projects`,
      languages: {
        "es-CO": "/es/projects",
        en: "/en/projects",
        "x-default": "/es/projects",
      },
    },
    openGraph: {
      title: `${dictionary.metadata.projectsTitle} — Sebastián López Astudillo`,
      description: dictionary.metadata.projectsDescription,
      type: "website",
      url: `/${locale}/projects`,
    },
  };
}

export default async function ProjectsPage({ params }: ProjectsPageProps) {
  const { locale: localeParam } = await params;

  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale: Locale = localeParam;
  const dictionary = getDictionary(locale);
  const { projects } = getPortfolio(locale);

  return (
    <main id="content" className="projects-archive">
      <section className="projects-section projects-section--archive" aria-labelledby="archive-title">
        <div className="shell">
          <SectionHeading
            id="archive-title"
            level={1}
            index="00"
            eyebrow={dictionary.archive.eyebrow}
            title={dictionary.archive.title}
            intro={dictionary.archive.intro}
            dark
          />
          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} locale={locale} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
