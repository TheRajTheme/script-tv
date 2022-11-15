import React from "react";
import styles from "./TheRoadmap.module.scss";
import HeadingText from "../../../Components/HeadingText";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 991, min: 576 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 575, min: 0 },
    items: 1,
  },
};

const features = [
  {
    head: "Q1",
    year: 2022,
    list: ["lorem ipsum dolor sit", "lorem", "lorem ipsum", "lorem ipsum dolor"],
  },
  {
    head: "Q2",
    year: 2022,
    list: ["lorem ipsum", "lorem ipsum dolor Sit", "lorem ipsum dolor"],
  },
  {
    head: "Q3",
    year: 2022,
    list: [
      "Mobile Application",
      "Partnerships",
      "IceTea Labs (Polygon) incubator program",
      "Donation, Tips, Advertisements, Voting System, Advanced Moderation",
    ],
  },
  {
    head: "Q4",
    year: 2022,
    list: [
      "Fundraising",
      "Cross-chain support",
      "Stream-to-Earn Incentives",
      "Watch-and-Earn Incentives",
      "User levels",
      "NFTs sale",
      "Open Broadcasting Software (OBS) Integration",
    ],
  },
  {
    head: "Future",
    year: 2025,
    list: [
      "Token launch",
      "Defi",
      "Metaverse integration",
      "NFT marketplace",
      "Subscriptions",
    ],
  },
];

const TheRoadmap = () => {
  return (
    <div className={styles.roadmap}>
      <div className="container my-5">
        <HeadingText
          text1="The"
          spanText="Roadmap"
          pText="Roadmap items listed below are susceptible to change based on dynamics in the market and feedback and proposal from the Gummys TV community.

          "
        />

        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite
          showDots={false}
          arrows
          itemClass={styles.roadmapItem}
          containerClass={styles.itemsWrapper}
        >
          {features.map((x, index) => (
            <div key={index}>
              <div className={styles.head}>
                <h1>{x.head}</h1>
                <h3>{x.year}</h3>
              </div>
              <ul className={styles.list}>
                {x.list.map((y, yIndex) => (
                    <li key={yIndex}>{y}</li>
                ))}
              </ul>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TheRoadmap;
