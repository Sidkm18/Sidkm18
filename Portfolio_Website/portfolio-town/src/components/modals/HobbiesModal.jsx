import { motion } from 'framer-motion';
import { HOBBIES } from '../../data/content';
import { useState, useEffect } from 'react';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } };

export default function HobbiesModal({ color }) {
  const [buildingIdx, setBuildingIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBuildingIdx((prev) => (prev + 1) % HOBBIES.currentlyBuilding.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.h2
        variants={item}
        className="text-xl md:text-2xl font-bold mb-6"
        style={{ color: '#3D3225', fontFamily: "'Quicksand', sans-serif" }}
      >
        Beyond Code
      </motion.h2>

      <motion.div
        variants={item}
        className="rounded-xl p-4 mb-6"
        style={{ background: '#FFF9F0', border: '1px solid #E8DDD0' }}
      >
        <div className="text-xs mb-2" style={{ color: '#9B8E80' }}>Currently building:</div>
        <div className="text-sm font-medium h-5" style={{ color }}>
          {HOBBIES.currentlyBuilding[buildingIdx]}
        </div>
      </motion.div>

      <motion.div variants={item} className="mb-6">
        <h3 className="text-sm font-bold mb-3" style={{ color: '#3D3225' }}>Interested In</h3>
        <div className="grid grid-cols-2 gap-3">
          {HOBBIES.interestedIn.map((interest, i) => (
            <div
              key={i}
              className="rounded-lg p-3 text-center transition-all duration-300 hover:scale-105"
              style={{ background: '#FAFAFA', border: '1px solid #F0F0F0' }}
            >
              <div className="text-xs" style={{ color: '#6B5D4F' }}>{interest}</div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={item}>
        <h3 className="text-sm font-bold mb-3" style={{ color: '#3D3225' }}>Also Working On</h3>
        <div className="space-y-2">
          {HOBBIES.currentlyBuilding.map((activity, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-xs"
              style={{ color: '#6B5D4F' }}
            >
              <span style={{ color }}>&#9656;</span>
              {activity}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
