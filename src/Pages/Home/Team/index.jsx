import React from "react";
import HeadingText from "../../../Components/HeadingText";
import styles from "./Team.module.scss";
import cn from "classnames";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsiveHead = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 7,
  },
  desktop: {
    breakpoint: { max: 3000, min: 992 },
    items: 7,
  },
  tablet: {
    breakpoint: { max: 991, min: 576 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 575, min: 0 },
    items: 3,
  },
};

const teamImg = [
    {
        img: "./team/1.png",
    },
    {
        img: "./team/2.png",
    },
    {
        img: "./team/3.png",
    },
    {
        img: "./team/4.png",
    },
    {
        img: "./team/5.png",
    },
    {
        img: "./team/6.png",
    },
    {
        img: "./team/7.png",
    },
]

const teamDetails = [
  {
    img: "./team/img.png",
    name: "Abiel Alazar",
    status: "Co Founder/Content acq Partnership",
  },
  {
    img: "./team/img.png",
    name: "Akeem Ojuko",
    status: "Co Founder/Growth",
  },
  {
    img: "./team/img.png",
    name: "Roomani Bajaj",
    status: "CTO",
  },
  {
    img: "./team/img.png",
    name: "Chaela Lcabales",
    status: "Head of marketing",
  },
  {
    img: "./team/img.png",
    name: "Shiv Kumar",
    status: "Solution Architect",
  },
  {
    img: "./team/img.png",
    name: "Andrew Fennell",
    status: "Advisor",
  },
  {
    img: "./team/img.png",
    name: "Lili Hamdan",
    status: "Advisor",
  },
  {
    img: "./team/img.png",
    name: "Erik Lundmark",
    status: "Advisor",
  },
  {
    img: "./team/img.png",
    name: "Yule Caise",
    status: "Advisor",
  },
  {
    img: "./team/img.png",
    name: "Pekka Kelkka",
    status: "Advisor",
  },
  {
    img: "./team/img.png",
    name: "Michael Terpin",
    status: "Advisor",
  },
];

const teamPartner = [
  {
    img: "./partner/6.png",
  },
  {
    img: "./partner/1.png",
  },
  {
    img: "./partner/2.png",
  },
  {
    img: "./partner/3.png",
  },
  {
    img: "./partner/4.png",
  },
  {
    img: "./partner/5.png",
  },
  {
    img: "./partner/7.png",
  },
  {
    img: "./partner/8.png",
  },
];

const Team = () => {
  return (
    <>
      <div className={cn(styles.team, "container py-5")}>
        <HeadingText
          text1="Meet Our"
          spanText="Great Team"
          pText="Introducing our team – made up of entrepreneurs,
        product managers, strategists, operators, 
        engineers and evangelists all focused on the common goal."
        />
        {/* head carousel */}
        <div className="mt-5">
          <Carousel
            responsive={responsiveHead}
            autoPlay={false}
            infinite
            showDots={false}
            arrows={false}
            itemClass={styles.headImg}
            containerClass={styles.headWrapper}
          >
            {teamImg.map((x, index) => (
                <div key={index}>
                <img src={x.img} alt="team" />
              </div>
            ))}
          </Carousel>
        </div>
        <hr className="my-5" />
        <div className={styles.teamWrap}>
          <div className="row">
            {teamDetails.map((x, index) => (
              <div className={cn("col-3", styles.col3)} key={index}>
                <div className={styles.singleTeam}>
                  <img src={x.img} alt="team" />
                  <div className={styles.txt}>
                    <h2>{x.name}</h2>
                    <p>{x.status}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={cn(styles.teamPartner, "my-5")}>
        <div className="container">
          <div className={cn(styles.row, "row")}>
            {teamPartner.map((x, index) => (
              <div className={cn(styles.col3, "col-3")} key={index}>
                <img src={x.img} alt="img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
