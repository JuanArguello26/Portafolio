import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import logo from '../assets/logo-masta-dev.png';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { name: t.nav.inicio, href: '#hero' },
    { name: t.nav.sobreMi, href: '#about' },
    { name: t.nav.servicios, href: '#services' },
    { name: t.nav.experiencia, href: '#experience' },
    { name: t.nav.habilidades, href: '#skills' },
    { name: t.nav.proyectos, href: '#projects' },
    { name: t.nav.educacion, href: '#education' },
    { name: t.nav.contacto, href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'about', 'services', 'experience', 'skills', 'projects', 'education', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-80px 0px -20% 0px' }
    );

    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
          <a href="#hero" className="navbar-logo" onClick={(e) => handleClick(e, '#hero')}>
            <img src={logo} alt="Masta Dev" className="navbar-logo-img" />
            <span>Masta Dev</span>
          </a>
        
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => {
            const sectionId = item.href.slice(1);
            return (
              <li key={item.name} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${activeSection === sectionId ? 'active' : ''}`}
                  onClick={(e) => handleClick(e, item.href)}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
          <li className="nav-item">
            <button className="language-toggle" onClick={toggleLanguage} aria-label="Toggle language">
              <FaGlobe />
              <span>{language.toUpperCase()}</span>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
