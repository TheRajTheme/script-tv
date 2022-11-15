import React from "react";
import HeadingText from "../../../Components/HeadingText";
import styles from "./Community.module.scss";
import { TfiArrowTopRight } from "react-icons/tfi";
import { FaDiscord, FaTelegramPlane, FaGithub, FaFacebook, FaBlogger, FaTwitter } from "react-icons/fa";
import {RiInstagramFill} from 'react-icons/ri';
import { NavLink } from "react-router-dom";

const comCardInfo = [
  {
    icon: <FaDiscord />,
    text: "Discord",
    upSign: <TfiArrowTopRight />,
    url: "#",
  },
  {
    icon: <FaTelegramPlane />,
    text: "Telegram",
    upSign: <TfiArrowTopRight />,
    url: "#",
  },
  {
    icon: <FaTwitter />,
    text: "Twitter",
    upSign: <TfiArrowTopRight />,
    url: "#",
  },
  {
    icon: <FaBlogger />,
    text: "Blog",
    upSign: <TfiArrowTopRight />,
    url: "#",
  },
  {
    icon: <FaFacebook />,
    text: "Facebook",
    upSign: <TfiArrowTopRight />,
    url: "#",
  },
  {
    icon: <RiInstagramFill />,
    text: "Instagram",
    upSign: <TfiArrowTopRight />,
    url: "#",
  },
  {
    icon: <FaGithub />,
    text: "Github",
    upSign: <TfiArrowTopRight />,
    url: "#",
  },
];

const Community = () => {
  return (
    <div className={styles.community}>
      <div className="container my-5">
        <div className="row mt-5">
          <div className={styles.col4}>
            <HeadingText
              text1="Join our"
              spanText="community"
              pText="Be part of a growing community of builders,users, and
                         creators on  Script tv paving the way for a more
                         interoperable crypto ecosystem."
              className={styles.headingText}
            />
            <div className={styles.imgWrap}>
              <img src="./home/community.png" alt="community" />
            </div>
          </div>
          <div className={styles.col6}>
            <div className={styles.comWrap}>
              {comCardInfo.map((x, index) => (
                <NavLink to={x.url} key={index} className={styles.comCard}>
                  <div className={styles.icon}>{x.icon}</div>
                  <div className={styles.txt}>
                    <h2>{x.text}</h2>
                    <span>{x.upSign}</span>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
