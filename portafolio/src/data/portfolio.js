import { 
  FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython, 
  FaDatabase, FaBootstrap, FaGithub, FaGoogle, FaCloud,
  FaChartBar, FaJava, FaGitAlt, FaDocker, FaLinux,
  FaAws, FaMicrosoft, FaRegFileExcel
} from 'react-icons/fa';
import { 
  SiMysql, SiPostgresql, SiMongodb, SiPandas, SiStreamlit,
  SiTypescript, SiNextdotjs, SiTailwindcss, SiFastapi, SiScikitlearn,
  SiNodedotjs, SiGoogleanalytics, SiGooglecloud, SiRedis,
  SiVercel, SiNetlify, SiJupyter
} from 'react-icons/si';

import promptlabPreview from '../assets/promptlab-preview.jpeg';

import advancedDataAnalyticsImg from '../assets/certificates/advanced-data-analytics.png';
import dataScienceImg from '../assets/certificates/data-science.png';
import dataAnalyticsImg from '../assets/certificates/data-analytics.png';
import fullstackImg from '../assets/certificates/fullstack.png';
import microsoft365Img from '../assets/certificates/microsoft-365.png';
import aiProductManagerImg from '../assets/certificates/ai-product-manager.png';
import scrumMasterImg from '../assets/certificates/scrum-master.png';
import azureCybersecurityImg from '../assets/certificates/azure-cybersecurity.png';
import itSupportImg from '../assets/certificates/it-support.png';
import iniciacionAiImg from '../assets/certificates/iniciacion-ai.png';
import googleCybersecurityImg from '../assets/certificates/google-cybersecurity.png';

export const certImages = {
  'advanced-data-analytics': advancedDataAnalyticsImg,
  'data-science': dataScienceImg,
  'data-analytics': dataAnalyticsImg,
  'fullstack': fullstackImg,
  'microsoft-365': microsoft365Img,
  'ai-product-manager': aiProductManagerImg,
  'scrum-master': scrumMasterImg,
  'azure-cybersecurity': azureCybersecurityImg,
  'it-support': itSupportImg,
  'iniciacion-ai': iniciacionAiImg,
  'google-cybersecurity': googleCybersecurityImg
};

export const projectImages = {
  'promptlab-preview': promptlabPreview
};

export const personalInfo = {
  name: "Juan Esteban Argüello Botero",
  nickname: "Masta Dev",
  title: "Analista de Datos / Desarrollador de Software",
  location: "Pereira, Colombia",
  phone: "+57 315 141 3120",
  email: "juanarguello0526@gmail.com",
  linkedin: "https://www.linkedin.com/in/juan-e-argüello-5a9375349/",
  github: "https://github.com/JuanArguello26"
};

export const about = `
Analista de datos y tecnólogo en Desarrollo de Software con experiencia en análisis de datos
operativos, inteligencia de negocios y optimización de procesos logísticos. Especializado en
transformar grandes volúmenes de datos en información estratégica mediante Power BI, SQL, Python
y Excel avanzado.
`;

export const experience = [
  {
    company: "Legón",
    position: "Analista de Datos",
    period: "Febrero 2026 – Actualidad",
    highlights: [
      "Extracción, limpieza y transformación de datos utilizando SQL para análisis de negocio",
      "Desarrollo de dashboards interactivos en Power BI para monitoreo de KPIs",
      "Automatización de reportes mediante Excel avanzado y Power Query reduciendo ~30% el tiempo de generación",
      "Optimización de procesos analíticos reduciendo ~20 horas de trabajo manual mensual"
    ]
  },
  {
    company: "Crisalltex S.A.",
    position: "Analista de Producto",
    period: "Octubre 2024 – Enero 2026",
    highlights: [
      "Análisis de datos de ventas, inventario y logística para identificar patrones y tendencias",
      "Creación de dashboards y visualización de datos en Power BI para equipos administrativos",
      "Generación de insights que contribuyeron a reducir rupturas de stock en ~15%",
      "Apoyo en análisis para optimización de distribución y planificación de inventarios"
    ]
  },
  {
    company: "Crisalltex S.A.",
    position: "Auxiliar Logístico",
    period: "Febrero 2023 – Octubre 2024",
    highlights: [
      "Gestión de recepción de mercancía, etiquetado y surtido de inventario mediante sistemas de escaneo",
      "Participación en inventarios físicos y control de existencias",
      "Apoyo en cargue, descargue y organización de mercancía en bodega",
      "Asesoramiento directo a clientes en punto de venta"
    ]
  },
  {
    company: "Centro Logístico Almacenes Dmoda",
    position: "Auxiliar Logístico",
    period: "Noviembre 2020 – Diciembre 2022",
    highlights: [
      "Coordinación de procesos de picking y packing para preparación de pedidos",
      "Recepción, clasificación y etiquetado de productos en centro de distribución",
      "Apoyo en inventarios, cargue y descargue de mercancía"
    ]
  }
];

