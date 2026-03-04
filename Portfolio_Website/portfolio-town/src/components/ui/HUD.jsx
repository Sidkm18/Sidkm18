import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HUD() {
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 6000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Name plate - top left */}
      <div className="fixed top-5 left-6 z-30">
        <div
          className="text-lg font-bold"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            color: '#FFFFFF',
            textShadow: '0 1px 3px rgba(0,0,0,0.2)',
          }}
        >
          Sidharth's Town
        </div>
        <div
          className="text-xs mt-0.5"
          style={{
            fontFamily: "'Nunito', sans-serif",
            color: 'rgba(255,255,255,0.8)',
            textShadow: '0 1px 2px rgba(0,0,0,0.15)',
          }}
        >
          Computer Engineer
        </div>
      </div>

      {/* Hint text - bottom center */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="text-sm px-5 py-2.5 rounded-full"
              style={{
                fontFamily: "'Nunito', sans-serif",
                color: '#5D4037',
                background: 'rgba(255,255,255,0.85)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.1)',
                backdropFilter: 'blur(4px)',
              }}
            >
              Click the red pins to explore!
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
