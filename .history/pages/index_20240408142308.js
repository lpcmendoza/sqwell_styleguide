import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
import Typography from "@/components/Typography"
import Colours from "@/components/Colours";
import Layout from "@/components/Layout";
import Iconography from "@/components/Iconography";
import Header from "@/components/Header"

export default function Home() {
  return (
    <>
    <MenuBar/>
      <main className={`${styles.main}`}>
      <Header/>
      <br></br>
      <Colours/>
      <br></br>
      <Typography/>
      <br></br>
      <Layout/>
      <br></br>
      <br></br>
      <Iconography/>
      <br></br>
	<Footer/>
      </main>
      



    </>
  );
}

