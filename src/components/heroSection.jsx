import React from "react";
import Image from "../assets/mainImage.png";

function HeroSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        {/* Left Section (Text) */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl font-bold mb-4">
            Best Accessories <br /> & New iPhones
          </h2>
          <p className="text-gray-600 mb-6">
            Latest iPhone collection with best and high-quality accessories
          </p>
          <button className="bg-orange-400 text-white py-2 px-6 rounded hover:bg-orange-500">
            Shop Now
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="md:w-1/2">
          <img
            src={Image}
            alt="iPhones"
            className="mx-auto md:max-w-none max-w-[80%] sm:max-w-[90%] lg:max-w-[100%] transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
