import Category from "../../components/Category/Category";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Offers from "../../components/Offers/Offers";

const Index = () => {
  return (
    <div className="index flex flex-col gap-4 relative min-h-[90vh]">
      <Navbar />
        <Header />
        <Category />
        <Offers />
    </div>
  );
};
export default Index;
