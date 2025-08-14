import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRef } from "react";


const Navbar = () => {

const menu = useRef();
const menuHandler = () => {
    menu.current.classList.toggle("show-menu");
}

  return (
    <div className="navbar relative flex items-center justify-between px-[12%] h-[80px]">
      <div className="flex justify-center items-center">
        <a href="/react-demo1/" className="font-medium text-pink-500">IceCream</a>
      </div>

      <div ref={menu} className="absolute w-full md:static top-[100%] left-[-100%] md:left-[0%] transition-all duration-500 z-999">
        <ul className="w-full flex flex-col md:flex-row gap-4 justify-center bg-white">
          <li className="nav-wrapper">
            {/* <NavLink className="navlink" to="/">Home</NavLink> */}
            <a className="font-bold" href="/react-demo1/">Home</a>
          </li>
          <li className="nav-wrapper">
            {/* <NavLink className="navlink" to="#category">Categoty</NavLink> */}
            <a className="font-bold" href="#category">Category</a>
          </li>
          <li className="nav-wrapper">
            {/* <NavLink className="navlink" to="/popular">Popular</NavLink> */}
            <a className="font-bold" href="#popular">Popular</a>
          </li>
          <li className="nav-wrapper">
            {/* <NavLink className="navlink" to="/shop">Shop</NavLink> */}
            <a className="font-bold" href="#shop">Shop</a>
          </li>
          <li className="nav-wrapper">
            {/* <NavLink className="navlink" to="/testimonails">Testimonails</NavLink> */}
            <a className="font-bold" href="#testimonials">Testimonails</a>
          </li>
            <li className="nav-wrapper">
            <NavLink className="navlink" to="/aboutus">Aboutus</NavLink>
            {/* <a className="font-bold" href="#">Contact</a> */}
          </li>
          <li className="nav-wrapper">
            <NavLink className="navlink" to="/contactus">Contact</NavLink>
            {/* <a className="font-bold" href="/contactus">Contact</a> */}
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button className="btn nav-btn flex items-center justify-center gap-4">
          Shop Now
          <i>
            <FaArrowRight />
          </i>
        </button>
        <i onClick={menuHandler} className="btn bar text-[20px]"><GiHamburgerMenu /></i>
      </div>
    </div>
  );
};
export default Navbar;
