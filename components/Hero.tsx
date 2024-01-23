"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find your boat for Lake Norman today.
        </h1>

        <p className="hero__subtitle">
          We have the largest selection of boats in Lake Norman. Pick your day and boat and will meet you at the Ramsey Creek Park. We offer both rentals and tours.
        </p>

        <CustomButton
          title="Explore Boats"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/heroo.png" alt="hero" fill className="object-contain" priority />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
