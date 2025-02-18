import { useState, useEffect, useRef } from "react";
import { banner5 } from "../assets/images";
import { Link } from "react-router-dom";

const CardBenefits = () => {
  // State for counting the numbers
  const [sections, setSections] = useState(0);
  const [clients, setClients] = useState(0);
  const [certifications, setCertifications] = useState(0);

  // Ref for the section element to detect when it's in the viewport
  const sectionRef = useRef(null);

  // Function to increment the numbers
  const countUp = (target, setter) => {
    let count = 0;
    const interval = setInterval(() => {
      if (count < target) {
        count += Math.ceil(target / 100); // Adjust this for speed
        setter(count);
      } else {
        clearInterval(interval);
      }
    }, 20); // Adjust the speed of incrementing here
  };

  // Intersection Observer to trigger counting when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Start counting when the section comes into view
          countUp(150, setSections);
          countUp(60, setClients);
          countUp(12, setCertifications);
          observer.disconnect(); // Disconnect after triggering once
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the section is in view
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.disconnect();
      }
    };
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  return (
    <section
      ref={sectionRef} // Reference the section for intersection observer
      className="px-8 py-8 bg-cover sm:bg-middle md:bg-center xl:bg-right-top relative"
      style={{ backgroundImage: `url(${banner5})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50 z-0"></div>

      <div className="max-container py-[5%] w-full text-center justify-center items-center relative z-10">
        <h1 className="text-md md:text-[60px] text-[30px] font-bold mb-8 xl:mb-12 uppercase text-center text-white">
          MY EXPERIENCE
        </h1>
        <div className="flex py-[2%]">
          <div className="flex-col md:w-1/3">
            <h1 className="md:text-[60px] text-[30px]">{sections}</h1>
            <p className="text-white">Sections</p>
          </div>
          <div className="flex-col md:w-1/3">
            <h1 className="md:text-[60px] text-[30px]">{clients}</h1>
            <p className="text-white">Clients</p>
          </div>
          <div className="flex-col md:w-1/3">
            <h1 className="md:text-[60px] text-[30px]">{certifications}</h1>
            <p className="text-white">Certifications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CardBenefits;
