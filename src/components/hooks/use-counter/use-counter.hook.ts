import { useState } from 'react';

export function useCounter() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);

  return { counter, increment, decrement };
}
