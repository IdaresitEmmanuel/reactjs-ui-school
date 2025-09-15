import GridDot from "../../component/grid dot/GridDot";
import styles from "./P8.module.css";

export default function P8() {
  return (
    <div className={styles.container}>
      <div className={styles.showcase}>
        <div className={styles.avatar_display}>
          <div className={styles.avatar_circle}></div>
          <GridDot
            size={224}
            className={`${styles.grid_pattern} ${styles.grid_pattern_1}`}
          />
          <GridDot
            size={224}
            className={`${styles.grid_pattern} ${styles.grid_pattern_2}`}
          />
          <img src="/images/p8/avatar.png" className={styles.avatar} />
        </div>
      </div>
      <div className={styles.intro}>
        <div className={styles.intro_sub_box}>
          <h1 className={styles.header1}>
            Take your designs to the next level
          </h1>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu.
          </p>
          <button className={styles.explore_btn}>Explore</button>
        </div>
      </div>
    </div>
  );
}
