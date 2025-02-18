import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/actions";
import "./App.css"
const App = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="countDiv" style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter Application</h1>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(reset())} >
        Reset
      </button>
      <button onClick={() => dispatch(decrement())} >
        Decrement
      </button>
      
    </div>
  );
};

export default App;
