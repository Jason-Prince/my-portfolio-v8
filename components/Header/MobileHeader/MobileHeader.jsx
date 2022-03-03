import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import navLinks from "../navLinks";
import styles from "./MobileHeader.module.scss";

const MobileHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log("isMenuOpen: ", isMenuOpen);
  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className={styles.container}>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <Image
            width={456}
            height={100}
            src="/jason_logo_white.png"
            alt="..."
          />
        </Link>
      </div>
      <div className={styles.menutoggle} onClick={handleMenu}>
        <div
          className={`${isMenuOpen ? styles.hamburgerX : styles.hamburger}`}
        ></div>
      </div>
      <nav className={styles.nav}>
        <ul className={`${isMenuOpen ? styles.list__down : styles.list__up}`}>
          {navLinks.map(({ link, name }, index) => (
            <Link href={link} key={index} className={styles.item}>
              <a className={styles.anchor} onClick={handleMenu}>
                {name}
              </a>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default MobileHeader;
