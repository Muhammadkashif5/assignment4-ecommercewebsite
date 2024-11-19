import Topnavbar from "./components/topnavbar";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import BrandName from "./components/brand-name";
import P_list1 from "./components/productslist1";
import P_List2 from "./components/productlist2";
import StyleOptions from "./components/style-option";
import Reviews from "./components/review";
import Newsletter from "./components/newsletter";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Topnavbar />
      <Navbar />
      <Hero />
      <BrandName />
      <P_list1 />
      <P_List2 />
      <StyleOptions />
      <Reviews />
      <Newsletter />
      <Footer />
    </div>
  );
}
