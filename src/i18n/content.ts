// Todo el texto del sitio vive aquí, en inglés y español.
// Para cambiar un texto, edita la misma clave en ambos idiomas.

export type Lang = 'en' | 'es';

export const links = {
  github: 'https://github.com/RodEsB',
  linkedin: 'https://www.linkedin.com/in/rodrigo-espíritu-berra',
  x: 'https://twitter.com/Rod_Es_B',
  email: 'mailto:rodrigo.espirituberra@gmail.com',
  resume: '/Rodrigo-Espiritu-Berra-Resume.pdf',
};

export const skills = [
  {
    en: 'AI and agents',
    es: 'IA y agentes',
    items: ['Amazon Bedrock', 'Bedrock Knowledge Bases', 'AgentCore', 'Strands Agents', 'MCP', 'RAG', 'LangChain', 'LangSmith', 'LLM evaluation'],
  },
  {
    en: 'Cloud and DevOps',
    es: 'Nube y DevOps',
    items: ['AWS Lambda', 'S3 Vectors', 'DynamoDB', 'API Gateway', 'AWS CDK', 'CloudFormation', 'IAM', 'CloudWatch', 'Jenkins', 'Docker', 'Datadog'],
  },
  {
    en: 'Languages',
    es: 'Lenguajes',
    items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C++', 'Swift', 'Kotlin', 'SQL', 'Shell'],
  },
  {
    en: 'Frameworks and tools',
    es: 'Frameworks y herramientas',
    items: ['React', 'React Native', 'Node.js', 'SwiftUI', 'Flask', 'OpenCV', 'TensorFlow', 'Selenium', 'Streamlit', 'Pinecone', 'Figma'],
  },
];

