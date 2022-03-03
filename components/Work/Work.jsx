import Gallary from "../Gallary/Gallary";
import Image from "next/image";
import Link from "next/link";
import styles from "./Work.module.scss";

const images = [
  {
    href: "/griffinenergconsulting",
    src: "/gec_0.png",
    width: 1225,
    height: 903,
  },
  {
    href: "/latitudestudy",
    src: "/ls_0.png",
    width: 1926,
    height: 943,
  },
  {
    href: "/reciepeeditor",
    src: "/re_0.png",
    width: 1246,
    height: 916,
  },
  {
    href: "/pixalbay",
    src: "/pb_0.png",
    width: 1897,
    height: 948,
  },
];
const section = {
  title: "My Work",
  subtitle: "A selection of my range of work",
};

const Work = () => {
  return <Gallary images={images} section={section} />;
};

export default Work;
