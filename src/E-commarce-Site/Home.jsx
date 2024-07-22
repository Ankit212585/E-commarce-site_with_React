import A1 from "./navebar";
import Announcement from "./Announcement";
import Slider from "./slider";
import Categories from "./Categories";
import Products from "./Products";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <A1 />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
}
