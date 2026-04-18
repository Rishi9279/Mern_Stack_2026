import React from "react";

const App = () => {
  const name = "Rishi";
  const age = 22;
  return (
    <div>
      <h1>name: {name}</h1>
      <h1>age: {age}</h1>
      <h2>time: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
};

export default App;
