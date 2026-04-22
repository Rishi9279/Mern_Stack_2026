import React from "react";

const App = () => {
  // const changeUser = () => {
  //   console.log("hello");
  // };
  return (
    <div>
      <h1>Hello, World!</h1>
      <button
        onClick={() => {
          console.log("hello");
        }}>
        click
      </button>
    </div>
  );
};

export default App;
