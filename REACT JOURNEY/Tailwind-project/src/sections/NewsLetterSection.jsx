import React from "react";

const NewsLetterSection = () => {
  return (
    <div className="bg-[#111729] flex flex-col gap-3 py-10  mx-10 mb-10 rounded-2xl text-center text-white ">
      <h1 className="text-2xl font-semibold  ">Subscribe to Our Newsletter</h1>
      <p className="text-gray-400 text-[11px] font-semibold">Stay updated with our latest news and offers.</p>
      <form className="flex gap-3 justify-center">
        <input className="w-[40%] bg-white text-gray-600 py-2 px-4 rounded-3xl outline-none" type="email" placeholder="Enter your email" required />
        <button className="bg-purple-600 hover:bg-purple-700 text-[12px] text-white py-2 px-4 rounded-3xl" type="submit">Subscribe</button>
      </form>
      <p className="text-gray-400 text-[11px] font-semibold">By subscribing, you agree to our Privacy Policy and content to recieve update form our company.</p>
    </div>
  );
};

export default NewsLetterSection;
