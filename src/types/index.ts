import { Dispatch } from 'react';
import { CounterReducerAction, CounterTitleList } from '../const';

export type TiCounter = {
  counter: number;
  increment(): void;
  decrement(): void;
};

export type TiCounterReducerState = {
  count: number;
};

export type TiCounterReducerAction = {
  type: CounterReducerAction;
};

export type TiThemeState = 'light' | 'dark';

export type TiUseTheme = {
  theme: TiThemeState;
  toggleTheme(): void;
};

export type TiCounterBasicProps = {
  title?: string;
};

export type TiCounterContextProps = {
  title?: string;
  counter: number;
  increment: () => void;
  decrement: () => void;
};

export type TiCounterContextReducer = {
  state: TiCounterReducerState;
  dispatch: Dispatch<TiCounterReducerAction>;
};

export type TiAnalyticsProps = {
  title: CounterTitleList;
  basic: string;
  advantageList: string[];
  disadvantageList: string[];
};
