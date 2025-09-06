import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
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
        </div>
    );
}

export default App;
