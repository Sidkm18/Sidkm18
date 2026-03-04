import { motion } from 'framer-motion';
import { CERTIFICATIONS, ACHIEVEMENTS } from '../../data/content';
import { FaShieldAlt, FaTrophy } from 'react-icons/fa';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } };

export default function CyberModal({ color }) {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.h2
        variants={item}
        className="text-xl md:text-2xl font-bold mb-6"
        style={{ color: '#3D3225', fontFamily: "'Quicksand', sans-serif" }}
      >
        Cybersecurity
      </motion.h2>

      <motion.div variants={item} className="mb-6">
        <div className="flex items-center gap-2 mb-3">
          <FaShieldAlt size={14} style={{ color }} />
          <h3 className="text-sm font-bold" style={{ color: '#3D3225' }}>Certifications</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CERTIFICATIONS.map((cert, idx) => (
            <div
              key={idx}
              className="rounded-lg p-3 transition-all duration-300 hover:scale-[1.02]"
              style={{ background: '#FAFAFA', border: '1px solid #F0F0F0' }}
            >
              <div className="text-[10px] font-bold mb-1" style={{ color }}>{cert.issuer}</div>
              <div className="text-xs font-medium mb-1" style={{ color: '#3D3225' }}>{cert.title}</div>
              <div className="text-[10px] mb-2" style={{ color: '#9B8E80' }}>{cert.date}</div>
              <div className="flex flex-wrap gap-1">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[9px] px-1.5 py-0.5 rounded"
                    style={{ background: '#FFF9F0', color: '#6B5D4F' }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div variants={item}>
        <div className="flex items-center gap-2 mb-3">
          <FaTrophy size={14} style={{ color }} />
          <h3 className="text-sm font-bold" style={{ color: '#3D3225' }}>Achievements</h3>
        </div>
        <div className="space-y-3">
          {ACHIEVEMENTS.map((ach, idx) => (
            <div
              key={idx}
              className="rounded-lg p-3"
              style={{ background: '#FAFAFA', border: '1px solid #F0F0F0' }}
            >
              <div className="flex justify-between items-start">
                <div className="text-xs font-medium" style={{ color: '#3D3225' }}>{ach.title}</div>
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full"
                  style={{ color, background: '#FFF9F0', border: '1px solid #E8DDD0' }}
                >
                  {ach.subtitle}
                </span>
              </div>
              <div className="text-[10px] mt-1" style={{ color: '#9B8E80' }}>{ach.details}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
