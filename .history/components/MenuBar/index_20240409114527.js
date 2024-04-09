import styles from './MenuBar.module.css'
import Link from 'next/Link';

export default function MenuBar() {
    return (
        <div className={styles.menubarContainer}>
            <div className={styles.blurbg}>
                <ul className={styles.menunames}>
                    <li>
                        <Link></Link><h5>Home</h5>
                    </li>
                    <li>
                        <h5>Logos</h5>
                    </li>
                    <li>
                        <h5>Typography</h5>
                    </li>
                    <li>
                        <h5>Colours</h5>
                    </li>
                    <li>
                        <h5>Layout</h5>
                    </li>
                    <li>
                        <h5>Iconography</h5>
                    </li>
                </ul>
            </div>

        </div>
    )
}