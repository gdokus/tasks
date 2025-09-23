import React from "react";
import "./App.css";
<<<<<<< HEAD
import { Button, Col, Container, Row } from "react-bootstrap";
=======
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
>>>>>>> upstream/task-state

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
<<<<<<< HEAD
            <p>
                Hello World! Edit <code>src/App.tsx</code> and save. This page
                will automatically reload. -Gabriel Dokus
            </p>
            <h1 className="task2-header">Header for Task 2</h1>
            <Container>
                <Row>
                    <Col>
                        <ol>
                            <li>Dali</li>
                            <li>Haring</li>
                            <li>Basquiat</li>
                            <li>Lichtenstein</li>
                        </ol>
                        <div
                            style={{
                                width: 120,
                                height: 80,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <img
                            src="https://lunaluna.com/cdn/shop/files/5-_Brian_Ferry_Courtesy_of_Luna_Luna_LLC.png?v=1742507357&width=3000"
                            alt="Hering Ferris Wheel"
                        />
                        <div
                            style={{
                                width: 120,
                                height: 80,
                                backgroundColor: "red",
                            }}
                        ></div>
                    </Col>
                </Row>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </Container>
=======
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
>>>>>>> upstream/task-state
        </div>
    );
}

export default App;
