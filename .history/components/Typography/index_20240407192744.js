import styles from './Typography.module.css';

export default function Typography() {
    return (
        <main>
        <h2 className={styles.sectionHead}>Typography</h2>
        <div className={styles.typography}>
            <div className={styles.rationale}>
                <h3>Rationale</h3>
                <p>The Sqwell team made a deliberate choice in selecting KoHo and Nunito Sans Serif font families for their application. These fonts were chosen for their exceptional readability across various device screens, including low-resolution displays, owing to their clean and straightforward designs.</p>
                <br></br>
                <p>KoHo, designated for heading texts, strikes a balance between mechanical precision and calligraphic elegance. Its letterforms possess a subtle flair that captures attention without overshadowing the app's core content. This balance allows users to engage with the headings seamlessly, enhancing the overall design while maintaining focus on the app's primary content.</p>
                <br></br>
                <p>In contrast, Nunito serves as the main font family for the remaining text content within the app. With its rounded edges, Nunito imparts a softer, more organic appearance to the text. This aesthetic choice aligns harmoniously with the Sqwell app's theme of outdoor activities in natural settings, providing users with an experience that resonates with the app's purpose.</p>
            </div>
            <div className={styles.typscale}>
                <h3>Type Scale</h3>
                    <ul className={styles.typescaleDetails}>
                        <li>
                        <h1>Heading One</h1> <p>Font size: 3 rem or 48px   |   Font weight: Semibold   |   Font family: Koho</p>
                        </li>
                        <li>
                        <h2>Heading Two</h2> <p>Font size: 2.5 rem or 40px   |   Font weight: Medium   |   Font family: Koho</p>
                        </li>
                        <li>
                        <h3 >Heading Three</h3> <p>Font size: 2 rem or 32px   |   Font weight: Semibold   |   Font family: Koho</p>
                        </li>
                        <li>
                        <h4>Heading Four</h4> <p>Font size: 1.5 rem or 24px   |   Font weight: Semibold   |   Font family: Koho</p>
                        </li>
                        <li>
                        <h5>Heading Five</h5> <p>Font size: 1.25 rem or 20px   |   Font weight: Semibold   |   Font family: Koho</p>
                        </li>
                        <li>
                        <p className={styles.bodyCopy}>Body Text</p> <p>Font size: 1 rem or 16px   |   Font weight: Regular   |   Font family: Nunito</p>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    )
}