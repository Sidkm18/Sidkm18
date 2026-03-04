export default function GymBuilding({ isHovered }) {
  return (
    <svg viewBox="0 0 220 220" className="w-full h-full">
      {/* Arched roof */}
      <path d="M15,100 Q110,25 205,100" fill="#F48FB1" stroke="#EC407A" strokeWidth="2" />

      {/* Dumbbell decoration */}
      <g opacity={isHovered ? 1 : 0.7} className="transition-all duration-300">
        <circle cx="85" cy="55" r="9" fill="#FCE4EC" stroke="#EC407A" strokeWidth="2" />
        <line x1="94" y1="55" x2="126" y2="55" stroke="#EC407A" strokeWidth="3" />
        <circle cx="135" cy="55" r="9" fill="#FCE4EC" stroke="#EC407A" strokeWidth="2" />
      </g>

      {/* Building body */}
      <rect x="15" y="100" width="190" height="100" rx="4" fill="#FCE4EC" />
      <rect x="15" y="100" width="190" height="100" rx="4" fill="none" stroke="#EC407A" strokeWidth="2" />

      {/* Double doors */}
      <rect x="75" y="140" width="32" height="60" rx="3" fill="#EC407A" stroke="#C2185B" strokeWidth="1.5" />
      <rect x="113" y="140" width="32" height="60" rx="3" fill="#EC407A" stroke="#C2185B" strokeWidth="1.5" />
      <circle cx="105" cy="170" r="2" fill="#FFF9C4" />
      <circle cx="115" cy="170" r="2" fill="#FFF9C4" />

      {/* Side windows */}
      <rect x="30" y="120" width="28" height="32" rx="3" fill={isHovered ? '#FFF9C4' : '#BBDEFB'} stroke="#EC407A" strokeWidth="1.5" className="transition-all duration-300" />
      <rect x="162" y="120" width="28" height="32" rx="3" fill={isHovered ? '#FFF9C4' : '#BBDEFB'} stroke="#EC407A" strokeWidth="1.5" className="transition-all duration-300" />

      {/* Sign */}
      <text
        x="110" y="90"
        textAnchor="middle"
        fill="#880E4F"
        fontSize="14"
        fontFamily="Quicksand, sans-serif"
        fontWeight="700"
        opacity={isHovered ? 1 : 0.8}
        className="transition-all duration-300"
      >
        GYM
      </text>
    </svg>
  );
}
