import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import { useTheme } from './hooks/use-theme.ts';
import CounterBasic from './components/CounterBasic.tsx';

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
            <Row>
              <Col lg={4} md={5} sm={6} xs={12}>
                <CounterBasic title="Basic counter" />
              </Col>
            </Row>
            <Row>
              <Col lg={4} md={5} sm={6} xs={12}>
                <CounterBasic title="Basic counter" />
              </Col>
            </Row>
            <Row>
              <Col lg={4} md={5} sm={6} xs={12}>
                <CounterBasic title="Basic counter" />
              </Col>
            </Row>
            <Row>
              <Col lg={4} md={5} sm={6} xs={12}>
                <CounterBasic title="Basic counter" />
              </Col>
            </Row>
            <Row>
              <Col lg={4} md={5} sm={6} xs={12}>
                <CounterBasic title="Basic counter" />
              </Col>
            </Row>
            <Row>
              <Col lg={4} md={5} sm={6} xs={12}>
                <CounterBasic title="Basic counter" />
              </Col>
            </Row>
            <Row>
              <Col lg={4} md={5} sm={6} xs={12}>
                <CounterBasic title="Basic counter" />
              </Col>
            </Row>
            <Row>
              <Col lg={4} md={5} sm={6} xs={12}>
                <CounterBasic title="Basic counter" />
              </Col>
            </Row>
          </Stack>
        </Container>
      </main>
    </>
  );
};

export default App;
