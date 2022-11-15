import React from "react";
import styles from "./Connect.module.scss";
import HeadingText from "../../../Components/HeadingText";
import { NavLink } from "react-router-dom";
import { TfiArrowTopRight } from "react-icons/tfi";
import { FiArrowRight } from "react-icons/fi";
import cn from 'classnames'

const Connect = () => {
  return (
    <div className={styles.connect}>
      <div className="container my-5">
        <div className="row mt-5">
          <div className="col-6 mt-5">
            <div className={styles.start}>
              <HeadingText
                spanText="Start in"
                text2="Seconds"
                className={styles.headingText}
              />
            </div>
          </div>
          <div className="col-6 mt-5">
            <div className={styles.connectTxt}>
              <p>
                Connect your <span>Crypto wallet</span> to start using the app in seconds. <span>No registration Needed.</span>
              </p>
              <p>
                Trade top cryptocurrencies with up to <span>30x leverage directly from your privet wallet.</span>
              </p>
              <NavLink to="#">
                <span>Learn how to start</span>
                <span className={styles.sign}>
                  <TfiArrowTopRight />
                </span>
              </NavLink>
              <NavLink to="#" className={cn(styles.lunch, "button")}>
                Lunch App
                <FiArrowRight />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
