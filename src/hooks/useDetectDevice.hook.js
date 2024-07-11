import { useEffect, useState } from 'react';

export const useDetectDevice = () => {
  const [device, setDevice] = useState(null);
  const [width, setWidth] = useState(null);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    // const windowWidth = window.innerWidth;

    if (/Mobi|Android/i.test(userAgent)) {
      setDevice('mobile');
    } else if (/iPad|iPhone|iPod/i.test(userAgent)) {
      setDevice('tablet');
    } else {
      setDevice('desktop');
    }

    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return { device, width };
};
