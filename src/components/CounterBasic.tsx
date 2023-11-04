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

type TiCounterBasicProps = {
  title?: string;
};

const CounterBasic = (props: TiCounterBasicProps) => {
  const [counter, setCounter] = useState<number>(0);

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
        <Stack direction="horizontal">
          <Button variant="primary" onClick={increment}>
            increment
          </Button>
          <Button className="ms-auto" variant="primary" onClick={decrement}>
            decrement
          </Button>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CounterBasic;
