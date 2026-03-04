import { useState, useEffect, useCallback } from 'react';

export default function useParallax(factor = 0.02) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const x = (e.clientX - centerX) * factor;
      const y = (e.clientY - centerY) * factor;
      setOffset({ x, y });
    },
    [factor]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return offset;
}
