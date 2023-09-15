import Navbar from "./components/Navbar";
import HeroSection from "./components/Hero";
import Portfoliocard from "./components/card";
import LargeWithNewsletter from "./components/Footer";
import Script from "next/script";
import Router from "next/router";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <div className="container">
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
    </div>

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
          <h1 className="text-4xl font-bold mt-10">Portfolio</h1>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-6">
          <Portfoliocard />
        </div>
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-6">
          <Portfoliocard />
        </div>
        {/* <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-6">
    <Portfoliocard />
  </div>
  <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/
  2 p-6">
    <Portfoliocard />
  </div> */}

        <div className="w-full">
          <h1 className="text-4xl font-bold mt-10">Testemonials</h1>
        </div>

        <div className="w-full">
          <h1 className="text-4xl font-bold mt-10">Blog</h1>
        </div>

        <div className="w-full">
          <h1 className="text-4xl font-bold mt-10">About me</h1>
        </div>
      </main>

      <LargeWithNewsletter />
    </>
  );
}
