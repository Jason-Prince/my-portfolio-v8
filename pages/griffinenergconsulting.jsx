import Demos from "../components/Demos/Demos";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/MobileHeader/MobileHeader";
import Hero from "../components/Hero/Hero";
import ProjectDescription from "../components/ProjectDescription/ProjectDescription";
import React from "react";
import styles from "../styles/GriffinEnerGConsulting.module.scss";

const info = {
  id: "#griffinenergconsulting",
  title1: "",
  title2: "Griffin EnerG Consulting",
  subtitle: "next.js",
  width: 1255,
  height: 900,
  src: "/Griffin.png",
  alt: "Griffin EnerG Consulting home page",
};

const images = [
  {
    id: 1,
    href: "#gec_1",
    src: "/gec_1.gif",
    width: 1898,
    height: 903,
  },
  {
    id: 2,
    href: "#gec_2",
    src: "/gec_2.gif",
    width: 1898,
    height: 903,
  },
  {
    id: 3,
    href: "#gec_3",
    src: "/gec_3.gif",
    width: 1898,
    height: 903,
  },
  {
    id: 4,
    href: "#gec_4",
    src: "/gec_4.gif",
    width: 1898,
    height: 903,
  },
];

const text = {
  text: "Responsive website for Griffin EnerG Consulting. Created using NextJS and styled with tailwindcss.",
};

const repo = {
  repo: "https://github.com/Jason-Prince/griffin-tailwind-fa",
};

const GriffinEnerGConsulting = () => {
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

export default GriffinEnerGConsulting;
