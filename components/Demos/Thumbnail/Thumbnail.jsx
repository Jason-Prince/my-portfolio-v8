import Image from "next/image";
import React from "react";
import styles from "./Thumbnail.module.scss";

const Thumbnail = ({ image, handleClick, selectElement, isFullScreen }) => {
  return (
    <div
      onClick={() => handleClick(image.id)}
      className={
        selectElement == image.id && !isFullScreen
          ? styles.fullscreen
          : styles.thumbnail
      }
    >
      <Image
        width={image.width}
        height={image.height}
        alt="..."
        src={image.src}
        className={styles.img}
      />
    </div>
  );
};

export default Thumbnail;
