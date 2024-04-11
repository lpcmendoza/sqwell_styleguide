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
       
    <div className={styles.verticalLogo}>
        <Image
            src="/vertical-logo.svg"
            alt="vertical sqwell logo"
            width={360}
            height={340}
        />
    </div>
       <div className={styles.colourLogoContainer}>
        <div className={styles.colourLogo}>
        <Image
            src="/colour-logo.svg"
            alt="vertical sqwell logo"
            width={666}
            height={238}
        />
        </div>
        </div>
        <div className={styles.grayLogo}>
         <Image
            src="/gray-scale-logo.svg"
            alt="vertical sqwell logo"
            width={666}
            height={238}
        />
        </div>
        <div className={styles.monochromeLogo}>
         <Image
            src="/monochrome-logo.svg"
            alt="vertical sqwell logo"
            width={666}
            height={238}
        />
        </div>
        <div className={styles.blackAndWhiteLogo}>
         <Image
            src="/logo-black-and-white.svg"
            alt="vertical sqwell logo"
            width={666}
            height={238}
        />
        </div>

        <h3 className={styles.rationale}>Rationale</h3>
         <div className={styles.container}>
    <div className={styles.logoDescription}>
        Sqwell's logo integrates our company mascot, Sqwee, seamlessly into our company name. The warm brown colour scheme corresponds with the hues of our squirrel mascot, imparting a cohesive visual identity. The font Nunito matches our body text and aligns with our brand identity. The design uses three layers of text, utilizing shadows and highlights, to create a three-dimensional effect. The Soft rounded edges add a touch of elegance and modernity.
    <br></br>
    <br></br>
    The minimum clear space around the logo is 0.25 inches. Rules: -
    </div>
    </div>
        <br></br>
        <br></br>
        <Footer/>
        </main>
        
        </>
    )
}