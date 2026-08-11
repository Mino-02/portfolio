"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { ArrowRightIcon } from "@/components/icons";
import { defaultLocale, isLocale, localizePath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default function NotFound() {
  const params = useParams<{ locale?: string }>();
  const locale = params.locale && isLocale(params.locale) ? params.locale : defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <main id="content" className="not-found">
      <div className="shell not-found__inner">
        <p>{dictionary.notFound.label}</p>
        <h1>{dictionary.notFound.title}</h1>
        <span>{dictionary.notFound.text}</span>
        <Link className="button button--primary" href={localizePath(locale)}>
          {dictionary.notFound.cta}
          <ArrowRightIcon />
        </Link>
      </div>
    </main>
  );
}
