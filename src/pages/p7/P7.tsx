import styles from "./P7.module.css";

interface catalog {
  index: string;
  catalogDescription: string;
  imageTitle: string;
  imageDescription: string;
  imgLink: string;
}

const catalogs: catalog[] = Array.from({ length: 4 }, (_, index) => ({
  index: index < 10 ? `0${index + 1}` : index.toString(),
  catalogDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  imageTitle: "Title",
  imageDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus",
  imgLink: `/images/p7/catalog-${index + 1}.png`,
}));

export default function P7() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header1}>
        Design is the way how you express the feelings
      </h1>
      <div className={styles.catalogs_container}>
        {catalogs.map((catalog) => (
          <div className={styles.catalog_item}>
            <span className={styles.catalog_index}>{catalog.index}</span>
            <p className={styles.catalog_desc}>{catalog.catalogDescription}</p>
            <div className={styles.catalog_img_box}>
              <img src={catalog.imgLink} className={styles.catalog_img}/>
              <div className={styles.image_title_box}>
                <h2 className={styles.header2}>{catalog.imageTitle}</h2>
                <p className={styles.image_desc}>{catalog.imageDescription}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
