"use client";

import { useParams } from "next/navigation";

import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export default function Loading() {
  const params = useParams<{ locale?: string }>();
  const locale = params.locale && isLocale(params.locale) ? params.locale : defaultLocale;
  const dictionary = getDictionary(locale);

  return (
    <main id="content" className="route-loading" aria-live="polite">
      <span aria-hidden="true" />
      {dictionary.loading}
    </main>
  );
}
