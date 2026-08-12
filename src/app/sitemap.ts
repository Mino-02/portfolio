import type { MetadataRoute } from "next";

import { projectSlugs } from "@/data/portfolio";
import { locales } from "@/i18n/config";
import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

const routePaths = [
  "",
  "/projects",
  ...projectSlugs.map((slug) => `/projects/${slug}`),
];

function languageAlternates(path: string) {
  return {
    "es-CO": `${siteUrl}/es${path}`,
    en: `${siteUrl}/en${path}`,
    "x-default": `${siteUrl}/es${path}`,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routePaths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path === "/projects" ? 0.8 : 0.9,
      alternates: {
        languages: languageAlternates(path),
      },
    })),
  );
}
