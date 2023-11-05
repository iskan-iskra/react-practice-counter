export enum CounterReducerAction {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

type TiCounterReducerState = {
  count: number;
};

type TiCounterReducerAction = {
  type: CounterReducerAction;
};

export default function counterReducer(
  state: TiCounterReducerState,
  action: TiCounterReducerAction,
) {
  switch (action.type) {
    case CounterReducerAction.INCREMENT:
      return { count: state.count + 1 };
    case CounterReducerAction.DECREMENT:
      return { count: state.count - 1 };
    default:
      return { count: state.count };
  }
}
