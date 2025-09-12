import "./P5.css"

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
    return <>
        <h1>Projects and practice</h1>
        <div className="catalogs">
            {
                catalogs.map((catalog, index)=> (
                    <div key={index}>
                        <span className="index">{index < 10 ? `0${index+1}`: index+1}</span>
                        <p>{catalog.description}</p>
                        <img src={catalog.href} />
                    </div>
                ))
            }
        </div>
    </>
}