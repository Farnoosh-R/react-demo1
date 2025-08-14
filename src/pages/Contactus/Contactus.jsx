import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import { useEffect, useState } from "react";

const Contactus = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const arrayFormData = [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev, [name]: value,}));
  };

  const handleSubmit = (e) => {
    // e.preventDefault(); // جلوگیری از رفرش صفحه
    console.log("Form submitted:", formData);
    if (formData.firstName) {
        alert("hi " + formData.firstName + formData.lastName)
    }
  };

  useEffect(() => {
    handleSubmit();
    
  }, []);

  return (
    <div className="bg-[url('/react-demo1/images/contactus/contactus-1.jpg')] min-h-[90vh] bg-cover opacity-70 bg-no-repeat">
      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white shadow-2xl rounded-[20px] p-10">
          <div className="flex flex-col gap-8">
            <h3 className="text-5xl font-bold text-pink-700">Contact Us</h3>
            <h3 className="text-2xl">Stay in touch with us</h3>
            <p>
              We are waiting for you at the ice cream shop
              Let us know your comments and suggestions through the form below.
            </p>
            <div className="flex gap-3 text-pink-600">
              <i>
                <FaInstagram />
              </i>
              <i>
                <FaXTwitter />
              </i>
              <i>
                <RiYoutubeLine />
              </i>
              <i>
                <FaFacebookF />
              </i>
            </div>
          </div>
          <div>
            <form
              onSubmit={handleSubmit}
              action=""
              className="flex flex-col gap-10"
            >
              <div className="flex flex-col md:flex-row gap-3">
                <input
                  className="shadow appearance-none border border-pink-400 rounded-[10px] w-full py-3 px-3 text-pink-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={formData.firstName}
                  name="firstName"
                  placeholder="name"
                  onChange={handleChange}
                />
                <input
                  className="shadow appearance-none border border-pink-400 rounded-[10px] w-full py-3 px-3 text-pink-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  value={formData.lastName}
                  name="lastName"
                  placeholder="lastName"
                  onChange={handleChange}
                />
              </div>
              <input
                className="shadow appearance-none border border-pink-400 rounded-[10px] w-full py-3 px-3 text-pink-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={formData.email}
                name="email"
                placeholder="email"
                onChange={handleChange}
              />
              <input
                className="shadow appearance-none border border-pink-400 rounded-[10px] w-full py-3 px-3 text-pink-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                value={formData.phone}
                name="phone"
                placeholder="phone"
                onChange={handleChange}
              />
              <button type="submit" className="btn w-[25%] mx-auto">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Contactus;
