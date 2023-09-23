import Navbar from "../components/Navbar";
import Contact from "../components/contact-form";

export default function Page() {
    return (
      <div>
        <Navbar />
        <h1>Welcome to My Next.js Page</h1>
        <p>This is a basic Next.js page.</p>
        <Contact />
      </div>
    );
  }