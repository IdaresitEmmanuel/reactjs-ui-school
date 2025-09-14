import CircularText from "../../component/circular text/CircularText";
import styles from "./P6.module.css";
import Timer from "../../assets/p6/timer.svg";
import Sun from "../../assets/p6/sun.svg";
import Star from "../../assets/p6/star.svg";
import Visible from "../../assets/p6/visible.svg";
import Language from "../../assets/p6/language.svg";
import Diamond from "../../assets/p6/diamond.svg";
import EightStar from "../../component/star/Star";

interface Social {
  href: string;
  description: string;
}

const socials: Social[] = [
  { href: Sun, description: "Lorem ipsu dolor amet" },
  { href: Star, description: "Lorem ipsu dolor amet" },
  { href: Visible, description: "Lorem ipsu dolor amet" },
  { href: Language, description: "Lorem ipsu dolor amet" },
];

export default function P6() {
  return (
    <>
      <div className={styles.box}>
        {/* Left Side */}
        <div>
          <CircularText radius={50}>
            <img src={Timer} style={{ height: "28px", display: "block" }} />
          </CircularText>
          <div className={styles.intro}>
            <h1 className={styles.header1}>THE eWatch with the newest microchip technology</h1>
            <p className={styles.paragraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper habitant arcu eget. Et integer facilisi
              eget diam.
            </p>
            <div className={styles.ac_btn}>
              <button>Order now</button>
              <button className={styles.hollow_btn}>Explore more</button>
            </div>
          </div>
          <div className={styles.socials}>
            {socials.map((social, index) => (
              <div key={index} className={styles.social_box}>
                <img src={social.href} />
                <p className={`${styles.social_desc} ${styles.paragraph}`}>{social.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right side */}
        <div className={styles.showcase}>
          <div className={styles.showcase_img_position_box}>
            <div className={styles.showcase_l_box}>
              <div className={styles.eight_star}>
                <EightStar />
              </div>
            </div>
            <div className={styles.showcase_r_box}/>
            <div className={styles.showcase_img_box}>
              <img src="/images/p6/showcase.png" />
              <img src={Diamond} className={styles.diamond_l} />
              <img src={Diamond} className={styles.diamond_r} />
              
            </div>
            <div className={`${styles.show_tag} ${styles.t}`}>Award winning product</div>
              <div className={`${styles.show_tag} ${styles.b}`}>Ergonomic design</div>
          </div>
        </div>
      </div>
    </>
  );
}
