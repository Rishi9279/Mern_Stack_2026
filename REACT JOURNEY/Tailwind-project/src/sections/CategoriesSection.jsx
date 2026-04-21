import CategoryCard from "../components/CategoryCard";

const CategoriesSection = () => {
  const categories = [
    {
      id: 1,
      title: "Living Room",
      items: 42,
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      buttonText: "View Collection",
    },
    {
      id: 2,
      title: "Bedroom",
      items: 38,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      buttonText: "View Collection",
    },
    {
      id: 3,
      title: "Kitchen",
      items: 29,
      image: "https://images.unsplash.com/photo-1556911220-bff31c812dba",
      buttonText: "View Collection",
    },
    {
      id: 4,
      title: "Bathroom",
      items: 24,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      buttonText: "View Collection",
    },
  ];

  return (
    <section className="px-10 py-12">
      <div className="mb-10 flex flex-col gap-3 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Explore Our Categories</h1>
        <p className="mx-auto max-w-xl text-[11px] font-semibold text-gray-500">
          Discover a wide range of products across various categories. From electronics to fashion, home essentials to beauty products, we have something for everyone.
        </p>
      </div>

      <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </section>
  );
};

export default CategoriesSection;
