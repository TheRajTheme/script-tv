import React from 'react';
import styles from './Hero.module.scss'
import { FiArrowRight } from "react-icons/fi";
import { ImStarFull, ImStarHalf } from "react-icons/im";
import { NavLink } from "react-router-dom";

const Hero = () => {
    return (
        <>
            <div className={styles.hero}>
        <div className="container">
          <div className={styles.row}>
            <div className={styles.heroTxt}>
              <h3>Powering Live TV and Film for the next generation.</h3>
              <h1>
                Watch To Earn Live TV Decentralised On Chain,{" "}
                <span>For Free</span>
              </h1>
              <p>
                24/7 live television on chain. Earn rewards whilst you watch
                through gameFi and socialFi elements.Join and start earning in
                minutes! Built on Script infrastructure, on Script blockchain.
              </p>
              <div className={styles.heroBtn}>
                <NavLink to="#" className="button">
                  MarketPlace
                </NavLink>
                <NavLink to="#" className="button dark-btn">
                  Launch app <FiArrowRight />{" "}
                </NavLink>
              </div>
              <div className={styles.heroSign}>
                <span>Already using script.tv?</span>
                <NavLink to="#">Sign in</NavLink>
              </div>
              <div className={styles.heroUserRating}>
                <img src="./home/users.png" alt="users" />
                <div className={styles.user}>
                  <h3>600+</h3>
                  <p>Happy Users</p>
                </div>
                <div className={styles.separate}>|</div>
                <div className={styles.rating}>
                  <h3>4.9/5</h3>
                  <div className={styles.stars}>
                    <div className={styles.star}>
                      <ImStarFull />
                      <ImStarFull />
                      <ImStarFull />
                      <ImStarFull />
                      <ImStarHalf />
                    </div>
                    <p>Rating</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.heroImg}>
              <img src="./home/hero.png" alt="hero" />
            </div>
          </div>
        </div>
      </div>
        </>
    );
};

export default Hero;