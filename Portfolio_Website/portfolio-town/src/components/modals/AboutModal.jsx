import { motion } from 'framer-motion';
import { PROFILE } from '../../data/content';
import { useState, useEffect } from 'react';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } };

export default function AboutModal({ color }) {
  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % PROFILE.roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.h1
        variants={item}
        className="text-2xl md:text-3xl font-bold mb-1"
        style={{ color: '#3D3225', fontFamily: "'Quicksand', sans-serif" }}
      >
        {PROFILE.name}
      </motion.h1>

      <motion.p
        variants={item}
        className="text-sm mb-5 h-5"
        style={{ color, fontFamily: "'Quicksand', sans-serif" }}
      >
        {PROFILE.roles[roleIdx]}
      </motion.p>

      <motion.p variants={item} className="text-sm leading-relaxed mb-6" style={{ color: '#6B5D4F' }}>
        {PROFILE.about}
      </motion.p>

      <motion.div variants={item} className="grid grid-cols-3 gap-3 mb-6">
        {PROFILE.stats.map((stat, i) => (
          <div
            key={i}
            className="text-center p-3 rounded-lg"
            style={{ background: '#FFF9F0', border: '1px solid #E8DDD0' }}
          >
            <div className="text-lg font-bold" style={{ color }}>{stat.value}</div>
            <div className="text-xs mt-1" style={{ color: '#9B8E80' }}>{stat.label}</div>
          </div>
        ))}
      </motion.div>

      <motion.div variants={item} className="flex flex-wrap gap-2 mb-4">
        <span className="text-xs px-3 py-1 rounded-full" style={{ background: '#FFF9F0', color: '#6B5D4F', border: '1px solid #E8DDD0' }}>
          {PROFILE.location}
        </span>
        <span className="text-xs px-3 py-1 rounded-full" style={{ background: '#FFF9F0', color: '#6B5D4F', border: '1px solid #E8DDD0' }}>
          {PROFILE.currentPursuit}
        </span>
      </motion.div>

      <motion.p variants={item} className="text-xs italic" style={{ color: '#9B8E80' }}>
        &quot;{PROFILE.tagline}&quot;
      </motion.p>
    </motion.div>
  );
}
