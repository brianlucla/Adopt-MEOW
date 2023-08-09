import React from "react";

const Banner = ({ optionName }) => {
  return (
    <div className="banner">
      <h2 className="text-white text-center p-5">{optionName}</h2>
    </div>
  );
};

export default Banner;
