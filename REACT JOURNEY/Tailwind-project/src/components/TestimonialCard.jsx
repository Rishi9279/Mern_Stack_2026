import React from "react";
import { Star } from "lucide-react";

const TestimonialCard = ({ name, role, image, review, rating }) => {
  return (
    <div className="shadow-xl p-5 rounded-2xl">
      <div className="flex items-start gap-4 mb-4">
        <img src={image} alt={name} className="w-14 h-14 rounded-full" />
        <div>
          <h3 className="font-bold text-sm">{name}</h3>
          <p className="text-gray-600 text-[12px] font-semibold">{role}</p>
        </div>
      </div>
      <p className="text-[13px]">{review}</p>
      <p className="flex gap-1 mt-3">
        <Star size={15} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <Star size={15} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <Star size={15} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <Star size={15} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <Star size={15} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      </p>
    </div>
  );
};

export default TestimonialCard;
