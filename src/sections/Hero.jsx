import React from "react";
import bg_img from "../assets/New folder/imgi_159_Mobile_Hero_Banner_Image_05_b08d3ba4-eddf-4c9e-b5c7-a18e2e6556ea.jpeg";

const Hero = () => {
  return (
    <div className="relative h-screen w-full ">
      <img
        src={bg_img}
        alt=""
        className="h-screen w-[] absolute object-cover"
      />
      <div className="hero-text"></div>
      <div className="cerousel"></div>
    </div>
  );
};

export default Hero;
