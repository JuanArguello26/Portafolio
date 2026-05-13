import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo } from '../data/portfolio';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
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
        © {year} — Diseñado y construido por {personalInfo.name} ({personalInfo.nickname})
      </p>
    </footer>
  );
}
