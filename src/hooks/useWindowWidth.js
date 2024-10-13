import { useEffect, useState } from 'react';
import { debounce } from 'lodash';

const useWindowWitdh = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 768
  );

  // Para chequear el tamaño de la pantalla al cargar la página
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    // Espera 300ms antes de actualizar para no hacer re-renderizados innecesarios
    const debouncedResize = debounce(handleResize, 300);
    window.addEventListener('resize', debouncedResize);
    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', debouncedResize);
    };
  }, []);

  return isMobile;
}

export default useWindowWitdh;