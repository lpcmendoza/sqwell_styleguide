import styles from './Typography.module.css';

export default function Typography() {
    return (
        <main>
        <h2 className={styles.sectionHead}>Typography</h2>
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
                <h3>Heading Three</h3> <p>Font size: 2 rem or 32px   |   Font weight: Semibold   |   Font family: Koho</p>
                </li>
            
            </ul>
        </main>
    )
}