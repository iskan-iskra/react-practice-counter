export enum CounterReducerAction {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

export enum CounterTitleList {
  USE_STATE = 'useState',
  USE_COUNTER = 'useCounter (custom hook)',
  REDUCER = 'counterReducer (useReducer)',
  PROPS_AND_USE_STATE = 'Props + useState',
  CONTEXT_AND_USE_COUNTER = 'useContext + useCounter',
  CONTEXT_AND_REDUCER = 'useContext + useReducer',
}

export enum AnalyticTitles {
  BASIC = 'Info about ',
  ADV = 'Advantages',
  DIS = 'Disadvantages',
}

export enum ThemeTitles {
  LIGHT = 'light',
  DARK = 'dark',
}
