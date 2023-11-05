import { useState } from 'react';
import { TiCounter } from '../types';

export default function useCounter(initialState: number = 0): TiCounter {
  const [counter, setCounter] = useState<number>(initialState);
  return {
    counter: counter,
    increment() {
      setCounter((prevState) => prevState + 1);
    },
    decrement() {
      setCounter((prevState) => prevState - 1);
    },
  };
}
