import styles from './Iconography.module.css'

export default function Iconography(){
    return (
    <>
    <h2 className={styles.sectionHead}>Iconography & Buttons</h2>
    <div className={styles.inconography}>
        <div className={styles.iconsContainer}>
            <h3>Icons</h3>
            <p>Icons are essential in the Sqwell app, helping users navigate and find information, especially on the individual parks page. In addition to icons on the map, the navigation bar has four icons that show which part of the app you're in. They make it easy for users to understand where they are and quickly move around the app.</p>
        </div>
        <div className={styles.navBarContainer}>
            <h3>Navigation Bar icons</h3>
        </div>
    </div>
        <div className={styles.buttonsContainer}>
            <h3>Buttons</h3>
        </div>
    </>
    )
}