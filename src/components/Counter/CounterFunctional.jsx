import React, { useState } from "react";
import "./CounterFunctional.css";

const CounterFunctional = (props) => {
  const [counter, setCounter] = useState(props.initialValue);
  const { number } = props;

  const increment = () => setCounter(counter + number);
  const decrement = () => setCounter(counter - number);

  return (
    <>
      <div className="calculator">
        <button className="calculator_button-minus" onClick={decrement}>
          -
        </button>
        <span className="calculator_display">{counter}</span>
        <button className="calculator_button-plus" onClick={increment}>
          +
        </button>
      </div>
    </>
  );
};

export default CounterFunctional;
