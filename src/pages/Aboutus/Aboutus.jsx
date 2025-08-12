import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

const Aboutus = () => {
  return (
    <section id="aboutus" className="bg-pink-300">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-2 justify-center">
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-white">Ice Cream</h2>
            <h2 className="text-white">Made with</h2>
            <h3 className="text-pink-600 text-7xl text-center font-bold">Passion</h3>
            <h5 className="text-2xl">A memorable taste experience!</h5>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, repellat commodi! Corrupti nulla perspiciatis, voluptatem similique consequuntur vero pariatur modi non ullam, reprehenderit expedita doloribus, aliquid nihil! Explicabo, ullam expedita!</p>
          </div>
          <div className="flex gap-2 justify-center mt-3">
            <button className="btn">Products</button>
            <button className="btn btn-outline">How its made?</button>
          </div>

          <div className="flex gap-3 justify-center mt-3">
            <i className="bg-white text-pink-500 hover:bg-pink-400 hover:text-white transition-all duration-300 cursor-pointer rounded-full p-2"><FaInstagram /></i>
            <i className="bg-white text-pink-500 hover:bg-pink-400 hover:text-white transition-all duration-300 cursor-pointer rounded-full p-2"><FaXTwitter /></i>
            <i className="bg-white text-pink-500 hover:bg-pink-400 hover:text-white transition-all duration-300 cursor-pointer rounded-full p-2"><RiYoutubeLine /></i>
            <i className="bg-white text-pink-500 hover:bg-pink-400 hover:text-white transition-all duration-300 cursor-pointer rounded-full p-2"><FaFacebookF /></i>
          </div>
        </div>
        
        <div className="bg-pink-400 rounded-full p-4">
          <img src="/react-demo1/images/aboutus/aboutus2.webp" alt="" />
        </div>
      </div>
    </section>
  );
};
export default Aboutus;
