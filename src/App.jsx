import React, { useRef } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/NavBar";
import ProductList from "./components/ProductList";
import AccessoriesList from "./components/AccessoriesList";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  // Create refs for each section
  const heroRef = useRef(null);
  const productsRef = useRef(null);
  const accessoriesRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle scrolling to sections
  const scrollToSection = (section) => {
    if (section === "hero") {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "products") {
      productsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "accessories") {
      accessoriesRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact") {
      contactRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Pass scrollToSection to Navbar */}
      <Navbar scrollToSection={scrollToSection} />

      {/* Sections with refs */}
      <div ref={heroRef}>
        <HeroSection />
      </div>
      <div ref={productsRef}>
        <ProductList />
      </div>
      <div ref={accessoriesRef}>
        <AccessoriesList />
      </div>
      <div ref={contactRef}>
        <ContactForm />
      </div>

      <Footer />
    </>
  );
}

export default App;
