const Categories = ({ image, title, items, buttonText }) => {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
      <div className="relative">
        <img className="h-50 w-full object-cover" src={image} alt={title} />
        <div className="absolute inset-0 flex flex-col gap-1 justify-end bg-black/30 p-5 ">
          <h2 className="text-sm font-bold text-white">{title}</h2>
          <p className=" text-[11px] text-gray-300 font-semibold ">{items} items</p>
        </div>
      </div>
      <div className="p-4 text-center">
        <button className=" rounded-full  border-black border-1 px-15 py-1.5 text-[12px] font-semibold text-gray-700">{buttonText}</button>
      </div>
    </div>
  );
};

export default Categories;
