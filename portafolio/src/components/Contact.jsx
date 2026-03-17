import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';
import cv from '../assets/CV_Juan_Esteban_Arguello_Botero.pdf';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="section-number">06.</span> Contacto
        </motion.h2>
        
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="contact-intro">
            ¿Interesado en trabajar juntos? Contáctame y hablemos sobre cómo puedo ayudarte.
          </p>
          
          <div className="contact-info">
            <a href={`mailto:${personalInfo.email}`} className="contact-item">
              <FaEnvelope />
              <span>{personalInfo.email}</span>
            </a>
            
            <a href={`tel:${personalInfo.phone}`} className="contact-item">
              <FaPhone />
              <span>{personalInfo.phone}</span>
            </a>
            
            <div className="contact-item">
              <FaMapMarkerAlt />
              <span>{personalInfo.location}</span>
            </div>
          </div>
          
          <div className="contact-links">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
          </div>
          
          <a href={cv} download="CV_Juan_Esteban_Arguello_Botero.pdf" className="download-cv">
            <FaDownload />
            <span>Descargar CV</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
