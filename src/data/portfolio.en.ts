import { profile as profileEs, projects as projectsEs } from "./portfolio.es";
import type {
  PortfolioData,
  ProcessPrinciple,
  ProcessStep,
  Profile,
  Project,
} from "./portfolio.types";

type StepTranslation = Pick<
  ProcessStep,
  | "phase"
  | "title"
  | "summary"
  | "narrative"
  | "activities"
  | "decisions"
  | "media"
  | "editorNote"
>;

type ProjectTranslation = Pick<
  Project,
  | "title"
  | "eyebrow"
  | "year"
  | "coverAlt"
  | "summary"
  | "shortOutcome"
  | "challenge"
  | "response"
  | "role"
  | "team"
  | "context"
  | "methods"
  | "stack"
  | "metrics"
  | "links"
  | "reflection"
  | "editorChecklist"
> & {
  process: Record<string, StepTranslation>;
};

export const profile: Profile = {
  ...profileEs,
  role: "UX/UI Designer · UX Research · Frontend",
  cv: "/cv/Sebastian_Lopez_Astudillo_CV_EN.docx",
  photo: profileEs.photo
    ? {
        ...profileEs.photo,
        alt: "Sebastián López, UX/UI designer and frontend developer",
      }
    : null,
  headline: "I design decisions people can act on.",
  intro:
    "I turn user research into clear, accessible, and technically viable digital products. My frontend background lets me stay with an idea from the initial insight to a working interface.",
  about: [
    "I am a UX/UI Designer and Multimedia Engineer with nearly four years of experience in user research, usability testing, information architecture, prototyping, and responsive web interface implementation.",
    "I have worked with farmers, extension agents, technical specialists, researchers, and decision-makers in international projects.",
  ],
  availability:
    "Open to remote or hybrid opportunities and projects with social impact.",
  metrics: [
    { value: "≈7", label: "products", detail: "designed or evaluated" },
    {
      value: "≈12",
      label: "UX studies",
      detail: "planned, moderated, or analyzed",
    },
    { value: "4", label: "frontends", detail: "with primary ownership" },
    { value: "5", label: "countries", detail: "with users or project teams" },
  ],
  principles: [
    {
      title: "Research to make decisions",
      text: "Research does not end on a workshop wall: it becomes priorities, requirements, and acceptance criteria.",
    },
    {
      title: "Test before assuming",
      text: "I use prototypes and moderated testing to identify friction early and support decisions with evidence.",
    },
    {
      title: "Design with implementation in mind",
      text: "I consider components, states, content, accessibility, and implementation constraints from the start.",
    },
  ],
  experience: [
    {
      period: "Mar 2023 — present",
      role: "Full Stack Developer · UX/UI focus",
      company: "International Center for Tropical Agriculture (CIAT)",
      description:
        "User research, usability testing, information architecture, interaction design, and frontend leadership for climate and monitoring platforms.",
    },
    {
      period: "Aug 2022 — Feb 2023",
      role: "Development Intern",
      company: "International Center for Tropical Agriculture (CIAT)",
      description:
        "Requirements definition, prototyping, and initial implementation of web solutions with .NET and Bootstrap.",
    },
  ],
  education: [
    {
      period: "2025 — 2026",
      title: "Master's in Digital Experience Creation (UX)",
      place: "Universidad Icesi",
    },
    {
      period: "2018 — 2022",
      title: "Multimedia Engineering",
      place: "Universidad Autónoma de Occidente",
    },
  ],
  capabilities: [
    {
      title: "Research and strategy",
      items: [
        "Interviews and surveys",
        "Focus groups",
        "Personas and user journeys",
        "Affinity mapping",
        "Requirements definition",
      ],
    },
    {
      title: "Design and validation",
      items: [
        "Information architecture",
        "Wireframes and prototypes",
        "Moderated usability testing",
        "SUS, CES, and heuristic reviews",
        "Design systems and accessibility",
      ],
    },
    {
      title: "Frontend",
      items: [
        "Next.js and React",
        "TypeScript and JavaScript",
        "Semantic HTML and CSS",
        "Tailwind CSS and Bootstrap",
        "REST APIs and Git/GitHub",
      ],
    },
  ],
};

