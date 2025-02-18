import AboutUs from "../../components/AboutUs";
import Benefits from "../../components/Benefits";
import CardBenefits from "../../components/CardBenefits";
import Features from "../../components/Features";
import Hero from "../../components/Hero";
import Newsletter from "../../components/Newsletter";
import Partners from "../../components/Partners";
import Testimonials from "../../components/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Partners />
      <Features />
   
      <CardBenefits />
      <AboutUs />
      <Testimonials />
    
    </>
  );
};

export default Home;
