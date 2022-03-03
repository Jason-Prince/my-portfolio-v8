import Demos from "../components/Demos/Demos";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/MobileHeader/MobileHeader";
import Hero from "../components/Hero/Hero";
import ProjectDescription from "../components/ProjectDescription/ProjectDescription";
import React from "react";
import styles from "../styles/LatitudeStudy.module.scss";

const info = {
  id: "#latitudestudy",
  title1: "",
  title2: "Latitude Study",
  subtitle: "Javascript",
  width: 1926,
  height: 943,
  src: "/latitude-study.png",
  alt: "Latitude Study",
};

const images = [
  {
    id: 1,
    href: "#ls_1",
    src: "/ls_1.gif",
    width: 1898,
    height: 901,
  },
  {
    id: 2,
    href: "#ls_2",
    src: "/ls_2.gif",
    width: 1898,
    height: 901,
  },
  {
    id: 3,
    href: "#ls_3",
    src: "/ls_3.gif",
    width: 1898,
    height: 901,
  },
  {
    id: 4,
    href: "#ls_4",
    src: "/ls_4.gif",
    width: 1898,
    height: 901,
  },
];

const text = {
  text: "Griffin EnerG Consulting requested I make a parallel coordinates chart that demonstrates different approaches to designing a building to be energy efficient. The chart is written in Python and uses D3. I converted it to HTML and JavaScript for styling purposes. Client asked that I not share the repo.",
};

const repo = {
  repo: "#",
};

const Latitudestudy = () => {
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

export default Latitudestudy;
