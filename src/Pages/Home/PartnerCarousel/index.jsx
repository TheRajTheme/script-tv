import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./PartnerCarousel.module.scss";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 991, min: 576 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 575, min: 0 },
    items: 2,
  },
};

const partnerIcon = [
  {
    img: './partner/1.png',
  },
  {
    img: './partner/2.png',
  },
  {
    img: './partner/3.png',
  },
  {
    img: './partner/4.png',
  },
  {
    img: './partner/5.png',
  },
]

const PartnerCarousel = () => {
  return (
    <div className={styles.partnerCarousel}>
      <Carousel
       responsive={responsive}
       autoPlay
       infinite
       showDots={false}
       arrows={false}
       itemClass={styles.itemsImg}
       containerClass={styles.itemsWrapper}
       >
        {partnerIcon.map((x, index) => (
          <div key={index}>
          <img src={x.img} alt="" />
      </div>
        ))}
      </Carousel>
      ;
    </div>
  );
};

export default PartnerCarousel;
