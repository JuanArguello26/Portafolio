import { useState, useEffect } from 'react';
import Navbar from './components/Navbar'
import Cursor from './components/Cursor'
import Particles from './components/Particles'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'
import ScrollProgress from './components/ScrollProgress'
import './App.css'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isPresentationMode, setIsPresentationMode] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'F11' || (e.key === 'f' && e.altKey)) {
        e.preventDefault();
        setIsPresentationMode(prev => !prev);
      }
      if (e.key === 'Escape' && isPresentationMode) {
        setIsPresentationMode(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isPresentationMode]);

  const togglePresentationMode = () => {
    setIsPresentationMode(prev => !prev);
  };

  useEffect(() => {
    if (isPresentationMode) {
      document.documentElement.requestFullscreen?.();
    } else if (document.fullscreenElement) {
      document.exitFullscreen?.();
    }
  }, [isPresentationMode]);

  if (isLoading) {
    return <Loader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <>
      <ScrollProgress />
      <Cursor />
      <Particles />
      <div className={`app ${isPresentationMode ? 'presentation-mode' : ''}`}>
        <button 
          className="presentation-toggle" 
          onClick={togglePresentationMode}
          title="Modo Presentación (Alt+F)"
        >
          {isPresentationMode ? '✕' : '⛶'}
        </button>
        <Navbar />
        <Hero />
      <About />
      <Services />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      </div>
    </>
  )
}

export default App
