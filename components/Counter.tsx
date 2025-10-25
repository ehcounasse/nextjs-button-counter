"use client";

import {useState, ChangeEvent} from "react"

interface CounterProps {
    initialCount?: number;
    initialStep?: number;
}

export default function Counter ({
    initialCount = 0,
    initialStep = 1,
}: CounterProps){
    const [count, setCount] = useState<number>(initialCount);
    const [step, setStep] = useState<number>(initialStep);

    const handleIncrement = () => setCount((c) => c +step);
    const handleDecrement = () => setCount((c) => (c-step >= 0 ? c-step : c));
    const handleReset = () => setCount(0);

    const handleStepChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setStep(value>= 1 ? value: 1);
    };

    return (
        <div className = "counter"> 
        <div className="count-display" aria-live="polite">
            Count: {count}
        </div>

        <div className="controls">
            <button onClick={handleIncrement}>+{step}</button>
            <button onClick={handleDecrement} disabled={count - step < 0}>
            -{step}
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>

        <div className = "step-control">
        <label htmlFor="step">Step:</label>
        <input id="step" type="number" min="1" value={step} onChange={handleStepChange} />
        </div>
        </div>
    )
}