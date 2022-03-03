import Demos from "../components/Demos/Demos";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/MobileHeader/MobileHeader";
import Hero from "../components/Hero/Hero";
import ProjectDescription from "../components/ProjectDescription/ProjectDescription";
import React from "react";
import styles from "../styles/ReciepeEditor.module.scss";

const info = {
  id: "#reciepeEditor",
  title1: "",
  title2: "Reciepe Editor",
  subtitle: "CRUD",
  width: 1246,
  height: 916,
  src: "/reciepeEditor.png",
  alt: "Reciepe Editor",
};

const images = [
  {
    id: 1,
    href: "#re_1",
    src: "/re_1.gif",
    width: 1898,
    height: 901,
  },
  {
    id: 2,
    href: "#re_2",
    src: "/re_2.gif",
    width: 1898,
    height: 901,
  },
  {
    id: 3,
    href: "#re_3",
    src: "/re_3.gif",
    width: 1898,
    height: 901,
  },
];

const text = {
  text: "This app demonstrates my ability to create, read, update and delete within React. State management used useState and is saved to local storage using useEffect.",
};

const repo = {
  repo: "https://github.com/Jason-Prince/Cooking-With-React",
};

const ReciepeEditor = () => {
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

export default ReciepeEditor;
