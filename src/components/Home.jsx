import About from "./About/About";
import BestOffer from "./BestOffer/BestOffer";
import HomeCarousel from "./Carousel/HomeCarousel";
import GetInTouch from "./GetInTouch/GetInTouch";
import LatestNew from "./News/LatestNew";
import FeatureProduct from "./Product/FeatureProduct";
import ProductFilter from "./Product/ProductFilter";
import Brand from "./Brand/Brand";
const Home = () => {
  return (
    <>
      <HomeCarousel />
      <About />
      <ProductFilter />
      <GetInTouch />
      <FeatureProduct />
      <BestOffer />
      <LatestNew />
      <Brand />
    </>
  );
};

export default Home;
