import { FaGithub, FaLinkedin, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-links">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p className="footer-text">
        {t.footer.madeWith} <FaHeart style={{ color: '#64ffda', fontSize: '0.8rem' }} /> {t.footer.by} {personalInfo.name} ({personalInfo.nickname})
      </p>
    </footer>
  );
}
