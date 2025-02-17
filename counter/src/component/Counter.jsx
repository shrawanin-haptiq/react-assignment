import { useState, useEffect } from "react";
import CounterButtons from "./CounterButtons";
import  CounterDisplay from "./CounterDisplay";
 
const Counter = () => {
  const [count, setCount] = useState(() => Number(localStorage.getItem("counter")) || 0);

  useEffect(() => {
    localStorage.setItem("counter", count);
  }, [count]);

  return (
    <div className="flex  justify-center">
      <h1 className="headingCounter text-3xl">Counter App</h1>
      <CounterDisplay count={count} />
      <CounterButtons setCount={setCount} />
    </div>
  );
};  

export default Counter;
