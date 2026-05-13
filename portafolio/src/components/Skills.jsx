import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import './Skills.css';

const categoryIcons = {
  "Frontend": "🎨",
  "Backend": "⚙️",
  "Bases de Datos": "🗄️",
  "Data & Machine Learning": "📊",
  "Tools & Cloud": "☁️"
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
          <span className="section-number">05.</span> Habilidades
        </motion.h2>
        
        <div className="skills-categories">
          {Object.entries(skills).map(([category, skillList], catIndex) => (
            <motion.div
              key={category}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.5, delay: catIndex * 0.15 }}
            >
              <div className="skill-category-header">
                <span className="skill-category-icon">{categoryIcons[category]}</span>
                <h3 className="skill-category-title">{category}</h3>
              </div>
              <div className="skill-marquee">
                <div className={`skill-marquee-track ${catIndex % 2 === 0 ? 'marquee-left' : 'marquee-right'}`}>
                  {[...skillList, ...skillList, ...skillList].map((skill, index) => (
                    <div
                      key={`${skill.name}-${index}`}
                      className="skill-item"
                    >
                      <div className="skill-icon-wrapper" style={{ backgroundColor: skill.color + '18' }}>
                        <skill.icon className="skill-icon" style={{ color: skill.color }} />
                      </div>
                      <span className="skill-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
