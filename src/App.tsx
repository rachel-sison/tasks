import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Rachel Sison UD CISC275 with React Hooks and TypeScript</h1>
            </header>
<<<<<<< HEAD
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
            <img src="src/public/cavapoo.jpg" alt="A picture of a cavapoo" />
            <p>List of colors:</p>
            <ul>
                <li>red</li>
                <li>orange</li>
                <li>yellow</li>
            </ul>
            <Container>
                <Row>
                    <Col>
                        <div className="Rectangle"></div>
                    </Col>
                    <Col>
                        <div className="Rectangle"></div>
                    </Col>
                </Row>
            </Container>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
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
