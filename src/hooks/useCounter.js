import { useCallback, useState } from 'react';

export const useCounter = ({ defaultValue = 0, step = 1 } = {}) => {
  const [counter, setCounter] = useState(defaultValue);
  const decrement = useCallback(
    () => setCounter((currentCounter) => currentCounter - step),
    [step]
  );
  const increment = useCallback(
    () => setCounter((currentCounter) => currentCounter + step),
    [step]
  );
  return { counter, increment, decrement };
};
