import styles from './Header.module.css';
import Image from "next/image";

export default function Header(){
    return(
        <>
        <div className={styles.headerContainer}>
            <div className={styles.headerBlurb}></div>
                <h1>Sqwee welcomes you to Sqwell's Styleguide!</h1>
                <br></br>
                <p>The Sqwell application offers an interactive web experience, allowing users to explore nearby outdoor parks effortlessly. Upon selecting a park, users can access a wealth of information, including details about park amenities, interactive park maps, and available activities. From embarking on a scavenger hunt to testing their knowledge with quizzes about the park and nature, users can engage in immersive experiences tailored to their interests.</p>
                <br></br>
                <p>Additionally, the app provides convenient directions to parks that are new to the user, facilitating seamless exploration of outdoor spaces. With its array of features designed to enhance outdoor adventures, Sqwell offers a comprehensive platform for discovering and enjoying nature's wonders.</p>
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