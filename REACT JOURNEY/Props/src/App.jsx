import React from "react";
import Card from "./Components/Card";

const App = () => {
  return (
    <div className="parent">
      <Card name="Rishi" desc="Frontend Developer" />
      <Card name="Rahul" desc="Backend Developer" />
      <Card name="Aditya" desc="Software Developer" />
      <Card name="Aryan" desc="Full stack Developer" />
    </div>
  );
};

export default App;
