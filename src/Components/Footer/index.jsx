import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Footer.module.scss";

const footerTxt = [
  {
    head: "Products",
    list: [
      {
        txt: "Script TV",
        url: "#",
      },
      {
        txt: "Script Glass",
        url: "#",
      },
      {
        txt: "MarketPlace",
        url: "#",
      },
      {
        txt: "DStorage",
        url: "#",
      },
      {
        txt: "Script Blockchain",
        url: "#",
      },
      {
        txt: "sADs",
        url: "#",
      },
    ],
  },
  {
    head: "How it works",
    list: [
      {
        txt: "ScriptGLASS",
        url: "#",
      },
      {
        txt: "Script - how to earn",
        url: "#",
      },
    ],
  },
  {
    head: "Community",
    list: [
      {
        txt: "Discord",
        url: "#",
      },
      {
        txt: "Telegram",
        url: "#",
      },
      {
        txt: "Twitter",
        url: "#",
      },
      {
        txt: "Blog",
        url: "#",
      },
      {
        txt: "Facebook",
        url: "#",
      },
      {
        txt: "Instagram",
        url: "#",
      },
      {
        txt: "Github",
        url: "#",
      },
    ],
  },
  {
    head: "About script.tv",
    list: [
      {
        txt: "Script TV",
        url: "#",
      },
      {
        txt: "Script Glass",
        url: "#",
      },
      {
        txt: "MarketPlace",
        url: "#",
      },
      {
        txt: "DStorage",
        url: "#",
      },
      {
        txt: "Script Blockchain",
        url: "#",
      },
      {
        txt: "sADs",
        url: "#",
      },
    ],
  },
  {
    head: "Privacy",
    list: [
      {
        txt: "Trams of Service",
        url: "#",
      },
      {
        txt: "Privacy Policy",
        url: "#",
      },
      {
        txt: "Cookies Policy",
        url: "#",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className="container my-5 pt-5">
        <div className="row">
          {footerTxt.map((x, index) => (
            <div className={styles.col5} key={index}>
              <h1>{x.head}</h1>
              <ul>
                {x.list.map((y, yIndex) => (
                  <li key={yIndex}>
                    <NavLink to={y.url}>{y.txt}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.line}></div>
        <div className={styles.footerBottom}>
          <div className={styles.left}>
            <NavLink to="#">
              <img src="./logo/logo-light.png" alt="logo" />
            </NavLink>
            <p>contact@script.tv</p>
          </div>
          <div className={styles.right}>
            <p>Copyright &copy; 2022 script.tv</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
