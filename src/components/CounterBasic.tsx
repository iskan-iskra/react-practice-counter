import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Stack,
} from 'react-bootstrap';
import { useState } from 'react';
import { TiCounterBasicProps } from '../types';

const initialValue = 0;

const CounterBasic = (props: TiCounterBasicProps) => {
  const [counter, setCounter] = useState<number>(initialValue);

  const increment = (): void => {
    setCounter((val: number) => val + 1);
  };

  const decrement = (): void => {
    setCounter((val: number) => val - 1);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title || 'Basic counter - useState'}</CardTitle>
      </CardHeader>
      <CardBody>
        <h3 className="text-center">
          <Badge bg="secondary">{counter}</Badge>
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

export default CounterBasic;
