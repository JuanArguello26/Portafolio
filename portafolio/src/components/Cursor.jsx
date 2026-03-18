import { useEffect, useState } from 'react';
import './Cursor.css';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    document.body.style.cursor = 'none';

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.body.style.cursor = 'auto';
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div
        className={`cursor-dot ${isVisible ? 'visible' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`cursor-ring ${isVisible ? 'visible' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      <div
        className={`cursor-ship ${isVisible ? 'visible' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L8 10H4L8 14L12 22L16 14L20 10H16L12 2Z" fill="#64ffda" stroke="#64ffda" strokeWidth="0.5"/>
        </svg>
      </div>
    </>
  );
}
