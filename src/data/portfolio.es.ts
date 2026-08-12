import type { Metric, PortfolioData, Project } from "./portfolio.types";

export const profile = {
  name: "Sebastián López Astudillo",
  shortName: "Sebastián López",
  role: "Diseñador UX/UI · Investigación UX · Frontend",
  location: "Cali, Colombia",
  email: "sebaslopezastu08@gmail.com",
  phone: "+57 305 766 5223",
  linkedin: "https://www.linkedin.com/in/sebastian-lopez-uxui/",
  github: "https://github.com/Mino-02",
  photo: {
    src: "/images/profile/sebastian.webp",
    alt: "Sebastián López, diseñador UX/UI y desarrollador frontend",
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
        "Rediseño del proceso de creación y consumo de boletines agroclimáticos para pequeños productores rurales en contextos de baja conectividad.",
      shortOutcome:
        "Tres iteraciones con 25 participantes llevaron la comprensión evaluada de 80 % a 100 %.",
      challenge:
        "La información agroclimática podía ser técnicamente correcta y, aun así, resultar difícil de convertir en una acción concreta para productores rurales.",
      response:
        "Codiseñé un prototipo funcional de alta fidelidad y el Marco Campo Claro, una guía para transformar recomendaciones técnicas en mensajes más sencillos sin perder rigor.",
      role: "Investigación, codiseño, UX/UI, prototipado y validación",
      team: "Proyecto de maestría con técnicos y pequeños productores",
      context: "Entornos rurales · Baja conectividad · Información técnica",
      methods: [
        "Codiseño",
        "Prototipado iterativo",
        "Pruebas moderadas",
        "Pensamiento en voz alta",
        "SUS",
        "CES",
      ],
      stack: ["Figma", "Figma Make", "Miro"],
      metrics: [
        { value: "25", label: "participantes" },
        { value: "3", label: "iteraciones moderadas" },
        { value: "80 → 100 %", label: "comprensión en la muestra" },
        { value: "83,5", label: "SUS final" },
        { value: "6/7", label: "CES final" },
        { value: "3/5 → 5/5", label: "aplicación completa del marco" },
      ],
      links: [],
      process: [
        {
          id: "discover",
          phase: "Descubrir",
          title: "Entender dónde se perdía el significado",
          summary:
            "El punto de partida fue observar el recorrido completo de la recomendación: desde quien la redacta hasta quien debe usarla para decidir.",
          narrative: [
            "El proyecto se centró en pequeños productores rurales y en los técnicos que preparan recomendaciones agroclimáticas. La brecha principal no era solo de acceso, sino de comprensión: lenguaje especializado, alta densidad de información y escenarios de conectividad limitada.",
            "La investigación debía revelar qué elementos ayudaban a interpretar una recomendación, qué términos generaban dudas y qué contexto necesitaba una persona para convertir el mensaje en una acción.",
          ],
          activities: [
            "Delimitar el flujo de creación, publicación, lectura y uso del boletín.",
            "Diferenciar necesidades de productores y de técnicos redactores.",
            "Registrar barreras de lenguaje, jerarquía visual y contexto de uso.",
          ],
          editorNote:
            "Añade aquí: muestra y criterios de reclutamiento, guion de investigación, mapa de actores, frases anonimizadas y una síntesis visual de hallazgos.",
        },
        {
          id: "define",
          phase: "Definir",
          title: "Convertir hallazgos en reglas de claridad",
          summary:
            "La síntesis se tradujo en criterios verificables para simplificar sin volver imprecisa la recomendación.",
          narrative: [
            "El Marco Campo Claro organizó el problema como una serie de decisiones de contenido: qué información conservar, en qué orden presentarla y cómo expresar una acción con un lenguaje reconocible para el productor.",
            "Los criterios también debían ser aplicables por técnicos, porque una solución útil necesitaba mejorar tanto el consumo como la creación del boletín.",
          ],
          activities: [
            "Priorizar comprensión, aplicabilidad y facilidad de uso.",
            "Definir la estructura del Marco Campo Claro.",
            "Establecer qué debía medirse en cada iteración.",
          ],
          decisions: [
            "Tratar el lenguaje como parte de la interfaz, no como contenido posterior.",
            "Validar el resultado con los dos perfiles del sistema: productores y técnicos.",
          ],
          editorNote:
            "Añade aquí: diagrama de afinidad, definición del problema, How Might We, principios del marco y criterios de éxito.",
        },
        {
          id: "ideate",
          phase: "Idear",
          title: "Explorar una lectura más accionable",
          summary:
            "Las alternativas combinaron jerarquía visual, fragmentación de contenido y redacción orientada a acciones.",
          narrative: [
            "La ideación buscó reducir el esfuerzo de lectura y hacer visible lo esencial: qué está pasando, a quién afecta, qué se recomienda hacer y bajo qué condiciones.",
            "El codiseño permitió contrastar las propuestas con la experiencia de quienes producen y consumen la información.",
          ],
          activities: [
            "Proponer estructuras de contenido y navegación.",
            "Comparar maneras de presentar recomendaciones y alertas.",
            "Seleccionar alternativas con potencial para baja conectividad.",
          ],
          editorNote:
            "Añade aquí: bocetos, Crazy 8s, matriz de priorización, decisiones descartadas y por qué.",
        },
        {
          id: "prototype",
          phase: "Prototipar",
          title: "Hacer tangible el sistema",
          summary:
            "El resultado fue un prototipo funcional de alta fidelidad preparado para probar comprensión y facilidad de uso.",
          narrative: [
            "El prototipo conectó la experiencia de lectura con el marco de creación, de modo que los cambios en lenguaje y estructura pudieran evaluarse como un sistema y no como pantallas aisladas.",
            "Cada iteración incorporó ajustes antes de volver a exponer la propuesta a participantes.",
          ],
          activities: [
            "Diseñar los estados clave del recorrido.",
            "Preparar contenido realista para las tareas de prueba.",
            "Construir un prototipo funcional de alta fidelidad.",
          ],
          editorNote:
            "Añade aquí: wireframes, evolución visual, componentes, anotaciones de interacción y enlace al prototipo.",
        },
        {
          id: "test",
          phase: "Validar",
          title: "Iterar con evidencia, no con preferencia",
          summary:
            "Se realizaron tres iteraciones de pruebas moderadas con 25 participantes.",
          narrative: [
            "Las sesiones permitieron observar comprensión, aplicación del marco y esfuerzo percibido. Los resultados se revisaron entre iteraciones para corregir tanto la interfaz como la forma de redactar las recomendaciones.",
            "En la muestra evaluada, la comprensión de productores pasó de 80 % a 100 %. La aplicación completa del framework por técnicos pasó de 3/5 a 5/5, con un SUS de 83,5 y un CES de 6/7 en la iteración final.",
          ],
          activities: [
            "Moderación de tareas con pensamiento en voz alta.",
            "Medición de comprensión y completitud.",
            "Aplicación de SUS y CES.",
            "Priorización de hallazgos para la siguiente iteración.",
          ],
          editorNote:
            "Añade aquí: protocolo, tareas, tabla de severidad, comparación entre iteraciones y citas anonimizadas.",
        },
        {
          id: "deliver",
          phase: "Entregar",
          title: "Dejar un marco que otros puedan aplicar",
          summary:
            "La entrega combinó una experiencia validada y una herramienta práctica para producir contenido más claro.",
          narrative: [
            "El valor del proyecto no estuvo solo en una interfaz final, sino en dejar un criterio reutilizable para que los equipos técnicos pudieran sostener la claridad en nuevos boletines.",
            "La siguiente etapa ideal es medir el uso del marco en producción, documentar excepciones y evaluar su transferencia a otros contextos agroclimáticos.",
          ],
          activities: [
            "Consolidar el prototipo de alta fidelidad.",
            "Documentar el Marco Campo Claro.",
            "Registrar métricas, aprendizajes y oportunidades futuras.",
          ],
          editorNote:
            "Añade aquí: entregables finales, extracto del marco, recomendaciones de implementación y roadmap.",
        },
      ],
      reflection:
        "Este caso muestra cómo una decisión de UX Writing puede convertirse en una decisión de producto: cuando el contenido es crítico, la comprensión debe diseñarse, probarse y medirse.",
      editorChecklist: [
        "Aclarar tu aporte individual frente al equipo académico.",
        "Incluir la distribución de los 25 participantes por perfil.",
        "Agregar capturas de las tres iteraciones, no solo del resultado final.",
        "Documentar una decisión descartada y el aprendizaje asociado.",
      ],
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
        "Este proyecto me confirmó que una solución no termina cuando el usuario final entiende el diseño. También hay que diseñar las condiciones para que quienes producen el servicio puedan sostener esa claridad. Mi aporte conectó investigación, decisiones de UX y frontend para que la evidencia no se perdiera al pasar del hallazgo al producto.",
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
      eyebrow: "Plataforma geográfica · Research + UX/UI + Frontend",
      year: "2023",
      accent: "mint",
      cover: "/images/projects/waterpoints-monitoring/cover.webp",
      coverAlt:
        "Mapa de Etiopía en la plataforma Waterpoints and Pasture Monitoring, con puntos de agua codificados por estado y el detalle de un punto seleccionado.",
      summary:
        "Plataforma geográfica para monitorear puntos de agua en Etiopía, diseñada para comunidades rurales y tomadores de decisiones.",
      shortOutcome:
        "Talleres y pruebas ayudaron a adaptar la interacción a modelos mentales institucionales y a un contexto de baja conectividad.",
      challenge:
        "La plataforma debía hacer comprensible información geográfica y de monitoreo para perfiles distintos, en escenarios donde la conectividad podía ser limitada.",
      response:
        "Planeé talleres con comunidades rurales y tomadores de decisiones, diseñé la experiencia y desarrollé el frontend; después analicé y prioricé hallazgos de usabilidad.",
      role: "Planeación de talleres, UX/UI, análisis de pruebas y frontend",
      team: "Equipo multidisciplinario en Etiopía",
      context: "Comunidades rurales · Datos geográficos · Baja conectividad",
      methods: [
        "Talleres con usuarios",
        "Mapeo de necesidades",
        "Arquitectura de información",
        "Pruebas de usabilidad",
        "Análisis de modelos mentales",
      ],
      stack: ["Frontend web", "Diseño responsive", "Datos geográficos"],
      metrics: [
        { value: "Etiopía", label: "contexto de implementación" },
        { value: "2", label: "grupos de actores clave" },
        { value: "Geo", label: "visualización y monitoreo" },
        { value: "Low-bandwidth", label: "restricción de diseño" },
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
          title: "Escuchar a quienes producen y usan la información",
          summary:
            "Los talleres reunieron perspectivas de comunidades rurales y tomadores de decisiones.",
          narrative: [
            "El proyecto necesitaba conectar información de campo con decisiones institucionales. Eso implicaba entender tareas, vocabulario, confianza en los datos y restricciones de acceso desde ambos lados.",
            "El contexto de baja conectividad obligó a considerar desde el inicio la cantidad de información, el peso de la interfaz y la forma de recuperar contexto al navegar.",
          ],
          activities: [
            "Planear talleres con perfiles rurales e institucionales.",
            "Registrar necesidades, decisiones y puntos de fricción.",
            "Identificar restricciones de conectividad y dispositivo.",
          ],
          editorNote:
            "Añade aquí: agenda de talleres, participantes, fotografías autorizadas, mapas de actores y síntesis de necesidades.",
        },
        {
          id: "define",
          phase: "Definir",
          title: "Priorizar decisiones, no capas de datos",
          summary:
            "La arquitectura debía responder primero a las preguntas del usuario y después a la estructura de la base de datos.",
          narrative: [
            "El reto de una plataforma geográfica es evitar que el mapa se convierta en el producto completo. La definición se enfocó en qué necesitaba decidir cada perfil y qué evidencia debía estar visible para hacerlo.",
            "Los flujos y la jerarquía de información se organizaron alrededor de tareas de monitoreo y consulta.",
          ],
          activities: [
            "Agrupar necesidades por tarea y perfil.",
            "Definir información primaria, secundaria y de detalle.",
            "Priorizar recorridos para consulta y monitoreo.",
          ],
          editorNote:
            "Añade aquí: problem statement, personas, user journeys, arquitectura y criterios de prioridad.",
        },
        {
          id: "ideate",
          phase: "Idear",
          title: "Explorar patrones para orientarse en el territorio",
          summary:
            "Las alternativas combinaron mapa, filtros y fichas de detalle sin perder el contexto de ubicación.",
          narrative: [
            "La ideación debía resolver cómo pasar de una visión territorial a un punto específico y volver sin desorientarse.",
            "También fue importante reducir acciones y evitar dependencias innecesarias de interacciones complejas o conexiones estables.",
          ],
          activities: [
            "Explorar relaciones entre mapa, lista y detalle.",
            "Diseñar filtros comprensibles para perfiles no técnicos.",
            "Proponer estados vacíos, carga y pérdida de conexión.",
          ],
          editorNote:
            "Añade aquí: sketching, alternativas de mapa/lista, evaluación de patrones y decisiones descartadas.",
        },
        {
          id: "prototype",
          phase: "Prototipar y construir",
          title: "Convertir la geografía en una interfaz operable",
          summary:
            "Diseñé la experiencia y desarrollé el frontend de la plataforma.",
          narrative: [
            "La construcción permitió ajustar la interacción a datos y restricciones reales. Los componentes debían conservar jerarquía en diferentes tamaños de pantalla y mantener clara la relación entre un punto de agua y su información asociada.",
            "La implementación también hizo visibles decisiones técnicas que afectaban la experiencia, como tiempos de carga, cantidad de marcadores y persistencia de filtros.",
          ],
          activities: [
            "Construir vistas geográficas y fichas de información.",
            "Diseñar comportamiento responsive.",
            "Integrar datos y estados reales del servicio.",
          ],
          editorNote:
            "Añade aquí: wireframes, prototipo, capturas del frontend y decisiones de rendimiento para baja conectividad.",
        },
        {
          id: "test",
          phase: "Validar",
          title: "Contrastar la interfaz con modelos mentales reales",
          summary:
            "Analicé y prioricé resultados de pruebas de usabilidad con usuarios institucionales.",
          narrative: [
            "Las pruebas permitieron identificar patrones de interacción y diferencias entre la lógica del sistema y la forma en que los usuarios esperaban encontrar o interpretar la información.",
            "Los hallazgos se transformaron en propuestas de mejora priorizadas para navegación, comprensión y uso del mapa.",
          ],
          activities: [
            "Analizar comportamiento y verbalizaciones.",
            "Agrupar patrones por modelo mental.",
            "Priorizar mejoras según impacto y recurrencia.",
          ],
          editorNote:
            "Añade aquí: participantes, tareas, métricas, matriz de hallazgos y un ejemplo de cambio derivado de la prueba.",
        },
        {
          id: "deliver",
          phase: "Entregar",
          title: "Documentar decisiones para sostener la evolución",
          summary:
            "El resultado conectó investigación, diseño y frontend en una base común para iterar.",
          narrative: [
            "Además de la plataforma, el valor del proceso estuvo en dejar una lectura compartida de necesidades y hallazgos para que el equipo pudiera priorizar mejoras posteriores.",
            "Una próxima medición debería incluir rendimiento en conexiones reales, frecuencia de consulta y tiempo para completar decisiones críticas.",
          ],
          activities: [
            "Entregar mejoras de interfaz y frontend.",
            "Compartir hallazgos priorizados con el equipo.",
            "Proponer oportunidades para futuras iteraciones.",
          ],
          editorNote:
            "Añade aquí: impacto posterior, métricas técnicas, testimonios del equipo y roadmap.",
        },
      ],
      reflection:
        "Este proyecto reforzó que una interfaz geográfica no se diseña desde el mapa, sino desde las decisiones que cada persona debe tomar con él.",
      editorChecklist: [
        "Confirmar tecnologías exactas usadas en el frontend.",
        "Añadir números de participantes y perfiles de las pruebas.",
        "Mostrar cómo se contempló la baja conectividad en código y diseño.",
        "Explicar un modelo mental que cambió una decisión de interfaz.",
      ],
    },
    {
      slug: "aclimate-redesign",
      index: "04",
      title: "AClimate · Rediseño",
      eyebrow: "Plataforma multipaís · UX Audit + Responsive UI",
      year: "2024",
      accent: "sand",
      cover: "/images/projects/aclimate-redesign/cover.webp",
      coverAlt:
        "Panel de datos climáticos de Aclímate con filtros por fecha y gráficas de temperatura mínima y precipitación.",
      summary:
        "Evaluación y rediseño de una plataforma agroclimática multipaís para simplificar información técnica, mapas, gráficas y paneles de monitoreo.",
      shortOutcome:
        "La propuesta incorporó una experiencia responsive y mejoras derivadas de evaluaciones con usuarios.",
      challenge:
        "La plataforma reunía información técnica valiosa, pero la densidad, la navegación y la lectura de visualizaciones podían aumentar el esfuerzo de interpretación.",
      response:
        "Participé en la evaluación, el rediseño y la implementación frontend de recomendaciones, además de capacitaciones presenciales para usuarios en la Amazonía colombiana.",
      role: "Evaluación UX, rediseño UI, recomendaciones y apoyo frontend",
      team: "Equipo agroclimático multipaís",
      context: "Información técnica · Mapas y gráficas · Uso responsive",
      methods: [
        "Evaluación con usuarios",
        "Revisión heurística",
        "Arquitectura de información",
        "Diseño responsive",
        "Capacitación",
      ],
      stack: ["Frontend web", "Diseño responsive", "Mapas y gráficas"],
      metrics: [
        { value: "Multipaís", label: "alcance del producto" },
        { value: "Responsive", label: "criterio transversal" },
        { value: "3", label: "familias: mapas, gráficas y paneles" },
        { value: "Amazonía", label: "capacitaciones presenciales" },
      ],
      links: [
        {
          label: "Ver plataforma",
          href: "https://amazonia.aclimate.org",
          kind: "live",
        },
      ],
      process: [
        {
          id: "discover",
          phase: "Descubrir",
          title: "Evaluar la experiencia existente",
          summary:
            "El rediseño comenzó identificando dónde la información técnica y la estructura de la interfaz aumentaban la carga de uso.",
          narrative: [
            "La plataforma debía servir a diferentes países y perfiles, por lo que era necesario distinguir problemas locales de patrones compartidos.",
            "La evaluación consideró navegación, comprensión de contenido, lectura de mapas y gráficas y comportamiento en distintos tamaños de pantalla.",
          ],
          activities: [
            "Revisar recorridos y componentes existentes.",
            "Observar dificultades en evaluaciones con usuarios.",
            "Identificar inconsistencias y puntos de alta carga cognitiva.",
          ],
          editorNote:
            "Añade aquí: alcance de la evaluación, heurísticas usadas, participantes, pantallas auditadas y evidencia de los principales problemas.",
        },
        {
          id: "define",
          phase: "Definir",
          title: "Ordenar la complejidad por prioridad de decisión",
          summary:
            "Los problemas se organizaron según su impacto en comprensión, navegación y monitoreo.",
          narrative: [
            "La definición buscó que la jerarquía de la interfaz reflejara qué información necesitaba una persona primero, en lugar de reproducir la estructura técnica del sistema.",
            "También se estableció el comportamiento responsive como una condición del producto, no como una adaptación final.",
          ],
          activities: [
            "Priorizar hallazgos por severidad e impacto.",
            "Reorganizar contenidos y recorridos clave.",
            "Definir reglas responsive para componentes críticos.",
          ],
          editorNote:
            "Añade aquí: matriz impacto/esfuerzo, nueva arquitectura, user flows y principios de rediseño.",
        },
        {
          id: "ideate",
          phase: "Idear",
          title: "Simplificar sin ocultar la profundidad técnica",
          summary:
            "Las alternativas se enfocaron en capas progresivas de información y visualizaciones más legibles.",
          narrative: [
            "Los mapas, gráficas y paneles debían permitir una lectura rápida y, al mismo tiempo, conservar acceso al detalle cuando fuera necesario.",
            "La exploración visual buscó consistencia entre países y flexibilidad para diferentes contenidos.",
          ],
          activities: [
            "Explorar jerarquías para tarjetas, filtros y leyendas.",
            "Comparar patrones de visualización y detalle progresivo.",
            "Definir comportamiento de componentes en móvil.",
          ],
          editorNote:
            "Añade aquí: exploraciones visuales, comparativas de gráficas, diseño de filtros y alternativas descartadas.",
        },
        {
          id: "prototype",
          phase: "Prototipar",
          title: "Conectar el sistema visual con casos reales",
          summary:
            "El rediseño se materializó en flujos y componentes responsive para datos agroclimáticos.",
          narrative: [
            "Los prototipos debían representar contenido realista para comprobar si la simplificación se sostenía con volúmenes y casos reales.",
            "La consistencia de componentes facilitó discutir cambios con desarrollo y preparar su implementación.",
          ],
          activities: [
            "Prototipar mapas, gráficas y paneles de monitoreo.",
            "Documentar estados y comportamiento responsive.",
            "Revisar viabilidad con el equipo técnico.",
          ],
          editorNote:
            "Añade aquí: antes/después, prototipo navegable, especificaciones y fragmentos del sistema de diseño.",
        },
        {
          id: "test",
          phase: "Validar",
          title: "Incorporar recomendaciones de usuarios",
          summary:
            "Las evaluaciones con usuarios orientaron ajustes de comprensión, visualización y navegación.",
          narrative: [
            "La validación permitió revisar si los cambios reducían el esfuerzo para encontrar información y entender lo que mostraban mapas y gráficas.",
            "Las recomendaciones se llevaron a mejoras de interfaz y a conversaciones de implementación con el equipo.",
          ],
          activities: [
            "Observar tareas clave de consulta y monitoreo.",
            "Analizar comprensión de términos y visualizaciones.",
            "Priorizar recomendaciones para implementación.",
          ],
          editorNote:
            "Añade aquí: protocolo, participantes, hallazgos, métricas y cambios concretos entre versiones.",
        },
        {
          id: "deliver",
          phase: "Implementar y acompañar",
          title: "Cerrar el ciclo con frontend y capacitación",
          summary:
            "Participé en la implementación frontend y en capacitaciones presenciales en la Amazonía colombiana.",
          narrative: [
            "La implementación permitió resolver detalles de comportamiento que solo aparecen con datos y dispositivos reales.",
            "Las capacitaciones funcionaron también como una fuente de observación para entender dudas recurrentes y oportunidades de mejora posteriores.",
          ],
          activities: [
            "Implementar recomendaciones priorizadas.",
            "Acompañar sesiones de capacitación con usuarios.",
            "Registrar nuevas dudas y oportunidades de iteración.",
          ],
          editorNote:
            "Añade aquí: capturas de producción, métricas de rendimiento, material de capacitación y aprendizajes posteriores al lanzamiento.",
        },
      ],
      reflection:
        "El rediseño demostró que simplificar no significa quitar información, sino presentar la profundidad correcta en el momento correcto.",
      editorChecklist: [
        "Confirmar tecnologías exactas de la versión rediseñada.",
        "Agregar métricas o resultados de las evaluaciones.",
        "Mostrar al menos dos comparaciones antes/después.",
        "Explicar qué se aprendió durante las capacitaciones.",
      ],
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
