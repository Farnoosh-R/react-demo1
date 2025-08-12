import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <section id="footer" className="bg-black text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full pb-8">
        <div>
          <span className="text-2xl text-pink-500 font-bold cursor-pointer">Ice Parlor</span>

          <div className="flex flex-col mt-4 gap-2">
            <span className="">Follow Us</span>
            <p className="text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
              explicabo nemo repellendus non doloremque illum, odit iusto unde
              ducimus itaque rerum laudantium sed recusandae quos quas cum quia
              voluptatibus tenetur?
            </p>
            <div className="flex gap-4 mt-4">
              <i className="text-gray-500 hover:text-white cursor-pointer">
                <FaInstagram />
              </i>
              <i className="text-gray-500 hover:text-white cursor-pointer">
                <FaXTwitter />
              </i>
              <i className="text-gray-500 hover:text-white cursor-pointer">
                <RiYoutubeLine />
              </i>
              <i className="text-gray-500 hover:text-white cursor-pointer">
                <FaFacebookF />
              </i>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h5 className="text-2xl mb-5">Usefull Links</h5>
          <p className="text-gray-500 hover:text-white">About Us</p>
          <p className="text-gray-500 hover:text-white">Category</p>
          <p className="text-gray-500 hover:text-white">Popular</p>
          <p className="text-gray-500 hover:text-white">Shop</p>
          <p className="text-gray-500 hover:text-white">Testimonails</p>
          <p className="text-gray-500 hover:text-white">Contact</p>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-2xl mb-5">Find Store</h5>
          <p>John Smith, 123 Main Street</p>
          <p>Anytown, CA 91234, USA</p>
          <h5 className="text-2xl mt-3 ">Call Now</h5>
          <p>+128764 145 654 987</p>
          <p>Support@Iceparlor.com</p>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-2xl mb-5">Oppening Hours</h5>
          <p>Monday - Sunday</p>
          <p>9:00 am to 11:30 pm</p>
        </div>
      </div>
      <p className="text-center border-t-1 border-gray-500 pt-8 ">
        @2025 IceParlor, All Rights reserved
      </p>
    </section>
  );
};
export default Footer;
