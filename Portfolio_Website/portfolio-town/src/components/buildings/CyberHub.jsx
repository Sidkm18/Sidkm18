export default function CyberHub({ isHovered }) {
  return (
    <svg viewBox="0 0 220 250" className="w-full h-full">
      {/* Satellite dish */}
      <g className="transition-all duration-300">
        <path d="M105,15 Q110,5 120,15" fill="none" stroke="#26A69A" strokeWidth="2" />
        <line x1="112" y1="15" x2="112" y2="40" stroke="#26A69A" strokeWidth="2" />
        <circle cx="112" cy="12" r="3" fill={isHovered ? '#80CBC4' : '#26A69A'} className="transition-all duration-300" />
        {/* Signal waves */}
        <g opacity={isHovered ? 0.6 : 0.2} className="transition-all duration-500">
          <path d="M122,8 Q128,5 125,0" fill="none" stroke="#26A69A" strokeWidth="1" />
          <path d="M126,12 Q134,8 130,2" fill="none" stroke="#26A69A" strokeWidth="0.8" />
        </g>
      </g>

      {/* Main angular body */}
      <polygon
        points="35,65 110,40 185,65 185,210 35,210"
        fill="#E0F2F1"
        stroke="#26A69A"
        strokeWidth="2"
      />

      {/* Screen/monitor window */}
      <rect x="60" y="80" width="100" height="60" rx="4" fill={isHovered ? '#B2DFDB' : '#80CBC4'} stroke="#26A69A" strokeWidth="2" className="transition-all duration-300" />
      {/* Screen content lines */}
      <g opacity={isHovered ? 0.7 : 0.3} className="transition-all duration-300">
        <rect x="70" y="90" width="40" height="3" rx="1" fill="#26A69A" />
        <rect x="70" y="98" width="60" height="3" rx="1" fill="#26A69A" />
        <rect x="70" y="106" width="35" height="3" rx="1" fill="#26A69A" />
        <rect x="70" y="114" width="50" height="3" rx="1" fill="#26A69A" />
        <rect x="70" y="122" width="25" height="3" rx="1" fill="#26A69A" />
      </g>

      {/* Shield icon */}
      <path
        d="M100,155 L100,150 Q110,145 120,150 L120,155 Q120,175 110,180 Q100,175 100,155Z"
        fill="#26A69A"
        stroke="#00897B"
        strokeWidth="1.5"
        opacity={isHovered ? 1 : 0.7}
        className="transition-all duration-300"
      />
      <path d="M108,158 L108,170 L112,170 L112,158 L118,164 L108,158" fill="white" opacity="0.5" />

      {/* Door */}
      <rect x="85" y="185" width="50" height="25" rx="3" fill="#26A69A" />
      <rect x="95" y="188" width="30" height="22" rx="2" fill="#B2DFDB" />

      {/* Sign */}
      <text
        x="110" y="56"
        textAnchor="middle"
        fill="#004D40"
        fontSize="10"
        fontFamily="Quicksand, sans-serif"
        fontWeight="700"
      >
        CYBER HUB
      </text>
    </svg>
  );
}
