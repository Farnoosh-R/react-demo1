import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

const Index = () => {
  return (
    <div className="index flex flex-col gap-4 relative min-h-[90vh] bg-pink-100">
      <Navbar />
        <Header />
    </div>
  );
};
export default Index;
