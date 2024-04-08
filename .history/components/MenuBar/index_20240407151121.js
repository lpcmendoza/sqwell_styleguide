import styles from './MenuBar.module.css'

export default function MenuBar() {
    return (
        <div className={styles.menubarContainer}>
            <div className={styles.blurbg}>
                <ul className={styles.menunames}>
                    <li>
                    <h2>Home</h2>
                    </li>
                    <li>
                        <h2>Logos</h2>
                    </li>
                    <li>
                        <h2>Typography</h2>
                    </li>
                    <li>
                        <h2>Colours</h2>
                    </li>
                    <li>
                        <h2>Layout</h2>
                    </li>
                    <li>
                        <h2>Iconography</h2>
                    </li>
                </ul>
            </div>

        </div>
    )
}