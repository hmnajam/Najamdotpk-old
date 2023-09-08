import Image from "next/image";
import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <h1>Portfolio</h1>
      <h1>Testemonials</h1>

    </>
  );
}
