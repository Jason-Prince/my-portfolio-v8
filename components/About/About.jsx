import React from "react";
import Image from "next/image";
import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>Who I am</h2>

      <p className={styles.subtitle}>Front-End Developer based in Utah</p>
      <div className={styles.img}>
        <Image
          width={2778}
          height={3600}
          src="/jason2021.jpg"
          alt="Jason Prince smiling"
        />
      </div>
      <div className={styles.body}>
        <p>
          In March of 2019, I enrolled at Bloom Institute of Technology
          (formerly Lambda School) for their 9-month Full Stack Web Development
          course. I&#39;ve worked on several side projects that I&#39;ve been
          paid to do. Currently looking for employment as a front-end web
          developer.
        </p>
      </div>
    </section>
  );
};

export default About;
