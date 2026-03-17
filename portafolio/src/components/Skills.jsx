import { motion } from 'framer-motion';
import { FaDatabase, FaCode, FaChartLine, FaGlobe } from 'react-icons/fa';
import { skills } from '../data/portfolio';
import './Skills.css';

const categoryIcons = {
  "Análisis de Datos y BI": <FaChartLine />,
  "Bases de Datos": <FaDatabase />,
  "Programación": <FaCode />,
  "Desarrollo Web": <FaGlobe />
};

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-number">03.</span> Habilidades
        </motion.h2>
        
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="skill-header">
                <span className="skill-icon">{categoryIcons[category]}</span>
                <h3 className="skill-category">{category}</h3>
              </div>
              <div className="skill-tags">
                {skillList.map((skill, idx) => (
                  <span key={idx} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
