import styles from './Typography.module.css';

export default function Typography() {
    return (
        <main>
        <h1 className={styles.sectionHead}>Typography</h1>
            <h2>Type Scale</h2>
            <ul>
                <li>
                <h1>Heading One</h1>
                <p>Size: 3 rem or 48px</p>
                <p>Font weight: Semibold</p>
                <p>Font family: Koho</p>
                </li>
            
            </ul>
        </main>
    )
}