import { useState } from 'react';

export const useLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  return {
    isLoading,
    startLoading,
    stopLoading,
  };
};

export const useError = () => {
    const [hasError, setHasError] = useState(false);
  
    const setError = () => {
      setHasError(true);
    };
  
    const resetError = () => {
      setHasError(false);
    };
  
    return {
      hasError,
      setError,
      resetError,
    };
  }; 
