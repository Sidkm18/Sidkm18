export default function LibraryBuilding({ isHovered }) {
  return (
    <svg viewBox="0 0 220 240" className="w-full h-full">
      {/* Pediment */}
      <polygon points="20,90 110,25 200,90" fill="#CE93D8" />
      <polygon points="20,90 110,25 200,90" fill="none" stroke="#AB47BC" strokeWidth="2" />

      {/* Book in pediment */}
      <rect x="95" y="52" width="30" height="22" rx="2" fill="#E1BEE7" stroke="#AB47BC" strokeWidth="1.5" />
      <line x1="110" y1="52" x2="110" y2="74" stroke="#AB47BC" strokeWidth="1" />
      <line x1="98" y1="60" x2="107" y2="60" stroke="#AB47BC" strokeWidth="0.8" opacity="0.5" />
      <line x1="113" y1="60" x2="122" y2="60" stroke="#AB47BC" strokeWidth="0.8" opacity="0.5" />

      {/* Main body */}
      <rect x="25" y="90" width="170" height="115" rx="3" fill="#F3E5F5" />
      <rect x="25" y="90" width="170" height="115" rx="3" fill="none" stroke="#AB47BC" strokeWidth="2" />

      {/* Columns */}
      {[45, 80, 140, 175].map((x, i) => (
        <rect
          key={i}
          x={x - 6} y="90" width="12" height="115" rx="2"
          fill="#CE93D8"
          stroke="#AB47BC"
          strokeWidth="1"
          opacity={isHovered ? 1 : 0.7}
          className="transition-all duration-300"
        />
      ))}

      {/* Arched doorway */}
      <path
        d="M90,205 L90,155 Q90,135 110,135 Q130,135 130,155 L130,205"
        fill={isHovered ? '#E1BEE7' : '#CE93D8'}
        stroke="#AB47BC"
        strokeWidth="2"
        className="transition-all duration-300"
      />

      {/* Steps */}
      <rect x="30" y="205" width="160" height="8" rx="2" fill="#E1BEE7" stroke="#AB47BC" strokeWidth="0.5" />
      <rect x="35" y="213" width="150" height="8" rx="2" fill="#E1BEE7" stroke="#AB47BC" strokeWidth="0.5" />
      <rect x="40" y="221" width="140" height="8" rx="2" fill="#E1BEE7" stroke="#AB47BC" strokeWidth="0.5" />

      {/* Sign */}
      <text
        x="110" y="18"
        textAnchor="middle"
        fill="#6A1B9A"
        fontSize="12"
        fontFamily="Quicksand, sans-serif"
        fontWeight="700"
        opacity={isHovered ? 1 : 0.8}
        className="transition-all duration-300"
      >
        LIBRARY
      </text>
    </svg>
  );
}
