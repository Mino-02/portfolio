import type { Metric, PortfolioData, Project } from "./portfolio.types";

export const profile = {
  name: "Sebastián López Astudillo",
  shortName: "Sebastián López A.",
  role: "Diseñador UX/UI · Investigación UX · Frontend",
  location: "Cali, Colombia",
  email: "sebaslopezastu08@gmail.com",
  phone: "+57 305 766 5223",
  linkedin: "https://www.linkedin.com/in/sebastian-lopez-uxui/",
  github: "https://github.com/Mino-02",
  photo: {
    src: "/images/profile/sebastian.webp",
    alt: "Sebastián López A., diseñador UX/UI y desarrollador frontend",
  },
  cv: "/cv/Sebastian_Lopez_Astudillo_CV_ES.docx",
  headline: "Diseño decisiones que las personas pueden usar.",
  intro:
    "Convierto investigación con usuarios en productos digitales claros, accesibles y técnicamente viables. Mi background en frontend me permite acompañar una idea desde el hallazgo hasta la interfaz funcionando.",
  about: [
    "Soy Diseñador UX/UI e Ingeniero Multimedia con cerca de cuatro años de experiencia en investigación, pruebas de usabilidad, arquitectura de información, prototipado e implementación de interfaces web responsive.",
    "He trabajado con agricultores, extensionistas, técnicos, investigadores y tomadores de decisiones en proyectos internacionales.",
  ],
  availability:
    "Abierto a oportunidades remotas o híbridas y a proyectos con impacto social.",
  metrics: [
    { value: "≈7", label: "productos", detail: "diseñados o evaluados" },
    {
      value: "≈12",
      label: "pruebas UX",
      detail: "planeadas, moderadas o analizadas",
    },
    { value: "4", label: "frontends", detail: "con responsabilidad principal" },
    {
      value: "5",
      label: "países",
      detail: "con usuarios o equipos de proyecto",
    },
  ] satisfies Metric[],
  principles: [
    {
      title: "Investigar para decidir",
      text: "La investigación no termina en un mural: se traduce en prioridades, requerimientos y criterios de aceptación.",
    },
    {
      title: "Probar antes de asumir",
      text: "Uso prototipos y pruebas moderadas para detectar fricción temprano y sostener decisiones con evidencia.",
    },
    {
      title: "Diseñar con lo técnico",
      text: "Pienso componentes, estados, contenido, accesibilidad y restricciones de implementación desde el inicio.",
    },
  ],
  experience: [
    {
      period: "Mar 2023 — hoy",
      role: "Full Stack Developer · Enfoque UX/UI",
      company: "Centro Internacional de Agricultura Tropical (CIAT)",
      description:
        "Investigación con usuarios, pruebas de usabilidad, arquitectura de información, diseño de interacción y liderazgo frontend para plataformas agroclimáticas y de monitoreo.",
    },
    {
      period: "Ago 2022 — Feb 2023",
      role: "Practicante de Desarrollo",
      company: "Centro Internacional de Agricultura Tropical (CIAT)",
      description:
        "Definición de requerimientos, prototipado e implementación inicial de soluciones web con .NET y Bootstrap.",
    },
  ],
  education: [
    {
      period: "2025 — 2026",
      title: "Maestría en Creación de Experiencias Digitales UX",
      place: "Universidad Icesi",
    },
    {
      period: "2018 — 2022",
      title: "Ingeniería Multimedia",
      place: "Universidad Autónoma de Occidente",
    },
  ],
  capabilities: [
    {
      title: "Investigación y estrategia",
      items: [
        "Entrevistas y encuestas",
        "Grupos focales",
        "Personas y user journeys",
        "Diagramas de afinidad",
        "Definición de requerimientos",
      ],
    },
    {
      title: "Diseño y validación",
      items: [
        "Arquitectura de información",
        "Wireframes y prototipos",
        "Pruebas moderadas",
        "SUS, CES y heurísticas",
        "Sistemas de diseño y accesibilidad",
      ],
    },
    {
      title: "Frontend",
      items: [
        "Next.js y React",
        "TypeScript y JavaScript",
        "HTML semántico y CSS",
        "Tailwind CSS y Bootstrap",
        "APIs REST y Git/GitHub",
      ],
    },
  ],
};

