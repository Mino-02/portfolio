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
    eyebrow: "B2B product · UX/UI + Frontend",
    year: "2025 — present",
    coverAlt:
      "Agroclimatic bulletin creation flow in Bulletin Builder, showing the rainfall map step and the bulletin preview.",
    summary:
      "A platform for creating, reviewing, publishing, and viewing agroclimatic bulletins through dynamic forms and controlled templates.",
    shortOutcome:
      "Complete frontend, four active templates, and operation with approximately 15 users across two institutions.",
    challenge:
      "The process needed to coordinate technical content, institutional review, permissions, and publishable outputs without manually laying out every bulletin.",
    response:
      "I co-proposed, designed, and developed the complete frontend with reusable components, validation, roles, review comments, and JPG/PDF export.",
    role: "Co-proposal, UX/UI, and primary frontend ownership",
    team: "International team with institutions in Guatemala and Vietnam",
    context: "Editorial workflow · Roles and permissions · Institutional use",
    methods: [
      "Workflow mapping",
      "Information architecture",
      "Prototyping",
      "Usability testing",
      "Stakeholder iteration",
    ],
    stack: ["Next.js", "React", "TypeScript"],
    metrics: [
      { value: "4", label: "active templates" },
      { value: "≈15", label: "users" },
      { value: "2", label: "institutions" },
      { value: "2", label: "countries in operation" },
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
        title: "Map an editorial process with multiple actors",
        summary:
          "Before designing screens, it was necessary to understand who creates, reviews, approves, and reads each bulletin.",
        narrative: [
          "The platform needed to support technical content creation through dynamic forms while preserving a consistent visual output through controlled templates.",
          "The context included needs from Guatemala and recommendations from a team in Vietnam, so the workflow had to remain flexible without losing governance.",
        ],
        activities: [
          "Identify actors, permissions, and handoff points.",
          "Map the creation, review, publication, and consultation cycle.",
          "Document content and template constraints.",
        ],
        editorNote:
          "Add: blueprint of the previous process, interviews or workshops conducted, participant roles, and the main friction points.",
      },
      define: {
        phase: "Define",
        title: "Translate the workflow into states and rules",
        summary:
          "The findings became functional requirements, bulletin states, and permission rules.",
        narrative: [
          "The core of the product was not an isolated form, but a collaboration system: validation, comments, template control, publication, and a public URL for the final output.",
          "Defining these states early aligned design and development and reduced ambiguity during implementation.",
        ],
        activities: [
          "Define bulletin states and permitted transitions.",
          "Structure roles, permissions, and available actions.",
          "Prioritize requirements by value and technical dependency.",
        ],
        decisions: [
          "Separate editable content from the template's visual rules.",
          "Make the review status visible within the task context.",
        ],
        editorNote:
          "Add: permissions matrix, user flow, information architecture, user stories, and acceptance criteria.",
      },
      ideate: {
        phase: "Ideate",
        title: "Design an editor that reduces errors",
        summary:
          "The solution was framed as a guided journey with immediate feedback and repeatable components.",
        narrative: [
          "The ideation balanced two needs: enough freedom to create content and enough constraints to protect the bulletin structure.",
          "The patterns were designed to grow with new templates, fields, and user types.",
        ],
        activities: [
          "Explore step-based navigation and field grouping.",
          "Design feedback for validation and incomplete states.",
          "Define contextual review and commenting patterns.",
        ],
        editorNote:
          "Add: explored alternatives, decision matrix, wireframes, and reasons for choosing the final pattern.",
      },
      prototype: {
        phase: "Prototype and build",
        title: "Connect prototype and code from the start",
        summary:
          "The experience was implemented with reusable components in Next.js, React, and TypeScript.",
        narrative: [
          "The implementation included dynamic forms, validation, role-based permissions, review comments, JPG/PDF export, and publication through a public URL.",
          "Working directly with a component system made it possible to validate real states—loading, error, empty, insufficient permission, and incomplete content—that are often absent from a linear prototype.",
        ],
        activities: [
          "Build reusable, typed components.",
          "Integrate APIs and role-based authentication.",
          "Implement template export and visualization.",
        ],
        editorNote:
          "Add: component anatomy, tokens, interface states, architecture decisions, and Storybook screenshots if available.",
      },
      test: {
        phase: "Validate",
        title: "Test the complete workflow, not only the screens",
        summary:
          "Usability tests were conducted and analyzed for Guatemala, and recommendations from the Vietnam team were incorporated.",
        narrative: [
          "Testing focused on critical tasks in the editorial cycle and revealed friction in understanding states, locating actions, and following the creation and review sequence.",
          "Recommendations were prioritized by task impact, frequency, and implementation effort.",
        ],
        activities: [
          "Prepare tasks representative of the real process.",
          "Observe comprehension, success, and ease of use.",
          "Synthesize findings and convert them into product changes.",
        ],
        editorNote:
          "Add: number and profile of participants, task metrics, top five findings, severity, and a before/after comparison.",
      },
      deliver: {
        phase: "Deliver and scale",
        title: "Move from one template to an operable system",
        summary:
          "The platform operates in Guatemala and Vietnam with four templates and approximately 15 users from two institutions.",
        narrative: [
          "The delivery included a frontend foundation designed to preserve consistency as new templates and institutional needs are added.",
          "The next level of maturity is to add product analytics and measure creation time, review cycles, and recurring errors.",
        ],
        activities: [
          "Release the complete workflow to production.",
          "Support adoption and gather recommendations from the teams.",
          "Maintain a reusable structure for new templates.",
        ],
        editorNote:
          "Add: adoption outcomes, training evidence, usage metrics, and a roadmap for upcoming releases.",
      },
    },
    reflection:
      "The biggest lesson was to treat permissions, validation, and states as part of the experience. In institutional products, workflow clarity matters as much as visual quality.",
    editorChecklist: [
      "Specify how many people participated in the Guatemala test.",
      "Show a before/after example of an implemented finding.",
      "Clearly separate your decisions from team decisions.",
      "Hide sensitive data in production screenshots.",
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
