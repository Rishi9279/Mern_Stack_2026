import { Heart } from "lucide-react";

const ProductCard = ({ category, title, description, price, image, isFavorite, buttonIcon }) => {
  return (
    <div className="bg-white rounded-2xl  overflow-hidden shadow-lg ">
      <div className="relative">
        <img className="w-full h-64 object-cover" src={image} alt={title} />
        <div className="absolute top-0 left-0 w-full flex justify-between items-start p-4">
          <h3 className="bg-purple-600 px-3 py-1 text-white text-[10px] rounded-3xl">{category}</h3>
          {isFavorite ? (
            "Favorite"
          ) : (
            <span className="rounded-full bg-white p-2">
              <Heart size={15} />
            </span>
          )}
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-sm font-bold mt-2">{title}</h2>
        <p className="text-gray-500 font-semibold text-[12px] mt-1">{description}</p>
        <div className="flex justify-between mt-2  items-center">
          <p className="text-gray-800 font-bold ">{price}</p>
          <button className="bg-black text-white rounded-full text-sm text-center font-semibold w-8 h-8 ">{buttonIcon === "plus" ? "+" : "-"}</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
