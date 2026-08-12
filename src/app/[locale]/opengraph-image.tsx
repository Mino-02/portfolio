import { ImageResponse } from "next/og";

import { defaultLocale, isLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export const dynamic = "force-static";
export const alt = "Sebastián López Astudillo — UX/UI + Frontend portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type OpenGraphImageProps = {
  params: Promise<{ locale: string }>;
};

export default async function OpenGraphImage({ params }: OpenGraphImageProps) {
  const { locale: localeParam } = await params;
  const locale = isLocale(localeParam) ? localeParam : defaultLocale;
  const dictionary = getDictionary(locale);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "62px 70px",
        background: "#183b31",
        color: "#fff9ef",
        fontFamily: "Georgia, serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
          fontSize: 22,
        }}
      >
        <span>SEBASTIÁN LÓPEZ</span>
        <span style={{ color: "#f2aa18" }}>UX/UI · RESEARCH · FRONTEND</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 960 }}>
        <span
          style={{
            color: "#c55e39",
            fontFamily: "Arial, sans-serif",
            fontSize: 24,
            letterSpacing: 3,
          }}
        >
          {dictionary.openGraph.eyebrow}
        </span>
        <span
          style={{
            fontSize: 88,
            lineHeight: 0.94,
            letterSpacing: -4,
            marginTop: 20,
          }}
        >
          {dictionary.openGraph.headline}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontFamily: "Arial, sans-serif",
          fontSize: 22,
        }}
      >
        <span>Cali, Colombia</span>
        <span
          style={{
            width: 58,
            height: 58,
            borderRadius: 999,
            background: "#f2aa18",
            color: "#161713",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
          }}
        >
          SL
        </span>
      </div>
    </div>,
    size,
  );
}
