import styles from "@/styles/Home.module.css";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
import Header from "@/components/Header"

export default function Home() {
  return (
    <>
    <MenuBar/>
      <main className={`${styles.main}`}>
        <Header/>
        <br></br>
        <br></br>
        <Footer/>
      </main>
      



    </>
  );
}

