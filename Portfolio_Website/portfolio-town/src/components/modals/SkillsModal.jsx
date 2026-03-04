import { motion } from 'framer-motion';
import { SKILLS } from '../../data/content';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } };

const skillKeys = Object.keys(SKILLS);

export default function SkillsModal({ color }) {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.h2
        variants={item}
        className="text-xl md:text-2xl font-bold mb-6"
        style={{ color: '#3D3225', fontFamily: "'Quicksand', sans-serif" }}
      >
        Skills Lab
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {skillKeys.map((key) => {
          const cat = SKILLS[key];
          return (
            <motion.div
              key={key}
              variants={item}
              className="rounded-xl p-4 transition-all duration-300 hover:scale-[1.02]"
              style={{
                background: '#FAFAFA',
                border: '1px solid #F0F0F0',
              }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-sm font-bold" style={{ color: '#3D3225' }}>{cat.title}</h3>
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full"
                  style={{ color, background: '#FFF9F0', border: '1px solid #E8DDD0' }}
                >
                  {cat.level}
                </span>
              </div>

              <div className="space-y-2">
                {cat.items.map((skill) => (
                  <div key={skill} className="flex items-center gap-3">
                    <div className="flex-1">
                      <div className="text-xs mb-1" style={{ color: '#6B5D4F' }}>{skill}</div>
                      <div className="w-full h-1.5 rounded-full" style={{ background: '#F0F0F0' }}>
                        <motion.div
                          className="h-full rounded-full"
                          style={{ background: color }}
                          initial={{ width: 0 }}
                          animate={{ width: `${60 + Math.random() * 35}%` }}
                          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
