import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
import Typography from "@/components/Typography"


export default function Home() {
  return (
    <>
    <MenuBar/>
      <main className={`${styles.main}`}>
      <h2>Logos</h2>
      <h2>Colours</h2>
      <Typography/>
      <h2>Layout</h2>
      <h2>Iconography</h2>
       <div><h1>Sqweeeeee</h1></div>

      </main>


      <Footer/>
    </>
  );
}
