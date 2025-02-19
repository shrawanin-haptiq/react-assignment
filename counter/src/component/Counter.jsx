import React,  { useState, useEffect } from "react";
import CounterButtons from "./CounterButtons";
import  CounterDisplay from "./CounterDisplay";
 import { HEAD } from "../constant";
const Counter = () => {
  const [count, setCount] = useState(() => Number(localStorage.getItem("counter")) || 0);

  useEffect(() => {
    localStorage.setItem("counter", count);
  }, [count]);

  return (
    <div className="flex  justify-center">
      <h1 className="headingCounter text-3xl">{HEAD}</h1>
      <CounterDisplay count={count} />
      <CounterButtons setCount={setCount} />
    </div>
  );
};  

export default Counter;
