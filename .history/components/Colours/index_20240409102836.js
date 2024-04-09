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
import purpleAcorn from '@/public/acorn-purple.svg'
import orangeAcorn from '@/public/acorn-orange.svg'
import greenAcorn from '@/public/acorn-darkgreen.svg'
import blackAcorn from '@/public/acorn-black.svg'

export default function Colours() {
    return (
        <>
            <h2 className={styles.header}>Colour Palette</h2>
            <div className={styles.palette}>
                <div className={styles.pinkLavender}>
                <Image
                    src={purpleAcorn} alt="purple acorn" width={190} height={205} className={styles.purpleAcorn}/>
                    <div className={styles.title}>Purple<br></br>#D4B1CF</div>
                </div>
                <div className={styles.pumpkin}>
                <Image
                    src={orangeAcorn} alt="orange acorn" width={190} height={205}/>
                    <div className={styles.title}>Orange<br></br>#F7802B</div>
                </div>
                <div class={styles.darkGreen}>
                <Image
                    src={greenAcorn} alt="green acorn" width={190} height={205}/>
                    <div className={styles.title}>Dark Green<br></br>#3E655D</div>
                </div>
                <div class={styles.eerieBlack}>
                <Image
                    src={blackAcorn} alt="black acorn" width={190} height={205}/>
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
                    <p className={styles.paragraph}>This shade of purple complements our colour palette smoothly. It is used as a background colour within pages such as the scavenger hunt, and within certain cards like the quick links on the homepage to help distinguish categories.</p>
                    <h5 className={styles.darkGreenHeader}>Dark Green</h5>
                    <p className={styles.paragraph}>We selected this dark green hue for its symbolic association with nature and trees, aligning with the theme of our webpage. Its rich depth offers a nice contrast against our primary background colour, while also complementing the palette of accent colours utilized throughout the interface. Primarily used in our header and bottom navigation bar, as well as within the vector graphics. This colour selection enhances our design and aligns with our purpose.</p>
                </div>
                <div>
                    <h5 className={styles.blackHeader}>Black</h5>
                    <p className={styles.paragraph}>Black was used to enhance legibility, provide solid contrast, and add sophistication to the overall design. Black is primarily used for all text elements to ensure optimal readability; while also serving as the colour for most icons, conveying a sense of clarity and visual hierarchy.</p>
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

<h5 className={styles.contrastHeader}>Contrast Checker</h5>
            <div className={styles.contrastChecker}>
              <div className={styles.contrastParagraph}>
            <Image
                    src={blueContrast} alt="black on blue background" width={300} height={185} className={styles.contrastImage}/>
                   <br></br>The contrast ratio between black text on a blue background scored 9.09, indicating a strong level of contrast. According to accessibility guidelines, a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text is recommended to meet accessibility standards. This combination exceeds these guidelines, providing excellent readability and accessibility for users.

                     </div> 
                     <div className={styles.contrastParagraph}>
                     <Image
                    src={boneContrast} alt="black on bone background" width={300} height={185} className={styles.contrastImage}/>
                     <br></br>With a score of 16.36, a very high level of contrast between the black text and bone background colour is achieved.  The combination far exceeds accessibility guidelines, providing exceptional readability and ensuring compliance with accessibility standards.
                      </div>
                      <div className={styles.contrastParagraph}>
                      <Image
                    src={lightGreenContrast} alt="black on light green background" width={300} height={185} className={styles.contrastImage}/>
                       <br></br>A score of 10.19 indicates very good contrast between black and the light shade of our signature green colour thus passing all accessibility standards.
                       </div>
                      <div className={styles.contrastParagraph}>
                       <Image
                    src={orangeContrast} alt="black on orange background" width={300} height={185} className={styles.contrastImage}/>
                  <br></br> The contrast ratio of 8.08 between black text on an orange background indicates moderate contrast, meeting basic accessibility guidelines. It scored four out of five stars, “Very good!”
                    </div>
                    <div className={styles.contrastParagraph}>
                     <Image
                    src={peachContrast} alt="black on peach background" width={300} height={185} className={styles.contrastImage}/>
                  <br></br> The contrast ratio of 14.36 between black text on peach indicates strong contrast. This combination is often used as a graphich decoration in the background of most pages, exceeding basic accessibility standards. This high contrast ensures good readability for most users, aligning well with accessibility guidelines.
                   </div>
                   <div className={styles.contrastParagraph}>
                    <Image
                    src={pressedButtonContrast} alt="white on dark green background" width={300} height={185} className={styles.contrastImage}/>
                   <br></br> The contrast ratio of 9.91 between white text on a dark green background indicates strong contrast, exceeding basic accessibility standards. This combination is used when buttons in the web app are being pressed on for visual feedback. This high level of contrast ensures excellent readability for most users and aligns well with accessibility guidelines.
                    </div>
                    <div className={styles.contrastParagraph}>
                     <Image
                    src={purpleContrast} alt="black on purple background" width={300} height={185} className={styles.contrastImage}/>
                    <br></br>The contrast ratio of 10.99 between black text on a light purple background signifies good contrast, surpassing basic accessibility requirements. This high contrast enhances readability for most users, aligning effectively with accessibility standards.
                     </div>
                     <div className={styles.contrastParagraph}>
                      <Image
                    src={grayContrast} alt="black on gray background" width={300} height={185} className={styles.contrastImage}/>
          <br></br> The contrast ratio of 15.91 between black text on a light gray background indicates exceptional contrast, far exceeding basic accessibility guidelines. This strong contrast ensures optimal readability for users across various visual abilities, aligning excellently with accessibility standards.
           </div>
            </div>
        </>
    )
}