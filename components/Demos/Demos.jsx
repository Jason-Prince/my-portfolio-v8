import React from "react";
import Thumbnail from "./Thumbnail/Thumbnail";
import styles from "./Demos.module.scss";
import { useState } from "react";

const Demos = ({ images, repo }) => {
  const [isFullScreen, setIsFullScreen] = useState(true);
  const [selectElement, setSelectElement] = useState(0);

  const handleClick = (id) => {
    setSelectElement(id);
    setIsFullScreen(!isFullScreen);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Demos</h2>

      <a className={styles.repo} href={repo.repo}>
        Github Repo
      </a>
      <div className={styles.list}>
        {images.map((image) => (
          <Thumbnail
            key={image.id}
            image={image}
            handleClick={handleClick}
            selectElement={selectElement}
            isFullScreen={isFullScreen}
          />
        ))}
      </div>
    </section>
  );
};

export default Demos;
