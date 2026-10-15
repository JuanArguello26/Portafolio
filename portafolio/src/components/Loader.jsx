import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

const DURATION = 3200;
const STATUS = ['Iniciando', 'Cargando datos', 'Compilando interfaz', 'Listo'];

export default function Loader({ onComplete }) {
  const canvasRef = useRef(null);
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const mouse = { x: -9999, y: -9999 };
    const start = performance.now();
    let particles = [];
    let rafId;
    let exiting = false;
    let exitStart = 0;
    let finished = false;

    const sampleLetter = (w, h) => {
      const off = document.createElement('canvas');
      off.width = w;
      off.height = h;
      const o = off.getContext('2d');
      const size = Math.min(w, h) * 0.55;
      o.fillStyle = '#fff';
      o.font = `700 ${size}px "SF Mono", "Fira Code", monospace`;
      o.textAlign = 'center';
      o.textBaseline = 'middle';
      o.fillText('M', w / 2, h / 2 - h * 0.04);
      const data = o.getImageData(0, 0, w, h).data;
      const step = w < 600 ? 6 : 5;
      const points = [];
      for (let y = 0; y < h; y += step) {
        for (let x = 0; x < w; x += step) {
          if (data[(y * w + x) * 4 + 3] > 128) points.push({ x, y });
        }
      }
      return points;
    };

    const setup = () => {
      const w = (canvas.width = window.innerWidth);
      const h = (canvas.height = window.innerHeight);
      const targets = sampleLetter(w, h);
      const dust = Math.floor((w * h) / 12000);
      particles = targets.map((t) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: 0,
        vy: 0,
        tx: t.x,
        ty: t.y,
        size: Math.random() * 1.4 + 1,
        kind: 'letter',
        delay: Math.random() * 0.35
      }));
      for (let i = 0; i < dust; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: 0,
          vy: 0,
          bvx: (Math.random() - 0.5) * 0.4,
          bvy: (Math.random() - 0.5) * 0.4,
          size: Math.random() * 1.2 + 0.4,
          kind: 'dust',
          delay: 0
        });
      }
    };

    const onMove = (e) => {
      const p = e.touches ? e.touches[0] : e;
      mouse.x = p.clientX;
      mouse.y = p.clientY;
    };

    const frame = (now) => {
      const w = canvas.width;
      const h = canvas.height;
      const t = Math.min((now - start) / DURATION, 1);
      setProgress(Math.floor(t * 100));

      if (t >= 1 && !exiting) {
        exiting = true;
        exitStart = now;
        particles.forEach((p) => {
          const a = Math.atan2(p.y - h / 2, p.x - w / 2) + (Math.random() - 0.5) * 0.6;
          const s = Math.random() * 14 + 6;
          p.vx = Math.cos(a) * s;
          p.vy = Math.sin(a) * s;
        });
        setTimeout(() => setVisible(false), 600);
      }

      ctx.fillStyle = 'rgba(10, 10, 10, 0.28)';
      ctx.fillRect(0, 0, w, h);

      const fade = exiting ? Math.max(0, 1 - (now - exitStart) / 600) : 1;
      const formT = Math.min(t / 0.7, 1);

      for (const p of particles) {
        if (exiting) {
          p.x += p.vx;
          p.y += p.vy;
        } else {
          if (p.kind === 'letter') {
            const k = Math.max(0, Math.min(1, (formT - p.delay) / (1 - 0.35)));
            const ease = k * k * (3 - 2 * k);
            p.vx += (p.tx - p.x) * 0.012 * ease;
            p.vy += (p.ty - p.y) * 0.012 * ease;
            p.vx *= 0.9;
            p.vy *= 0.9;
          } else {
            p.vx += (p.bvx - p.vx) * 0.03;
            p.vy += (p.bvy - p.vy) * 0.03;
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > w) p.vx *= -1;
            if (p.y < 0 || p.y > h) p.vy *= -1;
          }

          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          const R = 130;
          if (d2 < R * R && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const force = (1 - d / R) * (p.kind === 'letter' ? 5 : 2.5);
            p.vx += (dx / d) * force;
            p.vy += (dy / d) * force;
          }
          if (p.kind === 'letter') {
            p.x += p.vx;
            p.y += p.vy;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle =
          p.kind === 'letter'
            ? `rgba(100, 255, 218, ${0.9 * fade})`
            : `rgba(136, 146, 176, ${0.45 * fade})`;
        ctx.fill();
      }

      // líneas entre partículas de polvo cercanas al cursor
      if (!exiting) {
        for (const p of particles) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (p.kind === 'dust' && d < 170) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 255, 218, ${(1 - d / 170) * 0.35})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }

      if (!finished) rafId = requestAnimationFrame(frame);
    };

    setup();
    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove, { passive: true });
    window.addEventListener('resize', setup);
    rafId = requestAnimationFrame(frame);

    return () => {
      finished = true;
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('resize', setup);
    };
  }, []);

  const statusIndex = Math.min(STATUS.length - 1, Math.floor(progress / 28));

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          className="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <canvas ref={canvasRef} className="loader-canvas" />

          <div className="loader-hud">
            <span className="loader-brand">MASTA<b>DEV</b></span>
            <div className="loader-footer">
              <p className="loader-status">
                {STATUS[statusIndex]}
                <span className="loader-dots" />
              </p>
              <div className="loader-bar-container">
                <div className="loader-bar" style={{ width: `${progress}%` }} />
              </div>
              <span className="loader-percent">{String(progress).padStart(3, '0')}%</span>
              <p className="loader-hint">Mueve el cursor para interactuar con las partículas</p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
