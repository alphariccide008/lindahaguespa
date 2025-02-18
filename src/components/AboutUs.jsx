import { Link } from "react-router-dom";
import { Star } from "lucide-react";


const AboutUs = () => {
  return (
    <section>
      <h1 className="md:text-[60px] text-[30px] pb-5 font-semibold text-center pt-10 ">Client Testimonials</h1>
      <div className="md:flex py-[5%] mx-[5%]">
        
        <div className=" p-3 m-2 flex-col md:w-1/3 px-5 border pb-4">
        <div className="flex space-x-1 text-yellow-400">
          {[...Array(5)].map((_, index) => (
            <Star key={index} fill="currentColor" stroke="none" size={30} />
          ))}
        </div>
          <p  className="pb-3">Had a busy day I had to come and get my body well taken care of …she did great</p>
          <p className="font-semibold">Ronald</p>
        </div>
        <div className="flex-col p-3 m-2 border md:w-1/3 px-5 pb-4">
        <div className="flex space-x-1 text-yellow-400">
          {[...Array(5)].map((_, index) => (
            <Star key={index} fill="currentColor" stroke="none" size={30} />
          ))}
        </div>
          <p className="pb-3">She is really nice and calm lady will visit whenever am in town</p>
          <p className="font-semibold">Blake</p>
        </div>
        <div className="border p-3 m-2 flex-col md:w-1/3 px-5 pb-4">
        <div className="flex space-x-1 text-yellow-400">
          {[...Array(5)].map((_, index) => (
            <Star key={index} fill="currentColor" stroke="none" size={30} />
          ))}
        </div>
          <p className="pb-3">She's really nice and easygoing. I'll definitely visit her whenever I'm in town.</p>
          <p className="font-semibold">chris</p>
        </div>
      </div>
      <div className="flex justify-center mb-8 items-center">
        <Link to='/reviews' className="text-center py-3 px-5 hover:text-[#4b48e3] bg-black rounded-lg text-white">Add Review</Link>
      </div>

    </section>
  );
};
export default AboutUs;
