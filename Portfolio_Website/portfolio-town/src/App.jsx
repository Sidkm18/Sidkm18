import { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import TownMap from './components/TownMap';
import MobileTownMenu from './components/MobileTownMenu';

function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(query).matches
  );

  useEffect(() => {
    const mql = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

function App() {
  const [loaded, setLoaded] = useState(false);
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      {loaded && (isMobile ? <MobileTownMenu /> : <TownMap />)}
    </>
  );
}

export default App;