export const content = {
  en: {
    meta: {
      title: 'Rodrigo Espíritu Berra, AI engineer',
      description:
        'Portfolio of Rodrigo Espíritu Berra, a software engineer in Puebla, Mexico who builds enterprise AI agents on AWS.',
    },
    nav: { about: 'About', experience: 'Experience', projects: 'Projects', blog: 'Blog', resume: 'Download résumé', menu: 'Menu' },
    switchLabel: 'Leer en español',
    switchShort: 'ES',
    skip: 'Skip to content',
    hero: {
      name: 'Rodrigo Espíritu Berra',
      lines: ['I build AI agents', 'companies can', 'put to work.'],
      lede: 'Software engineer in Puebla, Mexico. I work as an AI and Automation Consultant at Ellucian, taking agents from architecture to production on AWS.',
      primary: 'See my projects',
      secondary: 'Get in touch',
      hint: 'Move your cursor through the particles',
    },
    about: {
      title: 'About me',
      body: [
        'I like the part of AI that comes after the demo: making an agent reliable enough that a company can depend on it. That means clear architecture, tools the agent can use safely, and tests that show how it behaves before anyone else finds out.',
        'I am self-taught at heart. If something looks interesting I usually end up building a side project with it, which is how I got from C++ and Swift to cloud infrastructure, frontends in React and agent runtimes.',
        'I graduated in Software Engineering from UDLAP in 2026. I hold the Google Cloud Computing Foundations certification and I am studying for the AWS Solutions Architect one. I speak Spanish and English.',
      ],
      skillsTitle: 'What I work with',
    },
    experience: {
      title: 'Experience',
      items: [
        {
          period: 'Jun 2026 to today',
          role: 'AI and Automation Consultant',
          company: 'Ellucian',
          text: 'I design and build the architecture for enterprise AI agents connected to internal company services, along with the evaluation that checks how they behave.',
          points: [
            'Build the runtimes where the agents live on AWS, with Bedrock AgentCore, Strands Agents and MCP.',
            'Develop the knowledge retrieval that lets agents search internal documentation and work tools.',
            'Create tool integrations that identify who is asking and respect their permissions.',
            'Designed an automated evaluation framework that catches behavior defects before release.',
          ],
        },
        {
          period: 'Feb 2026 to May 2026',
          role: 'AI and Automation Consultant Intern',
          company: 'Ellucian',
          text: 'Built an onboarding assistant from start to finish, including the pipelines that feed it company knowledge.',
          points: [
            'Wrote Python pipelines that collect, clean and tag internal documentation.',
            'Designed the retrieval strategy and conversation flow with Amazon Bedrock, and wrote its system prompts.',
            'Connected the assistant to Slack end to end with API Gateway, Lambda and DynamoDB.',
            'Lowered the cost of the architecture with S3 Vectors and set up a Jenkins CI/CD pipeline.',
          ],
        },
        {
          period: 'Sep 2024 to Jan 2026',
          role: 'Quality and Development Analyst, Generative AI',
          company: 'Outlier AI',
          points: [
            'Designed and refined prompts to evaluate and improve state-of-the-art language models.',
            'Reviewed and optimized AI-generated code in Python and JSON.',
            'Validated APIs and data structures for AI models, and audited tasks against enterprise quality standards.',
          ],
        },
        {
          period: 'Jun 2025 to Aug 2025',
          role: 'Software Development Intern',
          company: 'Merkur.ia',
          points: [
            'Built AI agents with LangChain and LangSmith that made data easier to visualize and interpret.',
            'Implemented web scraping pipelines in Python.',
            'Developed a full-stack weather dashboard in React Native and TypeScript, with Pinecone for data storage.',
          ],
        },
        {
          period: 'Apr 2024 to Aug 2024',
          role: 'Quality and Process Management Intern',
          company: 'T-Systems Mexico',
          points: [
            'Developed a video game in Power Apps with GPT-based mini-games, driven by prompt engineering and JSON and CSV data.',
            'Designed and built a Power Pages website with HTML, CSS and JavaScript, prototyped in Figma.',
            'Optimized an SQL database, cutting query time by 70%.',
            'Worked with Agile, Scrum and Design Thinking.',
          ],
        },
      ],
    },
    projects: {
      title: 'Projects',
      repo: 'View the code on GitHub',
      items: [
        {
          id: 'agent',
          name: 'Enterprise AI agent',
          context: 'Ellucian, 2026',
          text: 'I created the architecture for an AI agent that employees can ask for help with everyday work. Instead of answering from memory, it works through the services the company already uses: it looks things up, takes actions on the person\'s behalf and says where its answers come from.',
          points: [
            'A modular runtime on AWS: each capability is a separate tool the agent can pick up, so adding a new service does not mean rebuilding the agent.',
            'Knowledge retrieval over internal documentation and work tools, with references back to the original documents.',
            'Identity-aware tools: before acting, the agent resolves who is asking, checks their permissions and refuses when it cannot confirm them.',
            'An automated evaluation framework that runs the agent through repeated test cases and surfaced defects in how it chose tools and asked for confirmation.',
            'Observability to diagnose latency, errors and resource use, all deployed as infrastructure as code.',
          ],
          stack: ['Amazon Bedrock AgentCore', 'Strands Agents', 'MCP', 'Python', 'AWS CDK', 'React', 'TypeScript'],
        },
        {
          id: 'onboarding',
          name: 'Onboarding assistant',
          context: 'Ellucian, 2026',
          text: 'A chatbot that answers new hires\' questions right inside Slack, using the company\'s own documentation. I built it end to end during my internship, from collecting the documents to the conversation people see.',
          points: [
            'Ingestion pipelines in Python that collect internal documentation, clean it and add metadata so the right passage can be found.',
            'A retrieval strategy tuned for the content, with guardrails, a designed conversation flow and system prompts that give the assistant its voice.',
            'A Slack integration built on API Gateway and Lambda, with conversations stored in DynamoDB and a handoff to a person when the assistant cannot solve a request.',
            'A test dataset and automated evaluations to measure answer quality before each change.',
            'A cheaper architecture after moving vector storage to S3 Vectors, plus a Jenkins CI/CD pipeline to ship updates continuously.',
          ],
          stack: ['Amazon Bedrock', 'Knowledge Bases', 'S3 Vectors', 'Lambda', 'API Gateway', 'DynamoDB', 'Python', 'Jenkins'],
        },
        {
          id: 'fatigue',
          name: 'Driver Fatigue Detection',
          context: 'Personal project, 2025',
          text: 'An iOS app that watches the driver through the camera and sounds an alarm when it sees persistent signs of fatigue. The phone captures video frames and sends them to a Python server, where a MobileNetV2 model classifies each one as awake or fatigued.',
          points: [
            'A vision pipeline before the model: it confirms there is a face, crops it and normalizes the image, which improved accuracy noticeably.',
            'A persistence rule over time, so a single blink does not trigger the alarm; this sharply reduced false positives.',
            'Ablation studies comparing the raw image, the preprocessed image and the full pipeline against manually labeled data.',
          ],
          stack: ['SwiftUI', 'Python', 'TensorFlow', 'OpenCV', 'MobileNetV2'],
          url: 'https://github.com/RodEsB/Fatigue-Detection-IOS',
        },
        {
          id: 'trusty',
          name: 'TrustyWeb',
          context: 'HackPuebla 2024, state winner',
          text: 'A Chromium extension that helps you judge what you read online. I built it at HackPuebla, a hackathon organized by Ellucian and Forvia about telling reliable information apart, where it won the state contest.',
          points: [
            'Checks a URL or a selected text in real time with the OpenAI API.',
            'Suggests alternative sources so you can compare and form your own view.',
            'An interface in React and TypeScript, built with Vite and a Node.js backend.',
          ],
          stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'OpenAI API'],
          url: 'https://github.com/RodEsB/TrustyWeb-Extension-Web',
        },
      ],
      altOnboarding: 'Animation of the assistant: documents feed a knowledge base, someone asks a question in the chat and the assistant answers with its sources',
      onbQuestion: 'Where do I start?',
      onbKb: 'Knowledge base',
      onbSources: 'Sources',
      altAgent: 'Interactive 3D scene: an agent at the center connected to the services around it, with signals travelling between them',
      dragHint: 'Drag to rotate',
      altFatigue: 'Animation of the app tracking a face: the eyes close and the fatigue alarm goes off',
      fatigueAwake: 'Awake',
      fatigueAlert: 'Fatigue detected',
      altTrusty: 'Animation of the extension: a text is selected on a page, TrustyWeb analyzes it and suggests sources to compare',
      trustyAnalyzing: 'Analyzing',
      trustyReady: 'Analysis ready',
      trustySources: 'Sources to compare',
    },
    more: {
      title: 'More projects',
      items: [
        { name: 'WayZT', year: '2024', text: 'An iOS app for recycling. It locates recycling points on a map with MapKit and uses CoreML to detect and classify waste automatically.', stack: 'Swift, MapKit, CoreML', url: 'https://github.com/RodEsB/WayZT-IOS-App' },
        { name: 'Secure Chat App', year: '2024', text: 'A chat app in Kotlin with RSA encryption, authentication and real-time messaging on Firebase.', stack: 'Kotlin, XML, Firebase', url: 'https://github.com/RodEsB/Secure-Chat-App' },
        { name: 'EduAR', year: '2023', text: 'An augmented reality app that motivates high school students in STEM subjects through an immersive interface.', stack: 'Swift, SwiftUI, Reality Composer', url: 'https://github.com/RodEsB/EduAR' },
        { name: 'House Control', year: '2023', text: 'A home control system in Java, built on data structures and the Observer pattern.', stack: 'Java', url: 'https://github.com/RodEsB/House-Control' },
      ],
    },
    competitions: {
      title: 'Hackathons and competitions',
      items: [
        { period: 'Summer 2024', name: 'HackPuebla', result: 'State winner', text: 'A hackathon organized by Ellucian and Forvia on information discernment. I developed TrustyWeb, a full-stack Chrome extension built on the ChatGPT API.' },
        { period: 'Spring 2024', name: 'ETH Cinco de Mayo Hackathon', text: 'Built a web app on blockchain for competitive gaming transactions, using MetaMask, Astar and Remix Ethereum IDE.' },
        { period: 'Fall 2023', name: 'MAAC, Mission Alignment Community Challenge', result: 'National winner', text: 'Developed an educational app aligned with the UN 2030 Agenda that uses augmented reality to engage students. Designed in Figma and built with Swift, SwiftUI and Reality Composer.' },
        { period: 'Summer 2023', name: 'iOS Community Changers', text: 'Developed a mental health app for a national competition, focused on managing anxiety through an immersive experience: a calm virtual garden made with Reality Composer and an interface in SwiftUI.' },
      ],
    },
    blogTeaser: {
      title: 'Blog',
      text: 'Notes on building agents, AWS and side projects.',
      all: 'Read the blog',
    },
    blog: {
      title: 'Blog',
      intro: 'Notes on building AI agents, things learned on AWS, and side projects.',
      empty: 'No posts yet. The first one is on its way.',
      back: 'Back to the blog',
      published: 'Published',
    },
    contact: {
      title: 'Let\'s talk',
      text: 'Open to interesting projects, roles and conversations about AI agents. The fastest way to reach me is email or LinkedIn.',
      email: 'Send me an email',
    },
    footer: 'Built with Astro and Three.js.',
  },

  es: {
    meta: {
      title: 'Rodrigo Espíritu Berra, ingeniero de IA',
      description:
        'Portafolio de Rodrigo Espíritu Berra, ingeniero de software en Puebla, México, que construye agentes de IA empresariales en AWS.',
    },
    nav: { about: 'Sobre mí', experience: 'Experiencia', projects: 'Proyectos', blog: 'Blog', resume: 'Descargar CV', menu: 'Menú' },
    switchLabel: 'Read in English',
    switchShort: 'EN',
    skip: 'Saltar al contenido',
    hero: {
      name: 'Rodrigo Espíritu Berra',
      lines: ['Construyo agentes de IA', 'que las empresas sí', 'ponen a trabajar.'],
      lede: 'Ingeniero de software en Puebla, México. Trabajo como AI and Automation Consultant en Ellucian, llevando agentes desde la arquitectura hasta producción en AWS.',
      primary: 'Ver mis proyectos',
      secondary: 'Contáctame',
      hint: 'Mueve el cursor entre las partículas',
    },
    about: {
      title: 'Sobre mí',
      body: [
        'Me gusta la parte de la IA que viene después del demo: lograr que un agente sea tan confiable que una empresa pueda depender de él. Eso implica una arquitectura clara, herramientas que el agente pueda usar de forma segura y pruebas que muestren cómo se comporta antes de que alguien más lo descubra.',
        'Soy autodidacta de corazón. Si algo me parece interesante, casi siempre termino armando un proyecto con eso; así pasé de C++ y Swift a infraestructura en la nube, frontends en React y runtimes de agentes.',
        'Me gradué de Ingeniería de Software en la UDLAP en 2026. Tengo la certificación Google Cloud Computing Foundations y estoy estudiando para la de AWS Solutions Architect. Hablo español e inglés.',
      ],
      skillsTitle: 'Con qué trabajo',
    },
    experience: {
      title: 'Experiencia',
      items: [
        {
          period: 'Jun 2026 a hoy',
          role: 'AI and Automation Consultant',
          company: 'Ellucian',
          text: 'Diseño y construyo la arquitectura de agentes de IA empresariales conectados a los servicios internos de la compañía, junto con la evaluación que verifica cómo se comportan.',
          points: [
            'Construyo los runtimes donde viven los agentes en AWS, con Bedrock AgentCore, Strands Agents y MCP.',
            'Desarrollo la recuperación de conocimiento que permite a los agentes buscar en la documentación y las herramientas de trabajo internas.',
            'Creo integraciones de herramientas que identifican quién pregunta y respetan sus permisos.',
            'Diseñé un framework de evaluación automatizada que detecta defectos de comportamiento antes de liberar.',
          ],
        },
        {
          period: 'Feb 2026 a may 2026',
          role: 'AI and Automation Consultant Intern',
          company: 'Ellucian',
          text: 'Construí de principio a fin un asistente de onboarding, incluidos los pipelines que lo alimentan con el conocimiento de la empresa.',
          points: [
            'Escribí pipelines en Python que recopilan, limpian y etiquetan documentación interna.',
            'Diseñé la estrategia de recuperación y el flujo de conversación con Amazon Bedrock, y escribí sus system prompts.',
            'Conecté el asistente a Slack de extremo a extremo con API Gateway, Lambda y DynamoDB.',
            'Reduje el costo de la arquitectura con S3 Vectors y configuré un pipeline de CI/CD en Jenkins.',
          ],
        },
        {
          period: 'Sep 2024 a ene 2026',
          role: 'Analista de Calidad y Desarrollo en IA Generativa',
          company: 'Outlier AI',
          points: [
            'Diseñé y afiné prompts para evaluar y mejorar modelos de lenguaje de última generación.',
            'Revisé y optimicé código generado por IA en Python y JSON.',
            'Validé APIs y estructuras de datos para modelos de IA, y audité tareas contra estándares de calidad empresariales.',
          ],
        },
        {
          period: 'Jun 2025 a ago 2025',
          role: 'Practicante de Desarrollo de Software',
          company: 'Merkur.ia',
          points: [
            'Construí agentes de IA con LangChain y LangSmith que hicieron los datos más fáciles de visualizar e interpretar.',
            'Implementé pipelines de web scraping en Python.',
            'Desarrollé un dashboard meteorológico full stack en React Native y TypeScript, con Pinecone para almacenar los datos.',
          ],
        },
        {
          period: 'Abr 2024 a ago 2024',
          role: 'Practicante de Calidad y Gestión de Procesos',
          company: 'T-Systems México',
          points: [
            'Desarrollé un videojuego en Power Apps con minijuegos basados en GPT, usando prompt engineering y datos en JSON y CSV.',
            'Diseñé y construí un sitio en Power Pages con HTML, CSS y JavaScript, prototipado en Figma.',
            'Optimicé una base de datos SQL y reduje 70% el tiempo de consulta.',
            'Trabajé con Agile, Scrum y Design Thinking.',
          ],
        },
      ],
    },
    projects: {
      title: 'Proyectos',
      repo: 'Ver el código en GitHub',
      items: [
        {
          id: 'agent',
          name: 'Agente de IA empresarial',
          context: 'Ellucian, 2026',
          text: 'Creé la arquitectura de un agente de IA al que los empleados pueden pedir ayuda con su trabajo diario. En lugar de responder de memoria, trabaja a través de los servicios que la empresa ya usa: consulta información, ejecuta acciones a nombre de la persona y dice de dónde salen sus respuestas.',
          points: [
            'Un runtime modular en AWS: cada capacidad es una herramienta independiente que el agente puede tomar, así que sumar un servicio nuevo no implica rehacer el agente.',
            'Recuperación de conocimiento sobre la documentación y las herramientas de trabajo internas, con referencias a los documentos originales.',
            'Herramientas conscientes de la identidad: antes de actuar, el agente resuelve quién pregunta, revisa sus permisos y se niega cuando no puede confirmarlos.',
            'Un framework de evaluación automatizada que somete al agente a casos de prueba repetidos y detectó defectos en cómo elegía herramientas y pedía confirmación.',
            'Observabilidad para diagnosticar latencia, errores y consumo de recursos, todo desplegado como infraestructura como código.',
          ],
          stack: ['Amazon Bedrock AgentCore', 'Strands Agents', 'MCP', 'Python', 'AWS CDK', 'React', 'TypeScript'],
        },
        {
          id: 'onboarding',
          name: 'Asistente de onboarding',
          context: 'Ellucian, 2026',
          text: 'Un chatbot que responde las dudas de quienes acaban de entrar a la empresa, directo en Slack y con la documentación de la propia compañía. Lo construí de principio a fin durante mis prácticas, desde reunir los documentos hasta la conversación que ve la gente.',
          points: [
            'Pipelines de ingesta en Python que recopilan documentación interna, la limpian y le agregan metadatos para encontrar el pasaje correcto.',
            'Una estrategia de recuperación ajustada al contenido, con guardrails, un flujo de conversación diseñado y system prompts que le dan su voz al asistente.',
            'Integración con Slack sobre API Gateway y Lambda, con las conversaciones guardadas en DynamoDB y canalización a una persona cuando el asistente no puede resolver una petición.',
            'Un dataset de prueba y evaluaciones automatizadas para medir la calidad de las respuestas antes de cada cambio.',
            'Una arquitectura más barata tras mover el almacenamiento vectorial a S3 Vectors, y un pipeline de CI/CD en Jenkins para publicar mejoras de forma continua.',
          ],
          stack: ['Amazon Bedrock', 'Knowledge Bases', 'S3 Vectors', 'Lambda', 'API Gateway', 'DynamoDB', 'Python', 'Jenkins'],
        },
        {
          id: 'fatigue',
          name: 'Detección de fatiga al volante',
          context: 'Proyecto personal, 2025',
          text: 'Una app de iOS que observa al conductor con la cámara y activa una alarma cuando detecta señales persistentes de fatiga. El teléfono captura los cuadros de video y los envía a un servidor en Python, donde un modelo MobileNetV2 clasifica cada uno como despierto o fatigado.',
          points: [
            'Un pipeline de visión antes del modelo: confirma que hay un rostro, lo recorta y normaliza la imagen, lo que mejoró la precisión de forma notable.',
            'Una regla de persistencia en el tiempo, para que un parpadeo no dispare la alarma; esto redujo drásticamente los falsos positivos.',
            'Estudios de ablación que comparan la imagen cruda, la imagen preprocesada y el pipeline completo contra datos etiquetados a mano.',
          ],
          stack: ['SwiftUI', 'Python', 'TensorFlow', 'OpenCV', 'MobileNetV2'],
          url: 'https://github.com/RodEsB/Fatigue-Detection-IOS',
        },
        {
          id: 'trusty',
          name: 'TrustyWeb',
          context: 'HackPuebla 2024, ganador estatal',
          text: 'Una extensión para Chromium que te ayuda a evaluar lo que lees en internet. La construí en HackPuebla, un hackathon organizado por Ellucian y Forvia sobre cómo distinguir información confiable, donde ganó el concurso estatal.',
          points: [
            'Revisa una URL o un texto seleccionado en tiempo real con la API de OpenAI.',
            'Sugiere fuentes alternativas para que compares y formes tu propio criterio.',
            'Interfaz en React y TypeScript, construida con Vite y un backend en Node.js.',
          ],
          stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'OpenAI API'],
          url: 'https://github.com/RodEsB/TrustyWeb-Extension-Web',
        },
      ],
      altOnboarding: 'Animación del asistente: los documentos alimentan una base de conocimiento, alguien hace una pregunta en el chat y el asistente responde con sus fuentes',
      onbQuestion: '¿Por dónde empiezo?',
      onbKb: 'Base de conocimiento',
      onbSources: 'Fuentes',
      altAgent: 'Escena 3D interactiva: un agente al centro conectado a los servicios que lo rodean, con señales que viajan entre ellos',
      dragHint: 'Arrastra para girar',
      altFatigue: 'Animación de la app siguiendo un rostro: los ojos se cierran y se activa la alarma de fatiga',
      fatigueAwake: 'Despierto',
      fatigueAlert: 'Fatiga detectada',
      altTrusty: 'Animación de la extensión: se selecciona un texto en una página, TrustyWeb lo analiza y sugiere fuentes para comparar',
      trustyAnalyzing: 'Analizando',
      trustyReady: 'Análisis listo',
      trustySources: 'Fuentes para comparar',
    },
    more: {
      title: 'Más proyectos',
      items: [
        { name: 'WayZT', year: '2024', text: 'Una app de iOS para reciclar. Ubica puntos de reciclaje en el mapa con MapKit y usa CoreML para detectar y clasificar residuos automáticamente.', stack: 'Swift, MapKit, CoreML', url: 'https://github.com/RodEsB/WayZT-IOS-App' },
        { name: 'Secure Chat App', year: '2024', text: 'Una app de chat en Kotlin con cifrado RSA, autenticación y mensajería en tiempo real sobre Firebase.', stack: 'Kotlin, XML, Firebase', url: 'https://github.com/RodEsB/Secure-Chat-App' },
        { name: 'EduAR', year: '2023', text: 'Una app de realidad aumentada que motiva a estudiantes de preparatoria en materias STEM con una interfaz inmersiva.', stack: 'Swift, SwiftUI, Reality Composer', url: 'https://github.com/RodEsB/EduAR' },
        { name: 'House Control', year: '2023', text: 'Un sistema de control para el hogar en Java, construido con estructuras de datos y el patrón Observer.', stack: 'Java', url: 'https://github.com/RodEsB/House-Control' },
      ],
    },
    competitions: {
      title: 'Hackathones y competencias',
      items: [
        { period: 'Verano 2024', name: 'HackPuebla', result: 'Ganador estatal', text: 'Un hackathon organizado por Ellucian y Forvia sobre discernimiento de la información. Desarrollé TrustyWeb, una extensión full stack para Chrome construida sobre la API de ChatGPT.' },
        { period: 'Primavera 2024', name: 'ETH Cinco de Mayo Hackathon', text: 'Construí una aplicación web sobre blockchain para transacciones en videojuegos competitivos, con MetaMask, Astar y Remix Ethereum IDE.' },
        { period: 'Otoño 2023', name: 'MAAC, Mission Alignment Community Challenge', result: 'Ganador nacional', text: 'Desarrollé una app educativa alineada con la Agenda 2030 de la ONU que usa realidad aumentada para involucrar a los estudiantes. Diseñada en Figma y construida con Swift, SwiftUI y Reality Composer.' },
        { period: 'Verano 2023', name: 'iOS Community Changers', text: 'Desarrollé una app de salud mental para una competencia nacional, enfocada en el manejo de la ansiedad con una experiencia inmersiva: un jardín virtual tranquilo hecho con Reality Composer y una interfaz en SwiftUI.' },
      ],
    },
    blogTeaser: {
      title: 'Blog',
      text: 'Notas sobre agentes, AWS y proyectos personales.',
      all: 'Leer el blog',
    },
    blog: {
      title: 'Blog',
      intro: 'Notas sobre cómo construir agentes de IA, aprendizajes en AWS y proyectos personales.',
      empty: 'Todavía no hay artículos. El primero viene en camino.',
      back: 'Volver al blog',
      published: 'Publicado',
    },
    contact: {
      title: 'Hablemos',
      text: 'Abierto a proyectos interesantes, oportunidades y conversaciones sobre agentes de IA. Lo más rápido es escribirme por correo o LinkedIn.',
      email: 'Envíame un correo',
    },
    footer: 'Hecho con Astro y Three.js.',
  },
} as const;

export const home = (lang: Lang) => (lang === 'en' ? '/' : '/es/');
export const blogHome = (lang: Lang) => (lang === 'en' ? '/blog/' : '/es/blog/');
