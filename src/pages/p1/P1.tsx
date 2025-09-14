import styles from "./P1.module.css";

interface Image {
  name: string;
  href: string;
}

const imageList: Image[] = [
  { name: "img-1", href: "/images/p1/img-1.png" },
  { name: "img-2", href: "/images/p1/img-2.png" },
  { name: "img-3", href: "/images/p1/img-3.png" },
  { name: "img-4", href: "/images/p1/img-4.png" },
  { name: "img-5", href: "/images/p1/img-5.png" },
  { name: "img-6", href: "/images/p1/img-6.png" },
  { name: "img-7", href: "/images/p1/img-7.png" },
  { name: "img-8", href: "/images/p1/img-8.png" },
];

export default function P1() {
  return (
    <div className={styles.container}>
      <div className={styles.intro}>
        <h1 className={styles.header1}>
          Discover the beauty
          <br /> around the world
        </h1>
        <p className={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          libero risus semper habitant arcu eget. Et integer facilisi eget diam.
        </p>
        <button>
          <span className={styles.button_text}>Explore</span>
        </button>
      </div>

      <div className={styles.grid}>
        {imageList.map((img, key) => (
          <div key={key} className={styles.grid_item}>
            <img src={img.href} className={styles.grid_item_img} />
          </div>
        ))}
      </div>
    </div>
  );
}
