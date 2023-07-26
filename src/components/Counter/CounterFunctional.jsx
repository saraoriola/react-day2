import React, { useState } from "react";
import "./CounterFunctional.css";

const CounterFunctional = (props) => {
  const [counter, setCounter] = useState(props.initialValue);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="calculator">
      <button className="calculator__button" onClick={decrement}>-</button>
      <span className="calculator__display">{counter}</span>
      <button className="calculator__button" onClick={increment}>+</button>
    </div>
  );
};

export default CounterFunctional;
