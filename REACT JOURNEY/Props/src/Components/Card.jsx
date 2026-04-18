import React from "react";

const Card = ({ name, desc }) => {
  return (
    <div className="card">
      <img
        src="https://images.unsplash.com/photo-1773497007741-b0348d3ad123?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDU3fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D"
        alt=""
      />
      <h1>{name}</h1>
      <p>{desc}</p>
      <button>View</button>
    </div>
  );
};

export default Card;
