import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaChartLine, FaDatabase, FaBrain, FaCogs, FaFileAlt, FaUserTie,
  FaLaptopCode, FaServer, FaPlug, FaMobileAlt, FaRocket, FaTools
} from 'react-icons/fa';
import './Services.css';

const categories = [
  { id: 'all', label: 'Todos' },
  { id: 'data', label: 'Datos' },
  { id: 'dev', label: 'Desarrollo de Software' }
];

const services = [
  {
    category: 'dev',
    icon: <FaLaptopCode />,
    title: 'Desarrollo Web Full Stack',
    description: 'Sitios y aplicaciones web a la medida, rápidos y responsivos: desde landing pages y portafolios hasta plataformas completas con panel de administración.',
    tags: ['React', 'Node.js', 'Vite']
  },
  {
    category: 'dev',
    icon: <FaTools />,
    title: 'Software a la Medida',
    description: 'Sistemas de gestión, inventarios, solicitudes y herramientas internas que reemplazan hojas de cálculo y procesos manuales.',
    tags: ['Supabase', 'PostgreSQL', 'JavaScript']
  },
  {
    category: 'dev',
    icon: <FaPlug />,
    title: 'APIs e Integraciones',
    description: 'Diseño de APIs REST y conexión entre sistemas, bases de datos y servicios externos para que tu información fluya sin intervención manual.',
    tags: ['FastAPI', 'REST', 'Python']
  },
  {
    category: 'dev',
    icon: <FaMobileAlt />,
    title: 'Aplicaciones de Datos',
    description: 'Apps interactivas para explorar datos y modelos: filtros, gráficos y resultados en vivo accesibles desde el navegador.',
    tags: ['Streamlit', 'Python', 'Pandas']
  },
  {
    category: 'dev',
    icon: <FaRocket />,
    title: 'Despliegue y Mantenimiento',
    description: 'Publicación en la nube, dominios, control de versiones y mejoras continuas para que tu proyecto siga vivo y evolucionando.',
    tags: ['Vercel', 'Git', 'GitHub']
  },
  {
    category: 'data',
    icon: <FaChartLine />,
    title: 'Dashboards & Visualización',
    description: 'Dashboards interactivos en Power BI y Tableau para monitoreo de KPIs y métricas de negocio en tiempo real.',
    tags: ['Power BI', 'Tableau', 'DAX']
  },
  {
    category: 'data',
    icon: <FaDatabase />,
    title: 'Análisis de Datos',
    description: 'Análisis exploratorio y descriptivo para identificar patrones, tendencias y oportunidades de negocio.',
    tags: ['SQL', 'Python', 'Excel']
  },
  {
    category: 'data',
    icon: <FaBrain />,
    title: 'Machine Learning',
    description: 'Modelos predictivos para forecasting de ventas, churn prediction y segmentación de clientes.',
    tags: ['Scikit-learn', 'Pandas', 'Jupyter']
  },
  {
    category: 'data',
    icon: <FaCogs />,
    title: 'Automatización & ETL',
    description: 'Automatización de procesos de datos y pipelines ETL para integrar múltiples fuentes.',
    tags: ['Power Query', 'Python', 'ETL']
  },
  {
    category: 'data',
    icon: <FaFileAlt />,
    title: 'Reporting Automatizado',
    description: 'Reportes que se actualizan solos periódicamente, reduciendo horas de trabajo manual.',
    tags: ['Excel', 'Power BI', 'SQL']
  },
  {
    category: 'data',
    icon: <FaUserTie />,
    title: 'Consultoría en Datos',
    description: 'Asesoría en arquitectura de datos, modelado de bases y optimización de consultas SQL.',
    tags: ['Modelado', 'SQL', 'BI']
  }
];

function ServiceCard({ service, index }) {
  const handleMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
  };

  return (
    <motion.div
      layout
      className={`service-card ${service.category}`}
      onMouseMove={handleMove}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <span className="service-index">{String(index + 1).padStart(2, '0')}</span>
      <div className="service-icon">{service.icon}</div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <div className="service-tags">
        {service.tags.map((t) => <span key={t}>{t}</span>)}
      </div>
      <span className="service-badge">{service.category === 'dev' ? 'Software' : 'Datos'}</span>
    </motion.div>
  );
}

export default function Services() {
  const [active, setActive] = useState('all');
  const visible = services.filter((s) => active === 'all' || s.category === active);

  return (
    <section id="services" className="services">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">04.</span> Servicios
        </motion.h2>

        <motion.p
          className="services-intro"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Desde convertir tus datos en decisiones hasta construir el software que las respalda.
        </motion.p>

        <div className="services-filters">
          {categories.map((c) => (
            <button
              key={c.id}
              className={active === c.id ? 'active' : ''}
              onClick={() => setActive(c.id)}
            >
              {active === c.id && <motion.span layoutId="filter-pill" className="filter-pill" />}
              <span className="filter-label">{c.label}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="services-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
