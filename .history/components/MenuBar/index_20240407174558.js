import styles from './MenuBar.module.css'

export default function MenuBar() {
    return (
        <div className={styles.menubarContainer}>
            <div className={styles.blurbg}>
                <ul className={styles.menunames}>
                    <li>
                        <h4>Home</h4>
                    </li>
                    <li>
                        <h4>Logos</h4>
                    </li>
                    <li>
                        <h4>Typography</h4>
                    </li>
                    <li>
                        <h4>Colours</h4>
                    </li>
                    <li>
                        <h4>Layout</h4>
                    </li>
                    <li>
                        <h4>Iconography</h4>
                    </li>
                </ul>
            </div>

        </div>
    )
}