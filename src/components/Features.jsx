import { banner1,banner2, banner3,banner4} from "../assets/images";
import { Link } from "react-router-dom";


const Features = () => {
  return (
    <section className="bg-[#000000] py-[7%]">
      <h1 className="text-center pb-[3%] text-white text-[30px] md:text-[60px] font-semibold">GALLERY</h1>
      <div className="md:flex  mx-[3%]">
        <div className="flex-col md:w-1/4">
          <img src={banner1} alt=""  className="h-[380px] md:h-[100%] pb-3 rounded-lg w-[100%] md:w-[90%]" />
        </div>
        <div className="flex-col md:w-1/4">
        <img src={banner2} alt=""  className="h-[380px]  md:h-[100%]  pb-3 rounded-lg w-[100%] md:w-[90%]" />
        </div>
        <div className="flex-col md:w-1/4">
        <img src={banner3} alt=""  className="h-[380px]  md:h-[100%]  pb-3 rounded-lg w-[100%] md:w-[90%]" />
        </div>
        <div className="flex-col md:w-1/4">
        <img src={banner4} alt=""  className="h-[380px] md:h-[100%]  pb-3 rounded-lg w-[100%] md:w-[90%]" />
        </div>
      </div>
      <div className="flex justify-center mt-8">
  <Link to="/gallery" className="rounded-lg px-5  py-3 text-black hover:text-[#697dbb] bg-[#cecdcd]">VIEW GALLERY</Link>
</div>

    </section>
  );
};
export default Features;