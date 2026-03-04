import { motion } from 'framer-motion';
import useKeyClose from '../../hooks/useKeyClose';
import BUILDINGS from '../../data/buildings';
import AboutModal from './AboutModal';
import ProjectsModal from './ProjectsModal';
import SkillsModal from './SkillsModal';
import ResumeModal from './ResumeModal';
import CyberModal from './CyberModal';
import ContactModal from './ContactModal';
import HobbiesModal from './HobbiesModal';

const MODAL_MAP = {
  home: AboutModal,
  office: ProjectsModal,
  lab: SkillsModal,
  library: ResumeModal,
  cyberhub: CyberModal,
  postoffice: ContactModal,
  gym: HobbiesModal,
};

export default function ModalOverlay({ buildingId, onClose }) {
  useKeyClose('Escape', onClose);

  const ContentComponent = MODAL_MAP[buildingId];
  const building = BUILDINGS.find((b) => b.id === buildingId);
  if (!ContentComponent || !building) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(4px)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        className="relative w-[92vw] max-w-3xl max-h-[85vh] overflow-y-auto modal-scroll rounded-2xl p-6 md:p-8"
        style={{
          background: '#FFFFFF',
          border: '1px solid #E8DDD0',
          boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
        }}
        initial={{ scale: 0.85, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-600 transition-colors z-10"
          style={{ background: '#F5F0EB' }}
        >
          &times;
        </button>
        <ContentComponent color={building.color} />
      </motion.div>
    </motion.div>
  );
}
