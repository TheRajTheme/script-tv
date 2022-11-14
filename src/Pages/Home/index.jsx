import React from "react";
import PartnerCarousel from "./PartnerCarousel";
import Experience from "./Experience";
import Betting from "./Betting";
import Hero from "./Hero";
import Infrastructure from "./Infrastructure";
import Team from "./Team";

const Home = () => {
  return (
    <>
      <Hero />
      <PartnerCarousel />
      <Experience />
      <Betting />
      <Infrastructure />
      <Team />
    </>
  );
};

export default Home;
