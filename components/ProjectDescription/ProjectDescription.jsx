import React from "react";
import styles from "./ProjectDescription.module.scss";

const ProjectDescription = ({ text }) => {
  return (
    <div className={styles.typography}>
      <p>{text.text}</p>
    </div>
  );
};

export default ProjectDescription;
