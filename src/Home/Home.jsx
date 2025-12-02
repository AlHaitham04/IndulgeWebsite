import './Home.css';
import { Link } from "react-router-dom";
import { FaInstagram } from 'react-icons/fa';
import HomeSlider from "../HPimageSlider/HPimageSlider.jsx";


const images = [
  "/IndulgeWebsite/E05/E05.1.jpg",
  "/IndulgeWebsite/C01/C01.1.jpg",
  "/IndulgeWebsite/C02/C02.1.jpg"

];


function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1 >Indulge Oman</h1>
          <p className="intro-text">
            Where timeless style meets cultural elegance. Browse our exclusive collection of abayas and women’s wear, made to reflect your inner grace and sophistication.          </p>
          <div className="button-group">
            <Link to="/Shop" className="btn view-btn">Explore Collection</Link>
            <a
              href="https://www.instagram.com/indulge.oman"
              target="_blank"
              rel="noopener noreferrer"
              className="btn insta-btn"
            >
              <FaInstagram className="insta-icon" /> Follow us
            </a>
          </div>
        </div>
        <div className="showroom">
          <HomeSlider images={images} />
        </div>
      </section>

      <section className="features">
        <div className="feature-item">
          <h2>Our Story</h2>
          <p>From local tradition to modern elegance.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