export const projects = (
  [
    {
      slug: "campo-claro",
      index: "02",
      title: "Campo Claro",
      eyebrow: "Tesis de maestría · UX Research + Product Design",
      year: "2025 — 2026",
      accent: "sun",
      cover: "/images/projects/campo-claro/cover.webp",
      coverAlt:
        "Identidad visual del Marco Campo Claro, con un símbolo de paisaje agrícola y el lema «De lenguaje técnico a acción entendible».",
      summary:
        "Marco de simplificación de información agroclimática que convierte hallazgos de investigación en reglas editoriales y de interfaz para producir recomendaciones más claras y accionables.",
      shortOutcome:
        "Tres iteraciones con 25 participantes distintos llevaron la comprensión evaluada de 80 % a 100 % y la aplicación completa del marco de 3/5 a 5/5.",
      challenge:
        "La información agroclimática podía ser técnicamente correcta y aun así resultar difícil de comprender y convertir en acciones concretas para pequeños productores rurales.",
      response:
        "Co-diseñé el Marco Campo Claro y lo integré en un generador para técnicos y un visor móvil para productores, convirtiendo principios de claridad en guías, restricciones y comportamientos verificables de interfaz.",
      role: "Investigación y síntesis · Co-diseño del framework · UX/UI · Prototipado · Co-planeación y análisis de validación",
      team: "Trabajo de grado junto a Daniel Guzmán",
      context:
        "Contexto objetivo: Guatemala · Pruebas con perfiles técnicos y productores en Colombia",
      methods: [
        "Desk research",
        "Diagrama de afinidad",
        "Personas y journey maps",
        "How Might We",
        "Pruebas moderadas",
        "SUS y CES",
      ],
      stack: ["Figma", "Figma Make", "Miro"],
      metrics: [
        { value: "25", label: "participantes · Colombia" },
        { value: "3", label: "iteraciones" },
        { value: "80 → 100 %", label: "comprensión evaluada" },
        { value: "3/5 → 5/5", label: "aplicación completa del marco" },
        { value: "83,5", label: "SUS final" },
        { value: "6/7", label: "CES final" },
      ],
      links: [],
      process: [
        {
          id: "discover",
          phase: "Descubrir",
          title:
            "Entender por qué información correcta seguía siendo difícil de usar",
          summary:
            "El proyecto partió de investigación previa sobre boletines agroclimáticos para ampliar la mirada desde la interfaz hacia el recorrido completo de la información.",
          narrative: [
            "El contexto objetivo fue Guatemala, donde investigaciones anteriores sobre boletines agroclimáticos ya habían evidenciado dificultades de comprensión, lenguaje técnico, acceso a la información y dependencia de mediadores para interpretar recomendaciones.",
            "Realizamos investigación de escritorio sobre esos estudios, boletines existentes, canales de distribución y condiciones de baja conectividad. La pregunta dejó de ser solamente cómo mostrar mejor la información y pasó a incluir cómo se redacta, organiza y transforma antes de llegar al productor.",
          ],
          activities: [
            "Revisar investigaciones previas relacionadas con Bulletin Builder y boletines agroclimáticos.",
            "Analizar boletines existentes y el recorrido de la información desde el técnico hasta el productor.",
            "Identificar barreras de lenguaje, contexto, acceso y comprensión.",
            "Consolidar evidencia y hallazgos en Miro para facilitar la síntesis.",
          ],
          decisions: [
            "Analizar conjuntamente la experiencia del técnico que produce la información y del productor que debe comprenderla.",
            "Tratar la comprensión como un problema del sistema completo y no únicamente del diseño visual del boletín final.",
          ],
          media: [
            {
              src: "/images/projects/campo-claro/persona-tecnico-quiche.webp",
              alt: "Ficha de persona de un técnico agropecuario de Quiché, Guatemala, con su contexto, objetivos, necesidades y uso de herramientas tecnológicas.",
              caption:
                "Perfil de técnico redactor sintetizado a partir de la investigación previa: sus necesidades combinan información localizada, claridad editorial y herramientas que reduzcan el trabajo manual.",
              width: 2048,
              height: 1536,
            },
            {
              src: "/images/projects/campo-claro/persona-agricultor-quiche.webp",
              alt: "Ficha de persona de un agricultor de Quiché, Guatemala, con información sobre su contexto agrícola, necesidades de información y acceso a tecnología.",
              caption:
                "Perfil de productor rural: necesita información breve, territorialmente relevante y accesible desde dispositivos y canales cotidianos.",
              width: 2048,
              height: 1536,
            },
            {
              src: "/images/projects/campo-claro/persona-agricultora-quiche.webp",
              alt: "Ficha de persona de una agricultora de Quiché, Guatemala, con sus objetivos, capacidades, necesidades agroclimáticas y condiciones de acceso tecnológico.",
              caption:
                "Perfil de productora rural utilizado para mantener presentes condiciones de acceso, lenguaje, contexto y toma de decisiones durante el diseño.",
              width: 2048,
              height: 1536,
            },
          ],
        },
        {
          id: "define",
          phase: "Definir",
          title: "Convertir patrones de investigación en criterios de diseño",
          summary:
            "La síntesis permitió pasar de una colección de fricciones a reglas concretas sobre qué significa producir una recomendación comprensible.",
          narrative: [
            "Agrupamos y clusterizamos los hallazgos mediante un diagrama de afinidad y los complementamos con personas, journey maps y preguntas How Might We. La tensión principal aparecía en dos extremos del mismo servicio: el técnico necesitaba simplificar sin perder rigor y el productor necesitaba entender qué hacer y por qué hacerlo.",
            "De esa convergencia surgió el Marco Campo Claro. Su principio fue relacionar el objetivo del boletín, el perfil del usuario y las restricciones del contexto para convertirlos en reglas de diseño que pudieran aplicarse de manera consistente.",
          ],
          activities: [
            "Clusterizar hallazgos y construir el diagrama de afinidad.",
            "Sintetizar perfiles mediante personas y journey maps.",
            "Transformar fricciones en oportunidades mediante How Might We.",
            "Definir los principios y criterios medibles del Marco Campo Claro.",
          ],
          decisions: [
            "Hacer que cada recomendación comunique una acción principal y explique por qué realizarla.",
            "Priorizar verbos de acción, lenguaje breve, definición de términos técnicos y orden por urgencia.",
            "Convertir los hallazgos de investigación en reglas que pudieran evaluarse posteriormente con usuarios.",
          ],
          media: [
            {
              src: "/images/projects/campo-claro/journey-tecnico.webp",
              alt: "Journey del técnico redactor desde la recepción del boletín técnico hasta su distribución, mostrando fricciones al interpretar pronósticos, redactar recomendaciones y depender de herramientas de diseño.",
              caption:
                "Journey del técnico: las fricciones aparecen antes de que el productor reciba el boletín, especialmente al interpretar, simplificar y preparar la información.",
              width: 1136,
              height: 574,
            },
            {
              src: "/images/projects/campo-claro/journey-productor.webp",
              alt: "Journey del productor rural desde la recepción del boletín por WhatsApp hasta la toma de decisiones agrícolas, mostrando una caída progresiva en la experiencia por lenguaje técnico y falta de contexto territorial.",
              caption:
                "Journey del productor: los problemas acumulados durante la producción terminan convirtiéndose en dificultades de comprensión y decisiones con incertidumbre.",
              width: 1114,
              height: 588,
            },
            {
              src: "/images/projects/campo-claro/marco-campo-claro-regla.webp",
              alt: "Diagrama del Marco Campo Claro que combina el objetivo del boletín, el perfil del usuario y las restricciones contextuales para producir una regla de diseño.",
              caption:
                "La síntesis convergió en una fórmula operativa: objetivo del boletín + perfil del usuario + restricción contextual = regla de diseño.",
              width: 1137,
              height: 614,
            },
          ],
        },
        {
          id: "ideate",
          phase: "Idear",
          title: "Pasar de una guía editorial a comportamiento de interfaz",
          summary:
            "El reto no era únicamente documentar el marco, sino conseguir que sus reglas aparecieran en el momento exacto en que el técnico redactaba.",
          narrative: [
            "Exploramos cómo transformar las reglas de Campo Claro en ayudas concretas: guías de redacción, contadores, alertas progresivas, detección de términos técnicos, vocabulario contextual y una revisión antes de publicar.",
            "También experimentamos con IA para simplificar recomendaciones. Los resultados mejoraban cuando los prompts incorporaban las reglas del marco, pero decidimos no convertirla en una dependencia del MVP por costo, sostenibilidad operativa y pérdida potencial de control editorial.",
          ],
          activities: [
            "Traducir reglas editoriales a componentes y comportamientos de interfaz.",
            "Explorar alternativas para recomendaciones, vocabulario y revisión previa a publicación.",
            "Probar conceptualmente el uso de IA apoyada en las reglas del framework.",
            "Priorizar mecanismos que pudieran validarse sin depender de servicios externos.",
          ],
          decisions: [
            "Integrar las reglas críticas dentro de la interfaz en vez de depender de que el técnico las memorice.",
            "Mantener la IA fuera del MVP y validar primero el valor del framework mediante interacción guiada.",
            "Diseñar el vocabulario como parte de la comprensión de la recomendación y no como contenido aislado.",
          ],
        },
        {
          id: "prototype",
          phase: "Prototipar",
          title:
            "Iterar desde una estructura navegable hasta un sistema funcional",
          summary:
            "La solución evolucionó desde un prototipo de media fidelidad en Figma hasta experiencias funcionales construidas con Figma Make.",
          narrative: [
            "La primera iteración utilizó un prototipo de media fidelidad para comprobar navegación, etiquetas, ubicación de funciones y organización visual antes de invertir en mayor detalle.",
            "Las siguientes iteraciones utilizaron prototipos funcionales. La solución conectó dos módulos: un generador que guía al técnico durante la creación del boletín y un visor mobile-first para que productores consulten recomendaciones y vocabulario desde dispositivos de uso cotidiano.",
          ],
          activities: [
            "Construir el prototipo de media fidelidad de la primera iteración en Figma.",
            "Diseñar el generador guiado y el visor móvil como partes de un mismo servicio.",
            "Construir las siguientes versiones funcionales con Figma Make.",
            "Actualizar prototipos entre iteraciones a partir de la evidencia obtenida.",
          ],
          decisions: [
            "Usar la primera iteración para validar estructura antes de aumentar fidelidad.",
            "Priorizar una experiencia mobile-first para el productor por la relevancia del celular y WhatsApp en el contexto de uso.",
            "Mantener conectados el proceso de redacción del técnico y el resultado que finalmente recibe el productor.",
          ],
        },
        {
          id: "test",
          phase: "Validar",
          title: "Separar facilidad de uso de comprensión real",
          summary:
            "Tres iteraciones con 25 participantes distintos mostraron que completar un flujo no garantiza que el contenido producido sea comprensible.",
          narrative: [
            "Por limitaciones de acceso, las evaluaciones se realizaron en Colombia con participantes reclutados por perfil, aunque el problema de diseño y el contexto de referencia estaban centrados en Guatemala. Por eso interpretamos los resultados como evidencia sobre interacción y comprensión en la muestra evaluada, no como validación de adopción en campo guatemalteco.",
            "La primera iteración se realizó con cinco perfiles generales. La segunda incluyó cinco técnicos y cinco productores; allí la comprensión alcanzó 12/15 respuestas correctas y la aplicación completa del marco ocurrió en 3/5 técnicos. La tercera utilizó cinco técnicos y cinco productores diferentes: la aplicación completa llegó a 5/5 y la comprensión a 15/15.",
            "La tercera iteración obtuvo además un SUS promedio de 83,5 y un CES de 6/7 con técnicos. Sin embargo, solo 1/5 productores encontró espontáneamente el vocabulario contextual, por lo que su descubribilidad permaneció como el principal riesgo UX.",
          ],
          activities: [
            "Co-planear y coanalizar las tres iteraciones de evaluación.",
            "Comparar resultados y fricciones entre una versión y la siguiente.",
            "Medir comprensión, aplicación del framework, SUS y CES.",
            "Traducir hallazgos en cambios de contenido, interacción y jerarquía.",
          ],
          decisions: [
            "Distinguir usabilidad operativa —poder completar el flujo— de usabilidad cognitiva —comprender correctamente el contenido—.",
            "Acercar las guías y alertas al momento exacto de redacción de la recomendación.",
            "Convertir las palabras técnicas en señales interactivas más reconocibles después de detectar la baja descubribilidad del vocabulario.",
          ],
          media: [
            {
              src: "/images/projects/campo-claro/resultados-validacion.webp",
              alt: "Comparación de resultados entre la segunda y tercera iteración de Campo Claro: comprensión de productores de 80 a 100 por ciento, vocabulario espontáneo de 0 a 20 por ciento, aplicación del framework por técnicos de 60 a 100 por ciento y aptitud para prueba de 40 a 100 por ciento.",
              caption:
                "La tercera iteración mejoró comprensión, aplicación del framework y aptitud de los insumos; la descubribilidad del vocabulario siguió siendo el principal riesgo UX.",
              width: 1126,
              height: 583,
            },
          ],
        },
        {
          id: "deliver",
          phase: "Entregar",
          title:
            "Dejar un marco aplicable, medible y preparado para validación en campo",
          summary:
            "La entrega final no fue solamente un prototipo: fue una lógica reutilizable para conectar investigación, redacción técnica e interfaz.",
          narrative: [
            "Campo Claro quedó documentado como un framework que transforma hallazgos de investigación en reglas editoriales y luego en comportamientos del producto. El generador, el visor móvil y el marco funcionan como partes del mismo sistema.",
            "Los resultados muestran una mejora clara dentro de la muestra evaluada, pero no sustituyen una prueba en el contexto objetivo. El siguiente paso debe validar el sistema con técnicos y productores en Guatemala, observar uso sostenido y comprobar si las mejoras de comprensión se mantienen en decisiones agrícolas reales.",
          ],
          activities: [
            "Consolidar el Marco Campo Claro y sus reglas principales.",
            "Definir prioridades del MVP a partir de las tres iteraciones.",
            "Documentar resultados, limitaciones y riesgos todavía abiertos.",
            "Proponer siguientes pasos para una validación contextual e implementación institucional.",
          ],
          decisions: [
            "Priorizar para el MVP recomendaciones guiadas, checklist de publicación, vocabulario contextual y una experiencia móvil liviana.",
            "No presentar los resultados obtenidos en Colombia como evidencia definitiva de adopción en Guatemala.",
            "Mantener la validación en campo como condición previa a escalar la solución.",
          ],
        },
      ],
      reflection:
        "Aprendí a separar completar una tarea de comprenderla. Cuando la información es crítica, la usabilidad también debe medirse por cuánto ayuda a interpretar y actuar correctamente.",
      editorChecklist: [],
    },
    {
      slug: "bulletin-builder",
      index: "01",
      title: "Bulletin Builder",
      eyebrow: "Producto institucional · UX Research + UX/UI + Frontend",
      year: "2025 — hoy",
      accent: "clay",
      cover: "/images/projects/bulletin-builder/cover.webp",
      coverAlt:
        "Flujo de creación de un boletín agroclimático en Bulletin Builder, mostrando el paso de mapa de lluvias y la vista previa del boletín.",
      featured: true,
      summary:
        "Plataforma web para que equipos técnicos creen boletines agroclimáticos de forma autónoma, preservando reglas de contenido y diseño derivadas de investigación con productores.",
      shortOutcome:
        "De un piloto en Guatemala a un sistema para dos países: frontend completo, tres plantillas y un flujo iterado con evidencia de usabilidad.",
      challenge:
        "Después de mejorar los boletines con investigación y pruebas con productores, apareció un segundo problema: producirlos en Word, Canva o Figma hacía difícil sostener las decisiones de diseño y requería demasiado trabajo especializado.",
      response:
        "Copropuse Bulletin Builder, trabajé en su UX/UI y desarrollé el frontend completo. En Guatemala planeé, realicé y analicé las pruebas de usabilidad; también implementé mejoras derivadas de evaluaciones realizadas por el equipo de Vietnam.",
      role: "UX Research en Guatemala · Copropuesta · UX/UI · Frontend principal",
      team: "Equipo multidisciplinario e internacional con instituciones de Guatemala y Vietnam",
      context:
        "Mesas Técnicas Agroclimáticas · Producción de boletines · Uso institucional",
      methods: [
        "Entrevistas",
        "Sistematización y personas",
        "Prototipado",
        "Think-aloud",
        "Pruebas de usabilidad",
        "Iteración con stakeholders",
      ],
      stack: ["Next.js", "React", "TypeScript"],
      metrics: [
        { value: "3", label: "plantillas" },
        { value: "2", label: "países" },
        { value: "4", label: "participantes · Guatemala" },
        { value: "7", label: "participantes · Vietnam" },
      ],
      links: [
        {
          label: "Ver plataforma",
          href: "https://bulletin.aclimate.org/en",
          kind: "live",
        },
        {
          label: "Ver repositorio",
          href: "https://github.com/CIAT-DAPA/acb_frontend",
          kind: "code",
        },
      ],
      process: [
        {
          id: "discover",
          phase: "Descubrir",
          title: "Entender el boletín antes de diseñar el generador",
          summary:
            "El punto de partida no fue una plataforma: fue entender por qué la información agroclimática no estaba llegando de forma clara y útil a los productores.",
          narrative: [
            "En Guatemala, las Mesas Técnicas Agroclimáticas reúnen a equipos técnicos que producen boletines para apoyar decisiones de siembra, cosecha y manejo de cultivos. El problema era que muchos boletines eran extensos y técnicos, y su contenido no siempre se traducía en acciones comprensibles.",
            "La investigación de usuario incluyó cinco talleres con 106 participantes y 27 entrevistas. Participé en los talleres, realicé gran parte de las entrevistas, analicé el material y trabajé junto al equipo en la sistematización y construcción de personas.",
          ],
          activities: [
            "Participar en talleres con productores y personal técnico.",
            "Realizar y analizar entrevistas para entender necesidades, capacidades y contexto.",
            "Sistematizar hallazgos y construir personas junto al equipo.",
            "Contrastar información requerida, comprensión y canales de difusión.",
          ],
          decisions: [
            "Tratar comprensión, contexto y canales de difusión como parte del problema de diseño, no solo el contenido técnico.",
            "Mantener los hallazgos y las personas como referencia para las siguientes iteraciones del boletín.",
          ],
          media: [
            {
              src: "/images/projects/bulletin-builder/research-workshops-guatemala.webp",
              alt: "Collage de talleres de investigación en Guatemala con agricultores, agricultoras y personal técnico participando en sesiones grupales y actividades de co-diseño.",
              caption:
                "Talleres de investigación con agricultores, agricultoras y personal técnico en Chiquimulilla, Patzicía, Patzún y Tecpán, Guatemala.",
              width: 900,
              height: 560,
            },
          ],
        },
        {
          id: "define",
          phase: "Definir",
          title: "Detectar un segundo problema: cómo sostener lo aprendido",
          summary:
            "Cuando el boletín empezó a funcionar mejor para los productores, el reto pasó a ser cómo producirlo de forma autónoma sin perder sus reglas de diseño.",
          narrative: [
            "Word y Canva daban demasiada libertad para modificar estructura, cantidad de texto y jerarquías. Figma permitía controlar mejor el diseño, pero imponía una curva de aprendizaje alta a perfiles que no trabajan con herramientas de diseño.",
            "La oportunidad fue reformular el problema: no bastaba con diseñar un buen boletín; había que diseñar un sistema de producción que ayudara a los equipos técnicos a respetar las decisiones surgidas de la investigación.",
          ],
          activities: [
            "Mapear el proceso existente de producción del boletín.",
            "Distinguir qué contenido debía ser editable y qué reglas debían permanecer protegidas.",
            "Traducir hallazgos de investigación en restricciones y requerimientos del producto.",
          ],
          decisions: [
            "Separar el contenido que el equipo técnico necesita completar de las reglas visuales que mantienen la claridad del boletín.",
            "Reducir libertad donde podía romper decisiones validadas y conservarla donde el contexto local sí la requería.",
          ],
        },
        {
          id: "ideate",
          phase: "Idear",
          title: "Convertir reglas de diseño en un flujo guiado",
          summary:
            "Junto a un compañero propuse una aplicación web que reemplazara la maquetación libre por un proceso paso a paso con restricciones explícitas.",
          narrative: [
            "El concepto fue que el personal técnico completara campos y contenidos dentro de una estructura predefinida mientras el sistema preservaba jerarquía, longitud y composición del boletín.",
            "Se creó un piloto web y su evaluación en Guatemala mostró que el flujo se entendía y se percibía como una forma más fácil y ágil de producir el boletín. Esa evidencia permitió formalizar Bulletin Builder como producto.",
          ],
          activities: [
            "Copropuesta del concepto de Bulletin Builder.",
            "Definir pasos, campos y restricciones del primer flujo.",
            "Explorar cómo mostrar el progreso del boletín mientras se completa.",
            "Preparar el concepto para una evaluación rápida antes de invertir en el sistema completo.",
          ],
          decisions: [
            "Usar un recorrido guiado en lugar de una superficie de maquetación libre.",
            "Hacer que las restricciones de diseño funcionaran como ayuda para el usuario, no como reglas que tuviera que memorizar.",
          ],
          media: [
            {
              src: "/images/projects/bulletin-builder/prototype-hazards-vietnam.webp",
              alt: "Prototipo de Bulletin Builder para Vietnam en el paso de amenazas, con un flujo guiado de ocho etapas, campos para registrar riesgos y una vista previa del boletín agroclimático.",
              caption:
                "Prototipo del flujo para Vietnam: el contenido se completa paso a paso mientras una vista previa permite comprobar cómo se traduce la información al boletín.",
              width: 1440,
              height: 1138,
            },
          ],
        },
        {
          id: "prototype",
          phase: "Prototipar",
          title: "Formalizar un producto adaptable a dos contextos",
          summary:
            "El interés de Vietnam convirtió el piloto en un sistema que debía mantener un núcleo común sin imponer el mismo boletín a todos los países.",
          narrative: [
            "Con equipos e instituciones de Guatemala y Vietnam se fueron definiendo requerimientos, secciones y contenidos específicos. El reto de diseño pasó de resolver una plantilla a construir un patrón capaz de admitir flujos distintos.",
            "El prototipo funcional en Figma permitió recorrer las tareas de principio a fin y discutir requerimientos antes de consolidarlos en la plataforma.",
          ],
          activities: [
            "Participar en reuniones de definición con equipos técnicos e instituciones.",
            "Traducir requerimientos a flujos, pantallas y componentes de interfaz.",
            "Diseñar y ajustar un prototipo funcional en Figma.",
            "Definir patrones reutilizables con variantes según el contexto de cada país.",
          ],
          decisions: [
            "Compartir patrones y componentes entre países sin forzar que sus boletines tuvieran el mismo contenido o secuencia.",
            "Permitir pasos específicos por plantilla dentro de una estructura de interacción consistente.",
          ],
        },
        {
          id: "test",
          phase: "Validar",
          title: "Validar por contexto y convertir hallazgos en cambios",
          summary:
            "En Guatemala planeé, moderé y analicé la evaluación; en Vietnam el equipo local realizó sus pruebas y yo trabajé sobre los hallazgos para implementar mejoras.",
          narrative: [
            "En Guatemala, cuatro participantes de entidades pública y privada recorrieron el flujo mediante think-aloud y una comparación A/B. La creación se percibió clara en tareas como cargar el mapa, añadir recomendaciones y exportar, mientras algunos campos ligados al calendario lunar mostraron oportunidades de clarificación y automatización.",
            "En Vietnam, siete participantes de instituciones agrícolas evaluaron el flujo completo. Sus hallazgos señalaron una curva de aprendizaje inicial y oportunidades para reducir entrada manual, estructurar mejor los campos y acercar la secuencia a la forma real en que trabajan con cultivos. Mi participación fue recibir esos resultados y traducirlos en ajustes de producto.",
          ],
          activities: [
            "Planear, moderar y analizar las pruebas de usabilidad de Guatemala.",
            "Aplicar think-aloud y comparación A/B sobre el flujo operativo.",
            "Revisar los hallazgos generados por el equipo de Vietnam.",
            "Priorizar e implementar cambios según impacto en la tarea y recurrencia.",
          ],
          decisions: [
            "No asumir que un modelo mental observado en Guatemala se transfería automáticamente a Vietnam.",
            "Priorizar entradas estructuradas y automatización cuando reducían trabajo repetitivo, errores y carga cognitiva.",
          ],
          media: [
            {
              src: "/images/projects/bulletin-builder/cover.webp",
              alt: "Flujo de creación de un boletín agroclimático en Bulletin Builder, mostrando el paso de mapa de lluvias y la vista previa del boletín.",
              caption:
                "Interfaz de Bulletin Builder utilizada para recorrer y evaluar el flujo de creación de boletines agroclimáticos.",
              width: 1576,
              height: 998,
            },
          ],
        },
        {
          id: "deliver",
          phase: "Implementar y evolucionar",
          title: "Llevar la intención del diseño hasta el producto real",
          summary:
            "Bulletin Builder evolucionó a un frontend completo con tres plantillas y soporte para flujos de Guatemala y Vietnam.",
          narrative: [
            "Desarrollé el frontend con Next.js, React y TypeScript, transformando las restricciones del boletín en componentes, validaciones y flujos reutilizables. El objetivo no era copiar un diseño de Figma, sino hacer que el sistema ayudara a mantenerlo en uso real.",
            "El producto integra creación guiada, previsualización y exportación, y está preparado para evolucionar por plantilla y contexto a medida que aparecen nuevos hallazgos. Las iteraciones de Guatemala y Vietnam siguen alimentando ese proceso.",
          ],
          activities: [
            "Desarrollar el frontend completo con componentes reutilizables y tipados.",
            "Integrar el flujo de interfaz con los servicios y reglas del sistema.",
            "Implementar hallazgos provenientes de las evaluaciones de usabilidad.",
            "Mantener variantes por plantilla sin duplicar innecesariamente la experiencia base.",
          ],
          decisions: [
            "Convertir las restricciones derivadas de UX en comportamiento del sistema en lugar de depender de capacitación o memoria.",
            "Mantener una base reutilizable para que nuevas plantillas puedan incorporarse sin reconstruir el producto desde cero.",
          ],
        },
      ],
      reflection:
        "Aprendí que una solución no termina cuando el usuario entiende el diseño: también hay que facilitar que quienes la producen puedan sostener esa claridad. Conectar investigación, UX y frontend fue clave para lograrlo.",
      editorChecklist: [
        "Añadir evidencia visual de la investigación inicial en Guatemala.",
        "Mostrar al menos una decisión del boletín que luego se convirtió en una restricción del generador.",
        "Incluir un antes/después de un hallazgo de usabilidad de Guatemala.",
        "Mostrar una mejora implementada a partir de los hallazgos del equipo de Vietnam.",
      ],
    },
    {
      slug: "waterpoints-monitoring",
      index: "03",
      title: "Waterpoints Monitoring",
      eyebrow: "Sistema multicanal · UX Research + UX/UI + Frontend",
      year: "2023 — 2024",
      accent: "mint",
      cover: "/images/projects/waterpoints-monitoring/cover.webp",
      coverAlt:
        "Mapa de Etiopía en la plataforma Waterpoints and Pasture Monitoring, con puntos de agua codificados por estado y el detalle de un punto seleccionado.",
      summary:
        "Sistema para monitorear puntos de agua en Etiopía y hacer llegar información útil a dos audiencias con capacidades muy distintas: tomadores de decisiones y comunidades pastoriles.",
      shortOutcome:
        "De dos talleres HCD surgieron una plataforma web y un sistema de alertas; la evaluación final con ocho usuarios dejó un backlog de mejoras y evidenció límites institucionales para completar la solución SMS.",
      challenge:
        "Durante las sequías, la disponibilidad de agua condiciona la movilidad, el ganado y la subsistencia de comunidades pastoriles. Sin embargo, quienes toman decisiones no contaban con una fuente centralizada para monitorear los puntos de agua, mientras muchos pastoralistas tenían baja conectividad y poco acceso a smartphones.",
      response:
        "Planeé el proceso de investigación, construí personas, journeys y propuestas de solución, diseñé la experiencia y desarrollé el frontend. La respuesta combinó un sistema web para actores institucionales con alertas de baja tecnología pensadas para comunidades pastoriles.",
      role: "Planeación HCD · Facilitación y síntesis · Personas y journeys · UX/UI · Frontend · Planeación y análisis de usabilidad",
      team: "Equipo multidisciplinario e internacional con investigadores y aliados locales en Etiopía",
      context:
        "Etiopía · Comunidades pastoriles y tomadores de decisiones · Sequía y baja conectividad",
      methods: [
        "Talleres HCD",
        "Personas",
        "Journey maps",
        "Brainstorming y storyboards",
        "Prototipado",
        "Think-aloud, SUS y heatmaps",
      ],
      stack: ["Frontend web", "Diseño responsive", "Mapas y datos geográficos"],
      metrics: [
        { value: "2", label: "talleres HCD" },
        { value: "5", label: "personas" },
        { value: "2", label: "grupos de usuarios" },
        { value: "8", label: "participantes · prueba final" },
        { value: "14", label: "tareas · protocolo" },
        { value: "2", label: "canales de alerta diseñados" },
      ],
      links: [
        {
          label: "Ver plataforma",
          href: "https://et.waterpointsmonitoring.net",
          kind: "live",
        },
      ],
      process: [
        {
          id: "discover",
          phase: "Descubrir",
          title:
            "Entender cómo se decide sobre el agua antes de diseñar el mapa",
          summary:
            "El punto de partida fue comprender cómo viven la escasez de agua quienes dependen directamente de ella y quienes deben responder institucionalmente a una crisis.",
          narrative: [
            "En Etiopía, muchas comunidades pastoriles dependen del ganado y de puntos de agua superficiales que pueden reducirse o secarse durante periodos de sequía. La información sobre su estado afecta decisiones de movilidad, abastecimiento y respuesta institucional.",
            "Planeé dos talleres presenciales: uno con tomadores de decisiones de gobierno, investigación y organizaciones, y otro con comunidades pastoriles. En las sesiones con pastoralistas trabajé como facilitador y asesor junto a personal local que podía comunicarse en sus lenguas; con los perfiles institucionales participé directamente en inglés. También tomé notas y participé en la síntesis posterior.",
          ],
          activities: [
            "Planear la metodología y las actividades de los dos talleres HCD.",
            "Facilitar y supervisar actividades con perfiles institucionales y pastoriles.",
            "Registrar necesidades, decisiones, canales y restricciones de acceso.",
            "Sintetizar la evidencia obtenida junto al equipo después de los talleres.",
          ],
          decisions: [
            "No asumir que todos los actores podían recibir información mediante una interfaz web.",
            "Analizar las decisiones de comunidades locales y actores institucionales como partes conectadas del mismo sistema.",
          ],
          media: [
            {
              src: "/images/projects/waterpoints-monitoring/pastoralist-context-storyboard.webp",
              alt: "Storyboard de seis escenas sobre la vida de una comunidad pastoral en un entorno semiárido, mostrando ganado, desplazamientos y distintos estados de disponibilidad de agua.",
              caption:
                "Storyboard de contexto utilizado para acercar a los equipos de decisión a la realidad cotidiana de las comunidades pastoriles y al papel que juega el agua en su movilidad y subsistencia.",
              width: 805,
              height: 796,
            },
          ],
        },
        {
          id: "define",
          phase: "Definir",
          title: "Una misma señal necesitaba dos formas distintas de llegar",
          summary:
            "Las personas y journeys mostraron que centralizar los datos resolvía solo una parte del problema: el canal debía adaptarse al contexto de cada audiencia.",
          narrative: [
            "Construí directamente las personas, journeys y materiales de análisis a partir de los talleres. Los perfiles pastoriles necesitaban principalmente disponibilidad de agua y pastura, pero dependían de canales como voz, SMS, radio y comunicación comunitaria. Los perfiles institucionales requerían nivel, calidad, ubicación e históricos de los puntos de agua mediante herramientas como dashboard y email.",
            "La definición separó entonces dos experiencias complementarias: una interfaz rica en información para quienes monitorean y coordinan respuestas, y un mecanismo mucho más sencillo para hacer llegar cambios relevantes a personas con menor conectividad.",
          ],
          activities: [
            "Construir cinco personas a partir de los perfiles identificados.",
            "Desarrollar journeys para escenarios locales e institucionales.",
            "Mapear necesidades, información esperada y canales de comunicación.",
            "Convertir los hallazgos en problem statements y oportunidades de diseño.",
          ],
          decisions: [
            "Diseñar por capacidad y contexto en lugar de forzar una misma interfaz para todos.",
            "Usar dashboard y email para actores institucionales y explorar SMS como canal para pastoralistas.",
            "Mantener el estado del waterpoint como una señal compartida entre ambos recorridos.",
          ],
          media: [
            {
              src: "/images/projects/waterpoints-monitoring/persona-pastoralist.webp",
              alt: "Ficha de persona de una pastora en Etiopía con objetivos, desafíos, necesidades de información sobre agua y pastura, y preferencia por canales como llamadas, SMS y radio.",
              caption:
                "Perfil pastoral: la información necesaria era concreta y local, pero el acceso tecnológico hacía inviable depender de una aplicación para smartphone.",
              width: 1054,
              height: 782,
            },
            {
              src: "/images/projects/waterpoints-monitoring/persona-expert-gov.webp",
              alt: "Ficha de persona de un experto gubernamental en Etiopía con necesidades de información sobre nivel, calidad, ubicación y uso de los puntos de agua.",
              caption:
                "Perfil de gobierno técnico: necesitaba consultar información centralizada y detallada mediante dashboard y canales institucionales.",
              width: 1052,
              height: 787,
            },
            {
              src: "/images/projects/waterpoints-monitoring/persona-ngo.webp",
              alt: "Ficha de persona de una profesional de una ONG con necesidades de información sobre puntos de agua, acceso a datos y comunicación con comunidades pastoriles.",
              caption:
                "Perfil ONG: además de consultar datos, necesitaba compartir información y considerar las barreras de inclusión digital de las comunidades.",
              width: 1050,
              height: 787,
            },
            {
              src: "/images/projects/waterpoints-monitoring/user-type-considerations.webp",
              alt: "Diagrama que compara necesidades por tipo de usuario, incluyendo gobierno de alto nivel, expertos gubernamentales, ONG, sector privado y profesionales de ONG.",
              caption:
                "La síntesis hizo visibles diferencias entre perfiles: algunos necesitaban análisis y acceso a datos; otros priorizaban comunicación, simplicidad y canales capaces de llegar a comunidades remotas.",
              width: 1415,
              height: 633,
            },
          ],
        },
        {
          id: "ideate",
          phase: "Idear",
          title: "Diseñar un sistema multicanal, no una sola pantalla",
          summary:
            "Las soluciones conectaron monitoreo, detalle y alertas para que una actualización del waterpoint pudiera convertirse en acciones distintas según quién la recibiera.",
          narrative: [
            "Desarrollé los brainstormings, storyboards y primeras propuestas, y luego las compartí con el equipo para converger en las soluciones. Para los tomadores de decisiones surgió una plataforma con mapa, perfiles de puntos de agua, históricos, pronósticos y suscripciones.",
            "Para las comunidades pastoriles, la propuesta evitaba depender de un smartphone: una persona podría suscribirse a puntos cercanos y recibir un SMS cuando cambiara su estado. El mismo principio se trasladó a alertas por email para usuarios institucionales.",
          ],
          activities: [
            "Desarrollar brainstormings y storyboards para escenarios locales e institucionales.",
            "Explorar mapa, perfiles, históricos, pronósticos y suscripciones.",
            "Diseñar el concepto de alertas por cambio de estado del waterpoint.",
            "Compartir alternativas con el equipo y converger en el alcance del sistema.",
          ],
          decisions: [
            "Mantener una fuente común de información pero variar el canal de entrega.",
            "No convertir al dashboard en requisito para que una comunidad pastoral pudiera beneficiarse del sistema.",
            "Utilizar la suscripción a waterpoints como vínculo entre monitoreo y comunicación proactiva.",
          ],
          media: [
            {
              src: "/images/projects/waterpoints-monitoring/needs-channels-brainstorming.webp",
              alt: "Tablero de brainstorming que organiza necesidades de información sobre puntos de agua, canales de comunicación, fuentes, recomendaciones y lenguajes para comunidades pastoriles.",
              caption:
                "El brainstorming conectó información, fuentes, canales y posibles recomendaciones antes de convertirlas en funcionalidades concretas.",
              width: 1328,
              height: 742,
            },
            {
              src: "/images/projects/waterpoints-monitoring/impact-effort-matrix.webp",
              alt: "Matriz de impacto versus esfuerzo con propuestas de solución para monitoreo de puntos de agua, incluyendo dashboards, alertas por SMS, email, radio, IVR y otros canales.",
              caption:
                "Priorizamos las propuestas comparando impacto esperado y esfuerzo de implementación; esto ayudó a converger en dashboard, suscripciones y alertas como componentes centrales.",
              width: 1425,
              height: 777,
            },
          ],
        },
        {
          id: "prototype",
          phase: "Prototipar y construir",
          title:
            "Convertir necesidades de información en un producto operativo",
          summary:
            "Después de una validación inicial del concepto, diseñé la experiencia completa y desarrollé el frontend del sistema implementado.",
          narrative: [
            "El primer prototipo permitió revisar rápidamente la organización de la solución antes de avanzar al desarrollo. A partir de esa base diseñé la UX/UI de la plataforma y desarrollé su frontend; otro miembro del equipo fue responsable del backend.",
            "El producto terminó reuniendo monitoreo geográfico, estados de waterpoints, perfiles detallados, datos históricos, pronósticos, información de forraje, suscripciones y alertas. La implementación permitió trabajar con datos y comportamientos reales en lugar de limitar la evaluación a pantallas de Figma.",
          ],
          activities: [
            "Construir y revisar el primer prototipo de la experiencia.",
            "Diseñar la UX/UI de las vistas de monitoreo y detalle.",
            "Desarrollar el frontend e integrarlo con los servicios del backend.",
            "Resolver estados reales de carga, búsqueda, datos y suscripción.",
          ],
          decisions: [
            "Mantener el mapa como punto de entrada sin convertirlo en la única forma de encontrar información.",
            "Conectar mapa, perfil, datos y suscripción alrededor del mismo waterpoint.",
            "Validar posteriormente el producto implementado para observar fricciones que un prototipo podía ocultar.",
          ],
        },
        {
          id: "test",
          phase: "Validar",
          title:
            "Evaluar el producto implementado y encontrar dónde no coincidía con el usuario",
          summary:
            "Diseñé el protocolo de la prueba final y analicé sus resultados; las sesiones fueron moderadas por mi supervisor con usuarios institucionales.",
          narrative: [
            "La evaluación comenzó con ocho participantes de perfiles High-Level Government, Expert Government y NGO. El protocolo incluyó 14 tareas, think-aloud, SUS, heatmaps y una entrevista posterior. Algunas tareas contaron finalmente con siete observaciones por una omisión durante una sesión y por el retiro posterior de un participante.",
            "La prueba mostró una experiencia desigual. El perfil del waterpoint, los pronósticos y la biomasa se percibieron como información especialmente útil, pero aparecieron fricciones importantes en el filtro de históricos, las suscripciones y la generación de rutas. Ningún participante que llegó a la tarea de rutas pudo completarla de forma independiente.",
            "Los SUS promedio fueron 70 para High-Level Government, 60,8 para Expert Government y 67,5 para NGO. Más que reducirlos a una única cifra, utilizamos las tareas, verbalizaciones y heatmaps para localizar problemas concretos y redactar un backlog de mejoras.",
          ],
          activities: [
            "Diseñar el protocolo, tareas, métricas y estructura de la evaluación.",
            "Analizar grabaciones, resultados de tareas, SUS, heatmaps y entrevistas.",
            "Identificar patrones de comportamiento y diferencias con el modelo mental del sistema.",
            "Redactar y priorizar recomendaciones de UX.",
          ],
          decisions: [
            "Hacer que acciones esperadas —como clicar el nombre de un punto— respondieran al modelo mental observado.",
            "Simplificar el filtrado histórico y hacer más visible el estado de las suscripciones.",
            "Rediseñar el flujo de rutas siguiendo patrones conocidos de origen y destino.",
            "Priorizar claridad y feedback antes de añadir nuevas funciones.",
          ],
          media: [
            {
              src: "/images/projects/waterpoints-monitoring/usability-task-results.webp",
              alt: "Tabla de resultados de catorce tareas de usabilidad del sistema Waterpoints Monitoring, mostrando tiempo estimado y real, éxito, errores no críticos, errores críticos y cantidad de participantes.",
              caption:
                "Resultados de las 14 tareas del protocolo: la evaluación permitió identificar diferencias fuertes entre tareas que funcionaban con claridad y flujos con errores críticos, especialmente rutas y gestión de suscripciones.",
              width: 681,
              height: 317,
            },
          ],
        },
        {
          id: "deliver",
          phase: "Entregar",
          title:
            "Separar lo implementado de lo que el contexto no permitió completar",
          summary:
            "La plataforma y las alertas por email llegaron a implementarse; la capa SMS y la siguiente iteración UX quedaron pendientes por restricciones institucionales y de recursos.",
          narrative: [
            "El sistema web quedó implementado y permitió consultar y suscribirse a información sobre puntos de agua. Las notificaciones por email también llegaron a formar parte de la solución para usuarios institucionales.",
            "La propuesta SMS respondía directamente a las condiciones de conectividad identificadas con pastoralistas, pero su despliegue requería autorización gubernamental. Ese permiso no llegó a concretarse y, al mismo tiempo, el proyecto perdió los recursos necesarios para continuar.",
            "El análisis final produjo recomendaciones específicas sobre búsqueda, navegación, rutas, históricos, perfiles y suscripciones, pero no hubo un nuevo ciclo de desarrollo para implementarlas y volver a medir. Por eso el caso termina con un backlog validado, no con una falsa historia de optimización completa.",
          ],
          activities: [
            "Entregar la experiencia web y el frontend del producto.",
            "Consolidar recomendaciones derivadas de la prueba final.",
            "Documentar el concepto de alertas de baja conectividad.",
            "Compartir limitaciones y oportunidades pendientes con el equipo.",
          ],
          decisions: [
            "Mantener claramente diferenciadas las funcionalidades implementadas de las propuestas que quedaron pendientes.",
            "Tratar permisos, infraestructura y relaciones institucionales como restricciones reales del diseño.",
            "Dejar las recomendaciones de usabilidad documentadas aunque no existiera presupuesto para una siguiente iteración.",
          ],
        },
      ],
      reflection:
        "Aprendí que diseñar para baja conectividad a veces significa elegir otro canal, no simplificar una interfaz. También que permisos, recursos e instituciones pueden definir hasta dónde llega una solución.",
      editorChecklist: [],
    },
    {
      slug: "aclimate-redesign",
      index: "04",
      title: "AClimate · Rediseño",
      eyebrow: "Ecosistema multipaís · UX Research + UX/UI + Frontend",
      year: "2024 — hoy",
      accent: "sand",
      cover: "/images/projects/aclimate-redesign/cover.webp",
      coverAlt:
        "Interfaz de AClimate con datos climáticos, filtros temporales y visualizaciones para apoyar decisiones agroclimáticas.",
      summary:
        "Rediseño y evolución de un ecosistema de servicios climáticos para transformar información técnica y diversa por país en experiencias más claras, contextualizadas y orientadas a decisiones.",
      shortOutcome:
        "Una experiencia base más simple y flexible que sigue evolucionando mediante investigación e implementaciones específicas por territorio.",
      challenge:
        "Después de años de crecimiento, AClimate reunía grandes volúmenes de información técnica, visualizaciones y módulos distintos por país. El reto era reducir la carga de interpretación sin eliminar la profundidad científica ni imponer la misma experiencia a todos los contextos.",
      response:
        "Participé en la investigación con usuarios finales, lideré principalmente el rediseño UX/UI y colaboré en la implementación frontend. Las siguientes iteraciones permitieron adaptar la experiencia a contextos como Colombia y Amazonía sin perder una base común.",
      role: "Investigación con usuarios finales · Liderazgo UX/UI · Frontend colaborativo · Validación e iteración",
      team: "Equipo multidisciplinario de producto, desarrollo, clima y aliados regionales",
      context:
        "Ecosistema multipaís · Información climática y agroclimática · Técnicos, extensionistas y productores",
      methods: [
        "Entrevistas con productores",
        "Síntesis de investigación",
        "Requerimientos funcionales",
        "Prototipado",
        "Pruebas de usabilidad",
        "Iteración por territorio",
      ],
      stack: ["Frontend web", "Diseño responsive", "Mapas y gráficas"],
      metrics: [
        { value: "10", label: "países · LATAM y África" },
        { value: "6", label: "etapas del flujo informativo" },
        { value: "2", label: "contextos de investigación directa" },
        { value: "2024 → hoy", label: "evolución continua" },
      ],
      links: [
        {
          label: "Ver AClimate",
          href: "https://www.aclimate.org/",
          kind: "live",
        },
        {
          label: "Ver Amazonía",
          href: "https://amazonia.aclimate.org/",
          kind: "live",
        },
      ],
      process: [
        {
          id: "discover",
          phase: "Descubrir",
          title:
            "Entender qué información ayuda realmente a tomar una decisión",
          summary:
            "El rediseño comenzó preguntando menos qué datos podía mostrar AClimate y más qué necesitaban comprender las personas para actuar.",
          narrative: [
            "AClimate llevaba años acumulando históricos, pronósticos, modelos, mapas y funcionalidades específicas por país. Esa profundidad era valiosa, pero también podía producir una experiencia densa y difícil de interpretar para usuarios que no trabajan diariamente con información climática.",
            "En Colombia participé en la planeación de preguntas enfocadas en usuarios finales y moderé entrevistas y sesiones con productores de distintos sistemas productivos. Las conversaciones más técnicas con gremios fueron lideradas principalmente por otros compañeros. También participé en el análisis y la síntesis de parte de los hallazgos.",
            "La investigación exploró no solo qué información necesitaban, sino cómo la comprendían mejor: texto, mapas, gráficas, categorías, colores y distintos niveles de detalle.",
          ],
          activities: [
            "Planear parte del protocolo de investigación enfocado en productores.",
            "Moderar entrevistas y conversaciones con usuarios finales.",
            "Explorar necesidades de información y formas de representación comprensibles.",
            "Analizar y sintetizar hallazgos junto al equipo.",
          ],
          decisions: [
            "Organizar la experiencia alrededor de decisiones y necesidades de información, no de la estructura técnica de los datos.",
            "No asumir que una gráfica o un mapa eran automáticamente más comprensibles que una explicación textual.",
            "Separar necesidades compartidas de requerimientos específicos de cada territorio.",
          ],
          media: [
            {
              src: "/images/projects/aclimate-redesign/legacy-aclimate-map.webp",
              alt: "Versión anterior de AClimate Colombia mostrando un mapa de áreas con pronósticos agroclimáticos y una navegación superior con múltiples módulos técnicos.",
              caption:
                "Punto de partida del rediseño: AClimate ya concentraba información valiosa, pero su crecimiento había producido una experiencia densa y con poca jerarquía para usuarios no especializados.",
              width: 948,
              height: 533,
            },
            {
              src: "/images/projects/aclimate-redesign/field-interview.webp",
              alt: "Entrevista de campo entre un investigador y un participante, realizada durante el proceso de investigación con usuarios de AClimate.",
              caption:
                "Entrevista en campo con usuarios finales para entender qué información necesitan, cómo interpretan los mensajes climáticos y qué representaciones les resultan más comprensibles.",
              width: 1200,
              height: 1600,
            },
          ],
        },
        {
          id: "define",
          phase: "Definir",
          title: "Reducir densidad sin reducir utilidad",
          summary:
            "La síntesis convirtió necesidades de usuarios y requerimientos técnicos en una jerarquía capaz de mostrar la profundidad adecuada en el momento adecuado.",
          narrative: [
            "Los hallazgos se combinaron con requerimientos funcionales y no funcionales definidos junto al equipo. Una parte importante del trabajo consistió en distinguir qué información debía ser prioritaria y qué podía aparecer progresivamente según la tarea.",
            "La lógica del producto podía entenderse como una cadena: histórico para comprender qué suele ocurrir, monitoreo para saber qué está pasando, pronóstico para anticipar, escenarios para interpretar qué significa, recomendaciones para decidir qué hacer y finalmente acciones concretas.",
            "No todos los países necesitaban todos esos elementos de la misma manera. La arquitectura debía permitir compartir patrones sin convertir AClimate en una única plantilla rígida.",
          ],
          activities: [
            "Sintetizar necesidades de usuarios y requerimientos junto al equipo.",
            "Definir prioridades de información y niveles de detalle.",
            "Reorganizar recorridos y jerarquías de contenido.",
            "Distinguir elementos comunes de módulos específicos por país.",
          ],
          decisions: [
            "Usar divulgación progresiva para evitar mostrar toda la complejidad al mismo tiempo.",
            "Mantener una estructura común para navegación e interacción mientras el contenido cambia por contexto.",
            "Hacer del comportamiento responsive una condición del producto desde el diseño.",
          ],
        },
        {
          id: "ideate",
          phase: "Idear",
          title: "Diseñar una base común sin uniformar los países",
          summary:
            "La exploración visual buscó consistencia en cómo se navega y comprende AClimate, pero flexibilidad en qué información aparece.",
          narrative: [
            "Colombia, por ejemplo, combina históricos, pronósticos y simulaciones productivas alrededor de estaciones. Amazonía necesita una lectura espacial del territorio, monitoreo y escenarios. Honduras incorpora variables e indicadores climáticos propios de su implementación.",
            "La solución debía permitir que estos productos se sintieran parte del mismo ecosistema sin obligarlos a compartir exactamente las mismas pantallas, datos o recorridos.",
          ],
          activities: [
            "Explorar nuevas jerarquías para mapas, gráficas, filtros y contenido explicativo.",
            "Comparar alternativas de representación para información climática compleja.",
            "Diseñar patrones reutilizables capaces de admitir variaciones territoriales.",
            "Definir comportamientos responsive para los componentes principales.",
          ],
          decisions: [
            "Buscar consistencia en patrones de interacción, no uniformidad en contenido.",
            "Acompañar visualizaciones con contexto y microcopy cuando los datos por sí solos no eran suficientes.",
            "Permitir que cada implementación priorizara módulos según sus usuarios y objetivos.",
          ],
        },
        {
          id: "prototype",
          phase: "Prototipar",
          title: "Convertir información técnica en una experiencia más guiada",
          summary:
            "Lideré principalmente el rediseño UX/UI y lo llevamos a prototipos con datos y escenarios suficientemente realistas para evaluar la nueva jerarquía.",
          narrative: [
            "El trabajo visual redujo densidad, reorganizó filtros y contenidos y buscó que mapas y gráficas tuvieran una explicación más clara de qué muestran y para qué sirven.",
            "El prototipo base fue evaluado con perfiles técnicos. Mi participación en esas sesiones no estuvo centrada en la moderación, sino principalmente en el diseño y en incorporar los resultados posteriormente.",
            "Después, la interfaz pasó progresivamente a desarrollo. También participé en frontend, pero la implementación fue colaborativa con otros desarrolladores del equipo.",
          ],
          activities: [
            "Diseñar el rediseño principal de UX/UI.",
            "Prototipar mapas, gráficas, filtros y recorridos clave.",
            "Incorporar feedback proveniente de evaluaciones con perfiles técnicos.",
            "Colaborar en la implementación frontend del nuevo diseño.",
          ],
          decisions: [
            "Trabajar con contenido realista para comprobar que la simplificación soportara datos reales.",
            "Diseñar componentes que pudieran reutilizarse y adaptarse entre implementaciones.",
            "Resolver diseño y desarrollo de forma iterativa en lugar de tratar el frontend como una traducción final de Figma.",
          ],
          media: [
            {
              src: "/images/projects/aclimate-redesign/redesign-climate-data.webp",
              alt: "Interfaz rediseñada de AClimate mostrando la sección de datos climáticos, con explicación contextual, selector temporal, mapa de precipitación, leyenda y controles geográficos.",
              caption:
                "El rediseño mantiene la profundidad de los datos, pero incorpora jerarquía, contexto y explicaciones para orientar la lectura antes de mostrar la visualización.",
              width: 935,
              height: 513,
            },
          ],
        },
        {
          id: "test",
          phase: "Validar",
          title:
            "Evaluar cada territorio sin asumir que una solución es universal",
          summary:
            "Después del rediseño base, nuevas oportunidades de proyecto permitieron seguir investigando y adaptando partes de AClimate según contextos concretos.",
          narrative: [
            "En Amazonía participé directamente en la planeación, moderación y análisis de evaluaciones con productores y comunidades indígenas. Allí exploramos cómo interpretaban escenarios climáticos, recomendaciones, mapas, categorías y colores antes de integrarlos en la plataforma.",
            "Ese trabajo dio origen a una experiencia orientada a lectura espacial del territorio, donde un escenario climático no se presenta únicamente como un dato: se acompaña de características de la zona y recomendaciones comprensibles.",
            "Honduras representa otra evolución territorial del ecosistema, con variables e indicadores propios. Mi participación allí fue menor y el proceso estuvo liderado principalmente por otro compañero; sus resultados sirven como evidencia de cómo la base del producto continúa adaptándose a distintos contextos.",
          ],
          activities: [
            "Planear pruebas con usuarios en el contexto amazónico.",
            "Moderar sesiones con productores y comunidades indígenas.",
            "Analizar comprensión de mapas, escenarios, colores y recomendaciones.",
            "Traducir los hallazgos en cambios incorporados posteriormente a AClimate Amazonía.",
          ],
          decisions: [
            "Validar las representaciones climáticas con las personas que deben interpretarlas antes de asumir su significado.",
            "No transferir automáticamente convenciones visuales de un territorio a otro.",
            "Usar cada implementación regional como una oportunidad para aprender y retroalimentar el ecosistema.",
          ],
          media: [
            {
              src: "/images/projects/aclimate-redesign/amazonia-climate-scenarios.webp",
              alt: "Interfaz de escenarios climáticos de AClimate Amazonía mostrando selectores de departamento y comunidad, un mapa territorial y categorías de invierno, normal y verano.",
              caption:
                "La investigación en Amazonía ayudó a traducir pronósticos en escenarios territoriales más interpretables, combinando selección de comunidad, mapa, categorías visuales y posteriormente recomendaciones contextualizadas.",
              width: 931,
              height: 497,
            },
          ],
        },
        {
          id: "deliver",
          phase: "Evolucionar",
          title: "Mantener un producto vivo que cambia con cada contexto",
          summary:
            "Desde 2024 el rediseño ha seguido evolucionando mediante nuevas implementaciones, investigaciones y desarrollos territoriales.",
          narrative: [
            "AClimate no tuvo un único lanzamiento que cerrara el proyecto. La plataforma continúa evolucionando a medida que aparecen nuevos recursos, socios y necesidades en los países donde opera.",
            "Actualmente el ecosistema trabaja en diez países de Latinoamérica y África, pero cada implementación puede combinar históricos, monitoreo, pronósticos, modelos, escenarios o indicadores de manera diferente.",
            "Mi trabajo ha estado especialmente vinculado al rediseño base, la investigación con usuarios finales en Colombia, la evolución de Amazonía y la implementación frontend colaborativa. La escala del producto depende de conservar esa distinción entre una experiencia común y decisiones locales.",
          ],
          activities: [
            "Colaborar en la implementación progresiva del rediseño.",
            "Mantener patrones compartidos mientras aparecen nuevas necesidades territoriales.",
            "Incorporar resultados de investigación a módulos existentes y nuevos.",
            "Trabajar junto a desarrollo y especialistas climáticos para equilibrar claridad y rigor técnico.",
          ],
          decisions: [
            "Tratar el rediseño como una base evolutiva y no como una interfaz final cerrada.",
            "Evitar que escalar el producto signifique estandarizar necesidades que son distintas.",
            "Conservar suficiente flexibilidad para incorporar nuevos módulos sin reconstruir toda la experiencia.",
          ],
        },
      ],
      reflection:
        "Aprendí que escalar no significa uniformar. Un producto multipaís necesita una lógica común, pero suficiente flexibilidad para que información, lenguaje y prioridades cambien según el contexto.",
      editorChecklist: [],
    },
  ] satisfies Project[]
).sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

export const processPrinciples = [
  {
    number: "01",
    title: "Escuchar",
    text: "Entender personas, tareas, lenguaje, contexto y restricciones antes de proponer una solución.",
  },
  {
    number: "02",
    title: "Enmarcar",
    text: "Convertir evidencia dispersa en problemas claros, prioridades y criterios de éxito.",
  },
  {
    number: "03",
    title: "Explorar",
    text: "Comparar alternativas y hacer visibles los trade-offs antes de comprometer el producto.",
  },
  {
    number: "04",
    title: "Prototipar",
    text: "Dar forma a flujos, contenido, estados y componentes con la fidelidad necesaria para aprender.",
  },
  {
    number: "05",
    title: "Validar",
    text: "Observar tareas reales, medir facilidad y priorizar hallazgos por impacto, no por opinión.",
  },
  {
    number: "06",
    title: "Construir",
    text: "Llevar la intención a código accesible, responsive y mantenible sin perder el porqué del diseño.",
  },
];

export const portfolioEs = {
  profile,
  projects,
  processPrinciples,
} satisfies PortfolioData;
