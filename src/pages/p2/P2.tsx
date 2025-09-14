import styles from "./P2.module.css";

interface CatalogUnit {
  name: string;
  href: string;
}

const galleryList: CatalogUnit[] = [
  { name: "catalog-1", href: "/images/p2/catalog-1.png" },
  { name: "catalog-2", href: "/images/p2/catalog-2.png" },
  { name: "catalog-3", href: "/images/p2/catalog-3.png" },
];

export default function P2() {
  return (
    <div className={styles.container}>
      {/* Hero section */}
      <div className={styles.hero}>
        {/* left  */}
        <div className={styles.intro}>
          <h1 className={styles.header1}>Discover the beauty around the world</h1>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu.
          </p>
          <button>
            <span className={styles.btn_text}>Get Started</span>
          </button>
        </div>
        {/* right */}
        <div className={styles.intro_slides}>
          <div className={styles.hero_box}>
            <img className={styles.hero_img} src="/images/p2/hero-1.png" />
          </div>
          <div className={styles.hero_box}>
            <img className={styles.hero_img} src="/images/p2/hero-2.png" />
          </div>
        </div>
      </div>

      {/** Gallery */}
      <div className={styles.gallery}>
        {galleryList.map((catalogUnit, index) => (
          <div key={index} className={styles.catalog_unit}>
            <span className={styles.catalog_title}>{index < 10 ? `0${index+1}`: index}</span>
            <div className={styles.catalog_img_box}>
              <img className={styles.catalog_img} src={catalogUnit.href} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
