import React from "react";
import styles from "./Footer.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <footer className={styles.container}>
      <a href="mailto:jasoncprince@gmail.com" className={styles.email}>
        jasoncprince@gmail.com
      </a>
      <div className={styles.list}>
        <div className={styles.social}>
          <Link className={styles.item} href="https://github.com/Jason-Prince">
            <a className={styles.icon} id="github">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </Link>
        </div>
        <div className={styles.social}>
          <Link
            className={styles.item}
            href="https://www.linkedin.com/in/jason-c-prince/"
          >
            <a className={styles.icon}>
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
