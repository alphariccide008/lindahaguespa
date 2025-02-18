import { banner1,banner2, banner3,banner4} from "../assets/images";


const Benefits = () => {
  return (
    <section>
      <div className="md:flex mx-[3%]">
        <div className="flex-col md:w-1/4">
          <img src={banner1} alt=""  className="h-[100%] rounded-lg sm:w-[100%] md:w-[90%]" />
        </div>
        <div className="flex-col md:w-1/4">
        <img src={banner2} alt=""  className="h-[100%] rounded-lg sm:w-[100%] md:w-[90%]" />
        </div>
        <div className="flex-col md:w-1/4">
        <img src={banner3} alt=""  className="h-[100%] rounded-lg sm:w-[100%] md:w-[90%]" />
        </div>
        <div className="flex-col md:w-1/4">
        <img src={banner4} alt=""  className="h-[100%] rounded-lg sm:w-[100%] md:w-[90%]" />
        </div>
      </div>
    </section>
  );
};
export default Benefits;