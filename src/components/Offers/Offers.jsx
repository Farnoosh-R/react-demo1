import { FaArrowRight } from "react-icons/fa6";

const Offers = () => {
  return (
    <section id="offers">
      <div className="flex gap-4 flex-wrap lg:flex-nowrap">
        <div className="offers-box-ver w-full sm:w-[40%] lg:w-[33%] h-[550px] bg-[url('/react-demo1/images/offers/icecream-offer1.jpg')] bg-cover p-6 flex-flex-col pt-6 text-white items-center">
          <small>Save 20% off</small>
          <h3>Summer 2025</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            recusandae amet harum quibusdam velit sunt dolorem voluptatibus cum
            dignissimos molestias, neque voluptas. Deleniti ex provident
            dignissimos fugiat error nesciunt saepe?
          </p>
          <button className="btn nav-btn mt-3 flex items-center justify-center gap-4">
            Shop Now
            <i>
              <FaArrowRight />
            </i>
          </button>
        </div>

        <div className="offers-box-ver offers-box-ver w-full sm:w-[40%] lg:w-[33%] h-[550px] bg-[url('/react-demo1/images/offers/icecream-offer3.jpg')] bg-cover p-6 flex-flex-col pt-6 text-white items-center">
          <small className="text-2xl">Save 20% off</small>
          <h3>Summer 2025</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            recusandae amet harum quibusdam velit sunt dolorem voluptatibus cum
            dignissimos molestias, neque voluptas. Deleniti ex provident
            dignissimos fugiat error nesciunt saepe?
          </p>
          <button className="btn nav-btn mt-3 flex items-center justify-center gap-4">
            Shop Now
            <i>
              <FaArrowRight />
            </i>
          </button>
        </div>

        <div className="offers-box-hor w-full lg:w-[33%] flex flex-col gap-10 h-[550px]">
          <div className="h-[250px] w-full bg-[url('/react-demo1/images/offers/icecream-offer6.jpg')] bg-cover p-6 flex flex-col ga-2 text-white">
            <h3 className="text-3xl">Best Selling</h3>
            <p className="pt-20">
              The 1# best <br />
              texture, low in calories
            </p>
          </div>
          <div className="h-[250px] w-full bg-[url('/react-demo1/images/offers/icecream-offer8.jpg')] bg-cover p-6 flex flex-col ga-2 text-white">
            <h3 className="text-3xl">Best Selling</h3>
            <p className="pt-20">
              Smooth and Creamy <br />
              texture, low in calories
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Offers;
