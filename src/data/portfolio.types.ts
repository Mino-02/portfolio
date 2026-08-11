export type Accent = "sun" | "clay" | "mint" | "sand";

export type LinkItem = {
  label: string;
  href: string;
  kind?: "live" | "code" | "document";
};

export type Metric = {
  value: string;
  label: string;
  detail?: string;
};

export type ProjectMedia = {
  src: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
};

export type ProcessStep = {
  id: string;
  phase: string;
  title: string;
  summary: string;
  narrative: string[];
  activities?: string[];
  decisions?: string[];
  media?: ProjectMedia[];
  editorNote?: string;
};

export type Project = {
  slug: string;
  index: string;
  title: string;
  eyebrow: string;
  year: string;
  accent: Accent;
  cover: string;
  coverAlt: string;
  featured?: boolean;
  summary: string;
  shortOutcome: string;
  challenge: string;
  response: string;
  role: string;
  team: string;
  context: string;
  methods: string[];
  stack: string[];
  metrics: Metric[];
  links: LinkItem[];
  process: ProcessStep[];
  reflection: string;
  editorChecklist: string[];
};

export type Profile = {
  name: string;
  shortName: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  photo: null | { src: string; alt: string };
  cv: string;
  headline: string;
  intro: string;
  about: string[];
  availability: string;
  metrics: Metric[];
  principles: Array<{ title: string; text: string }>;
  experience: Array<{
    period: string;
    role: string;
    company: string;
    description: string;
  }>;
  education: Array<{
    period: string;
    title: string;
    place: string;
  }>;
  capabilities: Array<{
    title: string;
    items: string[];
  }>;
};

export type ProcessPrinciple = {
  number: string;
  title: string;
  text: string;
};

export type PortfolioData = {
  profile: Profile;
  projects: Project[];
  processPrinciples: ProcessPrinciple[];
};
