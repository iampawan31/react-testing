import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const addToCounterValue = () => {
    setCounterValue(counterValue + inputValue);
  };

  const subtractFromCounterValue = () => {
    setCounterValue(counterValue - inputValue);
  };

  return (
    <div className="counter-container">
      <div>
        <h1 data-testid="header">My Counter</h1>
        <h1
          data-testid="counter"
          className={
            counterValue === 0 ? "" : counterValue > 0 ? "positive" : "negative"
          }
        >
          {counterValue}
        </h1>
      </div>
      <div>
        <button data-testid="subtractButton" onClick={subtractFromCounterValue}>
          -
        </button>
        <input
          className="text-center"
          type="number"
          data-testid="input"
          value={inputValue}
          onChange={(e) => setInputValue(parseInt(e.target.value))}
        />
        <button data-testid="addButton" onClick={addToCounterValue}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
