import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Stack,
} from 'react-bootstrap';
import { useReducer } from 'react';
import { counterReducer, CounterReducerAction } from '../reducers';

type TiCounterBasicProps = {
  title?: string;
};

const initialValue = 0;

const CounterReducer = (props: TiCounterBasicProps) => {
  const [state, dispatch] = useReducer(counterReducer, { count: initialValue });

  const increment = () => {
    dispatch({
      type: CounterReducerAction.INCREMENT,
    });
  };

  const decrement = () => {
    dispatch({
      type: CounterReducerAction.DECREMENT,
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title || 'Reducer counter - useReducer'}</CardTitle>
      </CardHeader>
      <CardBody>
        <h3 className="text-center">
          <Badge bg="secondary">{state.count}</Badge>
        </h3>
        <Stack direction="vertical" gap={2} className="align-content-center">
          <Button variant="success" onClick={increment}>
            increment + 1
          </Button>
          <Button variant="danger" onClick={decrement}>
            decrement - 1
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CounterReducer;
