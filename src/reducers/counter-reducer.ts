import { TiCounterReducerAction, TiCounterReducerState } from '../types';
import { CounterReducerAction } from '../const';

export default function counterReducer(
  state: TiCounterReducerState,
  action: TiCounterReducerAction,
): TiCounterReducerState {
  switch (action.type) {
    case CounterReducerAction.INCREMENT:
      return { count: state.count + 1 };
    case CounterReducerAction.DECREMENT:
      return { count: state.count - 1 };
    default:
      return { count: state.count };
  }
}
