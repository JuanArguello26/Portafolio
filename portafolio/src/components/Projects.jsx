import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaFolderOpen, FaExternalLinkAlt } from 'react-icons/fa';
import { projects, projectCategories } from '../data/portfolio';
import ProjectModal from './ProjectModal';
import promptlabImage from '../assets/promptlab-preview.jpeg';
import './Projects.css';

const projectImages = {
  'PromptLab': promptlabImage
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <>
      <section id="projects" className="projects">
        <div className="section-container">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <span className="section-number">05.</span> Proyectos
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
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ scale: 1.02 }}
                  style={{ cursor: 'pointer' }}
                >
                  {projectImages[project.name] && (
                    <div className="project-image-container">
                      <img src={projectImages[project.name]} alt={project.name} className="project-image" />
                      <div className="project-image-overlay"></div>
                    </div>
                  )}
                  <div className="project-header">
                    <div className="project-folder"><FaFolderOpen /></div>
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" onClick={(e) => e.stopPropagation()}>
                        <FaGithub />
                      </a>
                      {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link" onClick={(e) => e.stopPropagation()}>
                          <FaExternalLinkAlt />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="project-title">{project.name}</h3>
                  
                  <div className="project-techs">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="project-tech">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="project-tech">+{project.technologies.length - 3}</span>
                    )}
                  </div>

                  <p className="project-click-hint">Click para ver detalles</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject} 
        isOpen={!!selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}
