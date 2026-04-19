import React from "react";
import Card from "./Components/Card";

const App = () => {
  const data = [
    {
      id: 1,
      name: "Rishi",
      desc: "Frontend Developer",
      btn: "View",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
      id: 2,
      name: "Rahul",
      desc: "Backend Developer",
      btn: "Explore",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
    {
      id: 3,
      name: "Aditya",
      desc: "Software Developer",
      btn: "Check",
      img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    },
    {
      id: 4,
      name: "Aryan",
      desc: "Full Stack Developer",
      btn: "Open",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    },
    {
      id: 5,
      name: "Neha",
      desc: "UI/UX Designer",
      btn: "View Profile",
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    },
    {
      id: 6,
      name: "Simran",
      desc: "React Developer",
      btn: "See Work",
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    },
  ];
  return (
    <div className="container">
      {data.map((value) => (
        <Card
          key={value.id}
         name={value.name} 
         desc={value.desc} 
         btn={value.btn} 
         img={value.img} 
         />
      ))}
    </div>
  );
};

export default App;
