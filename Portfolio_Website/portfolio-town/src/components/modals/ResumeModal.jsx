import { motion } from 'framer-motion';
import { EXPERIENCE } from '../../data/content';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } };

export default function ResumeModal({ color }) {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.h2
        variants={item}
        className="text-xl md:text-2xl font-bold mb-6"
        style={{ color: '#3D3225', fontFamily: "'Quicksand', sans-serif" }}
      >
        Experience
      </motion.h2>

      <div className="space-y-6">
        {EXPERIENCE.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="relative pl-6 pb-6"
            style={{ borderLeft: `2px solid #E8DDD0` }}
          >
            <div
              className="absolute -left-[7px] top-0 w-3 h-3 rounded-full"
              style={{ background: color }}
            />

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
              <h3 className="text-sm font-bold" style={{ color: '#3D3225' }}>{exp.role}</h3>
              <span className="text-[10px]" style={{ color: '#9B8E80' }}>{exp.period}</span>
            </div>

            <p className="text-xs font-medium mb-3" style={{ color }}>
              {exp.company}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-3">
              {exp.tasks.map((task) => (
                <span
                  key={task}
                  className="text-[10px] px-2 py-0.5 rounded-full"
                  style={{ background: '#FFF9F0', color: '#6B5D4F', border: '1px solid #E8DDD0' }}
                >
                  {task}
                </span>
              ))}
            </div>

            <ul className="space-y-1">
              {exp.highlights.map((h, i) => (
                <li key={i} className="text-xs flex items-start gap-2" style={{ color: '#6B5D4F' }}>
                  <span style={{ color }}>&#9656;</span>
                  {h}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div variants={item} className="mt-6 pt-4" style={{ borderTop: '1px solid #E8DDD0' }}>
        <h3 className="text-sm font-bold mb-2" style={{ color: '#3D3225' }}>Education</h3>
        <div
          className="rounded-lg p-3"
          style={{ background: '#FFF9F0', border: '1px solid #E8DDD0' }}
        >
          <div className="text-xs font-medium" style={{ color: '#3D3225' }}>B.E. Computer Engineering</div>
          <div className="text-[10px] mt-1" style={{ color: '#9B8E80' }}>K.J. Somaiya College of Engineering</div>
          <div className="flex gap-3 mt-2">
            <span className="text-[10px]" style={{ color }}>CGPA: 9.65</span>
            <span className="text-[10px]" style={{ color: '#9B8E80' }}>|</span>
            <span className="text-[10px]" style={{ color: '#9B8E80' }}>Honours in Cyber Security & Forensics</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
