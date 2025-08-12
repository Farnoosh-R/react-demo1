import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";
import { Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-orange-100">
        <h2>Happy Clients Say</h2>
      <Swiper 
      className="w-full my-15"
      slidesPerView={3}
      spaceBetween={20}
      autoplay={{
        delay: 1500
      }}
      loop={true}
      breakpoints={{
        0:{
            slidesPerView: 1.5
        },
        768: {
            slidesPerView: 2.5
        },
        1024: {
            slidesPerView: 3.5
        }
      }}
      modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="w-full p-8 card group bg-white">
            <div className="flex items-center mb-3 gap-2">
              <img src="/react-demo1/images/testimonials/testimonials-1.jpg" alt="" className="rounded-full"/>
              <div className="flex flex-col">
                <div className="flex">
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaRegStar /></i>
                </div>
                <span className="text-sm">Sandra Farmar</span>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              perspiciatis modi nobis dicta obcaecati ex magni et accusamus
              ipsam animi
            </p>
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div className="w-full p-8 card group bg-white">
            <div className="flex items-center mb-3 gap-2">
              <img src="/react-demo1/images/testimonials/testimonials-2.jpg" alt="" className="rounded-full"/>
              <div className="flex flex-col">
                <div className="flex">
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaRegStar /></i>
                </div>
                <span className="text-sm">Sandra Farmar</span>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              perspiciatis modi nobis dicta obcaecati ex magni et accusamus
              ipsam animi
            </p>
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div className="w-full p-8 card group bg-white">
            <div className="flex items-center mb-3 gap-2">
              <img src="/react-demo1/images/testimonials/testimonials-3.jpg" alt="" className="rounded-full"/>
              <div className="flex flex-col">
                <div className="flex">
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaRegStar /></i>
                </div>
                <span className="text-sm">Sandra Farmar</span>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              perspiciatis modi nobis dicta obcaecati ex magni et accusamus
              ipsam animi
            </p>
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div className="w-full p-8 card group bg-white">
            <div className="flex items-center mb-3 gap-2">
              <img src="/react-demo1/images/testimonials/testimonials-4.jpg" alt="" className="rounded-full"/>
              <div className="flex flex-col">
                <div className="flex">
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaStar /></i>
                    <i><FaRegStar /></i>
                </div>
                <span className="text-sm">Sandra Farmar</span>
              </div>
            </div>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
              perspiciatis modi nobis dicta obcaecati ex magni et accusamus
              ipsam animi
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default Testimonials;
