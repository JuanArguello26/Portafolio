import { motion } from 'framer-motion';
import { about, personalInfo } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';
import profileImg from '../assets/profile.jpg';
import './About.css';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="about">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">01.</span> {t.about.title}
        </motion.h2>
        
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about-name">{personalInfo.name} <span className="about-nickname">({personalInfo.nickname})</span></p>
            <p>{about}</p>
            <p>{t.about.extra}</p>
          </motion.div>
          
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="image-wrapper">
              <img src={profileImg} alt={personalInfo.nickname} className="profile-img" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
