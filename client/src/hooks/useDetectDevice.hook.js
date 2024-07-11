import { useState, useEffect } from 'react';

const getDeviceType = () => {
  const width = window.innerWidth;

  if (width <= 768) {
    return 'mobile';
  }
  return 'desktop';
};

const useDetectDevice = () => {
  const [deviceType, setDeviceType] = useState(null);

  useEffect(() => {
    const updateDeviceType = () => {
      setDeviceType(getDeviceType());
    };

    // Run on mount
    updateDeviceType();

    window.addEventListener('resize', updateDeviceType);
    return () => {
      window.removeEventListener('resize', updateDeviceType);
    };
  }, []);

  return deviceType;
};

export default useDetectDevice;
