import React from "react";
import styles from "./Introduction.module.scss";
import Image from "next/image";
import Hero from "../Hero/Hero";

const info = {
  title1: "Hi, I am",
  title2: "Jason Prince",
  subtitle: "front-end dev",
  width: 700,
  height: 700,
  src: "/me.jpg",
  alt: "Jason Prince",
};

const Introduction = () => {
  return <Hero info={info} />;
};

export default Introduction;
