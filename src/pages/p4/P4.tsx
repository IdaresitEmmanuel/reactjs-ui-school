import "./P4.css"

const whatWeOffer: string[] = Array.from({length: 2}, ()=> "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.");

export default function P4() {
  return (
    <div className="box">
      <img src="/images/p4/showcase.png" />
      <div className="intro">
        <h1>Exploration and inspiration</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          libero risus semper habitant arcu eget. Et integer facilisi eget diam.
        </p>
        <button>Explore</button>

        <div className="offer">
            {
                whatWeOffer.map((offer, index)=> (
                    <div key={index} className="offer-box">
                        <span className="index">{index < 10 ? `0${index+1}`: index+1}</span>
                        <p className="offer-desc">{offer}</p>
                    </div>
                ))
            }
        </div>
      </div>
    </div>
  );
}
