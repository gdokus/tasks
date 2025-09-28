import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday = "🎅" | "🦃" | "🎃" | "💘" | "🎂";
    const [holiday, setHoliday] = useState<Holiday>("🎃");

    function cycleDate(): void {
        holiday === "🎃" ? setHoliday("🎂")
        : holiday === "🎂" ? setHoliday("🦃")
        : holiday === "🦃" ? setHoliday("🎅")
        : holiday === "🎅" ? setHoliday("💘")
        : setHoliday("🎃");
    }
    function cycleAlph(): void {
        holiday === "🎂" ? setHoliday("🎅")
        : holiday === "🎅" ? setHoliday("🎃")
        : holiday === "🎃" ? setHoliday("🦃")
        : holiday === "🦃" ? setHoliday("💘")
        : setHoliday("🎂");
    }
    return (
        <div>
            <div>Holiday: {holiday}</div>
            <div>
                <Button onClick={cycleDate}>Advance By Year</Button>
                <Button onClick={cycleAlph}>Advance By Alphabet</Button>
            </div>
        </div>
    );
}
