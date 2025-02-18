import React from "react";
import { ADD ,SUB ,RESET } from "../constant";
const CounterButtons = ({ setCount }) => {
    return (
      <div className="flex gap-4">
        <button onClick={() => setCount((prev) => prev + 1)}>
          {ADD}
        </button>
       
        <button onClick={() => setCount(0)} >
          {RESET}
        </button>
        <button onClick={() => setCount((prev) => prev - 1)} >
          {SUB}
        </button>
      </div>
    );
  };
  
  export default CounterButtons;
  