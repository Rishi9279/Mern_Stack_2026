import React, { useState } from "react";
import axios from "axios";

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Using Fetch API

  //   try {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // };

  return (
    <div>
      <h1>React App</h1>
      <button onClick={fetchData}>Fetch Data</button>

      
        <ul>
          {data.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
    
    </div>
  );
};

export default App;
