import { motion } from 'framer-motion';
import { about, personalInfo } from '../data/portfolio';
import profileImg from '../assets/profile.jpg';
import './About.css';

export default function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-number">01.</span> Sobre Mí
        </motion.h2>
        
        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="about-name">{personalInfo.name} <span className="about-nickname">({personalInfo.nickname})</span></p>
            <p>{about}</p>
            <p>
              Disfruto creando soluciones que combinan análisis de datos con desarrollo de software.
              Siempre estoy buscando nuevas formas de transformar datos en información accionable.
            </p>
          </motion.div>
          
          <motion.div
            className="about-image"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
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
