import './benefits.css'
import { Service1, Service2, Service3, Service4, Service5, Service6, Service7, Service8 } from "../../assets/images";

const Benefits = () => {
  return (
    <section>
      <div className=' pt-[30%] md:pt-[10%] mx-[10%] gap-7'>
        <h1 className='text-[30px] md:text-[60px] font-semibold'>Privacy Policy</h1>
      <h1 className='font-semibold text-[19px] py-3'>Payment Terms</h1>
      <hr />
      <p className='pb-5'>   – First-time clients are required to make cash payments for the remaining balance due at the end of the session. The booking fee is included in the session fee and is not an additional charge.</p>
      <h1 className='font-semibold text-[19px] py-3'>Booking & Appointment</h1>
      <hr />
      <p className='pb-5'>– To secure an appointment, a session must be booked in advance. The booking fee is a part of the session fee and is not an extra cost.</p>
      <h1 className='font-semibold text-[19px] py-3'>Professional Conduct</h1>
      <hr />
      <p className='pb-5'> – Mutual respect and dignity are paramount. Please maintain courteous and respectful communication. Inappropriate language or behavior will not be tolerated. A respectful and gentle demeanor is appreciated and will contribute to a positive experience.</p>
      <h1 className='font-semibold text-[19px] py-3'>Due Process</h1>
      <hr />
      <p className='pb-5'>– Due process is in place to ensure the safety of all parties involved. This process is designed to be efficient and secure.</p>

      <h1 className='font-semibold text-[19px] py-3'>Consent</h1>
      <hr />
      <p  className='pb-5'>   – Consent is a crucial aspect of our interaction. All activities during the session will be conducted with mutual agreement and respect.</p>
      <h1 className='font-semibold text-[19px] py-3'>Privacy & Discretion</h1>
      <hr />
      <p className='pb-9' >  – Your privacy and safety are top priorities. I am committed to maintaining a discreet and professional atmosphere to ensure the best possible experience.</p>
      
      <p className='font-semibold text-[19px] py-5'>NB :By accepting these terms, you agree to engage in a session characterized by mutual respect and professionalism. Thank you for your understanding and cooperation.</p>
      </div>
    </section>
  )
}
export default Benefits