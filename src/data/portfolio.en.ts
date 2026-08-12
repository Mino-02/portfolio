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
      "Redesign of the process for creating and consuming agroclimatic bulletins for smallholder farmers in low-connectivity contexts.",
    shortOutcome:
      "Three iterations with 25 participants increased measured comprehension from 80% to 100%.",
    challenge:
      "Agroclimatic information could be technically correct and still be difficult for rural producers to turn into a concrete action.",
    response:
      "I co-designed a high-fidelity functional prototype and the Campo Claro Framework, a guide for turning technical recommendations into clearer messages without losing rigor.",
    role: "Research, co-design, UX/UI, prototyping, and validation",
    team: "Master's project with technical specialists and smallholder farmers",
    context: "Rural settings · Low connectivity · Technical information",
    methods: [
      "Co-design",
      "Iterative prototyping",
      "Moderated usability testing",
      "Think-aloud protocol",
      "SUS",
      "CES",
    ],
    stack: ["Figma", "Figma Make", "Miro"],
    metrics: [
      { value: "25", label: "participants" },
      { value: "3", label: "moderated iterations" },
      { value: "80 → 100%", label: "comprehension in the sample" },
      { value: "83.5", label: "final SUS" },
      { value: "6/7", label: "final CES" },
      { value: "3/5 → 5/5", label: "complete framework application" },
    ],
    links: [],
    process: {
      discover: {
        phase: "Discover",
        title: "Understand where meaning was being lost",
        summary:
          "The starting point was the full recommendation journey: from the person who writes it to the person who must use it to decide what to do.",
        narrative: [
          "The project focused on smallholder farmers and the technical specialists who prepare agroclimatic recommendations. The main gap was not only access, but comprehension: specialized language, high information density, and limited-connectivity settings.",
          "The research needed to reveal which elements helped people interpret a recommendation, which terms created uncertainty, and what context a person needed to turn the message into an action.",
        ],
        activities: [
          "Map the bulletin creation, publication, reading, and use journey.",
          "Differentiate the needs of farmers and technical writers.",
          "Document barriers related to language, visual hierarchy, and context of use.",
        ],
        editorNote:
          "Add: sample and recruitment criteria, research guide, stakeholder map, anonymized quotes, and a visual synthesis of findings.",
      },
      define: {
        phase: "Define",
        title: "Turn findings into rules for clarity",
        summary:
          "The synthesis became testable criteria for simplifying recommendations without making them imprecise.",
        narrative: [
          "The Campo Claro Framework organized the problem as a series of content decisions: what information to keep, in what order to present it, and how to express an action in language farmers recognize.",
          "The criteria also needed to be usable by technical specialists, because a useful solution had to improve both bulletin consumption and bulletin creation.",
        ],
        activities: [
          "Prioritize comprehension, applicability, and ease of use.",
          "Define the structure of the Campo Claro Framework.",
          "Establish what should be measured in each iteration.",
        ],
        decisions: [
          "Treat language as part of the interface, not as content added later.",
          "Validate the outcome with both profiles in the system: farmers and technical specialists.",
        ],
        editorNote:
          "Add: affinity diagram, problem definition, How Might We question, framework principles, and success criteria.",
      },
      ideate: {
        phase: "Ideate",
        title: "Explore a more actionable reading experience",
        summary:
          "The alternatives combined visual hierarchy, content chunking, and action-oriented writing.",
        narrative: [
          "The ideation aimed to reduce reading effort and make the essentials visible: what is happening, who it affects, what action is recommended, and under which conditions.",
          "Co-design made it possible to compare the proposals with the experience of people who produce and consume the information.",
        ],
        activities: [
          "Propose content and navigation structures.",
          "Compare ways to present recommendations and alerts.",
          "Select alternatives with potential for low-connectivity contexts.",
        ],
        editorNote:
          "Add: sketches, Crazy 8s, prioritization matrix, discarded decisions, and the reasons behind them.",
      },
      prototype: {
        phase: "Prototype",
        title: "Make the system tangible",
        summary:
          "The result was a high-fidelity functional prototype prepared to test comprehension and ease of use.",
        narrative: [
          "The prototype connected the reading experience with the creation framework, allowing language and structural changes to be evaluated as a system rather than as isolated screens.",
          "Each iteration incorporated adjustments before the proposal was tested again with participants.",
        ],
        activities: [
          "Design the key states in the journey.",
          "Prepare realistic content for test tasks.",
          "Build a high-fidelity functional prototype.",
        ],
        editorNote:
          "Add: wireframes, visual evolution, components, interaction annotations, and a link to the prototype.",
      },
      test: {
        phase: "Validate",
        title: "Iterate with evidence, not preference",
        summary:
          "Three rounds of moderated testing were conducted with 25 participants.",
        narrative: [
          "The sessions made it possible to observe comprehension, framework application, and perceived effort. Results were reviewed between iterations to improve both the interface and the way recommendations were written.",
          "In the evaluated sample, farmer comprehension increased from 80% to 100%. Complete framework application by technical specialists increased from 3/5 to 5/5, with an SUS score of 83.5 and CES of 6/7 in the final iteration.",
        ],
        activities: [
          "Moderate tasks using the think-aloud protocol.",
          "Measure comprehension and completeness.",
          "Apply SUS and CES.",
          "Prioritize findings for the next iteration.",
        ],
        editorNote:
          "Add: protocol, tasks, severity table, iteration comparison, and anonymized quotes.",
      },
      deliver: {
        phase: "Deliver",
        title: "Leave a framework others can apply",
        summary:
          "The delivery combined a validated experience with a practical tool for producing clearer content.",
        narrative: [
          "The value of the project was not limited to a final interface. It also established reusable criteria that technical teams could apply to preserve clarity in future bulletins.",
          "An ideal next step would be to measure framework use in production, document exceptions, and evaluate how well it transfers to other agroclimatic contexts.",
        ],
        activities: [
          "Consolidate the high-fidelity prototype.",
          "Document the Campo Claro Framework.",
          "Record metrics, lessons, and future opportunities.",
        ],
        editorNote:
          "Add: final deliverables, a framework excerpt, implementation recommendations, and roadmap.",
      },
    },
    reflection:
      "This case shows how a UX writing decision can become a product decision: when content is critical, comprehension must be designed, tested, and measured.",
    editorChecklist: [
      "Clarify your individual contribution compared with the academic team.",
      "Include the distribution of the 25 participants by profile.",
      "Add screenshots from all three iterations, not only the final result.",
      "Document one discarded decision and the lesson it produced.",
    ],
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
    eyebrow: "Geospatial platform · Research + UX/UI + Frontend",
    year: "2023",
    coverAlt:
      "Map of Ethiopia in the Waterpoints and Pasture Monitoring platform, showing waterpoints by status and details for a selected location.",
    summary:
      "A geospatial platform for monitoring water points in Ethiopia, designed for rural communities and decision-makers.",
    shortOutcome:
      "Workshops and testing helped adapt the interaction to institutional mental models and a low-connectivity context.",
    challenge:
      "The platform needed to make geographic and monitoring information understandable for different profiles in settings where connectivity could be limited.",
    response:
      "I planned workshops with rural communities and decision-makers, designed the experience, developed the frontend, and then analyzed and prioritized usability findings.",
    role: "Workshop planning, UX/UI, usability analysis, and frontend",
    team: "Multidisciplinary team in Ethiopia",
    context: "Rural communities · Geospatial data · Low connectivity",
    methods: [
      "User workshops",
      "Needs mapping",
      "Information architecture",
      "Usability testing",
      "Mental model analysis",
    ],
    stack: ["Web frontend", "Responsive design", "Geospatial data"],
    metrics: [
      { value: "Ethiopia", label: "implementation context" },
      { value: "2", label: "key stakeholder groups" },
      { value: "Geo", label: "visualization and monitoring" },
      { value: "Low bandwidth", label: "design constraint" },
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
        title: "Listen to the people who produce and use the information",
        summary:
          "The workshops brought together perspectives from rural communities and decision-makers.",
        narrative: [
          "The project needed to connect field information with institutional decisions. That meant understanding tasks, vocabulary, trust in the data, and access constraints on both sides.",
          "The low-connectivity context required considering information volume, interface weight, and how users recover context while navigating from the very beginning.",
        ],
        activities: [
          "Plan workshops with rural and institutional profiles.",
          "Document needs, decisions, and friction points.",
          "Identify connectivity and device constraints.",
        ],
        editorNote:
          "Add: workshop agenda, participants, authorized photographs, stakeholder maps, and a synthesis of needs.",
      },
      define: {
        phase: "Define",
        title: "Prioritize decisions, not data layers",
        summary:
          "The architecture had to answer user questions before mirroring the database structure.",
        narrative: [
          "The risk in a geospatial platform is treating the map as the entire product. Definition focused on what each profile needed to decide and what evidence had to be visible for that decision.",
          "Flows and information hierarchy were organized around monitoring and consultation tasks.",
        ],
        activities: [
          "Group needs by task and user profile.",
          "Define primary, secondary, and detailed information.",
          "Prioritize consultation and monitoring journeys.",
        ],
        editorNote:
          "Add: problem statement, personas, user journeys, architecture, and prioritization criteria.",
      },
      ideate: {
        phase: "Ideate",
        title: "Explore patterns for navigating the territory",
        summary:
          "The alternatives combined a map, filters, and detail cards while preserving location context.",
        narrative: [
          "The ideation needed to solve how to move from a territorial overview to a specific point and back without losing orientation.",
          "It was also important to reduce the number of actions and avoid unnecessary dependence on complex interactions or stable connections.",
        ],
        activities: [
          "Explore relationships between map, list, and detail views.",
          "Design understandable filters for non-technical profiles.",
          "Propose empty, loading, and connection-loss states.",
        ],
        editorNote:
          "Add: sketches, map/list alternatives, pattern evaluation, and discarded decisions.",
      },
      prototype: {
        phase: "Prototype and build",
        title: "Turn geography into an operable interface",
        summary:
          "I designed the experience and developed the platform's frontend.",
        narrative: [
          "Building the product made it possible to adapt the interaction to real data and constraints. Components had to preserve hierarchy across screen sizes and keep the relationship between a water point and its associated information clear.",
          "Implementation also exposed technical decisions that affected the experience, such as loading times, marker volume, and filter persistence.",
        ],
        activities: [
          "Build geospatial views and information cards.",
          "Design responsive behavior.",
          "Integrate real service data and states.",
        ],
        editorNote:
          "Add: wireframes, prototype, frontend screenshots, and performance decisions for low connectivity.",
      },
      test: {
        phase: "Validate",
        title: "Compare the interface with real mental models",
        summary:
          "I analyzed and prioritized usability test results from institutional users.",
        narrative: [
          "Testing revealed interaction patterns and gaps between the system's logic and the way users expected to find or interpret information.",
          "The findings became prioritized improvement proposals for navigation, comprehension, and map use.",
        ],
        activities: [
          "Analyze behavior and verbalizations.",
          "Group patterns by mental model.",
          "Prioritize improvements by impact and recurrence.",
        ],
        editorNote:
          "Add: participants, tasks, metrics, findings matrix, and one example of a change derived from testing.",
      },
      deliver: {
        phase: "Deliver",
        title: "Document decisions to support future evolution",
        summary:
          "The outcome connected research, design, and frontend in a shared foundation for iteration.",
        narrative: [
          "Beyond the platform itself, the process created a shared understanding of needs and findings that the team could use to prioritize later improvements.",
          "A future measurement should include performance on real connections, consultation frequency, and time to complete critical decisions.",
        ],
        activities: [
          "Deliver interface and frontend improvements.",
          "Share prioritized findings with the team.",
          "Propose opportunities for future iterations.",
        ],
        editorNote:
          "Add: subsequent impact, technical metrics, team testimonials, and roadmap.",
      },
    },
    reflection:
      "This project reinforced that a geospatial interface is not designed around the map, but around the decisions each person needs to make with it.",
    editorChecklist: [
      "Confirm the exact frontend technologies used.",
      "Add participant counts and usability-test profiles.",
      "Show how low connectivity was addressed in both code and design.",
      "Explain one mental model that changed an interface decision.",
    ],
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
