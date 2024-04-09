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

      <div className={styles.menubarContainer}>
            <div className={styles.blurbg}>
                <ul className={styles.menunames}>
                    <li>
                        <h5>Home</h5>
                    </li>
                    <li>
                        <h5>Logos</h5>
                    </li>
                    <li>
                        <h5>Typography</h5>
                    </li>
                    <li>
                        <h5>Colours</h5>
                    </li>
                    <li>
                        <h5>Layout</h5>
                    </li>
                    <li>
                        <h5>Iconography</h5>
                    </li>
                </ul>
            </div>

        </div>

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

