import { useState, useEffect } from 'react';

// Custom hook to manage screen size
const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState('small');

  // Handle window resizing and set the screen size
  const handleResize = () => {
    if (window.innerWidth < 770) {
      setScreenSize('small');
    } else if (window.innerWidth >= 770 && window.innerWidth < 992) {
      setScreenSize('medium');
    } else {
      setScreenSize('large');
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};

export default useScreenSize;
