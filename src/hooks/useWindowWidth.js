import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

const useWindowWitdh = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
  );

  // Check size screen when the app starts
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    // Wait 300ms before update, to avoid too many renders
    const debouncedResize = debounce(handleResize, 300);
    window.addEventListener('resize', debouncedResize);
    // Clear event when the component is unmounted
    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);
  return isMobile;
}

export default useWindowWitdh;