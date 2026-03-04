import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import BUILDINGS from '../data/buildings';
import MapPin from './MapPin';
import ModalOverlay from './modals/ModalOverlay';
import SocialBar from './ui/SocialBar';
import HUD from './ui/HUD';
import WelcomeOverlay from './WelcomeOverlay';
import useParallax from '../hooks/useParallax';

// Building SVG components
import HomeBuilding from './buildings/HomeBuilding';
import OfficeBuilding from './buildings/OfficeBuilding';
import LabBuilding from './buildings/LabBuilding';
import LibraryBuilding from './buildings/LibraryBuilding';
import CyberHub from './buildings/CyberHub';
import PostOffice from './buildings/PostOffice';
import GymBuilding from './buildings/GymBuilding';

const BUILDING_COMPONENTS = {
  home: HomeBuilding,
  office: OfficeBuilding,
  lab: LabBuilding,
  library: LibraryBuilding,
  cyberhub: CyberHub,
  postoffice: PostOffice,
  gym: GymBuilding,
};

export default function TownMap() {
  const [activeModal, setActiveModal] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [pinsVisible, setPinsVisible] = useState(false);
  const [hoveredBuilding, setHoveredBuilding] = useState(null);
  const parallax = useParallax(0.015);

  const handleWelcomeDismiss = () => {
    setShowWelcome(false);
    setTimeout(() => setPinsVisible(true), 300);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden" style={{ background: '#5BA3D9' }}>
      {/* Full SVG Town Scene with parallax */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${parallax.x * -0.5}px, ${parallax.y * -0.5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <svg
          viewBox="0 0 1920 1080"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full"
          style={{ pointerEvents: 'none' }}
        >
          <defs>
            <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#5BA3D9" />
              <stop offset="40%" stopColor="#87CEEB" />
              <stop offset="100%" stopColor="#B5E3F5" />
            </linearGradient>
            <linearGradient id="grassGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7EC850" />
              <stop offset="100%" stopColor="#5DA33A" />
            </linearGradient>
            <filter id="sunGlow" x="-100%" y="-100%" width="300%" height="300%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
            </filter>
          </defs>

          {/* Sky */}
          <rect width="1920" height="1080" fill="url(#skyGrad)" />

          {/* Sun */}
          <g>
            <circle cx="1680" cy="140" r="60" fill="#FFF176" opacity="0.3" filter="url(#sunGlow)" />
            <circle cx="1680" cy="140" r="45" fill="#FFE082" opacity="0.5" filter="url(#sunGlow)" />
            <circle cx="1680" cy="140" r="30" fill="#FFEE58" />
            <circle cx="1680" cy="140" r="26" fill="#FFF9C4" />
          </g>

          {/* Clouds */}
          {[
            { cx: 200, cy: 80, rx: 60, ry: 25, dur: 60, children: [{ cx: 250, cy: 70, rx: 45, ry: 20 }, { cx: 170, cy: 75, rx: 35, ry: 18 }] },
            { cx: 700, cy: 120, rx: 70, ry: 28, dur: 80, children: [{ cx: 760, cy: 108, rx: 50, ry: 22 }, { cx: 640, cy: 115, rx: 40, ry: 20 }] },
            { cx: 1200, cy: 60, rx: 55, ry: 22, dur: 70, children: [{ cx: 1250, cy: 52, rx: 40, ry: 18 }, { cx: 1160, cy: 56, rx: 30, ry: 15 }] },
            { cx: 450, cy: 170, rx: 50, ry: 20, dur: 100, children: [{ cx: 490, cy: 162, rx: 35, ry: 16 }] },
          ].map((cloud, i) => (
            <g key={i} opacity="0.85" style={{ animation: `cloudDrift ${cloud.dur}s linear infinite`, animationDelay: `${i * 15}s` }}>
              <ellipse cx={cloud.cx} cy={cloud.cy} rx={cloud.rx} ry={cloud.ry} fill="white" />
              {cloud.children.map((c, j) => (
                <ellipse key={j} cx={c.cx} cy={c.cy} rx={c.rx} ry={c.ry} fill="white" />
              ))}
            </g>
          ))}

          {/* Birds */}
          {[{ x: 300, y: 200, s: 0.8 }, { x: 320, y: 210, s: 0.6 }, { x: 310, y: 195, s: 0.7 }].map((b, i) => (
            <g key={i} opacity="0.3" style={{ animation: `cloudDrift ${120 + i * 20}s linear infinite` }}>
              <path
                d={`M${b.x},${b.y} Q${b.x + 4 * b.s},${b.y - 4 * b.s} ${b.x + 8 * b.s},${b.y} M${b.x},${b.y} Q${b.x - 4 * b.s},${b.y - 4 * b.s} ${b.x - 8 * b.s},${b.y}`}
                fill="none" stroke="#555" strokeWidth={1 * b.s}
              />
            </g>
          ))}

          {/* Distant mountains */}
          <polygon points="0,400 200,250 400,380 600,220 800,360 1000,280 1200,350 1400,240 1600,340 1800,260 1920,380 1920,500 0,500" fill="#A8D5A2" opacity="0.4" />
          <polygon points="0,440 150,320 350,410 550,300 750,400 950,330 1150,390 1350,290 1550,380 1750,310 1920,420 1920,500 0,500" fill="#8CC684" opacity="0.5" />

          {/* Main ground */}
          <rect x="0" y="480" width="1920" height="600" fill="url(#grassGrad)" />

          {/* Rolling hills */}
          <ellipse cx="300" cy="500" rx="400" ry="60" fill="#8DD460" />
          <ellipse cx="900" cy="490" rx="500" ry="50" fill="#8DD460" />
          <ellipse cx="1500" cy="505" rx="450" ry="55" fill="#8DD460" />

          {/* Winding path */}
          <path
            d="M0,750 Q200,730 350,760 Q500,790 700,750 Q900,710 1100,760 Q1300,810 1500,750 Q1700,700 1920,740"
            fill="none" stroke="#D4A76A" strokeWidth="40" strokeLinecap="round" opacity="0.6"
          />
          <path
            d="M0,750 Q200,730 350,760 Q500,790 700,750 Q900,710 1100,760 Q1300,810 1500,750 Q1700,700 1920,740"
            fill="none" stroke="#C49555" strokeWidth="2" strokeLinecap="round" strokeDasharray="8 12" opacity="0.4"
          />

          {/* Connecting paths to buildings */}
          <path d="M220,610 Q260,680 350,750" fill="none" stroke="#D4A76A" strokeWidth="20" strokeLinecap="round" opacity="0.5" />
          <path d="M505,580 Q520,660 480,740" fill="none" stroke="#D4A76A" strokeWidth="20" strokeLinecap="round" opacity="0.5" />
          <path d="M810,590 Q830,660 760,730" fill="none" stroke="#D4A76A" strokeWidth="20" strokeLinecap="round" opacity="0.5" />
          <path d="M1060,555 Q1080,650 1100,740" fill="none" stroke="#D4A76A" strokeWidth="20" strokeLinecap="round" opacity="0.5" />
          <path d="M1335,590 Q1350,660 1400,730" fill="none" stroke="#D4A76A" strokeWidth="20" strokeLinecap="round" opacity="0.5" />
          <path d="M1607,580 Q1600,660 1550,730" fill="none" stroke="#D4A76A" strokeWidth="20" strokeLinecap="round" opacity="0.5" />
          <path d="M920,810 Q920,780 920,760" fill="none" stroke="#D4A76A" strokeWidth="20" strokeLinecap="round" opacity="0.5" />

          {/* Trees scattered around */}
          {[
            { x: 50, y: 530, s: 0.9 },
            { x: 680, y: 500, s: 0.7 },
            { x: 1180, y: 510, s: 0.8 },
            { x: 1450, y: 530, s: 0.6 },
            { x: 1850, y: 520, s: 0.85 },
            { x: 380, y: 630, s: 0.5 },
            { x: 620, y: 650, s: 0.6 },
            { x: 1150, y: 660, s: 0.55 },
            { x: 1700, y: 640, s: 0.65 },
            { x: 100, y: 700, s: 0.5 },
            { x: 1800, y: 700, s: 0.5 },
            { x: 500, y: 850, s: 0.4 },
            { x: 1400, y: 870, s: 0.45 },
          ].map((tree, i) => (
            <g key={`tree-${i}`} transform={`translate(${tree.x}, ${tree.y}) scale(${tree.s})`}>
              <rect x="-4" y="0" width="8" height="30" rx="3" fill="#8B6F47" />
              <ellipse cx="0" cy="-8" rx="20" ry="22" fill="#4CAF50" />
              <ellipse cx="-10" cy="0" rx="14" ry="16" fill="#43A047" />
              <ellipse cx="10" cy="0" rx="14" ry="16" fill="#43A047" />
              <ellipse cx="0" cy="-15" rx="14" ry="14" fill="#66BB6A" />
            </g>
          ))}

          {/* Bushes */}
          {[
            { x: 330, y: 570 }, { x: 900, y: 550 }, { x: 1560, y: 560 },
            { x: 200, y: 780 }, { x: 750, y: 830 }, { x: 1300, y: 800 }, { x: 1700, y: 820 },
          ].map((bush, i) => (
            <g key={`bush-${i}`} transform={`translate(${bush.x}, ${bush.y}) scale(0.6)`}>
              <ellipse cx="0" cy="0" rx="18" ry="12" fill="#43A047" />
              <ellipse cx="12" cy="-2" rx="14" ry="10" fill="#4CAF50" />
              <ellipse cx="-12" cy="-2" rx="14" ry="10" fill="#4CAF50" />
            </g>
          ))}

          {/* Small flowers */}
          {[
            { x: 160, y: 620, c: '#FF7043' }, { x: 480, y: 700, c: '#EC407A' },
            { x: 850, y: 680, c: '#FFCA28' }, { x: 1100, y: 710, c: '#AB47BC' },
            { x: 1380, y: 680, c: '#FF7043' }, { x: 1650, y: 700, c: '#42A5F5' },
            { x: 300, y: 820, c: '#EC407A' }, { x: 1000, y: 850, c: '#FFCA28' },
          ].map((f, i) => (
            <g key={`flower-${i}`}>
              <line x1={f.x} y1={f.y} x2={f.x} y2={f.y + 8} stroke="#43A047" strokeWidth="1.5" />
              <circle cx={f.x} cy={f.y} r="3" fill={f.c} />
              <circle cx={f.x} cy={f.y} r="1.5" fill="#FFF9C4" />
            </g>
          ))}

          {/* Fence along the path */}
          {[0, 60, 120, 180, 240, 1680, 1740, 1800, 1860].map((fx, i) => (
            <g key={`fence-${i}`} opacity="0.4">
              <rect x={fx + 5} y="730" width="3" height="20" fill="#8B6F47" />
              <rect x={fx + 35} y="730" width="3" height="20" fill="#8B6F47" />
              <rect x={fx} y="735" width="42" height="3" rx="1" fill="#A1887F" />
              <rect x={fx} y="743" width="42" height="3" rx="1" fill="#A1887F" />
            </g>
          ))}

          {/* Street lamp */}
          {[650, 1200].map((lx, i) => (
            <g key={`lamp-${i}`} opacity="0.6">
              <rect x={lx} y="700" width="4" height="50" rx="1" fill="#78909C" />
              <ellipse cx={lx + 2} cy="698" rx="8" ry="5" fill="#FFF9C4" opacity="0.4" />
              <rect x={lx - 5} y="695" width="14" height="6" rx="3" fill="#546E7A" />
            </g>
          ))}
        </svg>
      </div>

      {/* Building SVGs - rendered as HTML divs positioned over the scene */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${parallax.x * -0.5}px, ${parallax.y * -0.5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        {BUILDINGS.map((b) => {
          const BuildingComp = BUILDING_COMPONENTS[b.id];
          if (!BuildingComp) return null;
          const s = b.scene;
          return (
            <motion.div
              key={b.id}
              className="absolute cursor-pointer"
              style={{
                left: `${(s.x / 1920) * 100}%`,
                top: `${(s.y / 1080) * 100}%`,
                width: `${(s.w / 1920) * 100}%`,
                height: `${(s.h / 1080) * 100}%`,
              }}
              onMouseEnter={() => setHoveredBuilding(b.id)}
              onMouseLeave={() => setHoveredBuilding(null)}
              onClick={() => setActiveModal(b.id)}
              whileHover={{ scale: 1.05, y: -4 }}
              transition={{ type: 'spring', stiffness: 400, damping: 15 }}
            >
              <BuildingComp isHovered={hoveredBuilding === b.id} />
            </motion.div>
          );
        })}
      </div>

      {/* Red map pins with parallax */}
      {pinsVisible && (
        <div
          className="absolute inset-0"
          style={{
            transform: `translate(${parallax.x}px, ${parallax.y}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          {BUILDINGS.map((b) => (
            <MapPin
              key={b.id}
              id={b.id}
              label={b.label}
              subtitle={b.subtitle}
              color={b.color}
              pin={b.pin}
              onClick={setActiveModal}
            />
          ))}
        </div>
      )}

      <HUD />
      <SocialBar />

      {/* Welcome overlay */}
      <AnimatePresence>
        {showWelcome && (
          <WelcomeOverlay onNext={handleWelcomeDismiss} />
        )}
      </AnimatePresence>

      {/* Content modal */}
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
