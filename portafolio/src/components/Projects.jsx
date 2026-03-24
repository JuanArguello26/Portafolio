import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaFolderOpen } from 'react-icons/fa';
import { projects } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';
import './Projects.css';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { t } = useLanguage();

  const projectCategories = [
    { id: 'all', label: t.projects.filters.all },
    { id: 'analytics', label: t.projects.filters.analytics },
    { id: 'ml', label: t.projects.filters.ml },
    { id: 'web', label: t.projects.filters.web }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

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
          <span className="section-number">04.</span> {t.projects.title}
        </motion.h2>

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
            </button>
          ))}
        </motion.div>
        
        <div className="projects-grid">
          <AnimatePresence mode='wait'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.name}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                layout
              >
                <div className="project-header">
                  <div className="project-folder"><FaFolderOpen /></div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <FaGithub />
                    </a>
                  </div>
                </div>
                
                <h3 className="project-title">{project.name}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-techs">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="project-tech">{tech}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
