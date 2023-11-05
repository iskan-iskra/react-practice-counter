import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Stack,
} from 'react-bootstrap';
import { useContext } from 'react';
import { ContextCounterReducer } from '../context';
import { TiCounterBasicProps, TiCounterContextReducer } from '../types';
import { CounterReducerAction } from '../const';

const CounterContextReducer = ({ title }: TiCounterBasicProps) => {
  const { state, dispatch } = useContext(
    ContextCounterReducer,
  ) as TiCounterContextReducer;

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
        <CardTitle>{title || 'Props counter - props and callbacks'}</CardTitle>
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

export default CounterContextReducer;
