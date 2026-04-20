import { Search, Heart, Handbag } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 px-10  font-[helvetica, sans-serif ]">
      <h1 className="uppercase text-purple-700 font-bold cursor-pointer ">
        Futura <span className="text-black"> Home</span>
      </h1>
      <ul className="flex gap-6 text-[12px] text-gray-600 font-semibold cursor-pointer">
        <li className="text-purple-800 underline-offset-5 underline  ">Catelog</li>
        <li>Collections</li>
        <li>Rooms</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="flex gap-5 text-gray-600 cursor-pointer">
        <Search size={16} />
        <Heart size={16} />
        <Handbag size={16} />
      </div>
    </div>
  );
};

export default Navbar;
