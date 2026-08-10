import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGraduationCap, FaAward, FaCertificate, FaTimes, FaSearchPlus } from 'react-icons/fa';
import { education, certImages } from '../data/portfolio';
import './Education.css';

export default function Education() {
  const [tooltipCert, setTooltipCert] = useState(null);
  const [tooltipPos, setTooltipPos] = useState({ top: 0, left: 0 });
  const [modalCert, setModalCert] = useState(null);
  const tooltipRef = useRef(null);
  const hideTimeout = useRef(null);

  const handleMouseEnter = useCallback((e, item) => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    if (typeof item === 'string' || !item.certImage) return;
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltipPos({
      top: rect.top + window.scrollY - 10,
      left: rect.left + rect.width / 2
    });
    setTooltipCert(item);
  }, []);

  const handleMouseLeave = useCallback(() => {
    hideTimeout.current = setTimeout(() => {
      setTooltipCert(null);
    }, 200);
  }, []);

  const handleTooltipEnter = useCallback(() => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
  }, []);

  const handleTooltipLeave = useCallback(() => {
    setTooltipCert(null);
  }, []);

  const openModal = useCallback((item) => {
    if (typeof item === 'string' || !item.certImage) return;
    setModalCert(item);
  }, []);

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
          <span className="section-number">06.</span> Educación y Certificaciones
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
                <h3 className="education-title">{edu.degree || edu.institution}</h3>
                {edu.degree && <p className="education-subtitle">{edu.institution}</p>}
                {edu.items && (
                  <div className="cert-list">
                    {edu.items.map((item, idx) => {
                      const hasImage = typeof item === 'object' && item.certImage;
                      return (
                        <div key={idx} className="cert-item-wrapper">
                          <span
                            className={`cert-badge ${hasImage ? 'has-image' : ''}`}
                            onMouseEnter={(e) => handleMouseEnter(e, item)}
                            onMouseLeave={handleMouseLeave}
                            onClick={() => openModal(item)}
                          >
                            <FaCertificate />
                            {typeof item === 'string' ? item : item.name}
                            {hasImage && <FaSearchPlus className="cert-view-icon" />}
                          </span>
                        </div>
                      );
                    })}
                  </div>
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

      <AnimatePresence>
        {tooltipCert && tooltipCert.certImage && certImages[tooltipCert.certImage] && (
          <motion.div
            ref={tooltipRef}
            className="cert-tooltip"
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            style={{
              top: tooltipPos.top,
              left: tooltipPos.left,
            }}
            onMouseEnter={handleTooltipEnter}
            onMouseLeave={handleTooltipLeave}
            onClick={() => { setModalCert(tooltipCert); setTooltipCert(null); }}
          >
            <div className="cert-tooltip-inner">
              <img
                src={certImages[tooltipCert.certImage]}
                alt={tooltipCert.name}
                className="cert-tooltip-img"
              />
              <div className="cert-tooltip-footer">
                <span className="cert-tooltip-name">{tooltipCert.name}</span>
                <span className="cert-tooltip-hint">Click para ampliar</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {modalCert && modalCert.certImage && certImages[modalCert.certImage] && (
          <motion.div
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalCert(null)}
          >
            <motion.div
              className="cert-modal"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="cert-modal-close" onClick={() => setModalCert(null)}>
                <FaTimes />
              </button>
              <img
                src={certImages[modalCert.certImage]}
                alt={modalCert.name}
                className="cert-modal-img"
              />
              <p className="cert-modal-name">{modalCert.name}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
