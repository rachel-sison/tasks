import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attemptsLeft, setAttemptsLeft] = useState<number>(3);
    const [request, setRequest] = useState<string>("");

    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }
    const validReq = Number.isNaN(request) ? 0 : Number(request);

    return (
        <div>
            <h3>Give Attempts</h3>
            <div>attempts: {attemptsLeft} </div>
            <Button
                onClick={() => setAttemptsLeft(attemptsLeft - 1)}
                disabled={attemptsLeft === 0}
            >
                use
            </Button>
            <Button onClick={() => setAttemptsLeft(attemptsLeft + validReq)}>
                gain
            </Button>
            <div>
                <Form.Label>Type Request Here</Form.Label>
            </div>
            <Form.Control
                type="number"
                value={request}
                onChange={updateRequest}
            />
        </div>
    );
}
