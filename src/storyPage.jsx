import { Link } from "react-router-dom";
import Footer from "./components/footer";
import "./index.css";
import Reviews from "./components/Reviews"
function StoryPage() {
  return (
    <main className="story-page">
      <section className="story-hero" aria-labelledby="story-heading">
        <div className="story-hero-inner">
          <div className="story-copy">
            <svg
              className="story-smiley"
              width="44"
              height="44"
              viewBox="0 0 44 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M22 6.5C13.44 6.5 6.5 13.44 6.5 22S13.44 37.5 22 37.5 37.5 30.56 37.5 22 30.56 6.5 22 6.5Z"
                stroke="#3a1d12"
                strokeWidth="2.2"
              />
              <path
                d="M16.2 19.2c0-1.1.7-2 1.6-2s1.6.9 1.6 2-.7 2-1.6 2-1.6-.9-1.6-2Zm8.4 0c0-1.1.7-2 1.6-2s1.6.9 1.6 2-.7 2-1.6 2-1.6-.9-1.6-2Z"
                fill="#3a1d12"
              />
              <path
                d="M15.8 26.2c2.1 3.2 5 4.8 6.2 4.8s4.1-1.6 6.2-4.8"
                stroke="#3a1d12"
                strokeWidth="2.2"
                strokeLinecap="round"
              />
            </svg>

            <h1 id="story-heading">
              Helping People to Eat
              <br />
              More and Waste Less
            </h1>

            <p>
              Fresh ingredients, mouth-watering recipes, and a passion for good
              food delivered to your door or ready for pick-up.
            </p>

            <Link className="order-button" to="/menu">
              Order Now <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="story-photos">
            <img
              className="story-photo story-photo-main"
              src="/quality.png"
              alt="A fresh salad being enjoyed at the table"
            />
            <img
              className="story-photo story-photo-side"
              src="/about2.png"
              alt="A plated meal served outdoors"
            />
            <img
              className="story-photo-sticker"
              src="/Menu.png"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="quality-section" aria-labelledby="quality-heading">
        <img className="quality-badge" src="/ok.png" alt="" />
        <h2 id="quality-heading">
          Pure Quality, No
          <br />
          Compromises
        </h2>
        <p className="quality-intro">
          Meticulously crafted with certified premium ingredients, ensuring you
          get the cleanest label, most
          <br className="quality-desktop-break" />
          thoughtfully prepared nutrition available.
        </p>

        <div className="quality-stage">
          <div className="quality-orbit" aria-hidden="true" />

          <img
            className="quality-meal"
            src="/quality.png"
            alt="A freshly prepared meal served at a table"
          />

          <div className="quality-cards-orbit">
            <div className="quality-card quality-card-one">
              <span className="quality-icon" aria-hidden="true">♧</span>
              <p>Unidine delivers memorable experiences with friendly service.</p>
            </div>
            <div className="quality-card quality-card-two">
              <span className="quality-icon" aria-hidden="true">♡</span>
              <p>Savor delicious meals in a welcoming atmosphere at Unidine.</p>
            </div>
            <div className="quality-card quality-card-three">
              <span className="quality-icon" aria-hidden="true">♧</span>
              <p>Experience Indian culture at Unidine, where every meal celebrates flavors.</p>
            </div>
            <div className="quality-card quality-card-four">
              <span className="quality-icon" aria-hidden="true">♧</span>
              <p>Unidine serves tasty Indian dishes in a vibrant setting.</p>
            </div>
            <div className="quality-card quality-card-five">
              <span className="quality-icon" aria-hidden="true">♡</span>
              <p>Relish a meal at Unidine, where the atmosphere elevates every bite.</p>
            </div>
            <div className="quality-card quality-card-six">
              <span className="quality-icon" aria-hidden="true">♧</span>
              <p>Enjoy the bold flavors of Indian cuisine at Unidine, where spices shine.</p>
            </div>
          </div>
        </div>
      </section>,
<Reviews/>
      <Footer />
    </main>
  );
}

export default StoryPage;
