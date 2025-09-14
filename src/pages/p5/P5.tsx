import styles from "./P5.module.css"

interface CatalogUnit{
    description: string;
    href: string;
}

const catalogs: CatalogUnit[] = [
    { href: "/images/p5/catalog-1.png", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget."},
    { href: "/images/p5/catalog-2.png", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget."},
    { href: "/images/p5/catalog-3.png", description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget."},
];

export default function P5(){
    return <div className={styles.container}>
        <h1 className={styles.header1}>Projects and practice</h1>
        <div className={styles.catalogs}>
            {
                catalogs.map((catalog, index)=> (
                    <div key={index}>
                        <span className={styles.index}>{index < 10 ? `0${index+1}`: index+1}</span>
                        <p className={styles.paragraph}>{catalog.description}</p>
                        <img src={catalog.href} className={styles.img}/>
                    </div>
                ))
            }
        </div>
    </div>
}