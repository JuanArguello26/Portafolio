import { motion } from 'framer-motion';
import { FaChartLine, FaDatabase, FaBrain, FaPython, FaDesktop, FaUserTie } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Services.css';

const icons = [<FaChartLine />, <FaDatabase />, <FaBrain />, <FaPython />, <FaDesktop />, <FaUserTie />];

export default function Services() {
  const { t } = useLanguage();
  const services = t.services.items;

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
          <span className="section-number">02½.</span> {t.services.title}
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
              <div className="service-icon">{icons[index]}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
