import Demos from "../components/Demos/Demos";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/MobileHeader/MobileHeader";
import Hero from "../components/Hero/Hero";
import ProjectDescription from "../components/ProjectDescription/ProjectDescription";
import React from "react";
import styles from "../styles/GriffinEnerGConsulting.module.scss";

const info = {
  id: "#contacts",
  title1: "",
  title2: "Contacts",
  subtitle: "CRUD",
  width: 1915,
  height: 879,
  src: "/c_0.png",
  alt: "contacts home page",
};

const images = [
  {
    id: 1,
    href: "#c_1",
    src: "/c_1.gif",
    width: 1898,
    height: 903,
  },
];

const text = {
  text: "App demonstrating my ability to create, read, update and delete using React Hooks.",
};

const repo = {
  repo: "https://github.com/Jason-Prince/contacts",
};

const Contacts = () => {
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

export default Contacts;
