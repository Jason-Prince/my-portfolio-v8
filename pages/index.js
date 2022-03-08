import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Head from "next/head";
import Introduction from "../components/Introduction/Introduction";
import MobileHeader from "../components/Header/MobileHeader/MobileHeader";
import Services from "../components/Services/Services";
import Work from "../components/Work/Work";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jason Prince Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MobileHeader />
      <Introduction />
      <Services />
      <About />
      <Work />
      <Footer />
    </div>
  );
}
