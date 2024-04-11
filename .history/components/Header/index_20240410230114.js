import styles from './Header.module.css';
import Image from "next/image";
import Link from 'next/Link';

export default function Header(){
    return(
        <>
        <div className={styles.headerContainer}>
            <div className={styles.headerBlurb}>
                <h1>Sqwee welcomes you to Sqwell's Styleguide!</h1>
                <br></br>
                <p>The Sqwell app is an interactive web platform designed to help users discover nearby outdoor parks. Users can access park amenities, maps, and activities such as scavenger hunts and quizzes. Additionally, the app provides directions to new parks, making it easy for users to explore nature's offerings. With its diverse features, Sqwell offers a convenient and engaging way to enjoy outdoor adventures.</p>
                <br></br>
                <h5>Sqwell Team:</h5>
                <p>Kathryn Tan, Madeline Struthers, Pia Mendoza</p>
                <br></br>
                <p className={styles.reference}>References:</p>
                <p><Link href="https://coolors.co/">Coolors</Link>, <Link href="https://chat.openai.com/">ChatGPT</Link>, and <Link href="https://www.figma.com/community/plugin/735098390272716381/iconify">Figma - Inconify Plugin</Link>.</p>
            </div>
            <div className={styles.headerSqwee}>
                <Image
                        src="/Sqwee.svg"
                        width={475.5}
                        height={369}
                        alt="Sqwee - Sqwell's mascot"
                />
            </div>
        </div>
        </>
    )
}