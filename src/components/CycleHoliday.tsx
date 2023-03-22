import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday = "🎄" | "👻" | "🎉" | "🦃" | "🎆";

    const holidayAlpha: Record<Holiday, Holiday> = {
        "🎄": "🎉",
        "🎉": "👻",
        "👻": "🎆",
        "🎆": "🦃",
        "🦃": "🎄"
    };

    const holidayDate: Record<Holiday, Holiday> = {
        "🎆": "🎉",
        "🎉": "👻",
        "👻": "🦃",
        "🦃": "🎄",
        "🎄": "🎆"
    };
    const [holiday, setHoliday] = useState<Holiday>("🎄");

    function nextAlpha(): void {
        const newHoliday = holidayAlpha[holiday];
        setHoliday(newHoliday);
    }

    function nextDate(): void {
        const newHoliday = holidayDate[holiday];
        setHoliday(newHoliday);
    }
    return (
        <div>
            <span>
                <Button onClick={nextAlpha}> Advance by Alphabet</Button>
            </span>
            <span>
                <Button onClick={nextDate}> Advance by Year</Button>
            </span>
            <div>Holiday: {holiday}</div>
        </div>
    );
}
