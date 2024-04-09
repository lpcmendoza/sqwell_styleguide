import styles from './Layout.module.css'
import grid from '@/public/grid-layout.png'
import gridElements from '@/public/gridelements.png'
import Image from 'next/image'
export default function Layout(){
    return(
        <>
        <h2 className={styles.layoutHeader}>Layout</h2>
	<div className={styles.layoutContainer}>
        <div className={styles.flex}>
            <div className={styles.imageContainer}>
                <Image
                    src={grid}
                    alt="grid layout mobile view"
                    width={230}
                    height={485}
                />
            </div>
            <div className={styles.imageDividerContainer}>
                <div className={styles.imageDivider}></div>
                    <div className={styles.screenBorder}>
                        <div className={styles.mainSection}>
                            <h3 className={styles.h4}>Grid Used</h3>
                            <p className={styles.paragraphText}>All pages use a grid with 4 columns and 200 10px rows with a gutter of 20px. One element spans all four colums, and a maximum of two elements can span two columns each side by side to suit smaller screen sizes and ensure good readibility and legibility.</p><hr className={styles.divider}></hr>
                            <h3 className={styles.paragraphText}>Spacing Guidelines</h3>
                            <p className={styles.paragraphText}>
        We maintained consistent spacing by utilizing specific measurements: a 20px margin from the screen edge, a 20px gap between section headers and subsequent elements, a 60px space between major sections, a 40px distance between the header, navbar, and content, and likewise, a 40px gap around buttons. These guidelines ensured uniform spacing, enhancing the visual appeal of the design.</p>
                        </div>
                    </div>
                </div>
            <div className={styles.secondImage}>
                <Image
                    src={gridElements}
                    alt="grid layout mobile view"
                    width={230}
                    height={485}
                />
                </div>
        </div>
    </div>
        </>
    )
}

