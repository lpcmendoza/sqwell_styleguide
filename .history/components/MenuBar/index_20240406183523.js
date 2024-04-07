import styles from './MenuBar.module.css'

export default function MenuBar() {
    return (
        <div className={styles.menubarContainer}>
            <div className={styles.blurbg}>
                <ul className={styles.menunames}>
                    <li>
                    <h3>Home</h3>
                    </li>
                    <li>Logos</li>
                    <li>Typography</li>
                    <li>Colours</li>
                    <li>Layout</li>
                    <li>Iconography</li>
                </ul>
            </div>

        </div>
    )
}