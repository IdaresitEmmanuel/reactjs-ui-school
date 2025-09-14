import styles from "./P4.module.css"

const whatWeOffer: string[] = Array.from({length: 2}, ()=> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.");

export default function P4() {
  return (
    <div className={styles.box}>
      <img src="/images/p4/showcase.png" />
      <div className={styles.intro}>
        <h1 className={styles.header1}>Exploration and inspiration</h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          libero risus semper habitant arcu eget. Et integer facilisi eget diam.
        </p>
        <button className={styles.button}>Explore</button>

        <div className={styles.offer}>
            {
                whatWeOffer.map((offer, index)=> (
                    <div key={index} className={styles.offer_box}>
                        <span className={styles.index}>{index < 10 ? `0${index+1}`: index+1}</span>
                        <p className={`${styles.offer_desc} ${styles.paragraph}`}>{offer}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
}
