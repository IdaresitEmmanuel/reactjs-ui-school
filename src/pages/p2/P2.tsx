import "./P2.css";

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
    <>
      {/* Hero section */}
      <div className="hero">
        {/* left  */}
        <div className="intro">
          <h1>Discover the beauty around the world</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper habitant arcu.
          </p>
          <button>
            <span className="btn-text">Get Started</span>
          </button>
        </div>
        {/* right */}
        <div className="intro-slides">
          <div className="hero-box">
            <img className="hero-img" src="/images/p2/hero-1.png" />
          </div>
          <div className="hero-box">
            <img className="hero-img" src="/images/p2/hero-2.png" />
          </div>
        </div>
      </div>

      {/** Gallery */}
      <div className="gallery">
        {galleryList.map((catalogUnit, index) => (
          <div key={index} className="catalog-unit">
            <span className="catalog-title">{index < 10 ? `0${index+1}`: index}</span>
            <div className="catalog-img-box">
              <img className="catalog-img" src={catalogUnit.href} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
