import Image from "next/image";
import Navbar from "./components/Navbar";
// import HeroSection from "./components/Hero";
import Hero2 from "./components/Hero2";
import Portfoliocard from "./components/card";
import TestimonialCarousel2 from "./components/Testimoni2"
import Footer from "./components/Footer";
import LargeWithNewsletter from "./components/Footer";

import Slider from 'react-slick';

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <HeroSection /> */}
      <Hero2 />

      {/* <main className="flex flex-wrap justify-center p-2">
        <div className="w-full">
          <h1 className="text-4xl font-bold text-center mt-10">Portfolio</h1>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-6">
          <Portfoliocard />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-6">
          <Portfoliocard />
        </div>
      </main> */}



<main className="flex flex-wrap justify-center p-2">
  <div className="w-full">
    <h1 className="text-4xl font-bold text-center mt-10">Portfolio</h1>
  </div>
  <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-6">
    <Portfoliocard />
  </div>
  <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-6">
    <Portfoliocard />
  </div>
  <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-6">
    <Portfoliocard />
  </div>
  <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-6">
    <Portfoliocard />
  </div>

</main>


      <h1>Testemonials</h1>



      {/* <TestimonialCarousel2 /> */}

      <LargeWithNewsletter />
    </>
  );
}
