const CounterButtons = ({ setCount }) => {
    return (
      <div className="flex gap-4">
        <button onClick={() => setCount((prev) => prev + 1)}>
          +
        </button>
       
        <button onClick={() => setCount(0)} >
          Reset
        </button>
        <button onClick={() => setCount((prev) => prev - 1)} >
          -
        </button>
      </div>
    );
  };
  
  export default CounterButtons;
  