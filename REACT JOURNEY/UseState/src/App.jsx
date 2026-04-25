import React, { useState } from "react";
import UseStateExample from "./UseStateExample";

const App = () => {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  };
  return (
    <>
      <div className="card">
        <h1>{num}</h1>
        <div className="btn">
          <button onClick={increment}>Increment</button>
          <button
            onClick={() => {
              setNum(num - 1);
            }}>
            Decrement
          </button>
          <button
            onClick={() => {
              setNum(0);
            }}>
            Reset
          </button>
        </div>
      </div>
      <UseStateExample />
    </>
  );
};

export default App;
