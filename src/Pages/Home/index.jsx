import React from "react";
import PartnerCarousel from "./PartnerCarousel";
import Experience from "./Experience";
import Betting from "./Betting";
import Hero from "./Hero";
import Infrastructure from "./Infrastructure";
import Team from "./Team";
import TheRoadmap from "./TheRoadmap";
import Community from "./Community";
import Connect from "./Connect";

const Home = () => {
  return (
    <>
      <Hero />
      <PartnerCarousel />
      <Experience />
      <Betting />
      <Infrastructure />
      <Team />
      <TheRoadmap />
      <Community />
      <Connect />
    </>
  );
};

export default Home;
