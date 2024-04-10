import styles from './MenuBar.module.css'
import Link from 'next/Link'

export default function MenuBar() {
    return (
        <div className={styles.menubarContainer}>
            <div className={styles.blurbg}>
                <ul className={styles.menunames}>
                    <li>
                        <Link href="/"><h5>Home</h5></Link>
                    </li>
                    <li>
                    <Link href="/Logos"><h5>Logos</h5></Link>
                    </li>
                    <li>
                    <Link href="/Typography"><h5>Typography</h5></Link>
                    </li>
                    <li>
                    <Link href="/Colours"><h5>Colours</h5></Link>
                    </li>
                    <li>
                    <Link href="/Layout"><h5>Layout</h5></Link>
                    </li>
                    <li>
                    <Link href="/Iconography"><h5>Iconography</h5></Link>
                    </li>
                </ul>
            </div>

        </div>
    )
}