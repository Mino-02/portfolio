import type { Locale } from "./config";

const dictionaries = {
  es: {
    metadata: {
      role: "Diseñador UX/UI + Frontend",
      description:
        "Diseñador UX/UI e Ingeniero Multimedia enfocado en investigación, usabilidad, accesibilidad y desarrollo frontend con Next.js, React y TypeScript.",
      applicationName: "Portafolio de Sebastián López",
      keywords: [
        "Diseñador UX/UI",
        "Investigación UX",
        "Product Designer",
        "Frontend Developer",
        "Next.js",
        "React",
        "TypeScript",
        "Pruebas de usabilidad",
        "Accesibilidad digital",
      ],
      projectsTitle: "Proyectos",
      projectsDescription:
        "Casos de estudio de UX/UI, investigación, usabilidad y desarrollo frontend de Sebastián López Astudillo.",
      caseStudySuffix: "Caso de estudio UX/UI",
    },
    skipLink: "Saltar al contenido principal",
    header: {
      homeAria: "Ir al inicio del portafolio",
      navAria: "Navegación principal",
      mobileNavAria: "Navegación móvil",
      menu: "Menú",
      contact: "Contacto",
      brandRole: "UX/UI + Frontend",
      languageAria: "Cambiar idioma",
      navigation: [
        { label: "Proyectos", hash: "projects" },
        { label: "Proceso", hash: "process" },
        { label: "Sobre mí", hash: "about" },
        { label: "Experiencia", hash: "experience" },
      ],
    },
    home: {
      heroEyebrow: "Diseñador UX/UI con background en frontend",
      heroTitleBefore: "Diseño productos que ",
      heroTitleEmphasis: "se entienden",
      heroTitleAfter: " y llegan a código.",
      primaryCta: "Ver casos de estudio",
      cvCta: "Descargar CV",
      locationTail: "Experiencia internacional · Español / English",
      metricsAria: "Resumen de experiencia",
      projects: {
        eyebrow: "Trabajo seleccionado",
        title: "Casos que explican decisiones, no solo pantallas.",
        intro:
          "Cada proyecto abre una página propia con contexto, rol, resultados y una línea de tiempo del proceso. Así el trabajo se puede compartir, escanear y discutir en entrevista.",
      },
      process: {
        eyebrow: "Cómo trabajo",
        title: "Un proceso flexible con evidencia en cada cambio.",
        intro:
          "No uso Design Thinking como una lista decorativa. Cada fase debe dejar una decisión, un artefacto o una pregunta mejor formulada.",
        bridgeAria: "Conexión entre investigación y desarrollo",
        research: "Investigación",
        bridgeText:
          "Mi ventaja está en mantener el porqué del diseño cuando la interfaz pasa de Figma al producto real.",
        frontend: "Frontend",
      },
      about: {
        index: "03 / Sobre mí",
        title: "Curiosidad de investigador. Disciplina de desarrollador.",
        linkedin: "Ver trayectoria en LinkedIn",
        externalNote: ", se abre en una pestaña nueva",
      },
      capabilities: {
        index: "04 / Capacidades",
        title: "Del insight al componente.",
        intro:
          "Herramientas de investigación, diseño y desarrollo elegidas según la decisión que el equipo necesita tomar.",
      },
      experience: {
        eyebrow: "Experiencia y formación",
        title: "UX dentro de productos técnicos e internacionales.",
        intro:
          "He investigado con usuarios rurales, técnicos, investigadores y tomadores de decisiones, y he acompañado soluciones hasta su implementación web.",
        professional: "Experiencia profesional",
        education: "Formación",
        educationAria: "Formación académica",
        cta: "Conversemos",
      },
      jsonLdJobTitle: "Diseñador UX/UI y Frontend Developer",
    },
    archive: {
      eyebrow: "Archivo de proyectos",
      title: "El trabajo completo, con proceso y evidencia.",
      intro:
        "Los casos están preparados para una lectura rápida de reclutamiento y para profundizar en cada fase durante una entrevista de portafolio.",
    },
    projectCard: {
      openAria: (title: string) => `Abrir caso de estudio: ${title}`,
      outcome: "Resultado destacado",
    },
    caseStudy: {
      breadcrumbsAria: "Migas de pan",
      allProjects: "Todos los proyectos",
      methodsAria: "Métodos utilizados",
      externalNote: ", se abre en una pestaña nueva",
      meta: {
        role: "Mi rol",
        team: "Equipo",
        context: "Contexto",
        stack: "Herramientas / stack",
      },
      jumpAria: "Fases del caso de estudio",
      jumpLabel: "Ir a una fase",
      briefIndex: "Brief / El punto de partida",
      briefTitle: "Primero, entender qué decisión debía mejorar.",
      problem: "Problema",
      response: "Respuesta",
      resultsIndex: "Impacto / En una mirada",
      resultsTitle: "La evidencia que un reclutador necesita encontrar rápido.",
      processIndex: "Proceso / Design Thinking",
      processTitle: "Qué hice, qué decidí y qué aprendí en cada fase.",
      processIntro:
        "La línea de tiempo combina narrativa breve, actividades, decisiones y evidencia visual. En desarrollo aparecen notas internas para completar la información que no estaba detallada en la hoja de vida.",
      reflectionIndex: "Reflexión",
      reflectionTitle: "Lo que este proyecto cambió en mi forma de diseñar.",
      checklistTitle: "Checklist antes de publicar este caso",
      nextCase: "Siguiente caso",
      authorLabel: "Portafolio UX/UI + Frontend",
    },
    processComponent: {
      activities: "Qué se hizo",
      decisions: "Decisiones clave",
    },
    editor: {
      aria: "Nota interna de edición",
      badge: "SOLO DESARROLLO",
      completePhase: (phase: string) => `Completa la fase: ${phase}`,
      visualPending: "Evidencia visual pendiente",
      visualPendingNote: (phase: string) =>
        `Añade de una a tres imágenes de ${phase.toLowerCase()}: artefactos, pantallas, hallazgos o comparaciones antes/después. Configúralas en el campo media de esta fase dentro del archivo localizado en src/data/.`,
    },
    artifact: {
      aria:
        "Composición editorial que representa el perfil de Sebastián entre investigación, diseño y frontend",
      profile: "PERFIL / 2026",
      disciplines: "RESEARCH · DESIGN · CODE",
      role: "Diseñador UX/UI + Frontend",
      junctionLabel: "Mi punto de unión",
      note:
        "Escuchar a las personas sin perder de vista lo que el equipo puede construir.",
      path: ["HALLAZGO", "INTERFAZ", "CÓDIGO"],
    },
    footer: {
      kicker: "Disponible para nuevos retos",
      index: "06 / Contacto",
      title: "Hablemos de productos que deban ser claros y posibles.",
      copyright: "Diseñado y construido con intención.",
      socialAria: "Redes profesionales",
      linkedinAria:
        "LinkedIn de Sebastián, se abre en una pestaña nueva",
      githubAria: "GitHub de Sebastián, se abre en una pestaña nueva",
    },
    notFound: {
      label: "404 / Ruta no encontrada",
      title: "Esta pantalla no forma parte del flujo.",
      text: "Volvamos al portafolio y sigamos desde un punto conocido.",
      cta: "Ir al inicio",
    },
    loading: "Cargando caso de estudio…",
    openGraph: {
      alt: "Sebastián López Astudillo — Diseñador UX/UI + Frontend",
      eyebrow: "PORTAFOLIO / 2026",
      headline: "Diseño productos que se entienden y llegan a código.",
    },
  },
  en: {
    metadata: {
      role: "UX/UI Designer + Frontend",
      description:
        "UX/UI Designer and Multimedia Engineer focused on research, usability, accessibility, and frontend development with Next.js, React, and TypeScript.",
      applicationName: "Sebastián López Portfolio",
      keywords: [
        "UX/UI Designer",
        "UX Research",
        "Product Designer",
        "Frontend Developer",
        "Next.js",
        "React",
        "TypeScript",
        "Usability testing",
        "Digital accessibility",
      ],
      projectsTitle: "Projects",
      projectsDescription:
        "UX/UI, research, usability, and frontend development case studies by Sebastián López Astudillo.",
      caseStudySuffix: "UX/UI case study",
    },
    skipLink: "Skip to main content",
    header: {
      homeAria: "Go to the portfolio homepage",
      navAria: "Primary navigation",
      mobileNavAria: "Mobile navigation",
      menu: "Menu",
      contact: "Contact",
      brandRole: "UX/UI + Frontend",
      languageAria: "Change language",
      navigation: [
        { label: "Projects", hash: "projects" },
        { label: "Process", hash: "process" },
        { label: "About", hash: "about" },
        { label: "Experience", hash: "experience" },
      ],
    },
    home: {
      heroEyebrow: "UX/UI designer with a frontend background",
      heroTitleBefore: "I design products people ",
      heroTitleEmphasis: "understand",
      heroTitleAfter: "—and teams can build.",
      primaryCta: "View case studies",
      cvCta: "Download résumé",
      locationTail: "International experience · Español / English",
      metricsAria: "Experience summary",
      projects: {
        eyebrow: "Selected work",
        title: "Cases that explain decisions, not only screens.",
        intro:
          "Each project has its own page with context, role, outcomes, and a process timeline. The work is easy to share, scan, and discuss in a portfolio interview.",
      },
      process: {
        eyebrow: "How I work",
        title: "A flexible process with evidence behind every change.",
        intro:
          "I do not use Design Thinking as a decorative checklist. Each phase should produce a decision, an artifact, or a better question.",
        bridgeAria: "Connection between research and development",
        research: "Research",
        bridgeText:
          "My advantage is preserving the reason behind a design as the interface moves from Figma into the real product.",
        frontend: "Frontend",
      },
      about: {
        index: "03 / About",
        title: "A researcher's curiosity. A developer's discipline.",
        linkedin: "View experience on LinkedIn",
        externalNote: ", opens in a new tab",
      },
      capabilities: {
        index: "04 / Capabilities",
        title: "From insight to component.",
        intro:
          "Research, design, and development tools selected according to the decision the team needs to make.",
      },
      experience: {
        eyebrow: "Experience and education",
        title: "UX within technical, international products.",
        intro:
          "I have researched with rural users, technical specialists, researchers, and decision-makers, and supported solutions through web implementation.",
        professional: "Professional experience",
        education: "Education",
        educationAria: "Academic background",
        cta: "Let's talk",
      },
      jsonLdJobTitle: "UX/UI Designer and Frontend Developer",
    },
    archive: {
      eyebrow: "Project archive",
      title: "The complete work, with process and evidence.",
      intro:
        "The cases are structured for a fast recruiter review and for deeper discussion of each phase during a portfolio interview.",
    },
    projectCard: {
      openAria: (title: string) => `Open case study: ${title}`,
      outcome: "Featured outcome",
    },
    caseStudy: {
      breadcrumbsAria: "Breadcrumbs",
      allProjects: "All projects",
      methodsAria: "Methods used",
      externalNote: ", opens in a new tab",
      meta: {
        role: "My role",
        team: "Team",
        context: "Context",
        stack: "Tools / stack",
      },
      jumpAria: "Case study phases",
      jumpLabel: "Jump to a phase",
      briefIndex: "Brief / Starting point",
      briefTitle: "First, understand which decision needed to improve.",
      problem: "Problem",
      response: "Response",
      resultsIndex: "Impact / At a glance",
      resultsTitle: "The evidence a recruiter needs to find quickly.",
      processIndex: "Process / Design Thinking",
      processTitle: "What I did, decided, and learned in each phase.",
      processIntro:
        "The timeline combines concise narrative, activities, decisions, and visual evidence. In development, internal notes identify information that was not fully detailed in the résumé.",
      reflectionIndex: "Reflection",
      reflectionTitle: "How this project changed the way I design.",
      checklistTitle: "Checklist before publishing this case",
      nextCase: "Next case",
      authorLabel: "UX/UI + Frontend Portfolio",
    },
    processComponent: {
      activities: "What was done",
      decisions: "Key decisions",
    },
    editor: {
      aria: "Internal editing note",
      badge: "DEVELOPMENT ONLY",
      completePhase: (phase: string) => `Complete the phase: ${phase}`,
      visualPending: "Visual evidence pending",
      visualPendingNote: (phase: string) =>
        `Add one to three images for ${phase.toLowerCase()}: artifacts, screens, findings, or before/after comparisons. Configure them in this phase's media field inside the localized file in src/data/.`,
    },
    artifact: {
      aria:
        "Editorial composition representing Sebastián's work across research, design, and frontend development",
      profile: "PROFILE / 2026",
      disciplines: "RESEARCH · DESIGN · CODE",
      role: "UX/UI Designer + Frontend",
      junctionLabel: "Where my skills meet",
      note:
        "Listening to people without losing sight of what the team can build.",
      path: ["INSIGHT", "INTERFACE", "CODE"],
    },
    footer: {
      kicker: "Available for new challenges",
      index: "06 / Contact",
      title: "Let's talk about products that need to be clear and feasible.",
      copyright: "Designed and built with intention.",
      socialAria: "Professional profiles",
      linkedinAria: "Sebastián's LinkedIn, opens in a new tab",
      githubAria: "Sebastián's GitHub, opens in a new tab",
    },
    notFound: {
      label: "404 / Route not found",
      title: "This screen is not part of the flow.",
      text: "Let's return to the portfolio and continue from a familiar point.",
      cta: "Go to homepage",
    },
    loading: "Loading case study…",
    openGraph: {
      alt: "Sebastián López Astudillo — UX/UI Designer + Frontend",
      eyebrow: "PORTFOLIO / 2026",
      headline: "I design products people understand—and teams can build.",
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
