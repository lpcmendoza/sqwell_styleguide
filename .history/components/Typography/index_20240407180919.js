import styles from './Typography.module.css';

export default function Typography() {
    return (
        <main>
        <h2 className={styles.sectionHead}>Typography</h2>
            <div></div>
            <div>
                <h3 className={styles.typscale}>Type Scale</h3>
                    <ul className={styles.typescaleDetails}>
                        <li>
                        <h1>Heading One</h1> <p>Font size: 3 rem or 48px   |   Font weight: Semibold   |   Font family: Koho</p>
                        </li>
                        <li>
                        <h2>Heading Two</h2> <p>Font size: 2.5 rem or 40px   |   Font weight: Medium   |   Font family: Koho</p>
                        </li>
                        <li>
                        <h3>Heading Three</h3> <p>Font size: 2 rem or 32px   |   Font weight: Semibold   |   Font family: Koho</p>
                        </li>
                        <li>
                        <h4>Heading Four</h4> <p>Font size: 1.5 rem or 24px   |   Font weight: Semibold   |   Font family: Koho</p>
                        </li>
                        <li>
                        <h5>Heading Five</h5> <p>Font size: 1.25 rem or 20px   |   Font weight: Semibold   |   Font family: Koho</p>
                        </li>
                        <li>
                        <p className={styles.bodyCopy}>Body Text</p> <p>Font size: 1.25 rem or 20px   |   Font weight: Semibold   |   Font family: Koho</p>
                        </li>
                    </ul>
            </div>
        </main>
    )
}