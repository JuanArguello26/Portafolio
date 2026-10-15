import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './SectionNavigator.css';

const sections = [
  { id: 'hero', label: 'Inicio' },
  { id: 'about', label: 'Sobre Mí' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'services', label: 'Servicios' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'education', label: 'Educación' },
  { id: 'contact', label: 'Contacto' }
];

const COVER_MS = 450;
const HOLD_MS = 150;

const getCurrentIndex = () => {
  let current = 0;
  sections.forEach((s, i) => {
    const el = document.getElementById(s.id);
    if (el && el.getBoundingClientRect().top <= 120) current = i;
  });
  return current;
};

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function SectionNavigator() {
  const [current, setCurrent] = useState(0);
  const [transition, setTransition] = useState(null);
  const busy = useRef(false);

  const goTo = useCallback(async (index) => {
    if (busy.current || index < 0 || index >= sections.length) return;
    const el = document.getElementById(sections[index].id);
    if (!el) return;

    busy.current = true;
    setTransition({ index, label: sections[index].label });
    await wait(COVER_MS);
    el.scrollIntoView({ behavior: 'instant', block: 'start' });
    setCurrent(index);
    await wait(HOLD_MS);
    setTransition(null);
    await wait(COVER_MS);
    busy.current = false;
  }, []);

  useEffect(() => {
    const sync = () => { if (!busy.current) setCurrent(getCurrentIndex()); };
    sync();
    window.addEventListener('scroll', sync, { passive: true });
    return () => window.removeEventListener('scroll', sync);
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      const tag = e.target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.target.isContentEditable) return;
      e.preventDefault();
      goTo(getCurrentIndex() + (e.key === 'ArrowRight' ? 1 : -1));
    };
    const onGoto = (e) => {
      const index = sections.findIndex((s) => s.id === e.detail);
      if (index !== -1 && index !== getCurrentIndex()) goTo(index);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('goto-section', onGoto);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('goto-section', onGoto);
    };
  }, [goTo]);

  return (
    <>
      <div className="section-nav" aria-label="Navegación entre secciones">
        <button onClick={() => goTo(getCurrentIndex() - 1)} disabled={current === 0} aria-label="Sección anterior">
          <FaChevronLeft />
        </button>
        <span className="section-nav-count">
          {String(current + 1).padStart(2, '0')}<em>/{String(sections.length).padStart(2, '0')}</em>
        </span>
        <button onClick={() => goTo(getCurrentIndex() + 1)} disabled={current === sections.length - 1} aria-label="Sección siguiente">
          <FaChevronRight />
        </button>
      </div>

      <AnimatePresence>
        {transition && (
          <div className="section-curtain" key="curtain">
            {[0, 1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="curtain-panel"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                exit={{ scaleY: 0 }}
                style={{ originY: 0 }}
                transition={{ duration: COVER_MS / 1000, delay: i * 0.06, ease: [0.76, 0, 0.24, 1] }}
              />
            ))}
            <motion.div
              className="curtain-label"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              <span>{String(transition.index + 1).padStart(2, '0')}</span>
              {transition.label}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
