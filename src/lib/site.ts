export const siteConfig = {
  name: "Sebastián López Astudillo",
  shortName: "Sebastián López A.",
  location: "Cali, Colombia",
  email: "sebaslopezastu08@gmail.com",
  phoneDisplay: "+57 305 766 5223",
  phoneHref: "tel:+573057665223",
  links: {
    linkedin: "https://www.linkedin.com/in/sebastian-lopez-uxui/",
    github: "https://github.com/Mino-02",
  },
} as const;

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
