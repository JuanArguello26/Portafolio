import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward } from 'react-icons/fa';
import { education } from '../data/portfolio';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="education">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-number">05.</span> Educación y Certificaciones
        </motion.h2>
        
        <div className="education-list">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="education-icon">
                {edu.items ? <FaAward /> : <FaGraduationCap />}
              </div>
              <div className="education-content">
                <h3 className="education-institution">{edu.institution}</h3>
                <p className="education-degree">{edu.degree}</p>
                {edu.items && (
                  <ul className="education-items">
                    {edu.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
                <p className="education-period">{edu.period}</p>
                {edu.status === 'current' && (
                  <span className="education-status">En curso</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
