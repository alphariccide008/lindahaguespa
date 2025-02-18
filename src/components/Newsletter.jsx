import { useState } from "react"


const Newsletter = () => {
  const [Email, setEmail] = useState("");
  const [Error, setError]= useState(null)

  return (
    <section className="py-5 px-9 ">
       <div className="max-container flex flex-col ">
       <div className="flex flex-col justify-center items-center">
            <h1 className="text-md md:text-2xl uppercase mb-2 text-center font-bold">join our newsletter</h1>
            <p className="max-sm:max-w-lg text-center text-sm md:text-md leading-7 uppercase mb-2 px-12 ">get latest news, updates, and special offers delivered straight to your inbox</p>
        </div>
        <div className="flex flex-col space-y-3 md:space-y-0 md:flex-row justify-center ">
          
           <input type="text" placeholder="Enter you Email" 
           className="md:w-2/6
           outline-none focus:ring-0 border 
           md:border-r-0 border-[#003366] p-3
           md:rounded-l-lg rounded-lg md:rounded-none" />
           <button  
           className="text-white bg-[#003366]
            md:w-1/6 md:rounded-r-lg p-3 rounded-lg md:rounded-none ">Subscribe</button>
            
        </div>
       </div>
    </section>
  )
}
export default Newsletter