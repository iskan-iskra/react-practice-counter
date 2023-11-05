import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Stack,
} from 'react-bootstrap';
import { useCounter } from '../hooks';

type TiCounterBasicProps = {
  title?: string;
};

const initialValue = 0;

const CounterHook = (props: TiCounterBasicProps) => {
  const { counter, increment, decrement } = useCounter(initialValue);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title || 'Hook counter - useCounter'}</CardTitle>
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

export default CounterHook;
