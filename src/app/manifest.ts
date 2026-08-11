import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sebastián López Astudillo — UX/UI Portfolio",
    short_name: "Sebastián UX/UI",
    description: "Bilingual UX/UI, research, usability, and frontend portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#f2e8d7",
    theme_color: "#183b31",
    lang: "es-CO",
    dir: "ltr",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
