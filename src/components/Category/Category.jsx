import { Swiper,SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";



const Category = () => {
    return(
        <section id="category" className="bg-white">
            <h2>Shop by Category</h2>
                <Swiper
                
                    className="w-full mt-[80px]"
                    slidesPerView={5}
                    spaceBetween={10}
                    breakpoints={{
                        0:{
                            slidesPerView: 1.5
                        },
                        768:{
                            slidesPerView: 2.5
                        },
                        1024:{
                            slidesPerView: 4.5
                        }
                    }}
                    autoplay={{
                        delay: 2500
                    }}
                    modules={[Autoplay]}
                    loop={true}
                >
                    <SwiperSlide>
                        <div className="card group w-[180px]">
                            <img src="../../src/assets/category/icecream-cat3-min.jpg" className="w-full rounded-full mb-4" alt="" />
                            <span className="slide-text">Ice cream bar</span>
                            <span className="text-center w-full hidden group-hover:inline-block">2 products</span>
                        </div>
                    </SwiperSlide>
                                        <SwiperSlide>
                        <div className="card group w-[180px]">
                            <img src="../../src/assets/category/icecream-cat4-min.jpg" className="w-full rounded-full mb-4" alt="" />
                            <span className="slide-text">Ice cream bar</span>
                            <span className="text-center w-full hidden group-hover:inline-block">2 products</span>
                        </div>
                    </SwiperSlide>
                                        <SwiperSlide>
                        <div className="card group w-[180px]">
                            <img src="../../src/assets/category/icecream-cat11-min.jpg" className="w-full rounded-full mb-4" alt="" />
                            <span className="slide-text">Ice cream bar</span>
                            <span className="text-center w-full hidden group-hover:inline-block">2 products</span>
                        </div>
                    </SwiperSlide>
                                        <SwiperSlide>
                        <div className="card group w-[180px]">
                            <img src="../../src/assets/category/icecream-cat6-min.jpg" className="w-full rounded-full mb-4" alt="" />
                            <span className="slide-text">Ice cream bar</span>
                            <span className="text-center w-full hidden group-hover:inline-block">2 products</span>
                        </div>
                    </SwiperSlide>
                                        <SwiperSlide>
                        <div className="card group w-[180px]">
                            <img src="../../src/assets/category/icecream-cat9-min.jpg" className="w-full rounded-full mb-4" alt="" />
                            <span className="slide-text">Ice cream bar</span>
                            <span className="text-center w-full hidden group-hover:inline-block">2 products</span>
                        </div>
                    </SwiperSlide>
                </Swiper>
        </section>
    )
}
export default Category;