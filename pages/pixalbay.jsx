import Demos from "../components/Demos/Demos";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/MobileHeader/MobileHeader";
import Hero from "../components/Hero/Hero";
import ProjectDescription from "../components/ProjectDescription/ProjectDescription";
import React from "react";
import styles from "../styles/PixalBay.module.scss";

const info = {
  id: "#pixalbay",
  title1: "",
  title2: "PixalBay API",
  subtitle: "Fetch",
  width: 1897,
  height: 948,
  src: "/pb_0.png",
  alt: "PixalBay",
};

const images = [
  {
    id: 1,
    href: "#pb_1",
    src: "/pb_1.gif",
    width: 1898,
    height: 901,
  },
  {
    id: 2,
    href: "#pb_2",
    src: "/pb_2.gif",
    width: 1898,
    height: 901,
  },
];

const text = {
  text: 'This app demonstrates my ability to fetch data from an API. This API comes from pixabay.com. Wrote the fetch in useEffect and handled the promise with ".then". For stying and a responsive layout, I went with a css utility, tailwindcss.',
};

const repo = {
  repo: "https://github.com/Jason-Prince/image-gallery",
};

const PixalBay = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero info={info} />
      <ProjectDescription text={text} />
      <Demos images={images} repo={repo} />
      <Footer />
    </div>
  );
};

export default PixalBay;