export const skills = {
  "Frontend": [
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" }
  ],
  "Backend": [
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Node.js", icon: FaNodeJs, color: "#339933" },
    { name: "Java", icon: FaJava, color: "#ED8B00" },
    { name: "FastAPI", icon: SiFastapi, color: "#009688" }
  ],
  "Bases de Datos": [
    { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" }
  ],
  "Data & Machine Learning": [
    { name: "Excel", icon: FaRegFileExcel, color: "#217346" },
    { name: "Pandas", icon: SiPandas, color: "#150458" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    { name: "Power BI", icon: FaChartBar, color: "#F2C811" },
    { name: "Streamlit", icon: SiStreamlit, color: "#FF4B4B" },
    { name: "Jupyter", icon: SiJupyter, color: "#F37626" },
    { name: "Google Analytics", icon: SiGoogleanalytics, color: "#E37400" }
  ],
  "Tools & Cloud": [
    { name: "Docker", icon: FaDocker, color: "#2496ED" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Linux", icon: FaLinux, color: "#FCC624" },
    { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    { name: "Netlify", icon: SiNetlify, color: "#00C7B7" },
    { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
    { name: "Azure", icon: FaMicrosoft, color: "#0078D4" }
  ]
};

export const projectCategories = [
  { id: 'all', label: 'Todos' },
  { id: 'analytics', label: 'Análisis de Datos' },
  { id: 'ml', label: 'Machine Learning' },
  { id: 'web', label: 'Desarrollo Web' }
];

export const projects = [
  {
    name: "PromptLab",
    description: "Aplicación web profesional para generar prompts optimizados para IA. Transforma descripciones simples en prompts detallados y estructurados, organizados por 6 categorías especializadas.",
    image: "promptlab-preview",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Groq AI", icon: FaPython }
    ],
    github: "https://github.com/JuanArguello26/PromptLab",
    demo: "https://prompt-dgnxbtqlj-juanarguello26s-projects.vercel.app/",
    category: "web",
    features: [
      "6 categorías especializadas: Estudio, Trabajo, Creativo, Desarrollo, Personal, Marketing",
      "Generación con IA usando Llama 3.1 a través de Groq API",
      "Historial local de hasta 20 generaciones recientes",
      "Copia con un clic al portapapeles",
      "Regenerar para nuevas variaciones del mismo prompt",
      "Diseño responsivo para móvil y escritorio"
    ]
  },
  {
    name: "Sales Analytics Dashboard",
    description: "Análisis exploratorio de datos de ventas con visualizaciones interactivas. Identificación de patrones de compra y segmentación de clientes.",
    technologies: [
      { name: "Python", icon: FaPython },
      { name: "Pandas", icon: SiPandas },
      { name: "Plotly", icon: FaJs },
      { name: "Streamlit", icon: SiStreamlit },
      { name: "SQL", icon: FaDatabase }
    ],
    github: "https://github.com/JuanArguello26/SalesAnalytics",
    category: "analytics",
    features: [
      "Dashboard interactivo con filtros por fecha y categoría",
      "Análisis de productos más vendidos y facturación",
      "Gráficos de estacionalidad y tendencias",
      "Segmentación de clientes por comportamiento",
      "Métricas KPIs en tiempo real",
      "Exportación de reportes"
    ]
  },
  {
    name: "Customer Churn Analytics",
    description: "Análisis de churn con cohort analysis, segmentación RFM y visualización de principales factores de fuga.",
    technologies: [
      { name: "Python", icon: FaPython },
      { name: "Pandas", icon: SiPandas },
      { name: "Seaborn", icon: FaJs },
      { name: "Streamlit", icon: SiStreamlit },
      { name: "SQL", icon: FaDatabase }
    ],
    github: "https://github.com/JuanArguello26/ChurnAnalytics",
    category: "analytics",
    features: [
      "Análisis de cohortes por mes de adquisición",
      "Segmentación RFM (Recency, Frequency, Monetary)",
      "Identificación de principales factores de fuga",
      "Métricas de retención y lifetime value",
      "Predicción de clientes en riesgo",
      "Dashboards interactivos"
    ]
  },
  {
    name: "Sales Forecasting API",
    description: "API REST para predicción de ventas usando series temporales con StatsForecast (AutoARIMA).",
    technologies: [
      { name: "Python", icon: FaPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "StatsForecast", icon: FaPython },
      { name: "ML", icon: SiScikitlearn },
      { name: "Docker", icon: FaDatabase }
    ],
    github: "https://github.com/JuanArguello26/MachineLearning-SalesForecasting",
    category: "ml",
    features: [
      "Modelo AutoARIMA automático",
      "Predicción a 30 días con intervalos de confianza",
      "Endpoints RESTful con documentación automática",
      "Dockerizado para fácil despliegue",
      "Manejo de errores robusto"
    ]
  },
  {
    name: "Churn Prediction API",
    description: "API REST para predecir cancelación de clientes usando Random Forest.",
    technologies: [
      { name: "Python", icon: FaPython },
      { name: "FastAPI", icon: SiFastapi },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "ML", icon: FaPython },
      { name: "Docker", icon: FaDatabase }
    ],
    github: "https://github.com/JuanArguello26/MachineLearning-ChurnPrediction",
    category: "ml",
    features: [
      "Modelo Random Forest optimizado (~85% accuracy)",
      "Clasificación binaria de clientes en riesgo",
      "Endpoints RESTful documentados",
      "Dockerizado para producción",
      "Predicción en tiempo real"
    ]
  },
  {
    name: "Sistema CRM - Colbasoft",
    description: "Sistema de gestión de clientes con arquitectura de software y base de datos relacional.",
    technologies: [
      { name: "SQL", icon: FaDatabase },
      { name: "MySQL", icon: SiMysql },
      { name: "Node.js", icon: FaNodeJs },
      { name: "React", icon: FaReact }
    ],
    github: "https://github.com/JuanArguello26/Colbasoft",
    category: "web"
  },
  {
    name: "Invsee (Python)",
    description: "Sistema de gestión de inventarios con control de stock, registro de entradas y salidas.",
    technologies: [
      { name: "Python", icon: FaPython },
      { name: "MySQL", icon: SiMysql }
    ],
    github: "https://github.com/JuanArguello26/Pythonprojects",
    category: "web"
  },
  {
    name: "Gestor de Tareas Web",
    description: "Aplicación web desarrollada para gestión de tareas.",
    technologies: [
      { name: "JavaScript", icon: FaJs },
      { name: "Bootstrap", icon: FaBootstrap },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 }
    ],
    github: "https://github.com/JuanArguello26/Javascriptprojects",
    category: "web"
  },
  {
    name: "Tienda Web de Perfumes - RevedoParfum",
    description: "Desarrollo del frontend con catálogo de productos y fichas de producto.",
    technologies: [
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3 },
      { name: "JavaScript", icon: FaJs },
      { name: "Bootstrap", icon: FaBootstrap }
    ],
    github: "https://github.com/JuanArguello26/RevedoParfum",
    category: "web"
  }
];

export const education = [
  {
    institution: "Universidad CIAF",
    degree: "Ingeniería en Desarrollo de Software",
    period: "En curso — graduación estimada 2027",
    status: "current"
  },
  {
    institution: "Universidad CIAF",
    degree: "Tecnólogo en Desarrollo de Software",
    period: "Abril 2026",
    status: "completed"
  },
  {
    institution: "Universidad CIAF",
    degree: "Técnico Profesional en Desarrollo de Software",
    period: "Octubre 2024",
    status: "completed"
  },
  {
    institution: "Certificaciones",
    items: [
      { name: "Google Advanced Data Analytics", certImage: "advanced-data-analytics" },
      { name: "Google Data Science", certImage: "data-science" },
      { name: "Google Data Analytics", certImage: "data-analytics" },
      { name: "IBM Full-Stack JavaScript Developer", certImage: "fullstack" },
      { name: "Microsoft 365 Certified: Fundamentals", certImage: "microsoft-365" },
      { name: "Microsoft AI Product Manager", certImage: "ai-product-manager" },
      { name: "Scrum Master Certified", certImage: "scrum-master" },
      { name: "Microsoft Azure Cybersecurity Tools and Solutions", certImage: "azure-cybersecurity" },
      { name: "Google IT Support", certImage: "it-support" },
      { name: "Iniciación al desarrollo con IA", certImage: "iniciacion-ai" },
      { name: "Google Cybersecurity", certImage: "google-cybersecurity" }
    ]
  },
  {
    institution: "SENA",
    degree: "Inglés B1",
    period: "Septiembre 2020"
  }
];
