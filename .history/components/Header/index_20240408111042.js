import styles from './Header.module.css';
import Image from "next/image";

export default function Header(){
    return(
        <>
        <div className={styles.headerContainer}>
            <div className={styles.headerBlurb}></div>
                <h1>Sqwee welcomes you to Sqwell's Styleguide!</h1>
            <div className={styles.headerSqwee}>
                <Image
                        src="/Sqwee.svg"
                        width={333}
                        height={30}
                        alt="Set 1 of icons used in Sqwell App"
                />
            </div>
        </div>
        </>
    )
}