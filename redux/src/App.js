import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/actions";
import "./App.css";
import { HEADING, RESET, SUB, ADD } from "./constant";

const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="countDiv" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{HEADING}</h1>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>{ADD}</button>
      <button onClick={() => dispatch(reset())}>{RESET}</button>
      <button 
        onClick={() => dispatch(decrement())} 
        className={count <= 0 ? "disabled-btn" : ""}
        disabled={count <= 0}
      >
        {SUB}
      </button>
    </div>
  );
};

export default App;
