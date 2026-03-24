import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode, FaStar } from 'react-icons/fa';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
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

              {project.highlights && (
                <div className="modal-section">
                  <h4><FaStar /> Highlights</h4>
                  <ul>
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
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
      )}
    </AnimatePresence>
  );
}
