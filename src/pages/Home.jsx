import React from "react";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import LogoSlider from "../components/LogoSlider";
import Testimonials from "../components/Testimonials";
import Labs from "../components/Labs";
import Features from "../components/Features";

const Home = () => {
  return (
    <div>
      <div className="my-8">
        <Banner />
      </div>
      <div className="my-8">
        <Features />
      </div>
      <div className="my-8">
        <Labs />
      </div>

      <div className="my-8">
        <LogoSlider />
      </div>
      <div className="my-8">
        <Testimonials />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
