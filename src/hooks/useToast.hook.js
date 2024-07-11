import { useState } from 'react';

export const useToast = () => {
  const [showToast, setShowToast] = useState(false);
  const handleShowToast = () => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 5000); // Reset the state after 5 seconds (or the duration of your toast autoClose)
  };

  return { showToast, handleShowToast };
};
