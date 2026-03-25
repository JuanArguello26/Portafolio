import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode } from 'react-icons/fa';
import './ProjectModal.css';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    
    document.body.style.cursor = 'none';
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="modal-overlay" 
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div 
          className="modal-content" 
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button className="modal-close" onClick={onClose}>
            <FaTimes />
          </button>

          <div className="modal-header">
            <h3 className="modal-title">{project.name}</h3>
            <div className="modal-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="modal-link">
                <FaGithub /> Código
              </a>
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="modal-link">
                  <FaExternalLinkAlt /> Live Demo
                </a>
              )}
            </div>
          </div>

          <div className="modal-body">
            <p className="modal-description">{project.description}</p>
            
            {project.features && (
              <div className="modal-section">
                <h4><FaCode /> Características</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="modal-techs">
            <h4>Tecnologías</h4>
            <div className="modal-techs-list">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="modal-tech">{tech}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
