import { motion } from 'framer-motion';
import { FaDatabase, FaCode, FaChartLine, FaGlobe } from 'react-icons/fa';
import { skills } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';
import './Skills.css';

const categoryIcons = {
  "Análisis de Datos y BI": <FaChartLine />,
  "Bases de Datos": <FaDatabase />,
  "Programación": <FaCode />,
  "Desarrollo Web": <FaGlobe />,
  "Data Analysis & BI": <FaChartLine />,
  "Databases": <FaDatabase />,
  "Programming": <FaCode />,
  "Web Development": <FaGlobe />
};

const categoryKeys = {
  "Análisis de Datos y BI": "analytics",
  "Bases de Datos": "database",
  "Programación": "programming",
  "Desarrollo Web": "web",
  "Data Analysis & BI": "analytics",
  "Databases": "database",
  "Programming": "programming",
  "Web Development": "web"
};

export default function Skills() {
  const { t } = useLanguage();

  const getCategoryLabel = (category) => {
    const key = categoryKeys[category];
    return t.skills.categories[key] || category;
  };

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
          <span className="section-number">03.</span> {t.skills.title}
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
                <h3 className="skill-category">{getCategoryLabel(category)}</h3>
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
