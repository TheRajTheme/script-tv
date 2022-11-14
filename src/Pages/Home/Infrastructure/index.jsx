import React from "react";
import styles from "./Infrastructure.module.scss";
import cn from "classnames";
import HeadingText from "../../../Components/HeadingText";
import { NavLink } from "react-router-dom";

const infraCard = [
  {
    head: "Web3 Video API",
    text: "Lowe youe cost to encode,store and deliver video",
    url: "#",
    linkTxt: "Learn more",
    cardNo: "one",
  },
  {
    head: "Enterprise Validators",
    text: "Join global leaders to secure and govern theta network",
    url: "#",
    linkTxt: "Learn more",
    cardNo: "two",
  },
  {
    head: "Global Edge Network",
    text: "Share bandwidth, storage and computing to earn rewards",
    url: "#",
    linkTxt: "Learn more",
    cardNo: "three",
  },
  {
    head: "NFTs with DRM",
    text: "Monetize your content and IP secure with digital rights",
    url: "#",
    linkTxt: "Learn more",
    cardNo: "four",
  },
];

const Infrastructure = () => {
  return (
    <div className={cn(styles.infra, "py-5")}>
      <HeadingText text1="Script Tv" spanText="Video" text2="Infrastructure" />
      <div className={cn(styles.infraWrap, "mt-5")}>
        <div className={styles.imgWrap}>
          <img src="./home/infrastructure.png" alt="infra" />
          <div className={styles.imgTxt}>
            <h3>Metachain</h3>
            <p>Customize Highly Scable blockchain for your web3 Business</p>
            <NavLink to="#">Learn more</NavLink>
          </div>
          {infraCard.map((x, index) => (
            <div className={styles.infraCard} key={index}>
              <h2>{x.head}</h2>
              <p> {x.text} </p>
              <NavLink to={x.url}> {x.linkTxt} </NavLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
