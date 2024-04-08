import styles from './Header.module.css';
import Image from "next/image";

export default function Header(){
    return(
        <>
        <div className={styles.headerContainer}>
            <div className={styles.headerBlurb}></div>
                <h1>Sqwee welcomes you to Sqwell's Styleguide!</h1>
            <div className={styles.headerSqwee}></div>
        </div>
        </>
    )
}