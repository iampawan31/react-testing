import { useState } from "react";
import "./Counter.css";

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  return (
    <div className="counter-container">
      <div>
        <h1 data-testid="header">My Counter</h1>
        <h1 data-testid="counter">{counterValue}</h1>
      </div>
      <div>
        <button data-testid="subtractButton">-</button>
        <input
          className="text-center"
          type="number"
          data-testid="input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button data-testid="addButton">+</button>
      </div>
    </div>
  );
};

export default Counter;
