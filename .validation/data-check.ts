import { existsSync } from "node:fs";
import { resolve } from "node:path";

import { portfolioEn, projects as projectsEn } from "../src/data/portfolio.en";
import { portfolioEs, projects as projectsEs } from "../src/data/portfolio.es";
import { locales, localizePath, swapLocaleInPath } from "../src/i18n/config";
import { getDictionary } from "../src/i18n/dictionaries";

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function publicFile(pathname: string) {
  return resolve(process.cwd(), "public", pathname.replace(/^\//, ""));
}

function objectShape(value: unknown): unknown {
  if (typeof value === "function") return "function";
  if (Array.isArray(value)) return value.map(objectShape);
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([key, child]) => [key, objectShape(child)]),
    );
  }
  return typeof value;
}

assert(JSON.stringify(locales) === JSON.stringify(["es", "en"]), "Unexpected locales");
assert(localizePath("es") === "/es", "Spanish home path failed");
assert(localizePath("en", "/projects") === "/en/projects", "English project path failed");
assert(swapLocaleInPath("/es/projects/campo-claro", "en") === "/en/projects/campo-claro", "Route-preserving locale swap failed");

const esShape = JSON.stringify(objectShape(getDictionary("es")));
const enShape = JSON.stringify(objectShape(getDictionary("en")));
assert(esShape === enShape, "Spanish and English UI dictionaries do not share the same shape");

assert(portfolioEs.projects === projectsEs, "Spanish portfolio project reference mismatch");
assert(portfolioEn.projects === projectsEn, "English portfolio project reference mismatch");
assert(projectsEs.length === projectsEn.length, "Project count differs between locales");
assert(projectsEs.length === 4, "Expected four portfolio cases");

for (const portfolio of [portfolioEs, portfolioEn]) {
  assert(existsSync(publicFile(portfolio.profile.cv)), `Missing CV: ${portfolio.profile.cv}`);
  assert(portfolio.profile.about.length >= 2, `About copy is too short for ${portfolio.profile.role}`);
  assert(portfolio.processPrinciples.length === 6, `Expected six process principles for ${portfolio.profile.role}`);
}

for (let index = 0; index < projectsEs.length; index += 1) {
  const es = projectsEs[index];
  const en = projectsEn[index];

  assert(es.slug === en.slug, `Slug mismatch at project ${index + 1}`);
  assert(es.index === en.index, `Index mismatch for ${es.slug}`);
  assert(es.accent === en.accent, `Accent mismatch for ${es.slug}`);
  assert(es.cover === en.cover, `Cover mismatch for ${es.slug}`);
  assert(existsSync(publicFile(es.cover)), `Missing cover asset: ${es.cover}`);
  assert(es.process.length === 6 && en.process.length === 6, `Expected six phases for ${es.slug}`);
  assert(es.process.map((step) => step.id).join("|") === en.process.map((step) => step.id).join("|"), `Phase IDs differ for ${es.slug}`);

  for (let stepIndex = 0; stepIndex < es.process.length; stepIndex += 1) {
    const esMedia = es.process[stepIndex].media ?? [];
    const enMedia = en.process[stepIndex].media ?? [];
    assert(esMedia.length === enMedia.length, `Media count differs for ${es.slug}/${es.process[stepIndex].id}`);
    for (let mediaIndex = 0; mediaIndex < esMedia.length; mediaIndex += 1) {
      assert(esMedia[mediaIndex].src === enMedia[mediaIndex].src, `Media source differs for ${es.slug}/${es.process[stepIndex].id}`);
      assert(enMedia[mediaIndex].alt.trim().length > 0, `English alt text is missing for ${enMedia[mediaIndex].src}`);
    }
  }

  for (const project of [es, en]) {
    for (const field of [project.title, project.summary, project.challenge, project.response, project.role, project.reflection]) {
      assert(field.trim().length > 0, `Empty required field in ${project.slug}`);
    }

    for (const step of project.process) {
      assert(step.narrative.length >= 2, `Phase ${project.slug}/${step.id} needs at least two narrative paragraphs`);
      assert((step.activities?.length ?? 0) >= 3, `Phase ${project.slug}/${step.id} needs at least three activities`);
      for (const media of step.media ?? []) {
        assert(existsSync(publicFile(media.src)), `Missing media asset: ${media.src}`);
        assert(media.alt.trim().length > 0, `Missing alt text: ${media.src}`);
      }
    }
  }
}

assert(portfolioEs.profile.cv.endsWith("_ES.docx"), "Spanish profile must link to the Spanish CV");
assert(portfolioEn.profile.cv.endsWith("_EN.docx"), "English profile must link to the English CV");

console.log(JSON.stringify({
  locales: [...locales],
  projectsPerLocale: projectsEs.length,
  phasesPerLocale: projectsEs.reduce((sum, project) => sum + project.process.length, 0),
  dictionaryParity: true,
  localizedCvLinks: [portfolioEs.profile.cv, portfolioEn.profile.cv],
  routeSwap: swapLocaleInPath("/es/projects/campo-claro", "en"),
}, null, 2));
