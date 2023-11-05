import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import { useCounter, useTheme } from './hooks';
import {
  CounterBasic,
  CounterHook,
  CounterReducer,
  CounterProps,
  CounterContext,
  CounterContextReducer,
  Analytics,
} from './components';

import { ContextCounter, ContextCounterReducer } from './context';
import { useReducer, useState } from 'react';
import { counterReducer } from './reducers';
import { CounterTitleList, ThemeTitles } from './const';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  const [counter, setCounter] = useState(0);

  const increment = (): void => {
    setCounter((prevState: number) => prevState + 1);
  };

  const decrement = (): void => {
    setCounter((prevState: number) => prevState - 1);
  };

  const contextCounter = useCounter(0);

  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

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
              {theme === 'light' ? ThemeTitles.DARK : ThemeTitles.LIGHT}
            </Button>
          </Stack>
        </Container>
      </header>
      <main className="p-4 overflow-y-scroll ">
        <Container>
          <Stack gap={4}>
            <Row className="g-4">
              <Col lg={3} md={6} sm={6} xs={12}>
                <CounterBasic title={CounterTitleList.USE_STATE} />
              </Col>
              <Col lg={3} md={6} sm={6} xs={12}>
                <CounterBasic title={CounterTitleList.USE_STATE} />
              </Col>
              <Col lg={6} md={12} sm={12} xs={12}>
                <Analytics
                  title={CounterTitleList.USE_STATE}
                  basic="logic realization by using hook useState"
                  advantageList={[
                    'easy to make',
                    'fast to realize',
                    'easy to read',
                  ]}
                  disadvantageList={[
                    'hard to modify logic',
                    'hard to expand logic',
                    'no state share',
                  ]}
                />
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={3} md={6} sm={6} xs={12}>
                <CounterHook title={CounterTitleList.USE_COUNTER} />
              </Col>
              <Col lg={3} md={6} sm={6} xs={12}>
                <CounterHook title={CounterTitleList.USE_COUNTER} />
              </Col>
              <Col lg={6} md={12} sm={12} xs={12}>
                <Analytics
                  title={CounterTitleList.USE_COUNTER}
                  basic="logic realization by creating hook useCounter"
                  advantageList={[
                    'easy to reuse',
                    'easy to expand logic',
                    'easy to modify logic',
                  ]}
                  disadvantageList={[
                    'no state share',
                    'not full state control',
                  ]}
                />
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={3} md={6} sm={6} xs={12}>
                <CounterReducer title={CounterTitleList.REDUCER} />
              </Col>
              <Col lg={3} md={6} sm={6} xs={12}>
                <CounterReducer title={CounterTitleList.REDUCER} />
              </Col>
              <Col lg={6} md={12} sm={12} xs={12}>
                <Analytics
                  title={CounterTitleList.REDUCER}
                  basic="logic realization by using pattern Reducer"
                  advantageList={[
                    'easy to expand logic',
                    'easy to modify logic',
                    'full control of state',
                  ]}
                  disadvantageList={[
                    'no state share',
                    'slow to make',
                    'hard to read',
                  ]}
                />
              </Col>
            </Row>

            <hr />

            <Row className="g-4">
              <Col lg={3} md={6} sm={6} xs={12}>
                <CounterProps
                  title={CounterTitleList.PROPS_AND_USE_STATE}
                  counter={counter}
                  increment={increment}
                  decrement={decrement}
                />
              </Col>
              <Col lg={3} md={6} sm={6} xs={12}>
                <CounterProps
                  title={CounterTitleList.PROPS_AND_USE_STATE}
                  counter={counter}
                  increment={increment}
                  decrement={decrement}
                />
              </Col>
              <Col lg={6} md={12} sm={12} xs={12}>
                <Analytics
                  title={CounterTitleList.PROPS_AND_USE_STATE}
                  basic="logic realization by using props in three of components"
                  advantageList={[
                    'easy to realize',
                    'fast solution',
                    'state share',
                  ]}
                  disadvantageList={[
                    'depends on the depth of nesting',
                    'hard to expand',
                    'hard to modify',
                    'hard to read',
                  ]}
                />
              </Col>
            </Row>

            <Row className="g-4">
              <ContextCounter.Provider value={contextCounter}>
                <Col lg={3} md={6} sm={6} xs={12}>
                  <CounterContext
                    title={CounterTitleList.CONTEXT_AND_USE_COUNTER}
                  />
                </Col>
                <Col lg={3} md={6} sm={6} xs={12}>
                  <CounterContext
                    title={CounterTitleList.CONTEXT_AND_USE_COUNTER}
                  />
                </Col>
              </ContextCounter.Provider>
              <Col lg={6} md={12} sm={12} xs={12}>
                <Analytics
                  title={CounterTitleList.CONTEXT_AND_USE_COUNTER}
                  basic="logic realization by using context"
                  advantageList={[
                    'no depends on the depth of nesting',
                    'easy to control logic and state',
                    'state share',
                  ]}
                  disadvantageList={['required some knowledge about context']}
                />
              </Col>
            </Row>

            <Row className="g-4">
              <ContextCounterReducer.Provider
                value={{ state: state, dispatch: dispatch }}
              >
                <Col lg={3} md={6} sm={6} xs={12}>
                  <CounterContextReducer
                    title={CounterTitleList.CONTEXT_AND_REDUCER}
                  />
                </Col>
                <Col lg={3} md={6} sm={6} xs={12}>
                  <CounterContextReducer
                    title={CounterTitleList.CONTEXT_AND_REDUCER}
                  />
                </Col>
              </ContextCounterReducer.Provider>
              <Col lg={6} md={12} sm={12} xs={12}>
                <Analytics
                  title={CounterTitleList.CONTEXT_AND_REDUCER}
                  basic="logic realization by FLUX (context + reducer)"
                  advantageList={[
                    'no depends on the depth of nesting',
                    'easy to control logic and state',
                    'more close to FLUX architecture',
                    'state share',
                  ]}
                  disadvantageList={[
                    'required some knowledge about context',
                    'hard to read',
                  ]}
                />
              </Col>
            </Row>
          </Stack>
        </Container>
      </main>
    </>
  );
};

export default App;
