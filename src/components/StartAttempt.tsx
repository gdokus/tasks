import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    const [attempt, setAttempt] = useState<number>(4);
    const [prog, setProg] = useState<boolean>(false);

    function startQuiz(): void {
        setProg(true);
        setAttempt(attempt - 1);
    }

    function stopQuiz(): void {
        setProg(false);
    }
    function mulligan(): void {
        setAttempt(attempt + 1);
    }

    return (
        <div>
            <div>
                Attempts Remaining:<span>{attempt}</span>
            </div>
            <Button onClick={startQuiz} disabled={prog || 0 === attempt}>
                Start Quiz
            </Button>
            <Button onClick={stopQuiz} disabled={!prog}>
                Stop Quiz
            </Button>
            <Button onClick={mulligan} disabled={prog}>
                Mulligan
            </Button>
        </div>
    );
}
