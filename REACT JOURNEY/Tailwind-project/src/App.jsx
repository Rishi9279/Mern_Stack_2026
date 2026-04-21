import HomeHero from "./sections/HomeHero";
import CategoriesSection from "./sections/CategoriesSection";
import FeaturedProducts from "./sections/FeaturedProducts";
import BrandSection from "./sections/BrandSection";
import TestimonialSection from "./sections/TestimonialSection";
import NewsLetterSection from "./sections/NewsLetterSection";
import FooterSection from "./sections/FooterSection";

const App = () => {
  return (
    <div>
      <HomeHero />
      <CategoriesSection />
      <FeaturedProducts />
      <BrandSection />
      <TestimonialSection />
      <NewsLetterSection />
      <FooterSection/>
    </div>
  );
};

export default App;