const projectTranslations: Record<string, ProjectTranslation> = {
  "campo-claro": {
    title: "Campo Claro",
    eyebrow: "Master's thesis · UX Research + Product Design",
    year: "2025 — 2026",
    coverAlt:
      "Visual identity of the Campo Claro Framework, featuring an agricultural landscape symbol and the tagline “From technical language to understandable action”.",
    summary:
      "A technical-information simplification framework that turns research findings into editorial and interface rules for clearer, more actionable agroclimatic recommendations.",
    shortOutcome:
      "Three iterations with 25 distinct participants increased measured comprehension from 80% to 100% and complete framework application from 3/5 to 5/5.",
    challenge:
      "Agroclimatic information could be technically correct and still be difficult for smallholder farmers to understand and translate into concrete actions.",
    response:
      "I co-designed the Campo Claro Framework and integrated it into a generator for technical specialists and a mobile viewer for farmers, turning clarity principles into testable interface guidance, constraints, and behaviors.",
    role: "Research and synthesis · Framework co-design · UX/UI · Prototyping · Co-planning and analysis of validation",
    team: "Master's thesis with Daniel Guzmán",
    context:
      "Target context: Guatemala · Testing with technical and farmer profiles in Colombia",
    methods: [
      "Desk research",
      "Affinity mapping",
      "Personas and journey maps",
      "How Might We",
      "Moderated usability testing",
      "SUS and CES",
    ],
    stack: ["Figma", "Figma Make", "Miro"],
    metrics: [
      { value: "25", label: "participants · Colombia" },
      { value: "3", label: "iterations" },
      { value: "80 → 100%", label: "measured comprehension" },
      { value: "3/5 → 5/5", label: "complete framework application" },
      { value: "83.5", label: "final SUS" },
      { value: "6/7", label: "final CES" },
    ],
    links: [],
    process: {
      discover: {
        phase: "Discover",
        title: "Understand why correct information was still difficult to use",
        summary:
          "The project built on previous agroclimatic bulletin research to expand the focus from the interface to the full journey of the information.",
        narrative: [
          "The target context was Guatemala, where previous research on agroclimatic bulletins had already revealed challenges involving comprehension, technical language, access to information, and reliance on intermediaries to interpret recommendations.",
          "We conducted desk research on those studies, existing bulletins, dissemination channels, and low-connectivity conditions. The question moved beyond how to display information and began to include how it is written, organized, and transformed before it reaches the farmer.",
        ],
        activities: [
          "Review previous research related to Bulletin Builder and agroclimatic bulletins.",
          "Analyze existing bulletins and the information journey from technical specialist to farmer.",
          "Identify barriers involving language, context, access, and comprehension.",
          "Consolidate evidence and findings in Miro to support synthesis.",
        ],
        decisions: [
          "Study the experience of both the technical specialist producing the information and the farmer who needs to understand it.",
          "Treat comprehension as a problem of the complete system rather than only the visual design of the final bulletin.",
        ],
        media: [
          {
            src: "/images/projects/campo-claro/persona-tecnico-quiche.webp",
            alt: "Persona profile of an agricultural technical specialist from Quiché, Guatemala, showing context, goals, information needs, and technology use.",
            caption:
              "Technical specialist profile synthesized from previous research: their needs combine localized information, editorial clarity, and tools that reduce manual work.",
            width: 2048,
            height: 1536,
          },
          {
            src: "/images/projects/campo-claro/persona-agricultor-quiche.webp",
            alt: "Persona profile of a farmer from Quiché, Guatemala, showing agricultural context, information needs, and access to technology.",
            caption:
              "Rural farmer profile: information needs to be concise, territorially relevant, and accessible through everyday devices and channels.",
            width: 2048,
            height: 1536,
          },
          {
            src: "/images/projects/campo-claro/persona-agricultora-quiche.webp",
            alt: "Persona profile of a woman farmer from Quiché, Guatemala, showing goals, capabilities, agroclimatic information needs, and technology access conditions.",
            caption:
              "Rural farmer profile used to keep access conditions, language, context, and decision-making visible throughout the design process.",
            width: 2048,
            height: 1536,
          },
        ],
      },
      define: {
        phase: "Define",
        title: "Turn research patterns into design criteria",
        summary:
          "Synthesis transformed a collection of friction points into concrete rules for what a comprehensible recommendation should contain.",
        narrative: [
          "We clustered findings through affinity mapping and complemented them with personas, journey maps, and How Might We questions. The main tension appeared at both ends of the service: technical specialists needed to simplify without losing rigor, while farmers needed to understand what to do and why.",
          "The Campo Claro Framework emerged from that convergence. Its principle was to relate the bulletin objective, user profile, and contextual constraints to produce design rules that could be applied consistently.",
        ],
        activities: [
          "Cluster findings and build the affinity diagram.",
          "Synthesize profiles through personas and journey maps.",
          "Turn friction points into opportunities through How Might We questions.",
          "Define measurable principles and criteria for the Campo Claro Framework.",
        ],
        decisions: [
          "Make each recommendation communicate one main action and explain why it should be performed.",
          "Prioritize action verbs, concise language, definitions for technical terms, and temporal urgency.",
          "Turn research findings into rules that could later be evaluated with users.",
        ],
        media: [
          {
            src: "/images/projects/campo-claro/journey-tecnico.webp",
            alt: "Journey of the technical specialist from receiving the technical bulletin to distribution, showing friction when interpreting forecasts, writing recommendations, and relying on design tools.",
            caption:
              "Technical specialist journey: friction begins before the farmer receives the bulletin, particularly while interpreting, simplifying, and preparing the information.",
            width: 1136,
            height: 574,
          },
          {
            src: "/images/projects/campo-claro/journey-productor.webp",
            alt: "Journey of the rural farmer from receiving the bulletin through WhatsApp to making agricultural decisions, showing increasing friction caused by technical language and lack of territorial context.",
            caption:
              "Farmer journey: problems accumulated during production eventually become comprehension difficulties and decisions made with uncertainty.",
            width: 1114,
            height: 588,
          },
          {
            src: "/images/projects/campo-claro/marco-campo-claro-regla.webp",
            alt: "Campo Claro Framework diagram combining the bulletin objective, user profile, and contextual constraints to produce a design rule.",
            caption:
              "The synthesis converged into an operational formula: bulletin objective + user profile + contextual constraint = design rule.",
            width: 1137,
            height: 614,
          },
        ],
      },
      ideate: {
        phase: "Ideate",
        title: "Move from an editorial guide to interface behavior",
        summary:
          "The challenge was not simply documenting the framework, but making its rules appear at the exact moment a technical specialist was writing.",
        narrative: [
          "We explored how Campo Claro rules could become concrete assistance: writing guidance, counters, progressive alerts, technical-term detection, contextual vocabulary, and a pre-publication review.",
          "We also experimented with AI-assisted simplification. Results improved when prompts incorporated the framework rules, but we decided not to make AI a dependency of the MVP because of cost, operational sustainability, and potential loss of editorial control.",
        ],
        activities: [
          "Translate editorial rules into interface components and behaviors.",
          "Explore alternatives for recommendations, vocabulary, and pre-publication review.",
          "Conceptually test AI-assisted simplification using framework rules.",
          "Prioritize mechanisms that could be validated without relying on external services.",
        ],
        decisions: [
          "Embed critical rules into the interface instead of relying on technical specialists to remember them.",
          "Keep AI outside the MVP and first validate the framework through guided interaction.",
          "Treat vocabulary as part of recommendation comprehension rather than isolated content.",
        ],
      },
      prototype: {
        phase: "Prototype",
        title: "Iterate from a navigable structure to a functional system",
        summary:
          "The solution evolved from a medium-fidelity Figma prototype into functional experiences built with Figma Make.",
        narrative: [
          "The first iteration used a medium-fidelity prototype to test navigation, labels, feature location, and visual organization before investing in greater fidelity.",
          "Later iterations used functional prototypes. The solution connected two modules: a generator that guides technical specialists through bulletin creation and a mobile-first viewer where farmers can read recommendations and contextual vocabulary using everyday devices.",
        ],
        activities: [
          "Build the first iteration's medium-fidelity prototype in Figma.",
          "Design the guided generator and mobile viewer as parts of the same service.",
          "Build subsequent functional versions with Figma Make.",
          "Update prototypes between iterations based on collected evidence.",
        ],
        decisions: [
          "Use the first iteration to validate structure before increasing fidelity.",
          "Prioritize a mobile-first farmer experience because of the importance of phones and WhatsApp in the target context.",
          "Keep the technical specialist's writing process connected to the output ultimately received by the farmer.",
        ],
      },
      test: {
        phase: "Validate",
        title: "Separate ease of use from actual comprehension",
        summary:
          "Three iterations with 25 distinct participants showed that completing a workflow does not guarantee that the resulting content is understandable.",
        narrative: [
          "Because of access constraints, evaluations were conducted in Colombia with participants recruited by profile, while the design problem and reference context remained centered on Guatemala. We therefore treated the findings as evidence about interaction and comprehension within the evaluated sample, not as validation of adoption in the Guatemalan field context.",
          "The first iteration involved five general-profile participants. The second involved five technical specialists and five farmers; comprehension reached 12/15 correct answers and complete framework application occurred in 3/5 technical participants. The third used five new technical specialists and five new farmers: complete framework application reached 5/5 and comprehension reached 15/15.",
          "The third iteration also produced an average SUS of 83.5 and CES of 6/7 with technical specialists. However, only 1/5 farmers spontaneously discovered the contextual vocabulary, leaving discoverability as the main unresolved UX risk.",
        ],
        activities: [
          "Co-plan and co-analyze all three evaluation iterations.",
          "Compare results and friction points between one version and the next.",
          "Measure comprehension, framework application, SUS, and CES.",
          "Translate findings into changes to content, interaction, and hierarchy.",
        ],
        decisions: [
          "Distinguish operational usability — being able to complete a workflow — from cognitive usability — correctly understanding its content.",
          "Move guidance and alerts closer to the exact moment a recommendation is written.",
          "Make technical terms more recognizable as interactive elements after observing low vocabulary discoverability.",
        ],
        media: [
          {
            src: "/images/projects/campo-claro/resultados-validacion.webp",
            alt: "Comparison between the second and third Campo Claro iterations: farmer comprehension increased from 80 to 100 percent, spontaneous vocabulary discovery from 0 to 20 percent, framework application by technical specialists from 60 to 100 percent, and test readiness from 40 to 100 percent.",
            caption:
              "The third iteration improved comprehension, framework application, and input readiness; vocabulary discoverability remained the main unresolved UX risk.",
            width: 1126,
            height: 583,
          },
        ],
      },
      deliver: {
        phase: "Deliver",
        title:
          "Leave an applicable, measurable framework ready for field validation",
        summary:
          "The final deliverable was not only a prototype, but a reusable logic connecting research, technical writing, and interface behavior.",
        narrative: [
          "Campo Claro was documented as a framework that turns research findings into editorial rules and then into product behaviors. The generator, mobile viewer, and framework operate as parts of the same system.",
          "The results show a clear improvement within the evaluated sample, but they do not replace testing in the target context. The next step should validate the system with technical specialists and farmers in Guatemala, observe sustained use, and determine whether comprehension improvements persist in real agricultural decisions.",
        ],
        activities: [
          "Consolidate the Campo Claro Framework and its main rules.",
          "Define MVP priorities based on the three iterations.",
          "Document results, limitations, and remaining risks.",
          "Propose next steps for contextual validation and institutional implementation.",
        ],
        decisions: [
          "Prioritize guided recommendations, a publication checklist, contextual vocabulary, and a lightweight mobile experience for the MVP.",
          "Do not present results obtained in Colombia as definitive evidence of adoption in Guatemala.",
          "Keep field validation as a prerequisite before scaling the solution.",
        ],
      },
    },
    reflection:
      "This project left me with a distinction I now apply to other products: completing a task does not necessarily mean understanding it. Designing critical information requires validating both operational usability and content comprehension, and turning research findings into rules the system itself can sustain.",
    editorChecklist: [],
  },
  "bulletin-builder": {
    title: "Bulletin Builder",
    eyebrow: "Institutional product · UX Research + UX/UI + Frontend",
    year: "2025 — present",
    coverAlt:
      "Agroclimatic bulletin creation flow in Bulletin Builder, showing the rainfall map step and the bulletin preview.",
    summary:
      "A web platform that helps technical teams create agroclimatic bulletins autonomously while preserving content and design rules grounded in research with farmers.",
    shortOutcome:
      "From a Guatemala pilot to a two-country system: complete frontend, three templates, and a workflow iterated with usability evidence.",
    challenge:
      "After improving the bulletins through research and testing with farmers, a second problem emerged: producing them in Word, Canva, or Figma made it difficult to preserve design decisions and required too much specialized work.",
    response:
      "I co-proposed Bulletin Builder, worked on its UX/UI, and developed the complete frontend. In Guatemala I planned, conducted, and analyzed the usability tests; I also implemented improvements based on evaluations conducted by the Vietnam team.",
    role: "UX Research in Guatemala · Co-proposal · UX/UI · Primary frontend ownership",
    team: "Multidisciplinary international team with institutions in Guatemala and Vietnam",
    context:
      "Agroclimatic Technical Tables · Bulletin production · Institutional use",
    methods: [
      "Interviews",
      "Synthesis and personas",
      "Prototyping",
      "Think-aloud",
      "Usability testing",
      "Stakeholder iteration",
    ],
    stack: ["Next.js", "React", "TypeScript"],
    metrics: [
      { value: "3", label: "templates" },
      { value: "2", label: "countries" },
      { value: "4", label: "participants · Guatemala" },
      { value: "7", label: "participants · Vietnam" },
    ],
    links: [
      {
        label: "View live platform",
        href: "https://bulletin.aclimate.org/en",
        kind: "live",
      },
      {
        label: "View repository",
        href: "https://github.com/CIAT-DAPA/acb_frontend",
        kind: "code",
      },
    ],
    process: {
      discover: {
        phase: "Discover",
        title: "Understand the bulletin before designing the builder",
        summary:
          "The starting point was not a platform. It was understanding why agroclimatic information was not reaching farmers in a clear and useful way.",
        narrative: [
          "In Guatemala, Agroclimatic Technical Tables bring together technical teams that produce bulletins to support decisions about planting, harvesting, and crop management. The problem was that many bulletins were dense and technical, and their content did not always translate into understandable actions.",
          "The user research included five workshops with 106 participants and 27 interviews. I participated in the workshops, conducted a large share of the interviews, analyzed the material, and worked with the team on synthesis and persona development.",
        ],
        activities: [
          "Participate in workshops with farmers and technical staff.",
          "Conduct and analyze interviews to understand needs, capabilities, and context.",
          "Synthesize findings and build personas with the team.",
          "Compare information needs, comprehension, and dissemination channels.",
        ],
        decisions: [
          "Treat comprehension, context, and dissemination channels as part of the design problem, not only the technical content.",
          "Keep research findings and personas as references throughout later bulletin iterations.",
        ],
        media: [
          {
            src: "/images/projects/bulletin-builder/research-workshops-guatemala.webp",
            alt: "Collage of research workshops in Guatemala with farmers and technical staff participating in group sessions and co-design activities.",
            caption:
              "Research workshops with farmers and technical staff in Chiquimulilla, Patzicía, Patzún, and Tecpán, Guatemala.",
            width: 900,
            height: 560,
          },
        ],
      },
      define: {
        phase: "Define",
        title: "Identify a second problem: how to preserve what we learned",
        summary:
          "Once the bulletin worked better for farmers, the challenge became producing it autonomously without losing its design rules.",
        narrative: [
          "Word and Canva gave teams too much freedom to change structure, text length, and hierarchy. Figma offered stronger design control, but introduced a steep learning curve for people who do not work with design tools.",
          "The opportunity was to reframe the problem: designing a good bulletin was not enough. We also needed a production system that helped technical teams preserve decisions grounded in research.",
        ],
        activities: [
          "Map the existing bulletin production process.",
          "Distinguish editable content from rules that needed to remain protected.",
          "Translate research findings into product constraints and requirements.",
        ],
        decisions: [
          "Separate the content technical teams need to enter from the visual rules that preserve bulletin clarity.",
          "Reduce freedom where it could break validated decisions and preserve it where local context required flexibility.",
        ],
      },
      ideate: {
        phase: "Ideate",
        title: "Turn design rules into a guided workflow",
        summary:
          "Together with a colleague, I proposed a web application that would replace free-form layout work with a step-by-step process and explicit constraints.",
        narrative: [
          "The concept was for technical staff to complete fields and content within a predefined structure while the system preserved the bulletin's hierarchy, length, and composition.",
          "A web pilot was created and its evaluation in Guatemala showed that users understood the flow and saw it as an easier, faster way to produce the bulletin. That evidence supported formalizing Bulletin Builder as a product.",
        ],
        activities: [
          "Co-propose the Bulletin Builder concept.",
          "Define the steps, fields, and constraints of the initial flow.",
          "Explore how to show bulletin progress while users complete it.",
          "Prepare the concept for a quick evaluation before investing in the complete system.",
        ],
        decisions: [
          "Use a guided journey instead of a free-form layout surface.",
          "Make design constraints help users rather than become rules they had to remember.",
        ],
        media: [
          {
            src: "/images/projects/bulletin-builder/prototype-hazards-vietnam.webp",
            alt: "Bulletin Builder prototype for Vietnam at the hazards step, showing an eight-step guided workflow, fields for entering hazards, and an agroclimatic bulletin preview.",
            caption:
              "Prototype of the Vietnam workflow: users complete content step by step while a preview shows how the information is translated into the bulletin.",
            width: 1440,
            height: 1138,
          },
        ],
      },
      prototype: {
        phase: "Prototype",
        title: "Formalize a product adaptable to two contexts",
        summary:
          "Vietnam's interest turned the pilot into a system that needed a shared core without forcing every country into the same bulletin.",
        narrative: [
          "Requirements, sections, and country-specific content were progressively defined with teams and institutions in Guatemala and Vietnam. The design challenge moved from solving one template to building a pattern that could support different workflows.",
          "A functional Figma prototype made it possible to walk through end-to-end tasks and discuss requirements before consolidating them in the platform.",
        ],
        activities: [
          "Participate in definition meetings with technical teams and institutions.",
          "Translate requirements into flows, screens, and interface components.",
          "Design and refine a functional Figma prototype.",
          "Define reusable patterns with variants for each country's context.",
        ],
        decisions: [
          "Share patterns and components across countries without forcing their bulletins to use identical content or sequencing.",
          "Allow template-specific steps within a consistent interaction structure.",
        ],
      },
      test: {
        phase: "Validate",
        title: "Validate by context and turn findings into changes",
        summary:
          "In Guatemala I planned, moderated, and analyzed the evaluation; in Vietnam the local team conducted its tests and I worked from their findings to implement improvements.",
        narrative: [
          "In Guatemala, four participants from public and private organizations completed the workflow using think-aloud and an A/B comparison. Tasks such as uploading the map, adding recommendations, and exporting were perceived as clear, while fields related to the lunar calendar revealed opportunities for clearer labels and automation.",
          "In Vietnam, seven participants from agricultural institutions evaluated the complete workflow. Their findings showed an initial learning curve and opportunities to reduce manual entry, structure fields more clearly, and align the sequence with the way they actually work across crops. My role was to receive those results and translate them into product adjustments.",
        ],
        activities: [
          "Plan, moderate, and analyze the Guatemala usability tests.",
          "Apply think-aloud and A/B comparison to the operational flow.",
          "Review findings produced by the Vietnam team.",
          "Prioritize and implement changes based on task impact and recurrence.",
        ],
        decisions: [
          "Do not assume that a mental model observed in Guatemala would transfer automatically to Vietnam.",
          "Prioritize structured inputs and automation when they reduced repetitive work, errors, and cognitive load.",
        ],
        media: [
          {
            src: "/images/projects/bulletin-builder/cover.webp",
            alt: "Agroclimatic bulletin creation flow in Bulletin Builder, showing the rainfall map step and the bulletin preview.",
            caption:
              "Bulletin Builder interface used to walk through and evaluate the agroclimatic bulletin creation workflow.",
            width: 1576,
            height: 998,
          },
        ],
      },
      deliver: {
        phase: "Implement and evolve",
        title: "Carry design intent into the real product",
        summary:
          "Bulletin Builder evolved into a complete frontend with three templates and support for workflows in Guatemala and Vietnam.",
        narrative: [
          "I developed the frontend with Next.js, React, and TypeScript, turning bulletin constraints into reusable components, validation, and workflows. The goal was not to reproduce a Figma design, but to make the system preserve it during real use.",
          "The product supports guided creation, preview, and export, and is prepared to evolve by template and context as new findings emerge. Iterations from Guatemala and Vietnam continue to inform that process.",
        ],
        activities: [
          "Develop the complete frontend with reusable, typed components.",
          "Integrate the interface flow with the system's services and rules.",
          "Implement findings from usability evaluations.",
          "Maintain template variants without unnecessarily duplicating the base experience.",
        ],
        decisions: [
          "Turn UX constraints into system behavior instead of relying on training or memory.",
          "Maintain a reusable foundation so new templates can be added without rebuilding the product from scratch.",
        ],
      },
    },
    reflection:
      "This project confirmed that a solution does not end when the final user understands the design. We also need to design the conditions that allow the people producing the service to preserve that clarity. My contribution connected research, UX decisions, and frontend so the evidence would not be lost between insight and product.",
    editorChecklist: [
      "Add visual evidence from the initial Guatemala research.",
      "Show at least one bulletin decision that later became a Builder constraint.",
      "Include a before/after example from a Guatemala usability finding.",
      "Show one improvement implemented from findings produced by the Vietnam team.",
    ],
  },
  "waterpoints-monitoring": {
    title: "Waterpoints Monitoring",
    eyebrow: "Multichannel system · UX Research + UX/UI + Frontend",
    year: "2023 — 2024",
    coverAlt:
      "Map of Ethiopia in the Waterpoints and Pasture Monitoring platform, showing waterpoints by status and details for a selected location.",
    summary:
      "A system for monitoring waterpoints in Ethiopia and delivering useful information to two audiences with very different capabilities: decision-makers and pastoral communities.",
    shortOutcome:
      "Two HCD workshops led to a web platform and an alert system; final testing with eight users produced a prioritized improvement backlog while exposing institutional constraints around the SMS solution.",
    challenge:
      "During droughts, water availability directly affects mobility, livestock, and the livelihoods of pastoral communities. Yet decision-makers lacked a centralized source for monitoring waterpoints, while many pastoralists faced low connectivity and limited access to smartphones.",
    response:
      "I planned the research process, built personas, journeys, and solution concepts, designed the experience, and developed the frontend. The response combined a web system for institutional actors with low-tech alerts designed for pastoral communities.",
    role: "HCD planning · Facilitation and synthesis · Personas and journeys · UX/UI · Frontend · Usability planning and analysis",
    team: "International multidisciplinary team with researchers and local partners in Ethiopia",
    context:
      "Ethiopia · Pastoral communities and decision-makers · Drought and low connectivity",
    methods: [
      "HCD workshops",
      "Personas",
      "Journey maps",
      "Brainstorming and storyboards",
      "Prototyping",
      "Think-aloud, SUS, and heatmaps",
    ],
    stack: ["Web frontend", "Responsive design", "Maps and geospatial data"],
    metrics: [
      { value: "2", label: "HCD workshops" },
      { value: "5", label: "personas" },
      { value: "2", label: "user groups" },
      { value: "8", label: "participants · final test" },
      { value: "14", label: "tasks · protocol" },
      { value: "2", label: "alert channels designed" },
    ],
    links: [
      {
        label: "View live platform",
        href: "https://et.waterpointsmonitoring.net",
        kind: "live",
      },
    ],
    process: {
      discover: {
        phase: "Discover",
        title:
          "Understand how water decisions are made before designing the map",
        summary:
          "The starting point was understanding how water scarcity is experienced by those who depend directly on it and by those responsible for institutional responses.",
        narrative: [
          "In Ethiopia, many pastoral communities depend on livestock and surface waterpoints that can shrink or dry out during drought. Information about their status affects mobility, water access, and institutional response decisions.",
          "I planned two in-person workshops: one with government, research, and organizational decision-makers, and another with pastoral communities. During the pastoralist sessions, I worked as a facilitator and advisor alongside local staff who could communicate in local languages; with institutional profiles I participated directly in English. I also took notes and contributed to the subsequent synthesis.",
        ],
        activities: [
          "Plan the methodology and activities for both HCD workshops.",
          "Facilitate and supervise activities with institutional and pastoral profiles.",
          "Document needs, decisions, communication channels, and access constraints.",
          "Synthesize the evidence with the team after the workshops.",
        ],
        decisions: [
          "Do not assume that every actor could receive information through a web interface.",
          "Study local-community and institutional decisions as connected parts of the same system.",
        ],
        media: [
          {
            src: "/images/projects/waterpoints-monitoring/pastoralist-context-storyboard.webp",
            alt: "Six-scene storyboard showing everyday pastoral life in a semi-arid environment, including livestock, mobility, and different levels of water availability.",
            caption:
              "Context storyboard used to help decision-making teams understand pastoral communities' everyday reality and the role water plays in mobility and livelihoods.",
            width: 805,
            height: 796,
          },
        ],
      },
      define: {
        phase: "Define",
        title: "The same signal needed two different ways to reach people",
        summary:
          "Personas and journeys showed that centralizing data solved only part of the problem: the delivery channel had to match each audience's context.",
        narrative: [
          "I directly built the personas, journeys, and analysis materials from the workshop evidence. Pastoral profiles primarily needed information about water and pasture availability but relied on channels such as voice calls, SMS, radio, and community communication. Institutional profiles needed water level, quality, location, and historical information through tools such as dashboards and email.",
          "The definition therefore separated two complementary experiences: an information-rich interface for those monitoring and coordinating responses, and a much simpler mechanism for delivering meaningful changes to people with limited connectivity.",
        ],
        activities: [
          "Build five personas from the identified profiles.",
          "Develop journeys for local and institutional scenarios.",
          "Map needs, expected information, and communication channels.",
          "Turn findings into problem statements and design opportunities.",
        ],
        decisions: [
          "Design around capability and context rather than forcing the same interface on everyone.",
          "Use dashboards and email for institutional actors while exploring SMS for pastoralists.",
          "Keep waterpoint status as a shared signal connecting both journeys.",
        ],
        media: [
          {
            src: "/images/projects/waterpoints-monitoring/persona-pastoralist.webp",
            alt: "Pastoralist persona from Ethiopia showing goals, challenges, water and pasture information needs, and preference for channels such as voice calls, SMS, and radio.",
            caption:
              "Pastoral profile: information needed to be concrete and local, while technology access made relying on a smartphone application unrealistic.",
            width: 1054,
            height: 782,
          },
          {
            src: "/images/projects/waterpoints-monitoring/persona-expert-gov.webp",
            alt: "Government expert persona from Ethiopia showing information needs related to waterpoint level, quality, location, and use.",
            caption:
              "Technical government profile: decision-making required centralized, detailed information through dashboards and institutional channels.",
            width: 1052,
            height: 787,
          },
          {
            src: "/images/projects/waterpoints-monitoring/persona-ngo.webp",
            alt: "NGO professional persona showing needs related to waterpoint information, data access, and communication with pastoral communities.",
            caption:
              "NGO profile: beyond accessing data, this role needed to exchange information while considering digital inclusion barriers in pastoral communities.",
            width: 1050,
            height: 787,
          },
          {
            src: "/images/projects/waterpoints-monitoring/user-type-considerations.webp",
            alt: "Diagram comparing requirements across high-level government, government experts, NGOs, the private sector, and NGO practitioners.",
            caption:
              "Synthesis revealed meaningful differences across profiles: some required analysis and data access, while others prioritized communication, simplicity, and channels capable of reaching remote communities.",
            width: 1415,
            height: 633,
          },
        ],
      },
      ideate: {
        phase: "Ideate",
        title: "Design a multichannel system, not a single screen",
        summary:
          "The concepts connected monitoring, detail, and alerts so that one waterpoint update could support different actions depending on who received it.",
        narrative: [
          "I developed the brainstorms, storyboards, and initial solution proposals, then shared them with the team to converge on the final concepts. For decision-makers, the direction became a platform with a map, waterpoint profiles, historical data, forecasts, and subscriptions.",
          "For pastoral communities, the proposal avoided dependence on smartphones: a person could subscribe to nearby waterpoints and receive an SMS when their status changed. The same principle supported email alerts for institutional users.",
        ],
        activities: [
          "Develop brainstorms and storyboards for local and institutional scenarios.",
          "Explore maps, profiles, historical data, forecasts, and subscriptions.",
          "Design the concept of alerts triggered by changes in waterpoint status.",
          "Share alternatives with the team and converge on the system scope.",
        ],
        decisions: [
          "Maintain a common information source while varying the delivery channel.",
          "Do not make the dashboard a prerequisite for pastoral communities to benefit from the system.",
          "Use waterpoint subscriptions as the connection between monitoring and proactive communication.",
        ],
        media: [
          {
            src: "/images/projects/waterpoints-monitoring/needs-channels-brainstorming.webp",
            alt: "Brainstorming board organizing waterpoint information needs, communication channels, sources, advisories, and languages for pastoral communities.",
            caption:
              "The brainstorming connected information, sources, communication channels, and potential advisories before turning them into concrete product functionality.",
            width: 1328,
            height: 742,
          },
          {
            src: "/images/projects/waterpoints-monitoring/impact-effort-matrix.webp",
            alt: "Impact versus effort matrix containing proposed waterpoint monitoring solutions including dashboards, SMS alerts, email, radio, IVR, and other communication channels.",
            caption:
              "We prioritized concepts by comparing expected impact against implementation effort, helping the team converge on dashboards, subscriptions, and alerts as core components.",
            width: 1425,
            height: 777,
          },
        ],
      },
      prototype: {
        phase: "Prototype and build",
        title: "Turn information needs into an operational product",
        summary:
          "After an initial concept validation, I designed the complete experience and developed the frontend of the implemented system.",
        narrative: [
          "The first prototype allowed the team to quickly review the structure of the solution before moving into development. From that foundation, I designed the platform's UX/UI and developed its frontend; another team member was responsible for the backend.",
          "The resulting product brought together geographic monitoring, waterpoint status, detailed profiles, historical data, forecasts, forage information, subscriptions, and alerts. Implementation allowed us to work with real data and behavior rather than limiting evaluation to Figma screens.",
        ],
        activities: [
          "Build and review the first experience prototype.",
          "Design the UX/UI for monitoring and detail views.",
          "Develop the frontend and integrate it with backend services.",
          "Handle real loading, search, data, and subscription states.",
        ],
        decisions: [
          "Use the map as an entry point without making it the only way to find information.",
          "Connect map, profile, data, and subscription around the same waterpoint.",
          "Validate the implemented product later to uncover friction a prototype could hide.",
        ],
      },
      test: {
        phase: "Validate",
        title:
          "Evaluate the implemented product and find where it disagreed with users",
        summary:
          "I designed the final usability protocol and analyzed its results; the sessions themselves were moderated by my supervisor with institutional users.",
        narrative: [
          "The evaluation started with eight participants representing High-Level Government, Expert Government, and NGO profiles. The protocol included 14 tasks, think-aloud, SUS, heatmaps, and a post-test interview. Some tasks ultimately had seven observations because one task was accidentally omitted for one participant and another participant later withdrew.",
          "The evaluation revealed an uneven experience. Waterpoint profiles, forecasts, and biomass information were perceived as particularly useful, while historical filtering, subscriptions, and route generation created significant friction. No participant who reached the route task could complete it independently.",
          "Average SUS scores were 70 for High-Level Government, 60.8 for Expert Government, and 67.5 for NGO. Rather than reducing the evaluation to one score, we used tasks, verbalizations, and heatmaps to identify concrete problems and create an improvement backlog.",
        ],
        activities: [
          "Design the protocol, tasks, metrics, and evaluation structure.",
          "Analyze recordings, task results, SUS, heatmaps, and interviews.",
          "Identify behavior patterns and gaps with the system's mental model.",
          "Write and prioritize UX recommendations.",
        ],
        decisions: [
          "Make expected actions — such as clicking a waterpoint name — match observed user mental models.",
          "Simplify historical filtering and make subscription status more visible.",
          "Redesign the routing workflow around familiar origin-and-destination patterns.",
          "Prioritize clarity and feedback before adding new functionality.",
        ],
        media: [
          {
            src: "/images/projects/waterpoints-monitoring/usability-task-results.webp",
            alt: "Results table for fourteen Waterpoints Monitoring usability tasks showing estimated and actual completion time, success, non-critical errors, critical errors, and number of participants.",
            caption:
              "Results across the 14 protocol tasks revealed a clear contrast between straightforward interactions and flows with critical usability issues, particularly routing and subscription management.",
            width: 681,
            height: 317,
          },
        ],
      },
      deliver: {
        phase: "Deliver",
        title: "Separate what was implemented from what the context prevented",
        summary:
          "The web platform and email alerts were implemented; the SMS layer and the next UX iteration remained pending because of institutional and resource constraints.",
        narrative: [
          "The web system was implemented and allowed users to consult and subscribe to information about waterpoints. Email notifications also became part of the solution for institutional users.",
          "The SMS concept directly addressed the connectivity conditions identified with pastoralists, but deployment required government authorization. That permission was not secured, while the project simultaneously lost the resources required to continue.",
          "The final analysis produced specific recommendations for search, navigation, routing, historical data, profiles, and subscriptions, but there was no subsequent development cycle to implement and remeasure them. The case therefore ends with a validated backlog rather than a misleading story of complete optimization.",
        ],
        activities: [
          "Deliver the web experience and product frontend.",
          "Consolidate recommendations from the final usability evaluation.",
          "Document the low-connectivity alert concept.",
          "Share remaining constraints and opportunities with the team.",
        ],
        decisions: [
          "Clearly distinguish implemented functionality from proposals that remained pending.",
          "Treat permissions, infrastructure, and institutional relationships as real design constraints.",
          "Document usability recommendations even without budget for another iteration.",
        ],
      },
    },
    reflection:
      "This project reinforced that designing for low connectivity does not always mean making a lighter interface; sometimes it means choosing a different channel altogether. It also showed me that a solution can be desirable and technically feasible while still being constrained by permissions, resources, and institutional relationships. Those conditions are also part of the system we design.",
    editorChecklist: [],
  },
  "aclimate-redesign": {
    title: "Aclímate · Redesign",
    eyebrow: "Multi-country platform · UX Audit + Responsive UI",
    year: "2024",
    coverAlt:
      "Aclímate climate data dashboard with date filters and charts for minimum temperature and precipitation.",
    summary:
      "Evaluation and redesign of a multi-country agroclimatic platform to simplify technical information, maps, charts, and monitoring dashboards.",
    shortOutcome:
      "The proposal introduced a responsive experience and improvements derived from user evaluations.",
    challenge:
      "The platform contained valuable technical information, but its density, navigation, and data visualizations could increase interpretation effort.",
    response:
      "I contributed to the evaluation, redesign, and frontend implementation of recommendations, as well as in-person training for users in the Colombian Amazon.",
    role: "UX evaluation, UI redesign, recommendations, and frontend support",
    team: "Multi-country agroclimatic team",
    context: "Technical information · Maps and charts · Responsive use",
    methods: [
      "User evaluation",
      "Heuristic review",
      "Information architecture",
      "Responsive design",
      "Training",
    ],
    stack: ["Web frontend", "Responsive design", "Maps and charts"],
    metrics: [
      { value: "Multi-country", label: "product scope" },
      { value: "Responsive", label: "cross-cutting criterion" },
      { value: "3", label: "families: maps, charts, and dashboards" },
      { value: "Amazon", label: "in-person training" },
    ],
    links: [
      {
        label: "View live platform",
        href: "https://amazonia.aclimate.org",
        kind: "live",
      },
    ],
    process: {
      discover: {
        phase: "Discover",
        title: "Evaluate the existing experience",
        summary:
          "The redesign began by identifying where technical information and interface structure increased the effort required to use the platform.",
        narrative: [
          "The platform needed to serve different countries and profiles, so it was necessary to distinguish local issues from shared patterns.",
          "The evaluation considered navigation, content comprehension, map and chart readability, and behavior across screen sizes.",
        ],
        activities: [
          "Review existing journeys and components.",
          "Observe difficulties during user evaluations.",
          "Identify inconsistencies and points of high cognitive load.",
        ],
        editorNote:
          "Add: evaluation scope, heuristics used, participants, audited screens, and evidence of the main issues.",
      },
      define: {
        phase: "Define",
        title: "Organize complexity by decision priority",
        summary:
          "Problems were organized according to their impact on comprehension, navigation, and monitoring.",
        narrative: [
          "Definition aimed to make the interface hierarchy reflect what a person needed first instead of reproducing the system's technical structure.",
          "Responsive behavior was also established as a product condition, not a final adaptation.",
        ],
        activities: [
          "Prioritize findings by severity and impact.",
          "Reorganize content and key journeys.",
          "Define responsive rules for critical components.",
        ],
        editorNote:
          "Add: impact/effort matrix, new architecture, user flows, and redesign principles.",
      },
      ideate: {
        phase: "Ideate",
        title: "Simplify without hiding technical depth",
        summary:
          "The alternatives focused on progressive layers of information and more readable visualizations.",
        narrative: [
          "Maps, charts, and dashboards had to support quick reading while preserving access to detail when necessary.",
          "The visual exploration sought consistency across countries and flexibility for different content.",
        ],
        activities: [
          "Explore hierarchy for cards, filters, and legends.",
          "Compare visualization and progressive-disclosure patterns.",
          "Define component behavior on mobile.",
        ],
        editorNote:
          "Add: visual explorations, chart comparisons, filter design, and discarded alternatives.",
      },
      prototype: {
        phase: "Prototype",
        title: "Connect the visual system with real cases",
        summary:
          "The redesign took shape as responsive flows and components for agroclimatic data.",
        narrative: [
          "The prototypes needed to represent realistic content to verify that simplification would hold up with real cases and data volumes.",
          "Component consistency made it easier to discuss changes with developers and prepare implementation.",
        ],
        activities: [
          "Prototype maps, charts, and monitoring dashboards.",
          "Document states and responsive behavior.",
          "Review feasibility with the technical team.",
        ],
        editorNote:
          "Add: before/after comparisons, interactive prototype, specifications, and design-system excerpts.",
      },
      test: {
        phase: "Validate",
        title: "Incorporate user recommendations",
        summary:
          "User evaluations informed changes to comprehension, visualization, and navigation.",
        narrative: [
          "Validation examined whether the changes reduced the effort required to find information and understand maps and charts.",
          "Recommendations became interface improvements and implementation discussions with the team.",
        ],
        activities: [
          "Observe key consultation and monitoring tasks.",
          "Analyze comprehension of terms and visualizations.",
          "Prioritize recommendations for implementation.",
        ],
        editorNote:
          "Add: protocol, participants, findings, metrics, and concrete changes between versions.",
      },
      deliver: {
        phase: "Implement and support",
        title: "Close the loop with frontend and training",
        summary:
          "I contributed to frontend implementation and in-person training in the Colombian Amazon.",
        narrative: [
          "Implementation made it possible to resolve behavior details that only appear with real data and devices.",
          "Training sessions also became a source of observation for recurring questions and later improvement opportunities.",
        ],
        activities: [
          "Implement prioritized recommendations.",
          "Support user training sessions.",
          "Document new questions and iteration opportunities.",
        ],
        editorNote:
          "Add: production screenshots, performance metrics, training materials, and post-launch lessons.",
      },
    },
    reflection:
      "The redesign showed that simplifying does not mean removing information; it means presenting the right depth at the right moment.",
    editorChecklist: [
      "Confirm the exact technologies used in the redesigned version.",
      "Add metrics or outcomes from the evaluations.",
      "Show at least two before/after comparisons.",
      "Explain what was learned during training sessions.",
    ],
  },
};

