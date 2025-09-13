import CircularText from "../../component/circular text/CircularText";
import "./P6.css";
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
      <div className="box">
        {/* Left Side */}
        <div>
          <CircularText radius={50}>
            <img src={Timer} style={{ height: "28px", display: "block" }} />
          </CircularText>
          <div className="intro">
            <h1>THE eWatch with the newest microchip technology</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper habitant arcu eget. Et integer facilisi
              eget diam.
            </p>
            <div className="ac-btn">
              <button>Order now</button>
              <button className="hollow-btn">Explore more</button>
            </div>
          </div>
          <div className="socials">
            {socials.map((social, index) => (
              <div key={index} className="social-box">
                <img src={social.href} />
                <p className="social-desc">{social.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Right side */}
        <div className="showcase">
          <div className="showcase-img-position-box">
            <div className="showcase-l-box">
              <div className="eight-star">
                <EightStar />
              </div>
            </div>
            <div className="showcase-r-box"></div>
            <div className="showcase-img-box">
              <img src="/images/p6/showcase.png" />
              <img src={Diamond} className="diamond-l" />
              <img src={Diamond} className="diamond-r" />
              
            </div>
            <div className="show-tag t">Award winning product</div>
              <div className="show-tag b">Ergonomic design</div>
          </div>
        </div>
      </div>
    </>
  );
}
