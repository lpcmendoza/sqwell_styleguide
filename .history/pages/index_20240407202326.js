import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
import Typography from "@/components/Typography"
import Colours from "@/components/Colours";
import Layout from "@/components/Layout";

export default function Home() {
  return (
    <>
    <MenuBar/>
      <main className={`${styles.main}`}>
      <h1>Sqweeeeee</h1>

      <h2>Logos</h2>
     
      <Colours/>
      <Typography/>
    
      <Layout/>
      <h2>Iconography</h2>
      </main>



    </>
  );
}
