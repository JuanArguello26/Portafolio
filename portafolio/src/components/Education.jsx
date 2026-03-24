import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaCertificate } from 'react-icons/fa';
import { education } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';
import './Education.css';

const featuredCerts = [
  "Google Data Science",
  "Google Advanced Data Analytics",
  "Google Data Analytics",
  "IBM Full-Stack JavaScript Developer",
  "Microsoft 365 Certified: Fundamentals"
];

export default function Education() {
  const { t } = useLanguage();

  return (
    <section id="education" className="education">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">05.</span> {t.education.title}
        </motion.h2>
        
        <div className="education-list">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="education-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="education-icon">
                {edu.items ? <FaAward /> : <FaGraduationCap />}
              </div>
              <div className="education-content">
                <h3 className="education-institution">{edu.institution}</h3>
                <p className="education-degree">{edu.degree}</p>
                {edu.items && index === 3 && (
                  <>
                    <div className="certifications-featured">
                      {featuredCerts.map((cert, idx) => (
                        <span key={idx} className="cert-badge featured">
                          <FaCertificate /> {cert}
                        </span>
                      ))}
                    </div>
                    <p className="certifications-more">
                      {t.education.featuredCerts}
                    </p>
                  </>
                )}
                {edu.items && index !== 3 && (
                  <ul className="education-items">
                    {edu.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
                <p className="education-period">{edu.period}</p>
                {edu.status === 'current' && (
                  <span className="education-status">{t.education.current}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
