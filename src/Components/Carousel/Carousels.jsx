import React from "react";
import { Carousel } from "react-responsive-carousel";
import classes from "./Carousel.module.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { img } from "./img/data";
function Carousels() {
  return (
    <div>
      <Carousel
        className={classes.carousel}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
      >
        {img.map((images, i) => {
          return <img src={images} alt="" key={i} />;
        })}
      </Carousel>

      <div className={classes.hero__img}></div>
    </div>
  );
}

export default Carousels;
