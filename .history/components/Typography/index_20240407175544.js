import styles from './Typography.module.css';

export default function Typography() {
    return (
        <main>
        <h2 className={styles.sectionHead}>Typography</h2>
            <h3 className={styles.typscale}>Type Scale</h3>
            <ul className={styles.typescaleDetails}>
                <li>
                <h1>Heading One</h1> <p>Size: 3 rem or 48px   |   Font weight: Semibold   |   Font family: Koho</p>
                </li>
            
            </ul>
        </main>
    )
}