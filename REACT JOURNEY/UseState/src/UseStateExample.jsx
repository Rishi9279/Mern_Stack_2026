import React, { useState } from "react";

const UseStateExample = () => {
  const [show, setShow] = useState(false);

  const showItem = () => {
    setShow(!show);
  };

  return (
    <div className="example">
      <button onClick={showItem}>toggle</button>
      {show && (
        <>
          <h1>My name is Rishi Raj</h1>
          <h2>My age is 20</h2>
          <p>I am a developer and keep pushing myself</p>
        </>
      )}
    </div>
  );
};

export default UseStateExample;
