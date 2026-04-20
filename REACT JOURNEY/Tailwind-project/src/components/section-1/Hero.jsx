const Hero = () => {
  return (
    <div className="flex items-center justify-between gap-10  h-[80vh] py-5 px-10  font-[helvetica, sans-serif  ]">
      <div className="flex flex-col gap-6 ">
        <h1 className="text-5xl font-bold">
          Reimagine Your <span className="text-purple-700"> Living Space</span>
        </h1>
        <p className="text-[14px] font-semibold text-gray-600">Discover our collection of premium furniture and home accessories designed for the future of living.</p>
        <span className="flex gap-4">
          <button className="bg-gray-900 font-medium text-white text-[13px]  py-2 px-5 rounded-3xl">Explore Collection</button>
          <button className=" border border-black  text-black font-semibold py-2 px-5 rounded-3xl text-[13px]">View Catalog</button>
        </span>
      </div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1704040686510-b747ff423ebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpdmluZyUyMHJvb20lMjBpbnRlcmlvciUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
          className="w-full h-full object-cover rounded-2xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default Hero;
