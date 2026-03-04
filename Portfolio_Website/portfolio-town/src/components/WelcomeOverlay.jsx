import { motion } from 'framer-motion';

export default function WelcomeOverlay({ onNext }) {
  return (
    <motion.div
      className="fixed inset-0 z-40 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.35)', backdropFilter: 'blur(2px)' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="text-center px-8 py-10 rounded-2xl mx-4 max-w-md"
        style={{
          background: 'rgba(255,255,255,0.95)',
          boxShadow: '0 8px 40px rgba(0,0,0,0.15)',
        }}
        initial={{ scale: 0.85, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25, delay: 0.1 }}
      >
        {/* Small town icon */}
        <div className="mb-4" style={{ animation: 'float 3s ease-in-out infinite' }}>
          <svg width="60" height="60" viewBox="0 0 60 60" className="mx-auto">
            {/* Simple house icon */}
            <polygon points="10,35 30,12 50,35" fill="#C75B39" />
            <rect x="15" y="35" width="30" height="20" rx="2" fill="#FFECD2" />
            <rect x="23" y="40" width="14" height="15" rx="1" fill="#8B6F47" />
            <rect x="20" y="38" width="8" height="7" rx="1" fill="#BBDEFB" />
            <rect x="33" y="38" width="8" height="7" rx="1" fill="#BBDEFB" />
          </svg>
        </div>

        <h1
          className="text-2xl font-bold mb-2"
          style={{ fontFamily: "'Quicksand', sans-serif", color: '#3D3225' }}
        >
          Welcome!
        </h1>

        <p
          className="text-sm mb-8 leading-relaxed"
          style={{ fontFamily: "'Nunito', sans-serif", color: '#8D6E63' }}
        >
          Click the red pins in the town to explore
          <br />
          my portfolio and learn more about me.
        </p>

        <motion.button
          className="px-8 py-2.5 rounded-full text-sm font-bold text-white cursor-pointer"
          style={{
            fontFamily: "'Quicksand', sans-serif",
            background: 'linear-gradient(135deg, #E53935, #C62828)',
            boxShadow: '0 3px 12px rgba(229,57,53,0.3)',
          }}
          whileHover={{ scale: 1.05, boxShadow: '0 5px 18px rgba(229,57,53,0.4)' }}
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
        >
          Next
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
