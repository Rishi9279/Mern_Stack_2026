import React from "react";

const BrandSection = () => {
  return (
    <div className="flex justify-between items-center bg-[#111729] gap-10 my-10 text-white p-10 ">
      <div className="flex  flex-col gap-7 w-1/2">
        <h1 className="text-[29px] uppercase font-semibold">A Futuristic interior brands, established in 2026</h1>
        <p className="text-gray-400 text-[12px] font-semibold">
          We are a futuristic interior brand that was established in 2026. Our mission is to create innovative and cutting-edge interior designs that push the boundaries of traditional aesthetics.
        </p>
        <p className="text-gray-400 text-[12px] font-semibold">
          Our team of talented designers and architects work tirelessly to bring our clients' visions to life, using state-of-the-art materials and techniques.{" "}
        </p>
        <button className="bg-white  py-2 text-gray-800 rounded-3xl w-[30%] text-[12px] font-semibold hover:bg-[#ff7b4d] transition duration-300">Learn More About Us</button>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5">
          <div className="shadow-lg border py-5 px-8 text-center rounded-2xl border-gray-800">
            <h1 className="font-bold text-2xl">50+</h1>
            <p className="text-[11px] text-gray-300">Team Members</p>
          </div>
          <div className="shadow-lg border py-5 px-8 text-center rounded-2xl border-gray-800">
            <h1 className="font-bold text-2xl">2000 m² </h1>
            <p className="text-[11px] text-gray-300">Production Area</p>
          </div>
          <div className="shadow-lg border py-5 px-8 text-center rounded-2xl border-gray-800">
            <h1 className="font-bold text-2xl">500,000+</h1>
            <p className="text-[11px] text-gray-300">Product Shipped</p>
          </div>
        </div>
        <div className="shadow-lg flex flex-col gap-2 border p-5 text-center rounded-2xl border-gray-800">
          <h2 className="text-[13px]">"Our Products are made to love and attention to every details."</h2>
          <p className="text-[11px] text-gray-300">- Alex Morgon, Founder</p>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
