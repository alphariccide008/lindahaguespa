import { heroImg, backgroundImg1, banner1, banner2, banner3 } from "../assets/images";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Hero = () => {
  const backgroundImages = [
    `url(${banner1})`,
    `url(${banner2})`,
    `url(${banner3})`,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section
      className="bg-cover bg-center xl:h-[800px] xl:px-8 px-6 relative flex items-center justify-center"
      style={{ backgroundImage: backgroundImages[currentImageIndex] }}
    >
      {/* Dark Overlay */}
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-70"
        style={{ zIndex: 1 }}
      ></div>

      <div className="max-container md:mx-[8%] mt-20 py-20 w-full flex flex-col items-center text-center gap-12 relative z-10">
        <h1 className="md:text-[70px] text-white text-[30px] pt-30 font-bold uppercase">
          Unwind in Bliss: where stress meets Its match!
        </h1>
        <p className="text-white text-sm leading-7 max-w-2xl">
          Hello, welcome to Linda Hague Spa. I'm your personalized massage therapist. I specialize in providing both relaxing and therapeutic massages, as well as a range of other spa services. I understand that every client has unique needs and preferences, and I'm dedicated to creating a customized experience that promotes deep relaxation and overall well-being.
        </p>

        {/* Centered Buttons */}
        <div className="flex justify-center mt-5 gap-4">
          <Link
            to="/contact"
            className="bg-[#000000] mx-1 md:text-[20px] flex rounded-lg text-sm text-white p-5 hover:bg-white hover:text-[#697dbb] "
          >
            Book A Session <FaCalendarAlt className="mx-2" />
          </Link>
          <Link
            to="/contact"
            className="bg-[#cecdcd] mx-1 md:text-[20px] flex rounded-lg text-sm text-white p-5 hover:text-[#697dbb] "
          >
            Contact <FaPhoneAlt className="mx-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
