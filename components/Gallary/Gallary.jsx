import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./Gallary.module.scss";

const Gallary = ({ section, images }) => {
  return (
    <section className={styles.container} id="work">
      <h2 className={styles.title}>{section.title}</h2>
      <p className={styles.subtitle}>{section.subtitle}</p>
      <div className={styles.list}>
        {images.map(({ href, src, width, height, id }, index) => (
          <div key={index} className={styles.item}>
            <Link href={href}>
              <a className={styles.link}>
                <Image
                  width={width}
                  height={height}
                  src={src}
                  alt="image thumbnail"
                />
              </a>
            </Link>
            <div className={styles.overlay}>
              <Link href="#_">
                <a id={id}>
                  <Image
                    width={width}
                    height={height}
                    src={src}
                    alt="image fullscreen"
                  />
                </a>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallary;
