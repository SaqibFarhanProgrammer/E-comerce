import React from "react";
import bg_img from "../assets/New folder//imgi_197_Desktop_Hero_Banner_Image_01_3a20b770-f658-4fe4-a04e-94638e824d34.jpeg";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <img
        src={bg_img}
        alt=""
        className="h-screen w-[] absolute object-cover"
      />
      <div className="hero-text"></div>
      <div className="cerousel"></div>

      <div className="circle absolute top-150 left-0 blur-[100px] h-[40vh] w-[100vw]  bg-black "></div>
      <div className="circle absolute top-150 left-0 blur-[100px] h-[40vh] w-[100vw]  bg-black "></div>
    </div>
  );
};

export default Hero;
