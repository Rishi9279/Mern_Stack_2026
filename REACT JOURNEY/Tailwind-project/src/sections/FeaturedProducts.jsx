import ProductCard from "../components/ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      category: "Lighting",
      title: "Aura Pendant Light",
      description: "Minimalist pendant light with adjustable height",
      price: "$249.99",
      image: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
      isFavorite: false,
      buttonIcon: "plus",
    },
    {
      id: 2,
      category: "Seating",
      title: "Ergonomic Lounge Chair",
      description: "Comfortable lounge chair with premium fabric",
      price: "$599.99",
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      isFavorite: false,
      buttonIcon: "plus",
    },
    {
      id: 3,
      category: "Tables",
      title: "Marble Coffee Table",
      description: "Elegant coffee table with marble top and metal base",
      price: "$449.99",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
      isFavorite: false,
      buttonIcon: "plus",
    },
    {
      id: 4,
      category: "Decor",
      title: "Modern Living Room Set",
      description: "Stylish decor setup for contemporary interiors",
      price: "$799.99",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7",
      isFavorite: false,
      buttonIcon: "plus",
    },
    {
      id: 5,
      category: "Storage",
      title: "Wooden Wall Shelves",
      description: "Minimal wall-mounted shelves for storage",
      price: "$199.99",
      image: "https://images.unsplash.com/photo-1598300056393-4aac492f4344",
      isFavorite: false,
      buttonIcon: "plus",
    },
    {
      id: 6,
      category: "Textiles",
      title: "Luxury Pattern Carpet",
      description: "Soft premium carpet with elegant patterns",
      price: "$299.99",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
      isFavorite: false,
      buttonIcon: "plus",
    },
  ];
  return (
    <section className="py-8 px-10  space-y-10">
      <h1 className="text-2xl font-bold mb-2">Featured Products</h1>
      <div className="flex justify-between ">
        <p className="text-[12px] text-gray-600 font-semibold">Our most popular items carefully selected for quality and design excellence.</p>
        <button className="border-1 border-black px-7 py-2 rounded-3xl text-[11px] font-semibold">View All Products</button>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
