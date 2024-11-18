import React from "react";

const Caketittle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mx-auto my-10">
      <p className="text-orange-600 text-[100%] font-mono ">--- {heading} ---</p>
      <div className="divider w-4/12 mx-auto "></div>
      <h3 className="text-4xl uppercase font-bold font-mono">{subHeading}</h3>
      <div className="divider w-4/12 mx-auto "></div>
    </div>
  );
};

export default Caketittle;
