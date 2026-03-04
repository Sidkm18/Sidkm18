export default function PostOffice({ isHovered }) {
  return (
    <svg viewBox="0 0 200 230" className="w-full h-full">
      {/* Clock tower */}
      <rect x="78" y="20" width="44" height="45" rx="3" fill="#FFE0B2" stroke="#FFA726" strokeWidth="2" />
      <polygon points="75,20 100,5 125,20" fill="#FF9800" stroke="#F57C00" strokeWidth="1.5" />

      {/* Flag */}
      <line x1="100" y1="5" x2="100" y2="-2" stroke="#8B6F47" strokeWidth="2" />
      <polygon
        points="100,-2 118,3 100,8"
        fill={isHovered ? '#FFA726' : '#FFCC80'}
        stroke="#F57C00"
        strokeWidth="0.8"
        className="transition-all duration-300"
      />

      {/* Clock face */}
      <circle cx="100" cy="38" r="12" fill="white" stroke="#F57C00" strokeWidth="1.5" />
      <line x1="100" y1="38" x2="100" y2="30" stroke="#5D4037" strokeWidth="1.5" />
      <line x1="100" y1="38" x2="107" y2="38" stroke="#5D4037" strokeWidth="1" />

      {/* Main body */}
      <rect x="20" y="65" width="160" height="140" rx="4" fill="#FFF3E0" />
      <rect x="20" y="65" width="160" height="140" rx="4" fill="none" stroke="#FFA726" strokeWidth="2" />

      {/* Windows */}
      {[
        { x: 40, y: 85 },
        { x: 75, y: 85 },
        { x: 125, y: 85 },
        { x: 160, y: 85 },
      ].map((w, i) => (
        <rect
          key={i}
          x={w.x - 12} y={w.y} width="24" height="28" rx="3"
          fill={isHovered ? '#FFF9C4' : '#BBDEFB'}
          stroke="#FFA726" strokeWidth="1.5"
          className="transition-all duration-300"
        />
      ))}

      {/* Door */}
      <rect x="82" y="155" width="36" height="50" rx="3" fill="#FFA726" />
      <rect x="82" y="155" width="36" height="50" rx="3" fill="none" stroke="#F57C00" strokeWidth="1.5" />
      <circle cx="112" cy="182" r="2.5" fill="#FFD54F" />

      {/* Mailbox */}
      <g className="transition-all duration-300">
        <rect x="15" y="175" width="22" height="28" rx="4" fill="#42A5F5" stroke="#1E88E5" strokeWidth="1.5" />
        <rect x="13" y="172" width="26" height="6" rx="3" fill="#1E88E5" />
        <rect x="19" y="185" width="10" height="2" rx="1" fill="white" opacity="0.7" />
      </g>

      {/* Sign */}
      <rect x="45" y="70" width="110" height="14" rx="2" fill="#FFA726" opacity="0.3" />
      <text
        x="100" y="81"
        textAnchor="middle"
        fill="#E65100"
        fontSize="9"
        fontFamily="Quicksand, sans-serif"
        fontWeight="700"
      >
        POST OFFICE
      </text>
    </svg>
  );
}
