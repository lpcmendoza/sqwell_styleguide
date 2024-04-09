
import styles from "@/styles/Home.module.css";
import Footer from "@/components/Footer";
import Typography from "@/components/Typography"
import Colours from "@/components/Colours";
import Layout from "@/components/Layout";
import Iconography from "@/components/Iconography";
import Header from "@/components/Header";
import Link from "next/Link";


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
                        <Link href="#Icon" scroll={true}><h5>Iconography</h5></Link>
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
      <div className="Icon">
        <Iconography/>
      </div>
      <br></br>
	<Footer/>
      </main>
      



    </>
  );
}

