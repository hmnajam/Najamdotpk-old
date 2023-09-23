import Navbar from "../components/Navbar";
import ThreeTierPricing from "../components/pricing";
import ThreeTierPricingHorizontal from "../components/pricing2";

export default function Page() {
    return (
      <div>
        <Navbar />
        <h1>This is a Heading.</h1>
        <p>This is a paragraph.</p>
        <ThreeTierPricing />
        <ThreeTierPricingHorizontal />
      </div>
    );
  }