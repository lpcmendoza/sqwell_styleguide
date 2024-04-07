import styles from './MenuBar.module.css'

export default function MenuBar() {
    return (
        <div className={styles.menubar-container}>
            <div className={styles.blurbg}>
                <ul className={styles.menunames}>
                    <li>
                    <Link to={{ search: 'Home' }}> Home </Link>
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