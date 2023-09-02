import React, { useMemo } from "react";
import getScrollAnimation from "./getScrollAnimation";
import image from "./images/Illustration2.webp";
const features = [
  "Mock Interviews.",
  "Question Bank.",
  "Feedback and Evaluation",
  "Interview Preparation Guides.",
  "Mock Assessment Centers.",
  "Live Interview Coaching.",
];

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 sm:px-4 lg:px-6 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <div className="flex w-full justify-end">
          <div className="h-full w-full p-4" variants={scrollAnimation}>
            <img
              src={image}
              alt="VPN Illustrasi"
              layout="responsive"
              quality={100}
              height={414}
              width={508}
            />
          </div>
        </div>
        <div>
          <div className="flex flex-col items-end justify-center ml-auto w-full lg:w-10/12">
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              We Provide Many Features You Can Use
            </h3>
            <p className="my-2 text-black-500">
              You can explore the features that we provide with fun and have
              their own functions each feature.
            </p>
            <ul className="text-black-500 self-start list-inside ml-8">
              {features.map((feature, index) => (
                <li
                  className="relative circle-check custom-list text-left"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
