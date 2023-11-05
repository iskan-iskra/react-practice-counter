import { createContext } from 'react';
import { TiCounterContextReducer } from '../types';

export const ContextCounterReducer = createContext(
  undefined as TiCounterContextReducer | undefined,
);
