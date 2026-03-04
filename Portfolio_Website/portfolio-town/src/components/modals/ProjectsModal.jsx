import { motion } from 'framer-motion';
import { PROJECTS } from '../../data/content';
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } };

export default function ProjectsModal({ color }) {
  const [expanded, setExpanded] = useState(null);

  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.h2
        variants={item}
        className="text-xl md:text-2xl font-bold mb-6"
        style={{ color: '#3D3225', fontFamily: "'Quicksand', sans-serif" }}
      >
        Projects
      </motion.h2>

      <div className="space-y-4">
        {PROJECTS.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            className="rounded-xl p-4 cursor-pointer transition-all duration-300"
            style={{
              background: expanded === project.id ? '#FFF9F0' : '#FAFAFA',
              border: `1px solid ${expanded === project.id ? '#E8DDD0' : '#F0F0F0'}`,
              boxShadow: expanded === project.id ? '0 2px 12px rgba(0,0,0,0.06)' : 'none',
            }}
            onClick={() => setExpanded(expanded === project.id ? null : project.id)}
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold text-sm" style={{ color: '#3D3225' }}>{project.title}</h3>
              <div className="flex gap-2">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FaGithub size={14} />
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <FaExternalLinkAlt size={12} />
                  </a>
                )}
              </div>
            </div>

            <p className="text-xs mb-3" style={{ color: '#9B8E80' }}>{project.description}</p>

            <div className="flex flex-wrap gap-1.5 mb-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-[10px] px-2 py-0.5 rounded-full"
                  style={{ background: '#FFF9F0', color, border: '1px solid #E8DDD0' }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {expanded === project.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-3 pt-3"
                style={{ borderTop: '1px solid #E8DDD0' }}
              >
                <ul className="space-y-1.5">
                  {project.features.map((feat, i) => (
                    <li key={i} className="text-xs flex items-start gap-2" style={{ color: '#6B5D4F' }}>
                      <span style={{ color }}>&#9656;</span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
