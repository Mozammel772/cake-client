import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import img1 from "../../../assets/Banner/cake5.jpg";
import img2 from "../../../assets/Banner/cake6.jpg";
import img3 from "../../../assets/Banner/cake7.jpg";
import img4 from "../../../assets/Banner/cake8.jpg";
const Banner = () => {
  return (
    <div className="mt-20 relative ">
      <Carousel>
        <div>
          <img src={img1} />
        </div>
        <div>
          <img src={img2} />
        </div>
        <div>
          <img className="rounded-sm" src={img3} />
        </div>
        <div>
          <img src={img4} />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
