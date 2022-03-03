import React from "react";
import Image from "next/image";
import styles from "./Hero.module.scss";

const Hero = ({ info }) => {
  return (
    <section className={styles.container} id={info.id}>
      <h1 className={styles.title}>
        {info.title1} <strong className={styles.strong}>{info.title2}</strong>
      </h1>
      <p className={styles.subtitle}>{info.subtitle}</p>
      <div className={styles.img}>
        <Image
          width={info.width}
          height={info.height}
          src={info.src}
          alt={info.alt}
        />
      </div>
    </section>
  );
};

export default Hero;
