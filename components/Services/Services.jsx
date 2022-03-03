import React from "react";
import Service from "../Service/Service";
import styles from "./Services.module.scss";

const Services = () => {
  return (
    <section className={styles.container} id="services">
      <h2 className={styles.title}>My Skills</h2>
      <div className={styles.divider} />
      <Service />
      <a href="#work" className={styles.link}>
        See My Work
      </a>
    </section>
  );
};

export default Services;
