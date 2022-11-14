import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { CgMenuRound } from "react-icons/cg";
import cn from "classnames";

const menus = [
  {
    title: "Products",
    icon: "arrow-down",
  },
  {
    title: "How It Works",
    icon: "arrow-down",
  },
  {
    title: "Community",
  },
  {
    title: "Explorer",
  },
  {
    title: "Wallet",
  },
  {
    title: "Docs",
  },
];

const Header = () => {
  const [isMblMenu, setIsMblMenu] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [isSticky, setIsSticky] = useState(false)

  const handleResize = () => {
    window.innerWidth >= 992 ? setIsMblMenu(false) : setIsMblMenu(true);
  };

  const handleScroll = () => {
    window.pageYOffset >= 50 ? setIsSticky(true) : setIsSticky(false)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll)
    window.innerWidth >= 992 ? setIsMblMenu(false) : setIsMblMenu(true);
  }, [setIsMblMenu]);

  return (
    <div className={cn(styles.nav, {[styles.sticky] : isSticky})}>
      <div className="container">
        <div className={styles.navWrapper}>
          <div className={styles.logo}>
            <img src="./logo/logo-light.png" alt="logo" />
          </div>
          <div className={styles.menus}>
          <ul
                className={cn(
                  styles.menu,
                  { [styles.mblMenu]: isMblMenu },
                  { [styles.active]: isMenuActive }
                )}
              >
                {menus.map((x, index) => (
                  <li key={index}>{x.title}</li>
                ))}
              </ul>
            <div className={styles.signInBtn}>
              <button className="button small-btn">Sign In</button>
            </div>
            <button
              onClick={() => {
                setIsMenuActive(!isMenuActive);
              }}
              className={cn(styles.hamburger, { [styles.active]: isMblMenu })}
            >
              <CgMenuRound />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
