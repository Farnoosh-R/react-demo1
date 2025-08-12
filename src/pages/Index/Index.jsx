import Category from "../../components/Category/Category";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Info from "../../components/Info/Info";
import Navbar from "../../components/Navbar/Navbar";
import Offers from "../../components/Offers/Offers";
import Popular from "../../components/Popular/Popular";
import Shop from "../../components/Shop/Shop";
import Testimonials from "../../components/Testimonials/Testimonials";

const Index = () => {
  return (
    <div className="index flex flex-col gap-4 relative min-h-[90vh]">
      
        <Header />
        <Category />
        <Offers />
        <Popular />
        <Shop />
        <Info />
        <Testimonials />
        
    </div>
  );
};
export default Index;
