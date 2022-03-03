import React from "react";
import styles from "./Service.module.scss";

const services = [
  {
    title: "Front-End",
    body: "HTML, CSS, Sass, Styled Components, CSS Modules, JavaScript, Material UI, Bootstrap, TailwindCSS, React, NextJS",
  },
  {
    title: "Back-End",
    body: "Python, Django, NodeJS, SQLite3, MySQL, MongoDB",
  },
  {
    title: "Others",
    body: "VSCode, React, NextJS, Netlify, Heroku, Vercel, Git, GitHub",
  },
];

const Service = () => {
  return (
    <div className={styles.container}>
      {services.map(({ title, body }, index) => (
        <div key={title} className={styles.service}>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.body}>{body}</p>
        </div>
      ))}
    </div>
  );
};

export default Service;
