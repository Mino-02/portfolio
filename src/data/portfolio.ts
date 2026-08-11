import { portfolioEn, projects as projectsEn } from "@/data/portfolio.en";
import { portfolioEs, projects as projectsEs } from "@/data/portfolio.es";
import type { PortfolioData, Project } from "@/data/portfolio.types";
import type { Locale } from "@/i18n/config";

export type {
  Accent,
  LinkItem,
  Metric,
  PortfolioData,
  ProcessPrinciple,
  ProcessStep,
  Profile,
  Project,
  ProjectMedia,
} from "@/data/portfolio.types";

const portfolios: Record<Locale, PortfolioData> = {
  es: portfolioEs,
  en: portfolioEn,
};

export const projectSlugs = projectsEs.map((project) => project.slug);

export function getPortfolio(locale: Locale): PortfolioData {
  return portfolios[locale];
}

export function getProjects(locale: Locale): Project[] {
  return portfolios[locale].projects;
}

export function getProjectBySlug(locale: Locale, slug: string): Project | undefined {
  return portfolios[locale].projects.find((project) => project.slug === slug);
}

export function hasProjectSlug(slug: string): boolean {
  return projectSlugs.includes(slug);
}

// Keeps static generation aligned across languages.
if (projectsEn.length !== projectsEs.length) {
  throw new Error("Spanish and English project collections must have the same length.");
}
