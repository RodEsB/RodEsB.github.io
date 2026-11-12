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
    items: ['Amazon Bedrock', 'AgentCore', 'Strands Agents', 'MCP', 'RAG', 'LangChain', 'LangSmith', 'LLM evaluation'],
  },
  {
    en: 'Cloud and DevOps',
    es: 'Nube y DevOps',
    items: ['AWS Lambda', 'S3 Vectors', 'DynamoDB', 'API Gateway', 'AWS CDK', 'CloudFormation', 'IAM', 'CloudWatch', 'Jenkins', 'Docker', 'Datadog'],
  },
  {
    en: 'Languages',
    es: 'Lenguajes',
    items: ['Python', 'TypeScript', 'JavaScript', 'C++', 'Swift', 'Shell'],
  },
  {
    en: 'Frameworks and tools',
    es: 'Frameworks y herramientas',
    items: ['React', 'React Native', 'Node.js', 'SwiftUI', 'Flask', 'OpenCV', 'TensorFlow', 'Pinecone', 'Figma'],
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
        'I graduated in Software Engineering from UDLAP in 2026 and I am studying for the AWS Solutions Architect certification. I speak Spanish and English.',
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
        },
        {
          period: 'Feb 2026 to May 2026',
          role: 'AI and Automation Consultant Intern',
          company: 'Ellucian',
          text: 'Built an onboarding assistant from start to finish, including the pipelines that feed it company knowledge.',
        },
        {
          period: 'Sep 2024 to Jan 2026',
          role: 'Quality and Development Analyst, Generative AI',
          company: 'Outlier AI',
          text: 'Evaluated language model outputs and improved system prompts and AI-generated code.',
        },
        {
          period: 'Jun 2025 to Aug 2025',
          role: 'Software Development Intern',
          company: 'Merkur.ia',
          text: 'Developed LangChain agents, Python scraping pipelines and a React Native dashboard.',
        },
        {
          period: 'Apr 2024 to Aug 2024',
          role: 'Quality and Process Management Intern',
          company: 'T-Systems Mexico',
          text: 'Created GPT-powered mini-games with Microsoft Power Apps.',
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
          text: 'I created the architecture for an AI agent that employees can ask for help with everyday work. It connects to the services the company already uses, respects each person\'s permissions, and runs in the cloud on AWS.',
          stack: ['Amazon Bedrock AgentCore', 'Strands Agents', 'MCP', 'Python', 'AWS CDK'],
        },
        {
          id: 'fatigue',
          name: 'Driver Fatigue Detection',
          context: 'Personal project, 2025',
          text: 'An iOS app that watches the driver through the camera and sounds an alarm when it sees persistent signs of fatigue. The phone sends video frames to a Python server, where a MobileNetV2 model classifies each one.',
          stack: ['SwiftUI', 'Python', 'TensorFlow', 'OpenCV', 'MobileNetV2'],
          url: 'https://github.com/RodEsB/Fatigue-Detection-IOS',
        },
        {
          id: 'trusty',
          name: 'TrustyWeb',
          context: 'Personal project, 2024',
          text: 'A Chromium extension that helps you judge what you read online. It checks a page or a selected text with the OpenAI API and suggests other sources so you can compare.',
          stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'OpenAI API'],
          url: 'https://github.com/RodEsB/TrustyWeb-Extension-Web',
        },
      ],
      altAgent: 'Interactive 3D scene: an agent at the center connected to the services around it, with signals travelling between them',
      dragHint: 'Drag to rotate',
      altFatigue: 'Animation of the app tracking a face: the eyes close and the fatigue alarm goes off',
      fatigueAwake: 'Awake',
      fatigueAlert: 'Fatigue detected',
      altTrusty: 'TrustyWeb logo, a spider web shaped like a shield',
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
        'Me gradué de Ingeniería de Software en la UDLAP en 2026 y estoy estudiando para la certificación AWS Solutions Architect. Hablo español e inglés.',
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
        },
        {
          period: 'Feb 2026 a may 2026',
          role: 'AI and Automation Consultant Intern',
          company: 'Ellucian',
          text: 'Construí de principio a fin un asistente de onboarding, incluidos los pipelines que lo alimentan con el conocimiento de la empresa.',
        },
        {
          period: 'Sep 2024 a ene 2026',
          role: 'Analista de Calidad y Desarrollo en IA Generativa',
          company: 'Outlier AI',
          text: 'Evalué respuestas de modelos de lenguaje y mejoré prompts de sistema y código generado por IA.',
        },
        {
          period: 'Jun 2025 a ago 2025',
          role: 'Practicante de Desarrollo de Software',
          company: 'Merkur.ia',
          text: 'Desarrollé agentes con LangChain, pipelines de scraping en Python y un dashboard en React Native.',
        },
        {
          period: 'Abr 2024 a ago 2024',
          role: 'Practicante de Calidad y Gestión de Procesos',
          company: 'T-Systems México',
          text: 'Creé minijuegos impulsados por GPT con Microsoft Power Apps.',
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
          text: 'Creé la arquitectura de un agente de IA al que los empleados pueden pedir ayuda con su trabajo diario. Se conecta a los servicios que la empresa ya usa, respeta los permisos de cada persona y corre en la nube de AWS.',
          stack: ['Amazon Bedrock AgentCore', 'Strands Agents', 'MCP', 'Python', 'AWS CDK'],
        },
        {
          id: 'fatigue',
          name: 'Detección de fatiga al volante',
          context: 'Proyecto personal, 2025',
          text: 'Una app de iOS que observa al conductor con la cámara y activa una alarma cuando detecta señales persistentes de fatiga. El teléfono envía los cuadros de video a un servidor en Python, donde un modelo MobileNetV2 clasifica cada uno.',
          stack: ['SwiftUI', 'Python', 'TensorFlow', 'OpenCV', 'MobileNetV2'],
          url: 'https://github.com/RodEsB/Fatigue-Detection-IOS',
        },
        {
          id: 'trusty',
          name: 'TrustyWeb',
          context: 'Proyecto personal, 2024',
          text: 'Una extensión para Chromium que te ayuda a evaluar lo que lees en internet. Revisa una página o un texto seleccionado con la API de OpenAI y sugiere otras fuentes para comparar.',
          stack: ['React', 'TypeScript', 'Vite', 'Node.js', 'OpenAI API'],
          url: 'https://github.com/RodEsB/TrustyWeb-Extension-Web',
        },
      ],
      altAgent: 'Escena 3D interactiva: un agente al centro conectado a los servicios que lo rodean, con señales que viajan entre ellos',
      dragHint: 'Arrastra para girar',
      altFatigue: 'Animación de la app siguiendo un rostro: los ojos se cierran y se activa la alarma de fatiga',
      fatigueAwake: 'Despierto',
      fatigueAlert: 'Fatiga detectada',
      altTrusty: 'Logo de TrustyWeb, una telaraña con forma de escudo',
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
