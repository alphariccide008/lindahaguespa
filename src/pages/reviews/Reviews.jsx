import { Star } from "lucide-react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";


const Reviews = () => {

  const [title, setTitle] = useState("");
  const [fullName, setFullName] = useState("");
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs
    if (!title || !fullName || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // Clear inputs
    setTitle("");
    setFullName("");
    setMessage("");

    // Show success message for 2 seconds
    setSuccessMessage("Review sent successfully!");
    setTimeout(() => setSuccessMessage(""), 2000);
  };

  return (
    <section>
      <div className="relative  pt-[30%] md:pt-[10%] md:mx-[5%]">
        <h1 className="text-center pb-16 font-bold md:text-[60px] text-[30px]"> Reviews </h1>
    
     <div className="my-8 px-3">
      <h1 className="text-[30px] font-semibold">Magical hands</h1>
     <div className="flex">
      <div className="flex space-x-1 text-yellow-400">
      {[...Array(5)].map((_, index) => (
        <Star key={index} fill="currentColor" stroke="none" size={30} />
      ))}
    </div>
    <div className="p-2">
     <i>Feb 16 2025</i>
    </div>
      </div>
      <p>I’ve had the best massages in the last 5 months with Emily 😍, she’s amazing at what she does. Mental care 🤤</p>
      <p className="py-4 font-semibold text-[20px]">Jason Macaulay</p>
     </div>

     <div className="my-8 px-3">
      <h1 className="text-[30px] font-semibold">Best Service</h1>
     <div className="flex">
      <div className="flex space-x-1 text-yellow-400">
      {[...Array(5)].map((_, index) => (
        <Star key={index} fill="currentColor" stroke="none" size={30} />
      ))}
    </div>
    <div className="p-2">
     <i>Dec 16 2024</i>
    </div>
      </div>
      <p>It was a really good massage, focused exactly where I requested in a lovely setting. I will definitely be going back!</p>
      <p className="py-4 font-semibold text-[20px]">Emily Rogers</p>
     </div>

     <div className="my-8 px-3">
      <h1 className="text-[30px] font-semibold">Relaxing</h1>
     <div className="flex">
      <div className="flex space-x-1 text-yellow-400">
      {[...Array(5)].map((_, index) => (
        <Star key={index} fill="currentColor" stroke="none" size={30} />
      ))}
    </div>
    <div className="p-2">
     <i>Nov 10 2024</i>
    </div>
      </div>
      <p>Linda is a professional and friendly therapist and I have been fortunate to have had a few of her treatments so far. The deep tissue massage is wonderful, and it literally hits all the spots! She also uses very good quality oils and towels which make it a very luxurious experience. The Indian head massage is also very nice. Top marks and recommended to everyone!!! Thanks leslie 🙂Show less</p>
      <p className="py-4 font-semibold text-[20px]">James Bernard</p>
     </div>

     <div className="my-8 px-3">
      <h1 className="text-[30px] font-semibold">A must visit when in town</h1>
     <div className="flex">
      <div className="flex space-x-1 text-yellow-400">
      {[...Array(5)].map((_, index) => (
        <Star key={index} fill="currentColor" stroke="none" size={30} />
      ))}
    </div>
    <div className="p-2">
     <i>Nov 1 2024</i>
    </div>
      </div>
      <p>she was amazing, I would highly recommend her. Her hands were lovely and warm and the massage left me feeling so relaxed I just wanted to sleep and I felt completely de-stressed.</p>
      <p className="py-4 font-semibold text-[20px]">Jessica Wayne</p>
     </div>

     <div className="my-8 px-3">
      <h1 className="text-[30px] font-semibold">Healing Hands </h1>
     <div className="flex">
      <div className="flex space-x-1 text-yellow-400">
      {[...Array(5)].map((_, index) => (
        <Star key={index} fill="currentColor" stroke="none" size={30} />
      ))}
    </div>
    <div className="p-2">
     <i>Oct 16 2024</i>
    </div>
      </div>
      <p>She got healing hands to heal your mood after a long day at work. I wish I could rate her more than 5 stars</p>
      <p className="py-4 font-semibold text-[20px]">James Jefferson</p>
     </div>

     <div className="my-8 px-3">
      <h1 className="text-[30px] font-semibold">A must visit in Town </h1>
     <div className="flex">
      <div className="flex space-x-1 text-yellow-400">
      {[...Array(5)].map((_, index) => (
        <Star key={index} fill="currentColor" stroke="none" size={30} />
      ))}
    </div>
    <div className="p-2">
     <i>Oct 8 2024</i>
    </div>
      </div>
      <p>It was a really good massage</p>
      <p className="py-4 font-semibold text-[20px]">Anonymous</p>
     </div>

     <div className="my-8 px-3">
      <h1 className="text-[30px] font-semibold">Gifted Hands</h1>
     <div className="flex">
      <div className="flex space-x-1 text-yellow-400">
      {[...Array(5)].map((_, index) => (
        <Star key={index} fill="currentColor" stroke="none" size={30} />
      ))}
    </div>
    <div className="p-2">
     <i>Oct 16 2024</i>
    </div>
      </div>
      <p>I had yet the best experience</p>
      <p className="py-4 font-semibold text-[20px]">Anonymous</p>
     </div>

     <div className="my-8 px-3">
      <h1 className="text-[30px] font-semibold">Awesome</h1>
     <div className="flex">
      <div className="flex space-x-1 text-yellow-400">
      {[...Array(5)].map((_, index) => (
        <Star key={index} fill="currentColor" stroke="none" size={30} />
      ))}
    </div>
    <div className="p-2">
     <i>Aug 4 2024</i>
    </div>
      </div>
      <p>It was an awesome experience</p>
      <p className="py-4 font-semibold text-[20px]">Gabriel Dluzansky</p>
     </div>
      </div>
      <div className="flex justify-center items-center my-[5%]">
      <form
        onSubmit={handleSubmit}
        className="bg-[#e0dfdf] md:mx-[30%] my-10 rounded-lg p-4"
      >
        <h1 className="text-center text-[30px] pb-4 font-semibold">
          Send A Review
        </h1>

        {successMessage && (
          <p className="text-green-600 text-center font-semibold mb-3">
            {successMessage}
          </p>
        )}

        <div>
          <label className="pb-2">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border my-3 py-3 px-2"
            placeholder="Title"
          />
        </div>

        <div className="my-3">
          <label className="py-4">Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-lg border my-3 py-3 px-2"
            placeholder="Enter Full Name"
          />
        </div>

        <div className="my-3">
          <label className="my-3">Enter Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border my-3 rounded-lg p-2"
            cols="30"
            rows="5"
            placeholder="Enter Message"
          ></textarea>
        </div>
        <div className="my-3">
          <label className="my-3">Rating</label>
          <div className="flex pb-4 space-x-2 my-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={30}
                className={`cursor-pointer ${
                  star <= rating ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>
        </div>


        <button
          className="bg-blue-600 mb-2 w-full rounded-lg text-white p-3 hover:bg-blue-700 transition"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
    </section>
  )
}
export default Reviews