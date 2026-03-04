import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

export default function BuildingWrapper({ id, label, subtitle, position, color, children, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="absolute cursor-pointer"
      style={{
        left: position.left,
        top: position.top,
        width: position.width,
        height: position.height,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(id)}
      whileHover={{ scale: 1.06, y: -4 }}
      transition={{ type: 'spring', stiffness: 400, damping: 15 }}
    >
      {/* Red map pin */}
      <div
        className="absolute left-1/2 -translate-x-1/2 -top-3 z-10"
        style={{ animation: 'pinBounce 2s ease-in-out infinite' }}
      >
        <svg width="24" height="34" viewBox="0 0 24 34">
          <path
            d="M12,0 C5.4,0 0,5.4 0,12 C0,20 12,34 12,34 C12,34 24,20 24,12 C24,5.4 18.6,0 12,0"
            fill="#E53935"
            stroke="#B71C1C"
            strokeWidth="1"
          />
          <circle cx="12" cy="11" r="5" fill="white" />
        </svg>
      </div>

      {hovered && (
        <AnimatePresence>
          <motion.div
            className="absolute left-1/2 -top-2 -translate-x-1/2 -translate-y-full pointer-events-none z-20 whitespace-nowrap"
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
              {subtitle && (
                <div className="text-[10px] mt-0.5" style={{ color: '#9B8E80' }}>{subtitle}</div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
      {React.cloneElement(children, { isHovered: hovered })}
    </motion.div>
  );
}
