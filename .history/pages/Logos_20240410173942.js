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
<div className={styles.logoVariations}>
       <div className={styles.colourLogoContainer}>
       <h3 className={styles.colourHeader}>Full Colour Logo</h3>
        <div className={styles.colourLogo}>
        <Image
            src="/colour-logo.svg"
            alt="vertical sqwell logo"
            width={666}
            height={238}
        />
        </div>
        </div>
        <div className={styles.grayLogoContainer}>
            <h3 className={styles.grayHeader}>Grayscale Logo</h3>
        <div className={styles.grayLogo}>
         <Image
            src="/gray-scale-logo.svg"
            alt="vertical sqwell logo"
            width={666}
            height={238}
        />
        </div>
        </div>
        <div className={styles.monochromeLogoContainer}>
            <h3 className={styles.monochromeHeader}>Brown Monochrome Logo</h3>
        <div className={styles.monochromeLogo}>
         <Image
            src="/monochrome-logo.svg"
            alt="vertical sqwell logo"
            width={666}
            height={238}
        />
        </div>
        </div>
        <div className={styles.blackAndWhiteLogoContainer}>
            <h3 className={styles.blackWhiteHeader}>Black & White Logo</h3>
        <div className={styles.blackAndWhiteLogo}>
         <Image
            src="/logo-black-and-white.svg"
            alt="vertical sqwell logo"
            width={666}
            height={238}
        />
        </div>
        </div>
        <div className={styles.verticalLogoContainer}>
    <h3 className={styles.verticalHeader}>Vertical Variation</h3>
    <div className={styles.verticalLogo}>
        <Image
            src="/vertical-logo.svg"
            alt="vertical sqwell logo"
            width={460}
            height={440}
        />
    </div>
    </div>
        </div>
        <div className={styles.faviconContainer}>
        <h3 className={styles.faviconTitle}>Sqwell Favicons</h3>
        <div className={styles.favicons}>
            
            <div className={styles.smallFaviconContainer}>
                <h5 className={styles.faviconHeader}>16 X 16px</h5>
    <Image
            src="/favicon.svg"
            alt="sqwell favicon"
            width={16}
            height={16}
        /></div>
        <div className={styles.mediumFaviconContainer}>
            <h5 className={styles.faviconHeader}>32 X 32px</h5>
          <Image
            src="/favicon.svg"
            alt="sqwell favicon"
            width={32}
            height={32}
        /></div>
        <div className={styles.largeFaviconContainer}>
            <h5 className={styles.faviconHeader}>48 X 48px</h5>
          <Image
            src="/favicon.svg"
            alt="sqwell favicon"
            width={48}
            height={48}
        /></div>
        </div>
        </div>
        <div>
        <h3 className={styles.incorrectUsageHeader}>Incorrect Logo Usage Examples</h3>
        <div className={styles.incorrectUsageContainer}>
        <div className={styles.distortRule}>
        <h4 className={styles.incorrectUsageExample}>Do not Sqweesh or stretch logo</h4>
       <div className={styles.squishedlogo}>
        <Image
            src="/squishedLogo.svg"
            alt="sqwell favicon"
            width={275}
            height={120}
        />
        </div>
        <div className={styles.stretchedlogo}>
        <Image
            src="/stretchedLogo.svg"
            alt="sqwell favicon"
            width={510}
            height={170}
        /></div>
        </div>
        <div>
        <h4 className={styles.incorrectUsageExample}>Do not use colours outside of our colour pallete</h4>
        <div className={styles.pinkLogo}>
        <Image
            src="/pinkLogo.svg"
            alt="sqwell favicon"
            width={357}
            height={121}
        />
        </div>
        </div>
        <div>
        <h4 className={styles.incorrectUsageExample}>Do not adjust the alignment of the Sqwee "S"</h4>
        <div className={styles.topAlignLogo}>
        <Image
            src="/topAlignLogo.svg"
            alt="sqwell favicon"
            width={357}
            height={148}
        />
        </div>
        </div>
        </div>
         <div className={styles.container}>
         <h3 className={styles.rationale}>Rationale</h3>
    <div className={styles.logoDescription}>
        Sqwell's logo integrates our company mascot, Sqwee, seamlessly into our company name. The warm brown colour scheme utlizes the hues and shades of our signature orange colour, also used for our squirrel mascot, imparting a cohesive visual identity. The font Nunito matches our body text and aligns with our brand identity. The design uses three layers of text, utilizing shadows and highlights, to create a three-dimensional effect. The Soft rounded edges add a touch of modernity and playfulness to the overall feel of our Web App.
    <br></br>
    <br></br>
    <div className={styles.clearSpaceHeader}>
    <h5>Clear Space</h5>
    The minimum clear space around the Sqwell logo is specified at 24 pixels or approximately 0.25 inches, ensuring that the logo remains distinct and recognizable amidst surrounding elements. This space is equivalent to the width of one acorn, as depicted in the vertical logo variant.
   </div>
   <div className={styles.sizingOptionsHeader}>
    <h5>Sizing Options</h5>
    <p>The minimum size, as used within Sqwell's Web App is 370 X 177 pixels guaranteeing its legibility and impact across various screen sizes and resolutions.</p>
    </div>
    </div>
    </div>
    <div className={styles.clearSpaceLogo}>
    <Image
            src="/colour-logo.svg"
            alt="vertical sqwell logo"
            width={333}
            height={119}
        />
    </div>
    </div>
    <div className={styles.verticalClearSpace}>
    <Image
            src="/verticalClearSpace.svg"
            alt="vertical sqwell logo"
            width={226}
            height={217}
        />
    </div>
        <br></br>
        <br></br>
        <Footer/>
        </main>
        
        </>
    )
}