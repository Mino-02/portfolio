import Image from "next/image";
import Link from "next/link";

import { ArrowRightIcon } from "@/components/icons";
import type { Project } from "@/data/portfolio";
import { localizePath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { assetPath } from "@/lib/asset-path";

type ProjectCardProps = {
  project: Project;
  locale: Locale;
};

export function ProjectCard({ project, locale }: ProjectCardProps) {
  const dictionary = getDictionary(locale);

  return (
    <article
      className={`project-card${project.featured ? " project-card--featured" : ""}`}
    >
      <Link
        href={localizePath(locale, `/projects/${project.slug}`)}
        aria-label={dictionary.projectCard.openAria(project.title)}
      >
        <div className="project-card__visual">
          <Image
            src={assetPath(project.cover)}
            alt={project.coverAlt}
            width={1200}
            height={760}
            unoptimized
            sizes={
              project.featured
                ? "(max-width: 920px) 100vw, 66vw"
                : "(max-width: 920px) 100vw, 33vw"
            }
          />
          <span className="project-card__index" aria-hidden="true">
            {project.index}
          </span>
          <span className="project-card__arrow" aria-hidden="true">
            <ArrowRightIcon />
          </span>
        </div>

        <div className="project-card__body">
          <div className="project-card__meta">
            <span>{project.eyebrow}</span>
            <span>{project.year}</span>
          </div>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <div className="project-card__outcome">
            <span>{dictionary.projectCard.outcome}</span>
            <strong>{project.shortOutcome}</strong>
          </div>
        </div>
      </Link>
    </article>
  );
}
