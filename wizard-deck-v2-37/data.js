/*
 * Fuente de verdad para contenido interactivo.
 * La narrativa aprobada vive en index.html para conservar lectura y accesibilidad.
 */
window.WIZARD_DATA = Object.freeze({
  contactUrl:
    "https://wa.me/525519536562?text=Hola%2C%20vengo%20de%20las%20credenciales%20de%20Wizard%20y%20quiero%20platicar%20sobre%20mi%20negocio.",
  assetRoot: "assets",
  moments: [
    { id: "acquisition", kicker: "Adquisición", label: "Conseguir clientes" },
    { id: "operation", kicker: "Operación", label: "Atender y operar" },
    { id: "retention", kicker: "Fidelización", label: "Hacer que regresen" },
  ],
  productFamilies: [
    {
      id: "acquisition",
      number: "01",
      name: "Adquisición",
      count: "4 máquinas",
      description:
        "Encontrar oportunidades, generar conversaciones y convertirlas en clientes.",
    },
    {
      id: "operation",
      number: "02",
      name: "Operación",
      count: "5 máquinas",
      description:
        "Organizar el trabajo, mejorar la ejecución y tomar mejores decisiones.",
    },
    {
      id: "retention",
      number: "03",
      name: "Fidelización",
      count: "1 máquina",
      description:
        "Mantener relaciones activas y generar nuevos ingresos con clientes existentes.",
    },
    {
      id: "custom",
      number: "04",
      name: "Desarrollo",
      count: "1 máquina",
      description:
        "Diseñar e integrar soluciones digitales para necesidades específicas del negocio.",
    },
  ],
  industries: [
    {
      name: "Agencia de publicidad",
      code: "PUB",
      text: "Una agencia de publicidad cambia cómo produce contenido y coordina las entregas con sus clientes.",
    },
    {
      name: "Clínica",
      code: "CLN",
      text: "Una clínica, cómo responde preguntas y organiza las citas.",
    },
    {
      name: "Distribuidora de productos",
      code: "DST",
      text: "Una distribuidora de productos cambia cómo cotiza, vende y da seguimiento.",
    },
    {
      name: "Restaurante",
      code: "RST",
      text: "Un restaurante puede conectar sus reservaciones.",
    },
    {
      name: "Psicólogo",
      code: "PSI",
      text: "Un psicólogo, organizar y consultar sus expedientes.",
    },
    {
      name: "Escuela",
      code: "ESC",
      text: "Una escuela, atender informes e inscripciones.",
    },
    {
      name: "Agente de seguros",
      code: "SEG",
      text: "Un agente de seguros, mantener la comunicación con sus clientes.",
    },
    {
      name: "Profesional independiente",
      code: "IND",
      text: "Un profesional independiente puede ordenar clientes, pendientes, cobros y seguimiento en un mismo flujo.",
    },
    {
      name: "Arquitecto",
      code: "ARQ",
      text: "Un arquitecto puede coordinar clientes, proveedores, entregables y avances desde un mismo sistema.",
    },
  ],
  capabilities: [
    {
      id: "generation",
      name: "Generación",
      description: "Crear contenido, imágenes, propuestas y documentos.",
      relations: {
        acquisition: {
          opportunity: "Contenido y propuestas.",
          entities: ["pulse", "service:custom"],
        },
        operation: {
          opportunity: "Documentos de trabajo.",
          entities: ["service:integration", "service:custom"],
        },
        retention: {
          opportunity: "Mensajes de reactivación.",
          entities: ["connect", "service:custom"],
        },
      },
    },
    {
      id: "interaction",
      name: "Interacción",
      description:
        "Conversar con tus clientes o tu equipo: responder, preguntar, orientar y ayudar a resolver.",
      relations: {
        acquisition: {
          opportunity: "Atención inicial y preguntas.",
          entities: ["core", "agent"],
        },
        operation: {
          opportunity: "Orientación y agenda.",
          entities: ["agent", "nexus"],
        },
        retention: {
          opportunity: "Atención postventa.",
          entities: ["connect", "agent"],
        },
      },
    },
    {
      id: "analysis",
      name: "Análisis",
      description:
        "Entender qué está pasando entre tantos datos, detectar patrones y encontrar oportunidades.",
      relations: {
        acquisition: {
          opportunity: "Priorización de prospectos.",
          entities: ["sprint", "pulse"],
        },
        operation: {
          opportunity: "Revisión del desempeño.",
          entities: ["vault", "squad", "clone-u"],
        },
        retention: {
          opportunity: "Análisis del historial de clientes.",
          entities: ["connect", "service:consulting"],
        },
      },
    },
    {
      id: "automation",
      name: "Automatización",
      description:
        "Conectar los pasos de un proceso para que alguien no tenga que hacer lo mismo, a mano, todos los días.",
      relations: {
        acquisition: {
          opportunity: "Registro y asignación de contactos.",
          entities: ["core", "connect", "service:integration"],
        },
        operation: {
          opportunity: "Envío de cotizaciones y creación de tareas.",
          entities: ["coach", "service:integration", "service:custom"],
        },
        retention: {
          opportunity: "Recordatorios y seguimientos.",
          entities: ["connect", "coach"],
        },
      },
    },
  ],
  applications: [
    { name: "Contenido con IA", text: "Contenido producido con IA.", visual: "content" },
    {
      name: "Scraping — bases de datos perfiladas",
      text: "Bases de datos perfiladas para encontrar prospectos afines.",
      visual: "prospects",
    },
    {
      name: "Mailing automatizado",
      text: "Secuencias de correo automatizadas para abrir y continuar conversaciones.",
      visual: "mail",
    },
    {
      name: "Experiencias web",
      text: "Experiencias web que captan, informan y conectan.",
      visual: "web",
    },
    {
      name: "Agentes IA",
      text: "Agentes de IA que responden, orientan y ayudan a ejecutar siguientes pasos.",
      visual: "agent",
    },
    {
      name: "Cotizaciones automáticas",
      text: "Cotizaciones que pasan de una solicitud al documento y al seguimiento.",
      visual: "quote",
    },
    {
      name: "CRM + ERP + dashboards inteligentes",
      text: "Clientes, operación y datos conectados para entender qué pasa y qué sigue.",
      visual: "crm",
    },
    {
      name: "Plataformas IA",
      text: "Plataformas de IA diseñadas alrededor de la operación real del negocio.",
      visual: "systems",
    },
  ],
  products: [
    {
      id: "pulse",
      name: "PULSE",
      tagline: "Inteligencia de mercado",
      description:
        "Detecta mercados, prospectos y oportunidades para vender mejor.",
      icon: "icons/pulse.svg",
      primaryMoment: "acquisition",
      relations: {
        acquisition:
          "Investigar mercado y competencia, plantear contenido y producirlo con IA.",
      },
    },
    {
      id: "sprint",
      name: "SPRINT",
      tagline: "Prospección y nutrición",
      description:
        "Activa campañas, genera contactos y desarrolla oportunidades comerciales.",
      icon: "icons/sprint.svg",
      primaryMoment: "acquisition",
      relations: {
        acquisition:
          "Encontrar prospectos afines, personalizar mensajes y priorizar contactos.",
      },
    },
    {
      id: "agent",
      name: "AGENT",
      tagline: "Conversación y agenda",
      description:
        "Atiende prospectos, resuelve dudas, califica y agenda citas automáticamente.",
      icon: "icons/agent.svg",
      demoName: "The Orb",
      demoLabel: "Demo de IA Agent",
      demoUrl: "https://themagicorb.netlify.app/",
      primaryMoment: "acquisition",
      relations: {
        acquisition: "Resolver preguntas en WhatsApp o web.",
        operation: "Gestionar citas.",
      },
    },
    {
      id: "core",
      name: "CORE",
      tagline: "Capacitación y cierre",
      description:
        "Prepara a los equipos comerciales para convertir más oportunidades en ventas.",
      icon: "icons/core.svg",
      primaryMoment: "acquisition",
      relations: {
        acquisition: "Capacitar equipos comerciales y apoyar el cierre.",
      },
    },
    {
      id: "arkana",
      name: "ARKANA",
      tagline: "Gestión operativa",
      description:
        "Centraliza proyectos, tareas, responsables y avances de la operación.",
      icon: "",
      primaryMoment: "operation",
      relations: {
        operation: "Centralizar proyectos, tareas, responsables y avances.",
      },
    },
    {
      id: "clone-u",
      name: "CLONE U",
      tagline: "Conocimiento empresarial",
      description:
        "Convierte el conocimiento de las personas y los procesos en memoria accesible para el equipo.",
      icon: "icons/clone-u.svg",
      primaryMoment: "operation",
      relations: {
        operation: "Convertir conversaciones y procesos en memoria consultable.",
      },
    },
    {
      id: "coach",
      name: "COACH",
      tagline: "Ejecución y seguimiento",
      description:
        "Acompaña a los equipos con orientación, próximos pasos y seguimiento de compromisos.",
      icon: "icons/coach.svg",
      primaryMoment: "operation",
      relations: {
        operation: "Orientar próximos pasos y dar seguimiento a compromisos.",
      },
    },
    {
      id: "vault",
      name: "VAULT",
      tagline: "Supervisión y calidad",
      description:
        "Audita interacciones y procesos para detectar errores, riesgos y oportunidades de mejora.",
      icon: "icons/vault.svg",
      primaryMoment: "operation",
      relations: {
        operation: "Auditar interacciones, procesos, riesgos y calidad.",
      },
    },
    {
      id: "squad",
      name: "SQUAD",
      tagline: "Inteligencia directiva",
      description:
        "Ayuda a líderes y directivos a analizar escenarios y tomar decisiones con información.",
      icon: "icons/squad.svg",
      primaryMoment: "operation",
      relations: {
        operation: "Analizar escenarios y apoyar decisiones de negocio.",
      },
    },
    {
      id: "connect",
      name: "CONNECT",
      tagline: "Retención y reactivación",
      description:
        "Automatiza seguimientos, recupera clientes inactivos y activa nuevas oportunidades de compra.",
      icon: "icons/connect.svg",
      primaryMoment: "retention",
      relations: {
        acquisition: "Reunir contactos.",
        retention: "Activar comunicación, seguimiento y reactivación.",
      },
    },
    {
      id: "nexus",
      name: "NEXUS",
      tagline: "Desarrollo a la medida",
      description:
        "Diseña, desarrolla e integra soluciones digitales para necesidades específicas del negocio.",
      icon: "icons/nexus.svg",
      primaryMoment: "custom",
      relations: {
        custom: "Desarrollo a la medida.",
      },
    },
  ],
  productVideos: [
    {
      productId: "squad",
      label: "SQUAD",
      src: "assets/products/squad.mp4",
      pendingFile: "squad.mp4",
    },
    {
      productId: "core",
      label: "CORE",
      src: "assets/products/core.mp4",
      pendingFile: "core.mp4",
    },
    {
      productId: "sprint",
      label: "SPRINT",
      src: "assets/products/sprint.mp4",
      pendingFile: "sprint.mp4",
    },
    {
      productId: "pulse",
      label: "PULSE",
      src: "assets/products/pulse.mp4",
      pendingFile: "pulse.mp4",
    },
    {
      productId: "agent",
      label: "AGENT / THE ORB",
      src: "assets/products/agent.mp4",
      pendingFile: "agent.mp4",
    },
    {
      productId: "arkana",
      label: "ARKANA",
      src: "assets/products/arkana-product-demo.mp4",
      pendingFile: "arkana.mp4",
    },
    {
      productId: "nexus",
      label: "NEXUS",
      src: "assets/products/nexus.mp4",
      pendingFile: "nexus.mp4",
    },
    {
      productId: "connect",
      label: "CONNECT",
      src: "assets/products/connect.mp4",
      pendingFile: "connect.mp4",
    },
    { productId: "vault", label: "VAULT", src: "", pendingFile: "vault.mp4" },
    {
      productId: "coach",
      label: "COACH",
      src: "assets/products/coach.mp4",
      pendingFile: "coach.mp4",
    },
    {
      productId: "clone-u",
      label: "CLONE U",
      src: "assets/products/clone-u.mp4",
      pendingFile: "clone-u.mp4",
    },
  ],
  // Optional visual proof contract for each case:
  // media: { type: "image" | "video", src, alt, poster?, objectPosition? }
  // Until an approved asset is supplied, the viewer renders verified identity only.
  cases: [
    {
      id: "grupo-dinar",
      client: "Grupo Dinar",
      brands: ["Catch", "Joe & The Juice"],
      code: "DIN",
      logos: [
        { src: "assets/cases/catch.svg", className: "is-portrait", label: "Catch" },
        { src: "assets/cases/joe-the-juice.png", className: "is-square", label: "Joe & The Juice" },
      ],
      theme: { accent: "#ff9b42", accentAlt: "#f4efe6", ink: "#071014" },
      family: "experience",
      familyLabel: "Experiencia digital",
      moments: [
        { id: "acquisition", label: "Adquisición" },
        { id: "operation", label: "Operación" },
      ],
      headline: "Marcas internacionales. Ejecución a la altura.",
      challenge:
        "Llevar dos marcas internacionales al mercado local sin romper sus lineamientos globales.",
      summary:
        "Construimos los sitios administrables de Catch y Joe & The Juice, cuidando lineamientos globales y necesidades locales de operación.",
      scope: ["Sitios administrables", "Diseño editorial", "Formularios y navegación"],
      evidenceTitle: "Dos marcas. Un estándar.",
      enablement: [
        "Administrar contenido local desde cada sitio.",
        "Convertir interés en solicitudes mediante formularios.",
        "Sostener una experiencia consistente entre ambas marcas.",
      ],
    },
    {
      id: "goodsurance",
      client: "Goodsurance",
      code: "GDS",
      logo: "assets/cases/goodsurance.png",
      logoClass: "is-wide",
      theme: { accent: "#ffb000", accentAlt: "#fff0b8", ink: "#071014" },
      family: "acquisition",
      familyLabel: "Adquisición",
      moments: [
        { id: "acquisition", label: "Adquisición" },
        { id: "operation", label: "Operación" },
      ],
      headline: "Pusimos a la marca a abrir conversaciones de negocio.",
      challenge:
        "Convertir prospección, contenido y seguimiento dispersos en un sistema comercial visible.",
      summary:
        "Conectamos bases de prospectos, mensajes, contenido, medios y CRM para convertir la prospección en un sistema comercial visible.",
      scope: ["Scraping perfilado", "Mailing y contenido", "CRM y reportes"],
      evidenceTitle: "De prospecto a siguiente acción.",
      enablement: [
        "Perfilar oportunidades antes del primer contacto.",
        "Conectar mensajes, pauta y captación con el CRM.",
        "Dar continuidad al seguimiento con información centralizada.",
      ],
    },
    {
      id: "hustle",
      client: "Hustle",
      code: "HST",
      logo: "assets/cases/hustle.png",
      logoClass: "is-wide",
      theme: { accent: "#ff5f3d", accentAlt: "#ffd166", ink: "#071014" },
      family: "operation",
      familyLabel: "Operación",
      moments: [
        { id: "acquisition", label: "Adquisición" },
        { id: "retention", label: "Fidelización" },
      ],
      headline: "Del primer vistazo al siguiente paso: hacerse socio.",
      challenge:
        "Evitar que el interés se perdiera entre conocer el gimnasio, reservar y hacerse socio.",
      summary:
        "Unificamos el recorrido entre presencia web, reservaciones y membresías para que la intención no se perdiera entre sistemas.",
      scope: ["Sitio administrable", "Aplicación móvil", "Flujo de membresías"],
      evidenceTitle: "Un recorrido, no dos productos.",
      enablement: [
        "Orientar el tráfico hacia la aplicación.",
        "Conectar reservaciones con membresías.",
        "Mantener continuidad entre sitio, app y socio.",
      ],
    },
    {
      id: "piel-russo",
      client: "Piel Russo",
      code: "PRS",
      logo: "assets/cases/piel-russo.png",
      logoClass: "is-wide",
      theme: { accent: "#ff5c8a", accentAlt: "#ffd1dc", ink: "#071014" },
      family: "ai",
      familyLabel: "Producción con IA",
      moments: [
        { id: "acquisition", label: "Adquisición" },
        { id: "operation", label: "Operación" },
      ],
      headline: "Un catálogo reinventado con agentes de IA.",
      challenge:
        "Presentar mejor el portafolio partiendo de fotografías con limitaciones de calidad.",
      summary:
        "Creamos agentes para preparar producto, generar nuevos entornos y producir imágenes y video integrados a un catálogo administrable.",
      scope: ["Agentes de imagen", "Producción audiovisual", "Catálogo web"],
      evidenceTitle: "Del material disponible a un catálogo nuevo.",
      enablement: [
        "Preparar cada producto para nuevas escenas.",
        "Generar imagen y video con una línea consistente.",
        "Publicar el resultado en un catálogo administrable.",
      ],
    },
    {
      id: "within",
      client: "With(in)",
      code: "WTN",
      logo: "assets/cases/within.png",
      logoClass: "is-wide is-white",
      theme: { accent: "#38c6f4", accentAlt: "#a8efff", ink: "#071014" },
      family: "system",
      familyLabel: "Sistema conectado",
      moments: [
        { id: "acquisition", label: "Adquisición" },
        { id: "operation", label: "Operación" },
        { id: "retention", label: "Fidelización" },
      ],
      headline: "Empezamos por las citas. Seguimos por el negocio.",
      challenge:
        "Atender, agendar y dar seguimiento sin perder el contexto de cada paciente ni de la operación.",
      summary:
        "La solución evolucionó de sitio y agenda a memoria operativa, captación, contenido y seguimiento comercial conectado.",
      scope: ["Atención y agenda", "Clone U", "Captación y CRM"],
      evidenceTitle: "Un sistema que creció con la operación.",
      enablement: [
        "Resolver dudas y llevarlas hacia una cita.",
        "Organizar expedientes y conocimiento operativo.",
        "Conectar captación, contenido y seguimiento comercial.",
      ],
    },
    {
      id: "xpress-brands",
      client: "Xpress Brands",
      code: "XPB",
      logo: "assets/cases/xpress-brands.png",
      logoClass: "is-wide",
      theme: { accent: "#7aa7ff", accentAlt: "#e1e9ff", ink: "#071014" },
      family: "development",
      familyLabel: "Plataforma",
      moments: [
        { id: "operation", label: "Operación" },
        { id: "development", label: "Desarrollo" },
      ],
      headline: "Una plataforma. Tres roles. Un servicio conectado.",
      challenge:
        "Coordinar administradores, clientes y abogados sin fragmentar el proceso de registro de marcas.",
      summary:
        "Diseñamos una plataforma para coordinar administradores, clientes y abogados dentro del mismo flujo de registro de marcas.",
      scope: ["Plataforma administrable", "Tres perfiles", "Flujo por responsable"],
      evidenceTitle: "Tres espacios. Una misma operación.",
      enablement: [
        "Dar a cada perfil un espacio propio.",
        "Ordenar entregas y revisiones por responsable.",
        "Concentrar la operación del servicio en una plataforma.",
      ],
    },
    {
      id: "nuevo-kankuun",
      client: "Colegio Nuevo Kankuun",
      code: "KNK",
      logo: "assets/cases/colegio-nuevo-kaan-kun.png",
      theme: { accent: "#2ee6bf", accentAlt: "#f3c95f", ink: "#071014" },
      family: "experience",
      familyLabel: "Experiencia digital",
      moments: [
        { id: "acquisition", label: "Adquisición" },
        { id: "operation", label: "Operación" },
      ],
      headline: "Lo que las familias buscan. Lo que el colegio realmente ofrece.",
      challenge:
        "Convertir las preguntas de las familias en una experiencia que ayudara a entender, confiar y agendar.",
      summary:
        "Ordenamos la experiencia alrededor de la intención de búsqueda e integramos contenido, atención y agenda sin perder la identidad del colegio.",
      scope: ["Arquitectura de contenido", "Bot de atención", "Producción institucional"],
      evidenceTitle: "De la búsqueda a la conversación.",
      enablement: [
        "Organizar la información por intención de búsqueda.",
        "Resolver dudas y dar seguimiento a citas.",
        "Presentar al colegio con una identidad visual consistente.",
      ],
    },
    {
      id: "ps-promocionales",
      client: "PS Promocionales",
      code: "PSP",
      logo: "assets/cases/ps-promocionales.png",
      logoClass: "is-wide",
      theme: { accent: "#4f8cff", accentAlt: "#76dcff", ink: "#071014" },
      family: "acquisition",
      familyLabel: "Adquisición",
      moments: [
        { id: "acquisition", label: "Adquisición" },
        { id: "operation", label: "Operación" },
      ],
      headline: "No solo mostrar productos. Mostrar lo que hacen posible.",
      challenge:
        "Pasar de un catálogo a un sistema comercial donde cada interés tuviera un siguiente paso.",
      summary:
        "Conectamos presencia web, prospección, contenido, pauta y CRM para que cada contacto tuviera un siguiente paso comercial.",
      scope: ["Sitio y captación", "Prospección", "CRM y reportes"],
      evidenceTitle: "Del producto a la oportunidad.",
      enablement: [
        "Explicar posibilidades según cada audiencia.",
        "Activar prospección, pauta y captación.",
        "Centralizar contactos y seguimiento en el CRM.",
      ],
    },
    {
      id: "grey-mexico",
      client: "Grey México",
      code: "GRY",
      logo: "assets/cases/grey.svg",
      logoClass: "is-wide",
      theme: { accent: "#b9a2ff", accentAlt: "#ff62d4", ink: "#071014" },
      family: "ai",
      familyLabel: "Creatividad con IA",
      moments: [
        { id: "acquisition", label: "Adquisición" },
        { id: "development", label: "Desarrollo" },
      ],
      headline: "Abrir puertas comerciales. Darle voz a nuevas ideas.",
      challenge:
        "Abrir oportunidades comerciales y producir nuevas expresiones de voz y audio para las ideas de la agencia.",
      summary:
        "Combinamos prospección comercial con creación y clonación de voces, audio y diseño sonoro para piezas de comunicación.",
      scope: ["Prospección", "Voces con IA", "Diseño sonoro"],
      evidenceTitle: "Prospección y producción creativa.",
      enablement: [
        "Construir bases y materiales para abrir conversaciones.",
        "Crear voces y audio para piezas de clientes.",
        "Producir presentaciones de casos para concursos.",
      ],
    },
    {
      id: "mundo-futuro",
      client: "Mundo Futuro",
      code: "MFT",
      logo: "assets/cases/mundo-futuro.png",
      logoClass: "is-wide",
      theme: { accent: "#39ff14", accentAlt: "#38c6f4", ink: "#071014" },
      family: "ai",
      familyLabel: "Laboratorio creativo",
      moments: [
        { id: "development", label: "Desarrollo" },
      ],
      headline: "El futuro no solo se cuenta. También se produce.",
      challenge:
        "Dar una misma dirección creativa a imagen, copy, voz, audio y movimiento producidos con IA.",
      summary:
        "Construimos un laboratorio creativo que combina dirección gráfica, copy, voz, audio y video para producir piezas con IA.",
      scope: ["Dirección gráfica", "Audio y voces", "Spots y animación"],
      evidenceTitle: "Un laboratorio con dirección, no generación al azar.",
      enablement: [
        "Explorar formatos sin perder dirección creativa.",
        "Conectar copy, gráficos, voz, audio y video.",
        "Producir spots, animaciones y portadas bajo un sistema.",
      ],
    },
  ],
  services: [
    { id: "consulting", name: "Consultoría" },
    { id: "integration", name: "Integraciones" },
    { id: "automation", name: "Automatización" },
    { id: "custom", name: "Desarrollo a medida" },
  ],
});
