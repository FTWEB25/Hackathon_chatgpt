import React from "react";

const ButtonOutline = ({ children }) => {
  return (
    <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:text-white-500 hover:bg-orange-500  trasition-all hover:shadow-orange-600 ">
      {" "}
      {children}
    </button>
  );
};

export default ButtonOutline;
