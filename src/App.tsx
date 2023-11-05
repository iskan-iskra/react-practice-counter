import {
  Button,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
  Stack,
} from 'react-bootstrap';
import { useTheme } from './hooks';
import { CounterBasic, CounterHook, CounterReducer } from './components';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <header className="p-4 bg-body-tertiary border-bottom">
        <Container>
          <Stack direction="horizontal">
            <h1 className="">React state issue</h1>
            <Button
              className="ms-auto"
              variant={theme === 'light' ? 'dark' : 'light'}
              onClick={toggleTheme}
            >
              {theme === 'light' ? 'Темная тема' : 'Светлая тема'}
            </Button>
          </Stack>
        </Container>
      </header>
      <main className="p-4 overflow-y-scroll ">
        <Container>
          <Stack gap={4}>
            <Row className="g-4">
              <Col lg={3} md={6} sm={6} xs={12}>
                <CounterBasic title="Basic counter" />
              </Col>
              <Col lg={3} md={6} sm={6} xs={12}>
                <CounterBasic title="Basic counter" />
              </Col>
              <Col lg={6} md={12} sm={12} xs={12}>
                <ListGroup>
                  <ListGroupItem variant="primary">
                    <b>Basic</b>
                  </ListGroupItem>

                  <ListGroupItem variant="success">
                    <b>Advantages</b>
                  </ListGroupItem>

                  <ListGroupItem variant="danger">
                    <b>Disadvantages</b>
                  </ListGroupItem>
                </ListGroup>
              </Col>
              <hr />
            </Row>
            <Row className="g-4">
              <Col lg={3} md={6} sm={6} xs={12}>
                <CounterHook title="Hook counter" />
              </Col>
              <Col lg={3} md={6} sm={6} xs={12}>
                <CounterHook title="Hook counter" />
              </Col>
              <Col lg={6} md={12} sm={12} xs={12}>
                <ListGroup>
                  <ListGroupItem variant="primary">
                    <b>Basic</b>
                  </ListGroupItem>

                  <ListGroupItem variant="success">
                    <b>Advantages</b>
                  </ListGroupItem>

                  <ListGroupItem variant="danger">
                    <b>Disadvantages</b>
                  </ListGroupItem>
                </ListGroup>
              </Col>
              <hr />
            </Row>
            <Row className="g-4">
              <Col lg={3} md={6} sm={6} xs={12}>
                <CounterReducer title="Reducer counter" />
              </Col>
              <Col lg={3} md={6} sm={6} xs={12}>
                <CounterReducer title="Reducer counter" />
              </Col>
              <Col lg={6} md={12} sm={12} xs={12}>
                <ListGroup>
                  <ListGroupItem variant="primary">
                    <b>Basic</b>
                  </ListGroupItem>

                  <ListGroupItem variant="success">
                    <b>Advantages</b>
                  </ListGroupItem>

                  <ListGroupItem variant="danger">
                    <b>Disadvantages</b>
                  </ListGroupItem>
                </ListGroup>
              </Col>
              <hr />
            </Row>
          </Stack>
        </Container>
      </main>
    </>
  );
};

export default App;
