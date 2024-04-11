import styles from "@/styles/Logos.module.css";
import MenuBar from "@/components/MenuBar";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function Logos(){
    return (
        <>
        <MenuBar/>
        <main className={`${styles.main}`}>
        <h2 className={styles.header}>Logos</h2>
        <div className={styles.rational}>
        <h3>Rationale</h3>
         </div>
         <div className={styles.container}>
    <div className={styles.logoDescription}>
        Sqwell's logo integrates our company mascot, Sqwee, seamlessly into our company name. The warm brown colour scheme corresponds with the hues of our squirrel mascot, imparting a cohesive visual identity. The font Nunito matches our body text and aligns with our brand identity. The design uses three layers of text, utilizing shadows and highlights, to create a three-dimensional effect. The Soft rounded edges add a touch of elegance and modernity.
    </div>
    <div className={styles.verticalLogo}>
        <Image
            src="/vertical-logo.svg"
            alt="vertical sqwell logo"
            width={230}
            height={485}
        />
    </div>
</div>
       
        <div className={styles.logoVariations}>
        <Image
            src="/colour-logo.svg"
            alt="vertical sqwell logo"
            width={700}
            height={485}
        />
         <Image
            src="/gray-scale-logo.svg"
            alt="vertical sqwell logo"
            width={230}
            height={485}
        />
         <Image
            src="/monochrome-logo.svg"
            alt="vertical sqwell logo"
            width={230}
            height={485}
        />
         <Image
            src="/logo-black-and-white.svg"
            alt="vertical sqwell logo"
            width={230}
            height={485}
        />
        </div>
        <br></br>
        <br></br>
        <Footer/>
        </main>
        
        </>
    )
}