export const projects: Project[] = projectsEs.map((project) => {
  const translation = projectTranslations[project.slug];
  const { process, ...projectCopy } = translation;

  return {
    ...project,
    ...projectCopy,
    process: project.process.map((step) => ({
      ...step,
      ...process[step.id],
    })),
  };
});

export const processPrinciples: ProcessPrinciple[] = [
  {
    number: "01",
    title: "Listen",
    text: "Understand people, tasks, language, context, and constraints before proposing a solution.",
  },
  {
    number: "02",
    title: "Frame",
    text: "Turn scattered evidence into clear problems, priorities, and success criteria.",
  },
  {
    number: "03",
    title: "Explore",
    text: "Compare alternatives and make trade-offs visible before committing the product.",
  },
  {
    number: "04",
    title: "Prototype",
    text: "Shape flows, content, states, and components with the fidelity needed to learn.",
  },
  {
    number: "05",
    title: "Validate",
    text: "Observe real tasks, measure ease of use, and prioritize findings by impact rather than opinion.",
  },
  {
    number: "06",
    title: "Build",
    text: "Carry the design intent into accessible, responsive, maintainable code without losing the reason behind it.",
  },
];

export const portfolioEn = {
  profile,
  projects,
  processPrinciples,
} satisfies PortfolioData;
