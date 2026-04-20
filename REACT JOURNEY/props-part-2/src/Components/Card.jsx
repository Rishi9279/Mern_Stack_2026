import React from "react";
import { ArrowUpRight } from "lucide-react";

const Card = ({ name, desc, btn, img }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h2>{name}</h2>
      <p>{desc}</p>
      <button>
        {btn} <ArrowUpRight size={15} />
      </button>
    </div>
  );
};

export default Card;
