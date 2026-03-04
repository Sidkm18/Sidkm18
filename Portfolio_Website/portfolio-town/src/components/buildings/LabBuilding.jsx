export default function LabBuilding({ isHovered }) {
  return (
    <svg viewBox="0 0 220 220" className="w-full h-full">
      {/* Flask on top */}
      <g className="transition-all duration-300">
        <path
          d="M105,20 L105,45 L88,80 Q86,85 90,85 L130,85 Q134,85 132,80 L115,45 L115,20"
          fill={isHovered ? '#C8E6C9' : '#E8F5E9'}
          stroke="#66BB6A"
          strokeWidth="2"
        />
        <rect x="102" y="15" width="16" height="8" rx="2" fill="#A5D6A7" stroke="#66BB6A" strokeWidth="1" />
        {/* Liquid */}
        <path d="M92,72 Q95,65 110,68 Q125,71 128,72 L128,80 Q126,84 92,84 Z" fill="#81C784" opacity={isHovered ? 0.8 : 0.4} className="transition-all duration-500" />
        {/* Bubbles */}
        <circle cx="105" cy="60" r="2" fill="#A5D6A7" opacity="0.6" />
        <circle cx="115" cy="55" r="1.5" fill="#A5D6A7" opacity="0.5" />
        <circle cx="110" cy="48" r="1.8" fill="#A5D6A7" opacity="0.4" />
      </g>

      {/* Building body */}
      <rect x="15" y="90" width="190" height="110" rx="4" fill="#E8F5E9" />
      <rect x="15" y="90" width="190" height="110" rx="4" fill="none" stroke="#66BB6A" strokeWidth="2" />

      {/* Porthole window */}
      <circle cx="110" cy="140" r="25" fill={isHovered ? '#C8E6C9' : '#BBDEFB'} stroke="#66BB6A" strokeWidth="2" className="transition-all duration-300" />
      <circle cx="110" cy="140" r="18" fill="none" stroke="#66BB6A" strokeWidth="1" opacity="0.5" />
      <line x1="110" y1="115" x2="110" y2="165" stroke="#66BB6A" strokeWidth="1" opacity="0.3" />
      <line x1="85" y1="140" x2="135" y2="140" stroke="#66BB6A" strokeWidth="1" opacity="0.3" />

      {/* Door */}
      <rect x="35" y="160" width="30" height="40" rx="3" fill="#66BB6A" />
      <rect x="35" y="160" width="30" height="40" rx="3" fill="none" stroke="#4CAF50" strokeWidth="1.5" />
      <circle cx="60" cy="182" r="2" fill="#FFF9C4" />

      {/* Sign */}
      <rect x="60" y="95" width="100" height="14" rx="2" fill="#66BB6A" opacity="0.3" />
      <text
        x="110" y="106"
        textAnchor="middle"
        fill="#2E7D32"
        fontSize="11"
        fontFamily="Quicksand, sans-serif"
        fontWeight="700"
      >
        SKILLS LAB
      </text>
    </svg>
  );
}
