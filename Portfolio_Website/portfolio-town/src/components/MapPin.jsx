import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MapPin({ id, label, subtitle, color, pin, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="absolute cursor-pointer z-10"
      style={{
        left: pin.x,
        top: pin.y,
        transform: 'translate(-50%, -100%)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(id)}
      initial={{ scale: 0, y: 20, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15, delay: Math.random() * 0.3 }}
    >
      {/* Tooltip on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 pointer-events-none z-20 whitespace-nowrap"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.15 }}
          >
            <div
              className="px-3 py-1.5 rounded-lg text-center"
              style={{
                background: 'white',
                boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
                border: '1px solid #E8DDD0',
              }}
            >
              <div
                className="text-xs font-bold"
                style={{ color: color || '#5D4037', fontFamily: "'Quicksand', sans-serif" }}
              >
                {label}
              </div>
              <div className="text-[10px] mt-0.5" style={{ color: '#9B8E80' }}>{subtitle}</div>
            </div>
            {/* Little triangle pointer */}
            <div
              className="w-2.5 h-2.5 rotate-45 mx-auto -mt-1.5"
              style={{ background: 'white', border: '1px solid #E8DDD0', borderTop: 'none', borderLeft: 'none' }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* The red pin */}
      <div
        style={{ animation: 'pinBounce 2s ease-in-out infinite' }}
      >
        <svg width="32" height="44" viewBox="0 0 32 44" className="drop-shadow-md">
          <defs>
            <radialGradient id={`pinGrad-${id}`} cx="40%" cy="35%" r="60%">
              <stop offset="0%" stopColor="#FF5252" />
              <stop offset="100%" stopColor="#D32F2F" />
            </radialGradient>
          </defs>
          {/* Pin shadow */}
          <ellipse cx="16" cy="42" rx="5" ry="2" fill="rgba(0,0,0,0.15)" />
          {/* Pin body */}
          <path
            d="M16,2 C9,2 3,8 3,15 C3,24 16,42 16,42 C16,42 29,24 29,15 C29,8 23,2 16,2"
            fill={`url(#pinGrad-${id})`}
            stroke="#B71C1C"
            strokeWidth="1"
          />
          {/* White center circle */}
          <circle cx="16" cy="14" r="6" fill="white" opacity="0.9" />
          {/* Shine highlight */}
          <ellipse cx="12" cy="10" rx="3" ry="4" fill="white" opacity="0.3" transform="rotate(-20, 12, 10)" />
        </svg>
      </div>
    </motion.div>
  );
}
