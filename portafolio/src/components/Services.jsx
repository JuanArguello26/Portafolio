import { motion } from 'framer-motion';
import { FaChartLine, FaDatabase, FaBrain, FaPython, FaDesktop } from 'react-icons/fa';
import './Services.css';

const services = [
  {
    icon: <FaChartLine />,
    title: "Dashboards & Visualización",
    description: "Creación de dashboards interactivos en Power BI y Tableau para monitoreo de KPIs y métricas de negocio en tiempo real."
  },
  {
    icon: <FaDatabase />,
    title: "Análisis de Datos",
    description: "Análisis exploratorio y descriptivo de datos para identificar patrones, tendencias y oportunidades de negocio."
  },
  {
    icon: <FaBrain />,
    title: "Machine Learning",
    description: "Desarrollo de modelos predictivos para forecasting de ventas, churn prediction y segmentación de clientes."
  },
  {
    icon: <FaPython />,
    title: "Automatización & ETL",
    description: "Automatización de procesos de datos y construcción de pipelines ETL para integración de múltiples fuentes."
  },
  {
    icon: <FaDesktop />,
    title: "Reporting Automatizado",
    description: "Creación de reportes automatizados que se actualizan periódicamente, reduciendo tiempo manual."
  },
  {
    icon: <FaDatabase />,
    title: "Consultoría en Datos",
    description: "Asesoría en arquitectura de datos, modelado de bases y optimización de consultas SQL."
  }
];

export default function Services() {
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
          <span className="section-number">02½.</span> Servicios
        </motion.h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
