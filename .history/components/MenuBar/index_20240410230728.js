import styles from './MenuBar.module.css'
import Link from 'next/Link';

export default function MenuBar() {
    return (
        <div className={styles.menubarContainer}>
            <div className={styles.blurbg}>
                <ul className={styles.menunames}>
                    <li>
                        <Link href="/" className={styles.menu}><h5>Home</h5></Link>
                    </li>
                    <li>
                    <Link href="/Logos" className={styles.menu}><h5>Logos</h5></Link>
                    </li>
                    <li>
                    <Link href="/Typography" className={styles.menu}><h5>Typography</h5></Link>
                    </li>
                    <li>
                    <Link href="/Colours" className={styles.menu}><h5>Colours</h5></Link>
                    </li>
                    <li>
                    <Link href="/Layout" className={styles.menu}><h5>Layout</h5></Link>
                    </li>
                    <li>
                    <Link href="/Iconography" className={styles.menu}><h5>Iconography</h5></Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}