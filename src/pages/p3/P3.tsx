
import styles from "./P3.module.css"

export default function P3(){
    return <div className={styles.container}>
        <div className={styles.intro} >
            <h1 className={styles.header1}>Just that simple</h1>
            <div className={styles.right}>
                <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget.</p>
                <button>Get Started</button>
            </div>
        </div>
        <img src="/images/p3/showcase.png" className={styles.img}/>
    </div>
}