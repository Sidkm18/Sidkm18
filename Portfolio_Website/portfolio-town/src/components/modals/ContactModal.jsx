import { motion } from 'framer-motion';
import { PROFILE } from '../../data/content';
import { FaGithub, FaLinkedinIn, FaHackerrank, FaCode, FaMapMarkerAlt } from 'react-icons/fa';
import { SiCodechef, SiLeetcode, SiCodeforces } from 'react-icons/si';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const item = { hidden: { opacity: 0, y: 15 }, show: { opacity: 1, y: 0 } };

const ICON_MAP = {
  FaGithub,
  FaLinkedinIn,
  SiCodeforces,
  SiCodechef,
  SiLeetcode,
  FaHackerrank,
};

export default function ContactModal({ color }) {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.h2
        variants={item}
        className="text-xl md:text-2xl font-bold mb-2"
        style={{ color: '#3D3225', fontFamily: "'Quicksand', sans-serif" }}
      >
        Contact
      </motion.h2>

      <motion.p variants={item} className="text-sm mb-6" style={{ color: '#9B8E80' }}>
        Ready to collaborate? Let&apos;s build something together.
      </motion.p>

      <motion.div variants={item} className="flex items-center gap-2 mb-6 text-xs" style={{ color: '#6B5D4F' }}>
        <FaMapMarkerAlt style={{ color }} />
        <span>{PROFILE.location}</span>
      </motion.div>

      <motion.div variants={item} className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
        {PROFILE.socials.map((social) => {
          const Icon = ICON_MAP[social.icon] || FaCode;
          return (
            <a
              key={social.platform}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 rounded-lg transition-all duration-300 hover:scale-105 group"
              style={{
                background: '#FAFAFA',
                border: '1px solid #F0F0F0',
              }}
            >
              <Icon
                size={16}
                className="transition-colors duration-300"
                style={{ color: '#9B8E80' }}
              />
              <span className="text-xs group-hover:text-gray-800 transition-colors" style={{ color: '#6B5D4F' }}>
                {social.platform}
              </span>
            </a>
          );
        })}
      </motion.div>

      <motion.div variants={item}>
        <h3 className="text-xs font-bold mb-2" style={{ color: '#3D3225' }}>Interested in</h3>
        <div className="flex flex-wrap gap-2">
          {['Cybersecurity opportunities', 'AR/VR projects', 'Collaborative hackathons', 'LEGO & tech discussions'].map((interest) => (
            <span
              key={interest}
              className="text-[10px] px-2.5 py-1 rounded-full"
              style={{ background: '#FFF9F0', color: '#6B5D4F', border: '1px solid #E8DDD0' }}
            >
              {interest}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
