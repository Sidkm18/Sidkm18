import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BUILDINGS from '../data/buildings';
import ModalOverlay from './modals/ModalOverlay';

export default function MobileTownMenu() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="relative w-screen h-screen overflow-y-auto" style={{ background: 'linear-gradient(180deg, #87CEEB 0%, #B5E3F5 30%, #7EC850 100%)' }}>
      {/* Header */}
      <div className="pt-10 pb-6 px-6 text-center">
        <h1
          className="text-xl font-bold mb-1"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            color: '#FFFFFF',
            textShadow: '0 1px 3px rgba(0,0,0,0.2)',
          }}
        >
          Sidharth's Town
        </h1>
        <p className="text-xs" style={{ color: 'rgba(255,255,255,0.8)' }}>Click a building to explore</p>
      </div>

      {/* Building Cards */}
      <div className="px-4 pb-10 space-y-3">
        {BUILDINGS.map((building) => (
          <motion.button
            key={building.id}
            className="w-full p-4 rounded-xl flex items-center gap-4 text-left transition-all"
            style={{
              background: 'rgba(255,255,255,0.85)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setActiveModal(building.id)}
          >
            <span className="text-2xl">{building.mobileIcon}</span>
            <div>
              <div
                className="text-sm font-bold"
                style={{ color: building.color, fontFamily: "'Quicksand', sans-serif" }}
              >
                {building.label}
              </div>
              <div className="text-xs" style={{ color: '#9B8E80' }}>{building.subtitle}</div>
            </div>
            <div className="ml-auto" style={{ color: '#9B8E80' }}>&rsaquo;</div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeModal && (
          <ModalOverlay
            buildingId={activeModal}
            onClose={() => setActiveModal(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
