import { useEffect } from 'react';

export default function useKeyClose(key, callback) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === key) callback();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [key, callback]);
}
