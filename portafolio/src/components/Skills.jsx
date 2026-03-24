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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">04.</span> Habilidades
        </motion.h2>
        
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="skill-header">
                <span className="skill-icon">{categoryIcons[category]}</span>
                <h3 className="skill-category">{category}</h3>
              </div>
              <div className="skill-tags">
                {skillList.map((skill, idx) => (
                  <span key={idx} className="skill-tag">
                    <span className="skill-tag-icon">{skill.icon}</span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
