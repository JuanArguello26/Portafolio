import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';
import { experience } from '../data/portfolio';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-number">02.</span> Experiencia
        </motion.h2>
        
        <div className="experience-list">
          {experience.map((job, index) => (
            <motion.div
              key={index}
              className="experience-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="experience-header">
                <div className="experience-icon">
                  <FaBriefcase />
                </div>
                <div className="experience-info">
                  <h3 className="experience-position">{job.position}</h3>
                  <p className="experience-company">{job.company}</p>
                  <p className="experience-period">{job.period}</p>
                </div>
              </div>
              <ul className="experience-highlights">
                {job.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
