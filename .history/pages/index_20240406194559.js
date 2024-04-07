import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
    <MenuBar/>
      <main className={`${styles.main}`}>
       <div>Sqweeeeee</div>
      </main>
      <Footer/>
    </>
  );
}
