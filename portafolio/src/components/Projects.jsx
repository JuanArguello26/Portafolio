import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaCheck } from 'react-icons/fa';
import { projects, projectCategories, projectImages, personalInfo } from '../data/portfolio';
import './Projects.css';

const categoryLabel = Object.fromEntries(
  projectCategories.map(c => [c.id, c.label])
);

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expanded, setExpanded] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  const countFor = (id) =>
    id === 'all' ? projects.length : projects.filter(p => p.category === id).length;

  const TILT_MAX = 4; // grados

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mx', `${x}px`);
    card.style.setProperty('--my', `${y}px`);
    card.style.setProperty('--ry', `${((x / rect.width) - 0.5) * 2 * TILT_MAX}deg`);
    card.style.setProperty('--rx', `${-((y / rect.height) - 0.5) * 2 * TILT_MAX}deg`);
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.setProperty('--rx', '0deg');
    e.currentTarget.style.setProperty('--ry', '0deg');
  };

  const toggleExpanded = (name) =>
    setExpanded(prev => (prev === name ? null : name));

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-number">02.</span> Proyectos
        </motion.h2>

        <motion.p
          className="projects-intro"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Una selección de aplicaciones web, dashboards y análisis de datos que he construido
          y puesto en producción.
        </motion.p>

        <motion.div
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {projectCategories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
              <span className="filter-count">{countFor(category.id)}</span>
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => {
              const imgSrc = project.image ? projectImages[project.image] : null;
              const PlaceholderIcon = project.technologies[0]?.icon;
              const isOpen = expanded === project.name;
              const hasFeatures = project.features && project.features.length > 0;
              return (
              <motion.div
                key={project.name}
                className={`project-card ${isOpen ? 'is-open' : ''} ${project.featured ? 'featured' : ''}`}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                viewport={{ amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 2) * 0.08,
                  layout: { type: 'spring', stiffness: 260, damping: 30 }
                }}
                layout
              >
                <div className="project-card-inner">
                <div className={`project-image-container ${imgSrc ? '' : 'no-image'}`}>
                  {imgSrc ? (
                    <img src={imgSrc} alt={project.name} className="project-image" loading="lazy" />
                  ) : (
                    PlaceholderIcon && <PlaceholderIcon className="project-placeholder-icon" />
                  )}
                  <span className="project-badge">
                    {project.featured ? '★ Destacado' : categoryLabel[project.category]}
                  </span>
                  <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
                  {imgSrc && (
                    <div className="project-image-overlay" />
                  )}
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.name}</h3>

                  <p className="project-description">{project.description}</p>

                  <div className="project-techs">
                    {project.technologies.map((tech, idx) => (
                      <div key={idx} className="project-tech" title={tech.name}>
                        <tech.icon className="tech-icon" />
                        <span className="tech-name">{tech.name}</span>
                      </div>
                    ))}
                  </div>

                  {hasFeatures && (
                    <>
                      <button
                        className={`features-toggle ${isOpen ? 'open' : ''}`}
                        onClick={() => toggleExpanded(project.name)}
                        aria-expanded={isOpen}
                      >
                        {isOpen ? 'Ocultar funcionalidades' : 'Ver funcionalidades'}
                        <FaChevronDown className="features-chevron" />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.ul
                            className="project-features"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {project.features.map((feature, idx) => (
                              <li key={idx}>
                                <FaCheck className="feature-check" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  )}

                  <div className="project-links">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn primary"
                      >
                        <FaExternalLinkAlt /> Sitio Web
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link-btn"
                      >
                        <FaGithub /> Github
                      </a>
                    )}
                  </div>
                </div>
                </div>
              </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        <motion.div
          className="projects-more"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <p>¿Quieres ver más código?</p>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link-btn primary"
          >
            <FaGithub /> Ver todos mis repositorios
          </a>
        </motion.div>
      </div>
    </section>
  );
}
