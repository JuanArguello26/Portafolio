import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaDownload, FaPaperPlane } from 'react-icons/fa';
import { useForm } from '@formspree/react';
import { personalInfo } from '../data/portfolio';
import cv from '../assets/CV_Juan_Esteban_Arguello_Botero.pdf';
import './Contact.css';

export default function Contact() {
  const [state, handleSubmit] = useForm("xlgpqqkv");
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (state.succeeded) {
    return (
      <section id="contact" className="contact">
        <div className="section-container">
          <motion.div
            className="contact-content success-message"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3>¡Mensaje enviado!</h3>
            <p>Gracias por contactarme. Te responderé pronto.</p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">06.</span> Contacto
        </motion.h2>
        
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="contact-intro">
            ¿Interesado en trabajar juntos? Contáctame y hablemos sobre cómo puedo ayudarte.
          </p>

          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tu mensaje..."
              />
            </div>
            
            <button type="submit" disabled={state.submitting} className="submit-btn">
              <FaPaperPlane />
              <span>{state.submitting ? 'Enviando...' : 'Enviar Mensaje'}</span>
            </button>
          </form>
          
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
