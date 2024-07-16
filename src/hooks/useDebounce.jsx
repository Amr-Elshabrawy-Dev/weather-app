import { useState, useEffect } from "react";

const useDebounce = (value, wait = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedValue(value);
    }, wait);

    return () => {
      clearTimeout(timeout);
    };
  }, [value, wait]);

  return debouncedValue;
};
export default useDebounce;
