import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const duration = 2500;
    const interval = 30;
    const step = 100 / (duration / interval);
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setExiting(true), 400);
          return 100;
        }
        return next;
      });
    }, interval);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ background: 'linear-gradient(180deg, #87CEEB 0%, #B5E3F5 50%, #7EC850 100%)' }}
      animate={exiting ? { opacity: 0, y: -30 } : { opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      onAnimationComplete={() => {
        if (exiting) onComplete();
      }}
    >
      {/* Floating house */}
      <div style={{ animation: 'float 3s ease-in-out infinite' }}>
        <svg width="80" height="100" viewBox="0 0 80 100">
          {/* Roof */}
          <polygon points="5,45 40,10 75,45" fill="#C75B39" stroke="#A14828" strokeWidth="1.5" />
          {/* Body */}
          <rect x="12" y="45" width="56" height="45" rx="2" fill="#FFECD2" stroke="#E8C9A0" strokeWidth="1.5" />
          {/* Window left */}
          <rect x="20" y="52" width="14" height="14" rx="1" fill="#BBDEFB" stroke="#8B6F47" strokeWidth="1" />
          <line x1="27" y1="52" x2="27" y2="66" stroke="#8B6F47" strokeWidth="0.5" />
          <line x1="20" y1="59" x2="34" y2="59" stroke="#8B6F47" strokeWidth="0.5" />
          {/* Window right */}
          <rect x="46" y="52" width="14" height="14" rx="1" fill="#BBDEFB" stroke="#8B6F47" strokeWidth="1" />
          <line x1="53" y1="52" x2="53" y2="66" stroke="#8B6F47" strokeWidth="0.5" />
          <line x1="46" y1="59" x2="60" y2="59" stroke="#8B6F47" strokeWidth="0.5" />
          {/* Door */}
          <rect x="32" y="72" width="16" height="18" rx="2" fill="#8B6F47" stroke="#7A5F3A" strokeWidth="1" />
          <circle cx="44" cy="82" r="1.5" fill="#FFD54F" />
        </svg>
      </div>

      <div className="mt-6 text-center">
        <h1
          className="text-2xl font-bold mb-1"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            color: '#5D4037',
          }}
        >
          Welcome to My Town
        </h1>
        <p
          className="text-sm mb-6"
          style={{
            fontFamily: "'Nunito', sans-serif",
            color: '#8D6E63',
          }}
        >
          Loading portfolio...
        </p>
      </div>

      <div className="w-64 h-2 bg-white/40 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: 'linear-gradient(90deg, #FFA726, #FF7043)' }}
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1, ease: 'linear' }}
        />
      </div>
    </motion.div>
  );
}
