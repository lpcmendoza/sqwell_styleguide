import styles from './Colours.module.css'
import Image from 'next/image'
import button from '@/public/buttonexample.png'
import links from '@/public/links.png'
import grayCard from '@/public/grayCard.png'
import blueContrast from '@/public/blue_black.png'
import boneContrast from '@/public/bone_black.png'
import lightGreenContrast from '@/public/lightGreen_black.png'
import orangeContrast from '@/public/orange_black.png'
import peachContrast from '@/public/peach_black.png'
import pressedButtonContrast from '@/public/pressed_button.png'
import purpleContrast from '@/public/purple_black.png'
import grayContrast from '@/public/softGray_black.png'

export default function Colours() {
    return (
        <>
            <h3 className={styles.header}>Colour Palette</h3>
            <div className={styles.palette}>
                <div className={styles.pinkLavender}>
                    <div className={styles.title}>Purple<br></br>#D4B1CF</div>
                </div>
                <div className={styles.pumpkin}>
                    <div className={styles.title}>Orange<br></br>#F7802B</div>
                </div>
                <div class={styles.darkGreen}>
                    <div className={styles.title}>Dark Green<br></br>#3E655D</div>
                </div>
                <div class={styles.eerieBlack}>
                    <div className={styles.title}>Black<br></br>#1A1D1A</div>
                </div>
                <div class={styles.bone}>
                    <div className={styles.title}>Bone<br></br>#ECE2D0</div>
                </div>
                <div class={styles.blue}>
                    <div className={styles.title}>Blue<br></br>#74B4C6</div>
                </div>
            </div>
            <div className={styles.descriptionContainer}>
                <div>
                    
                    <h5 className={styles.orangeHeader}>Orange</h5>
                    <p className={styles.paragraph}>The orange colour serves as a complementary accent to our dark green colour, adding a distinctive touch to capture users' attention. It is predominantly utilized as the primary button color, as well as for select icons such as the badge book, edit profile, and camera. Additionally, it functions as an indicator for the currently selected page within the navigation bar</p>
                    <h5 className={styles.purpleHeader}>Purple</h5>
                    <p className={styles.paragraph}><div className={styles.purpleParagraph}>This shade of purple complements our colour palette smoothly. It is used as a background colour within pages such as the scavenger hunt, and within certain cards like the quick links on the homepage to help distinguish categories.</div></p>
                    <h5 className={styles.darkGreenHeader}>Dark Green</h5>
                    <p className={styles.paragraph}>We selected this dark green hue for its symbolic association with nature and trees, aligning with the theme of our webpage. Its rich depth offers a nice contrast against our primary background colour, while also complementing the palette of accent colours utilized throughout the interface. Primarily used in our header and bottom navigation bar, as well as within the vector graphics. This colour selection enhances our design and aligns with our purpose.</p>
                </div>
                <div>
                    <h5 className={styles.blackHeader}>Black</h5>
                    <p className={styles.paragraph}><div className={styles.blackParagraph}>Black was used to enhance legibility, provide solid contrast, and add sophistication to the overall design. Black is primarily used for all text elements to ensure optimal readability; while also serving as the colour for most icons, conveying a sense of clarity and visual hierarchy.</div></p>
                    <h5 className={styles.boneHeader}>Bone</h5>
                    <p className={styles.paragraph}>The colour bone was selected as the background for the web app to create a calming and welcoming atmosphere. Its soft and neutral tone provides a subtle backdrop for other elements to stand out while maintaining visual harmony throughout the interface.</p>
                    <h5 className={styles.blueHeader}>Blue</h5>
                    <p className={styles.paragraph}>This blue was chosen because it is a symbol of water, nature and tranquillity which aligns with our web app’s theme. It is used within our quiz feature and select cards to differentiate content effectively. This blue contributes to a cohesive and visually appealing design aesthetic.</p>
                </div>
            </div>       
            <h5 className={styles.exampleHeader}>Colour Use Examples</h5>
            <div className={styles.colourExamples}>
                
            <Image
                    src={button} alt="orange button with black text" width={200} height={60}/>
                        <Image
                    src={links} alt="4 quick links" width={190} height={205}/>
                        <Image
                    src={grayCard} alt="event card" width={180} height={250}/>
            </div>

            <div className={styles.contrastChecker}>
                
            <Image
                    src={blueContrast} alt="black on blue background" width={350} height={225}/>
                     <Image
                    src={boneContrast} alt="black on bone background" width={350} height={225}/>
                      <Image
                    src={lightGreenContrast} alt="black on light green background" width={350} height={225}/>
                       <Image
                    src={orangeContrast} alt="black on orange background" width={350} height={225}/>
                     <Image
                    src={peachContrast} alt="black on peach background" width={350} height={225}/>
                    <Image
                    src={pressedButtonContrast} alt="white on dark green background" width={350} height={225}/>
                     <Image
                    src={purpleContrast} alt="back on purple background" width={350} height={225}/>
                     <Image
                    src={purpleContrast} alt="back on purple background" width={350} height={225}/>
                      <Image
                    src={grayContrast} alt="back on gray background" width={350} height={225}/>
            </div>
        </>
    )
}