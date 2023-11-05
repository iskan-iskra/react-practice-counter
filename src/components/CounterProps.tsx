import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Stack,
} from 'react-bootstrap';
import { TiCounterContextProps } from '../types';

const CounterProps = ({
  counter,
  title,
  decrement,
  increment,
}: TiCounterContextProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title || 'Props counter - props and callbacks'}</CardTitle>
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

export default CounterProps;
