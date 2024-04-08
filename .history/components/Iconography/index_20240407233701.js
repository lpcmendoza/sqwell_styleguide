import styles from './Iconography.module.css';
import Image from "next/image";

export default function Iconography(){
    return (
    <>
    <h2 className={styles.sectionHead}>Iconography & Buttons</h2>
    <div className={styles.inconography}>
        <div className={styles.iconsContainer}>
            <h3>Icons</h3>
            <p>Icons are essential in the Sqwell app, helping users navigate and find information, especially on the individual parks page. </p>
            <div className={styles.iconsListContainer}>
            <ul className={styles.iconsList}>
                <li>
                    <Image
                        src="/Icons1.svg"
                        width={333}
                        height={30}
                        alt="Set 1 of icons used in Sqwell App"
                    />
                </li>
                <li>
                    <Image
                        src="/Icons2.svg"
                        width={333}
                        height={35}
                        alt="Set 2 of icons used in Sqwell App"
                    />
                </li>
                <li>
                    <Image
                        src="/Icons3.svg"
                        width={339}
                        height={36}
                        alt="Set 3 of icons used in Sqwell App"
                    />
                </li>
                <li>
                    <Image
                        src="/Icons4.svg"
                        width={339}
                        height={30}
                        alt="Set 4 of icons used in Sqwell App"
                    />
                </li>
                <li>
                    <Image
                        src="/Icons5.svg"
                        width={337}
                        height={32}
                        alt="Set 5 of icons used in Sqwell App"
                    />
                </li>
            </ul>
            </div>
        </div>
        <div className={styles.navBarContainer}>
            <h3>Navigation Bar Icons</h3>
            <p>In addition to icons on the map, the navigation bar has four icons that show which part of the app you're in. They make it easy for users to understand where they are and quickly move around the app.</p>
            <div className={styles.navBar}>
                <Image
                        src="/Navbar.png"
                        width={430}
                        height={80}
                        alt="Sqwell Navigation Bar Icons"
                    />
            </div>
            <br></br>
            <div className={styles.navBarDescription}>
                <p>The Sqwell app utilizes familiar icons in its navigation bar for user-friendly predictability:</p>
                <br></br>
                <h5>Home</h5>
                <p>The Home icon directs users to the main landing page.</p>
                <br></br>
                <h5>Community</h5>
                <p>The Community icon leads to the Community page, featuring the Community Leaderboard and Upcoming Events for nearby parks.</p>
                <br></br>
                <h5>Parks Library</h5>
                <p>The Parks Library icon, represented by trees, grants access to a library of parks available in the app, along with additional activities specific to each park.</p>
                <br></br>
                <h5>Profile</h5>
                <p>The Profile icon directs users to their profile settings, including account preferences, visited parks, image galleries, and the Monthly Park Report.</p>
                <br></br>
                <p>These icons are chosen for their clarity and ease of understanding, ensuring smooth navigation for all users.</p>

            </div>
        </div>
    </div>
        <div className={styles.buttonsContainer}>
            <h3>Buttons</h3>
            <p></p>

        </div>
    </>
    )
}