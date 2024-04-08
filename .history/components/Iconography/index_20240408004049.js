import styles from './Iconography.module.css';
import Image from "next/image";

export default function Iconography(){
    return (
    <>
    <h2 className={styles.sectionHead}>Iconography & Buttons</h2>
    <div className={styles.inconography}>
        <div className={styles.iconsContainer}>
            <h3>Icons</h3>
            <p>Icons play a crucial role in the Sqwell app, aiding users in navigation and information retrieval, particularly on the individual park pages.</p>
            <br></br>
            <p>On these pages, an interactive map provides users with an intuitive understanding of the amenities available at each park. This feature enhances user experience by visually representing park facilities, allowing for efficient exploration.</p>
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
            <p>The Sqwell app utilizes familiar icons in its navigation bar for user-friendly predictability:</p>
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
            </div>
            <p>These icons are chosen for their clarity and ease of understanding, ensuring smooth navigation for all users.</p>
        </div>
    </div>
        <div className={styles.buttonsContainer}>
            <h3>Buttons</h3>
            <div className={styles.buttonsColumns}>
                <div className={styles.buttonsActive}>
                    <h5>Active</h5>
                    <div className={styles.buttons}>
                        <Image
                            src="/Active.png"
                            width={195}
                            height={40}
                            alt="Sqwell Navigation Bar Icons"
                        />
                    </div>
                    <p>sdfdsf</p>
                </div>
                <div className={styles.buttonsPress}>
                    <h5>On Press</h5>
                    <div className={styles.buttons}>
                        <Image
                            src="/Navbar.png"
                            width={430}
                            height={80}
                            alt="Sqwell Navigation Bar Icons"
                        />
                    </div>
                    <p>sdfdsf</p>
                </div>
                <div className={styles.buttonsDisabled}>
                    <h5>Disabled</h5>
                    <div className={styles.buttons}>
                        <Image
                            src="/Navbar.png"
                            width={430}
                            height={80}
                            alt="Sqwell Navigation Bar Icons"
                        />
                    </div>
                    <p>sdfdsf</p>
                </div>
            </div>
            <p></p>

        </div>
    </>
    )
}