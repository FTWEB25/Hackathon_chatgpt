import React from "react";
import ButtonPrimary from "./ButtonPrimary";
import Feature from "./Feature";
import { Link } from "react-router-dom";
import image from "./images/Illustration1.webp";
const Hero = () => {
  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <div className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16">
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
            Ace the Interview: Your Personal <strong>Trainer</strong>.
          </h1>
          <p className="text-black-500 mt-4 mb-6">
            "InterviewIQ is your comprehensive interview preparation platform.
            Build confidence, acquire essential skills, and ace interviews with
            ease. Take the first step towards your dream career today."
          </p>
          <Link to="/interview">
            <ButtonPrimary>Get Started</ButtonPrimary>
          </Link>
        </div>
        <div className="flex w-full">
          <div className="h-full w-full">
            <img
              src={image}
              alt="VPN Illustrasi"
              quality={100}
              width={612}
              height={383}
              layout="responsive"
            />
          </div>
        </div>
      </div>

      <div
        className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
        style={{ filter: "blur(114px)" }}
      ></div>
      <Feature />
    </div>
  );
};

export default Hero;
