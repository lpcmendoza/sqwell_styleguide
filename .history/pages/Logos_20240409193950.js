import styles from "@/styles/Logos.module.css";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";

export default function Logos(){
    return (
        <>
        <MenuBar/>
        <main className={`${styles.main}`}>
        <h2 className={styles.header}>Logos</h2>
        
        <br></br>
        <br></br>
        <Footer/>
        </main>
        
        </>
    )
}