import { useMemo } from 'react';

export default function OfficeBuilding({ isHovered }) {
  const windowStates = useMemo(() => {
    return Array.from({ length: 15 }, () => Math.random() > 0.4);
  }, []);

  return (
    <svg viewBox="0 0 200 300" className="w-full h-full">
      {/* Antenna */}
      <line x1="100" y1="10" x2="100" y2="45" stroke="#78909C" strokeWidth="2" />
      <circle cx="100" cy="8" r="3" fill="#E53935" />

      {/* Building body */}
      <rect x="30" y="45" width="140" height="235" rx="4" fill="#5B8DBE" />
      <rect x="30" y="45" width="140" height="235" rx="4" fill="none" stroke="#4A7AA8" strokeWidth="2" />

      {/* Top accent */}
      <rect x="30" y="45" width="140" height="10" rx="4" fill="#4A7AA8" />

      {/* Windows */}
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 3 }).map((_, col) => {
          const idx = row * 3 + col;
          const lit = isHovered || windowStates[idx];
          return (
            <rect
              key={`${row}-${col}`}
              x={48 + col * 40}
              y={70 + row * 42}
              width="26"
              height="30"
              rx="2"
              fill={lit ? '#FFF9C4' : '#BBDEFB'}
              stroke="#4A7AA8"
              strokeWidth="1"
              className="transition-all duration-300"
            />
          );
        })
      )}

      {/* Entrance */}
      <rect x="75" y="250" width="50" height="30" rx="3" fill="#4A7AA8" />
      <rect x="85" y="255" width="30" height="25" rx="2" fill="#BBDEFB" />
      <rect x="99" y="255" width="2" height="25" fill="#4A7AA8" />

      {/* Sign */}
      <rect x="60" y="55" width="80" height="12" rx="2" fill="#4A7AA8" opacity="0.5" />
      <text
        x="100" y="64"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="9"
        fontFamily="Quicksand, sans-serif"
        fontWeight="700"
      >
        OFFICE
      </text>
    </svg>
  );
}
