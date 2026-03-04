export default function HomeBuilding({ isHovered }) {
  return (
    <svg viewBox="0 0 200 250" className="w-full h-full">
      {/* Chimney */}
      <rect x="140" y="35" width="20" height="45" rx="2" fill="#8B6F47" />
      <rect x="136" y="30" width="28" height="8" rx="2" fill="#7A5F3A" />
      {/* Smoke */}
      <g opacity={isHovered ? 0.6 : 0.3} className="transition-all duration-500">
        <circle cx="150" cy="22" r="4" fill="#D5D5D5" />
        <circle cx="155" cy="14" r="3" fill="#D5D5D5" />
        <circle cx="152" cy="6" r="2.5" fill="#D5D5D5" />
      </g>

      {/* Roof */}
      <polygon points="15,110 100,30 185,110" fill="#C75B39" />
      <polygon points="15,110 100,30 185,110" fill="none" stroke="#A14828" strokeWidth="2" />
      {/* Roof line detail */}
      <line x1="57" y1="70" x2="143" y2="70" stroke="#A14828" strokeWidth="1" opacity="0.3" />

      {/* Main body */}
      <rect x="25" y="110" width="150" height="120" rx="3" fill="#FFECD2" />
      <rect x="25" y="110" width="150" height="120" rx="3" fill="none" stroke="#E8C9A0" strokeWidth="2" />

      {/* Window Left */}
      <rect x="45" y="130" width="35" height="35" rx="3" fill={isHovered ? '#FFF9C4' : '#BBDEFB'} stroke="#8B6F47" strokeWidth="2" className="transition-all duration-300" />
      <line x1="62.5" y1="130" x2="62.5" y2="165" stroke="#8B6F47" strokeWidth="1.5" />
      <line x1="45" y1="147.5" x2="80" y2="147.5" stroke="#8B6F47" strokeWidth="1.5" />

      {/* Window Right */}
      <rect x="120" y="130" width="35" height="35" rx="3" fill={isHovered ? '#FFF9C4' : '#BBDEFB'} stroke="#8B6F47" strokeWidth="2" className="transition-all duration-300" />
      <line x1="137.5" y1="130" x2="137.5" y2="165" stroke="#8B6F47" strokeWidth="1.5" />
      <line x1="120" y1="147.5" x2="155" y2="147.5" stroke="#8B6F47" strokeWidth="1.5" />

      {/* Door */}
      <rect x="78" y="180" width="44" height="50" rx="4" fill="#8B6F47" />
      <rect x="78" y="180" width="44" height="50" rx="4" fill="none" stroke="#7A5F3A" strokeWidth="2" />
      <circle cx="114" cy="207" r="3" fill="#FFD54F" />
      {/* Door arch */}
      <path d="M78,195 Q100,172 122,195" fill="none" stroke="#7A5F3A" strokeWidth="1.5" />

      {/* Welcome mat */}
      <rect x="82" y="228" width="36" height="5" rx="2" fill="#A1887F" />

      {/* Label */}
      <text
        x="100" y="250"
        textAnchor="middle"
        fill="#5D4037"
        fontSize="13"
        fontFamily="Quicksand, sans-serif"
        fontWeight="700"
        opacity={isHovered ? 1 : 0}
        className="transition-all duration-300"
      >
        HOME
      </text>
    </svg>
  );
}
