import { Swiper, SwiperSlide } from "swiper/react";
import { IoShuffleOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { Autoplay } from "swiper/modules";

const Popular = () => {
  return (
    <section id="popular">
      <h2>Popular Scoop Flavors</h2>
      <Swiper
        className="mt-20 w-full"
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 1500,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2.5,
          },
          1024: {
            slidesPerView: 3.5,
          },
        }}
        loop={true}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="relative flex flex-col gap-10 card">
            <div className="w-full">
              <img
                src="images/popular/icecream-popular5.jpg"
                alt=""
                className="w-full"
              />
            </div>
            <div className="icons-card hidden absolute top-5 flex flex-col right-5 gap-2">
              <i className="icon-card">
                <FaRegHeart />
              </i>
              <i className="icon-card">
                <IoShuffleOutline />
              </i>
              <i className="icon-card">
                <IoEyeOutline />
              </i>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex mt-3">
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaRegStar />
              </i>
            </div>

            <h5 className="text-pink-600 font-bold">
              Chocolate Fudge Browning
            </h5>
            <span>$7.50</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col gap-10 card">
            <div className="w-full">
              <img
                src="images/popular/icecream-popular6.jpg"
                alt=""
                className="w-full"
              />
            </div>
            <div className="icons-card hidden absolute top-5 flex flex-col right-5 gap-2">
              <i className="icon-card">
                <FaRegHeart />
              </i>
              <i className="icon-card">
                <IoShuffleOutline />
              </i>
              <i className="icon-card">
                <IoEyeOutline />
              </i>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex mt-3">
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaRegStar />
              </i>
            </div>

            <h5 className="text-pink-600 font-bold">
              Chocolate Fudge Browning
            </h5>
            <span>$7.50</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col gap-10 card">
            <div className="w-full">
              <img
                src="images/popular/icecream-popular2.jpg"
                alt=""
                className="w-full"
              />
            </div>
            <div className="icons-card hidden absolute top-5 flex flex-col right-5 gap-2">
              <i className="icon-card">
                <FaRegHeart />
              </i>
              <i className="icon-card">
                <IoShuffleOutline />
              </i>
              <i className="icon-card">
                <IoEyeOutline />
              </i>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex mt-3">
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaRegStar />
              </i>
            </div>

            <h5 className="text-pink-600 font-bold">
              Chocolate Fudge Browning
            </h5>
            <span>$7.50</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col gap-10 card">
            <div className="w-full">
              <img
                src="images/popular/icecream-popular1.jpg"
                alt=""
                className="w-full"
              />
            </div>
            <div className="icons-card hidden absolute top-5 flex flex-col right-5 gap-2">
              <i className="icon-card">
                <FaRegHeart />
              </i>
              <i className="icon-card">
                <IoShuffleOutline />
              </i>
              <i className="icon-card">
                <IoEyeOutline />
              </i>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex mt-3">
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaRegStar />
              </i>
            </div>

            <h5 className="text-pink-600 font-bold">
              Chocolate Fudge Browning
            </h5>
            <span>$7.50</span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex flex-col gap-10 card">
            <div className="w-full">
              <img
                src="images/popular/icecream-popular3.jpg"
                alt=""
                className="w-full"
              />
            </div>
            <div className="icons-card hidden absolute top-5 flex flex-col right-5 gap-2">
              <i className="icon-card">
                <FaRegHeart />
              </i>
              <i className="icon-card">
                <IoShuffleOutline />
              </i>
              <i className="icon-card">
                <IoEyeOutline />
              </i>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <div className="flex mt-3">
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaStar />
              </i>
              <i>
                <FaRegStar />
              </i>
            </div>

            <h5 className="text-pink-600 font-bold">
              Chocolate Fudge Browning
            </h5>
            <span>$7.50</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Popular;
