import { heroImg, backgroundImg1, banner1, banner2, banner3 ,banner4, banner5,banner6,banner7,banner8,banner9,banner10,banner11,banner12,} from "../../assets/images";


const Services = () => {
  return (
    <section>
        <div className="pt-36 px-[3%]">
          <h1 className="text-center md:text-[60px]">Gallery</h1>
          <div className="md:flex py-4 flex-wrap">
            <div className="flex-col md:w-1/3">
            <img src={banner1} alt=""  className="h-[70%] md:h-[100%] p-3 rounded-lg sm:w-[100%]  md:w-[100%]" />
            </div>
            <div className="flex-col md:w-1/3">
              <img src={banner2} alt=""  className="h-[70%] md:h-[100%] p-3 rounded-lg sm:w-[100%]  md:w-[100%]" />
            </div>
            <div className="flex-col md:w-1/3">
            <img src={banner3} alt=""  className="h-[70%] md:h-[100%] p-3 rounded-lg sm:w-[100%] md:w-[100%]" />
            </div>
            <div className="flex-col md:w-1/3">
            <img src={banner4} alt=""  className="h-[70%] md:h-[100%] p-3 rounded-lg sm:w-[100%] md:w-[100%]" />
            </div>
            <div className="flex-col md:w-1/3">
            <img src={banner5} alt=""  className="h-[70%] md:h-[100%] p-3 rounded-lg sm:w-[100%] md:w-[100%]" />
            </div>
            <div className="flex-col md:w-1/3">
            <img src={banner6} alt=""  className="h-[70%] md:h-[100%] p-3 rounded-lg sm:w-[100%] md:w-[100%]" />
            </div>
            <div className="flex-col md:w-1/3">
            <img src={banner7} alt=""  className="h-[70%] md:h-[100%] p-3 rounded-lg sm:w-[100%] md:w-[100%]" />
            </div>
            <div className="flex-col md:w-1/3">
            <img src={banner8} alt=""  className="h-[70%] md:h-[100%] p-3 rounded-lg sm:w-[100%] md:w-[100%]" />
            </div>
            <div className="flex-col md:w-1/3">
            <img src={banner9} alt=""  className="h-[70%] md:h-[100%] p-3 rounded-lg sm:w-[100%] md:w-[100%]" />
            </div>
            <div className="flex-col md:w-1/3">
            <img src={banner10} alt=""  className="h-[70%] md:h-[100%] p-3 rounded-lg sm:w-[100%] md:w-[100%]" />
            </div>
            <div className="flex-col md:w-1/3">
            <img src={banner11} alt=""  className="h-[70%] md:h-[100%] p-3 rounded-lg sm:w-[100%] md:w-[100%]" />
            </div>
            <div className="flex-col md:w-1/3">
            <img src={banner12} alt=""  className="h-[70%] md:h-[100%] p-3 rounded-lg sm:w-[100%] md:w-[100%]" />
            </div>
          </div>
        </div>
    </section>
  )
}
export default Services