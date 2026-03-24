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
  "Análisis de Datos y BI": [
    { name: "Power BI", icon: "📊" },
    { name: "Power Query", icon: "⚡" },
    { name: "Excel avanzado", icon: "📈" },
    { name: "Google Data Analytics", icon: "🔍" },
    { name: "Data Visualization", icon: "📉" },
    { name: "Dashboard Development", icon: "🖥️" },
    { name: "KPIs", icon: "🎯" },
    { name: "Forecasting", icon: "🔮" }
  ],
  "Bases de Datos": [
    { name: "SQL", icon: "🗄️" },
    { name: "MySQL", icon: "🐬" },
    { name: "MongoDB", icon: "🍃" },
    { name: "ETL", icon: "🔄" },
    { name: "Data Pipeline", icon: "⬇️" },
    { name: "Modelado de datos", icon: "🏗️" }
  ],
  "Programación": [
    { name: "Python", icon: "🐍" },
    { name: "JavaScript", icon: "🟨" },
    { name: "Node.js", icon: "🟢" },
    { name: "React", icon: "⚛️" }
  ],
  "Desarrollo Web": [
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "Bootstrap", icon: "🔵" }
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
    name: "Sales Analytics Dashboard",
    description: "Análisis exploratorio de datos de ventas con visualizaciones interactivas. Identificación de patrones de compra, productos más vendidos, estacionalidad y segmentación de clientes. Dashboard generado con Plotly y Streamlit.",
    technologies: ["Python", "Pandas", "Plotly", "Streamlit", "SQL"],
    github: "https://github.com/JuanArguello26/SalesAnalytics",
    category: "analytics"
  },
  {
    name: "Customer Churn Analytics",
    description: "Análisis de churn con cohort analysis, segmentación RFM y visualización de principales factores de fuga. Dashboard interactivo para monitoreo de métricas de retención.",
    technologies: ["Python", "Pandas", "Seaborn", "Streamlit", "SQL"],
    github: "https://github.com/JuanArguello26/ChurnAnalytics",
    category: "analytics"
  },
  {
    name: "Sales Forecasting API",
    description: "API REST para predicción de ventas usando series temporales con StatsForecast (AutoARIMA). Predice ventas para los próximos 30 días con intervalos de confianza.",
    technologies: ["Python", "FastAPI", "StatsForecast", "Machine Learning", "Docker"],
    github: "https://github.com/JuanArguello26/MachineLearning-SalesForecasting",
    category: "ml"
  },
  {
    name: "Churn Prediction API",
    description: "API REST para predecir cancelación de clientes usando Random Forest. Modelo de clasificación con ~85% accuracy y deployment en Docker.",
    technologies: ["Python", "FastAPI", "Scikit-learn", "Machine Learning", "Docker"],
    github: "https://github.com/JuanArguello26/MachineLearning-ChurnPrediction",
    category: "ml"
  },
  {
    name: "Sistema CRM - Colbasoft",
    description: "Sistema de gestión de clientes con arquitectura de software y base de datos relacional.",
    technologies: ["SQL", "MySQL", "Node.js", "React"],
    github: "https://github.com/JuanArguello26/Colbasoft",
    category: "web"
  },
  {
    name: "Invsee (Python)",
    description: "Sistema de gestión de inventarios con control de stock, registro de entradas y salidas.",
    technologies: ["Python", "MySQL"],
    github: "https://github.com/JuanArguello26/Pythonprojects",
    category: "web"
  },
  {
    name: "Gestor de Tareas Web",
    description: "Aplicación web desarrollada para gestión de tareas.",
    technologies: ["JavaScript", "Bootstrap", "HTML", "CSS"],
    github: "https://github.com/JuanArguello26/Javascriptprojects",
    category: "web"
  },
  {
    name: "Tienda Web de Perfumes - RevedoParfum",
    description: "Desarrollo del frontend con catálogo de productos y fichas de producto.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
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
      "Google Advanced Data Analytics",
      "Google Data Science",
      "Certificación Analítica con Power BI",
      "Google Data Analytics",
      "Scrum Master Certified",
      "Microsoft Azure Cybersecurity Tools and Solutions",
      "Google Cybersecurity",
      "Google IT Support",
      "Microsoft AI Product Manager",
      "Microsoft 365 Certified: Fundamentals",
      "IBM Full-Stack JavaScript Developer",
      "Iniciación al desarrollo con IA"
    ]
  },
  {
    institution: "SENA",
    degree: "Inglés B1",
    period: "Septiembre 2020"
  }
];
