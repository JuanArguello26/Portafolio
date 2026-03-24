import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';
import './Hero.css';

const titles = [
  "Analista de Datos",
  "Desarrollador de Software",
  "Data Scientist",
  "BI Developer"
];

export default function Hero() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = titles[currentTitle];
    let timeout;

    if (!isDeleting) {
      if (displayText.length < fullText.length) {
        timeout = setTimeout(() => {
          setDisplayText(fullText.slice(0, displayText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
      } else {
        setIsDeleting(false);
        setCurrentTitle((prev) => (prev + 1) % titles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentTitle]);

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Hola, mi nombre es
        </motion.p>
        
        <motion.h1
          className="hero-name"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {personalInfo.name}
          <span className="hero-nickname">{personalInfo.nickname}</span>
        </motion.h1>
        
        <motion.h2
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="typewriter-text">{displayText}</span>
          <span className="typewriter-cursor">|</span>
        </motion.h2>
        
        <motion.p
          className="hero-location"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <FaMapMarkerAlt /> {personalInfo.location}
        </motion.p>
        
        <motion.div
          className="hero-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hero-link">
            <FaGithub />
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hero-link">
            <FaLinkedin />
          </a>
          <a href={`mailto:${personalInfo.email}`} className="hero-link">
            <FaEnvelope />
          </a>
        </motion.div>
        
        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="#contact" className="cta-button primary">Contáctame</a>
          <a href="#projects" className="cta-button secondary">Ver Proyectos</a>
        </motion.div>
      </div>
      
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </motion.div>
    </section>
  );
}
