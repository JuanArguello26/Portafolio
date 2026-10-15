import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, animate } from 'framer-motion';
import { FaMapMarkerAlt, FaGraduationCap } from 'react-icons/fa';
import { about, personalInfo, projects, skills } from '../data/portfolio';
import profileImg from '../assets/profile.jpg';
import reve from '../assets/reve-do-parfum-preview.webp';
import solicitudes from '../assets/solicitudes-preview.png';
import ventas from '../assets/analisis-ventas-preview.png';
import promptlab from '../assets/promptlab-preview.jpeg';
import './About.css';

const slides = [
  { src: profileImg, caption: 'Juan Esteban · Masta Dev', position: 'center top' },
  { src: reve, caption: 'Desarrollo web: tiendas y landing pages', fit: 'contain' },
  { src: solicitudes, caption: 'Software a la medida para empresas', fit: 'contain' },
  { src: ventas, caption: 'Dashboards que cuentan historias', fit: 'contain' },
  { src: promptlab, caption: 'Construyendo con IA', fit: 'contain' }
];

const paragraphs = [
  about.trim().replace(/\s+/g, ' '),
  'Disfruto creando soluciones que combinan análisis de datos con desarrollo de software. Siempre estoy buscando nuevas formas de transformar datos en información accionable.'
];

// Experiencia en datos y software: desde octubre de 2024 (mes 9 = octubre)
const START = new Date(2024, 9, 1);
const now = new Date();
const monthsActive = (now.getFullYear() - START.getFullYear()) * 12 + (now.getMonth() - START.getMonth());
const experienceStat = monthsActive >= 12
  ? { value: Math.floor(monthsActive / 12), suffix: '', label: 'Años en datos y software' }
  : { value: Math.max(monthsActive, 1), suffix: '', label: 'Meses en datos y software' };

const stats = [
  experienceStat,
  { value: projects.length, suffix: '', label: 'Proyectos' },
  { value: 21, suffix: '', label: 'Certificados' },
  { value: 22, suffix: '', label: 'Cursos' },
  { value: Object.values(skills).flat().length, suffix: '+', label: 'Tecnologías' }
];

const focus = ['Power BI', 'SQL', 'Python', 'React', 'Excel avanzado', 'Machine Learning', 'ETL', 'Automatización'];

function Typewriter({ texts, start }) {
  const [typed, setTyped] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!start) return;
    let line = 0;
    let char = 0;
    let timeout;
    const tick = () => {
      char += 1;
      const currentLine = line;
      const text = texts[currentLine].slice(0, char);
      setTyped((prev) => {
        const next = [...prev];
        next[currentLine] = text;
        return next;
      });
      if (char >= texts[line].length) {
        line += 1;
        char = 0;
        if (line >= texts.length) {
          setDone(true);
          return;
        }
        timeout = setTimeout(tick, 350);
      } else {
        timeout = setTimeout(tick, 14);
      }
    };
    timeout = setTimeout(tick, 400);
    return () => clearTimeout(timeout);
  }, [start, texts]);

  const activeLine = Math.max(0, typed.length - 1);

  return texts.map((_, i) => (
    <p key={i} className="about-paragraph" aria-label={texts[i]}>
      <span aria-hidden="true">{typed[i] ?? ''}</span>
      {!done && i === activeLine && start && <span className="about-caret" />}
    </p>
  ));
}

function Counter({ value, suffix, start }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    const controls = animate(0, value, { duration: 1.6, ease: 'easeOut', onUpdate: (v) => setN(Math.round(v)) });
    return () => controls.stop();
  }, [start, value]);
  return <>{n}{suffix}</>;
}

function Carousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(id);
  }, [paused]);

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({
      x: ((e.clientX - r.left) / r.width - 0.5) * 14,
      y: -((e.clientY - r.top) / r.height - 0.5) * 14
    });
  };

  return (
    <div className="about-carousel">
      <div
        className="carousel-stage"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => { setPaused(false); setTilt({ x: 0, y: 0 }); }}
        onMouseMove={onMove}
        style={{ transform: `perspective(900px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)` }}
      >
      <div className={`carousel-frame ${slides[index].fit === 'contain' ? 'wide' : ''}`}>
        <AnimatePresence mode="popLayout">
          <motion.div
            key={index}
            className="carousel-slide"
            initial={{ opacity: 0, scale: 1.12, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.95, filter: 'blur(6px)' }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            <img
              src={slides[index].src}
              alt={slides[index].caption}
              className="carousel-img"
              style={{ objectPosition: slides[index].position || 'center top' }}
            />
          </motion.div>
        </AnimatePresence>
        <div className="carousel-caption">
          <AnimatePresence mode="wait">
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {slides[index].caption}
            </motion.span>
          </AnimatePresence>
        </div>
        <span className="carousel-corner tl" />
        <span className="carousel-corner br" />
      </div>
      </div>
      <div className="carousel-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={i === index ? 'active' : ''}
            onClick={() => setIndex(i)}
            aria-label={`Imagen ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const contentRef = useRef(null);
  const statsRef = useRef(null);
  const inView = useInView(contentRef, { once: true, amount: 0.3 });
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

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
          <span className="section-number">01.</span> Sobre Mí
        </motion.h2>

        <div className="about-content" ref={contentRef}>
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="about-name">
              {personalInfo.name} <span className="about-nickname">({personalInfo.nickname})</span>
            </p>
            <div className="about-meta">
              <span><FaMapMarkerAlt /> {personalInfo.location}</span>
              <span><FaGraduationCap /> Ingeniería en Desarrollo de Software</span>
            </div>
            <Typewriter texts={paragraphs} start={inView} />
            <div className="about-chips">
              {focus.map((f, i) => (
                <motion.span
                  key={f}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1 + i * 0.08 }}
                >
                  {f}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Carousel />
          </motion.div>
        </div>

        <div className="about-stats" ref={statsRef}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="stat"
              initial={{ opacity: 0, y: 30 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <strong><Counter value={s.value} suffix={s.suffix} start={statsInView} /></strong>
              <span>{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
