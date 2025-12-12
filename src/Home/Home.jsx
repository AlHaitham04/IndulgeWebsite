import './Home.css';
import { Link } from "react-router-dom";
import { FaInstagram } from 'react-icons/fa';
import HomeSlider from "../HPimageSlider/HPimageSlider.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const images = [
  "/E05/E05.1.jpg",
  "/C01/C01.1.jpg",
  "/C02/C02.1.jpg"
];

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out",
    });
  }, []);

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text" data-aos="fade-right">
          <h1>
            <span className="snell">I</span>
            <span className="basker">ndulge</span>
          </h1>

          <p className="intro-text">
            Where timeless style meets cultural elegance. Browse our exclusive collection of abayas and women’s wear, made to reflect your inner grace and sophistication.
          </p>

          <div className="button-group" data-aos="fade-up" data-aos-delay="200">
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

        <div className="showroom" data-aos="fade-left">
          <HomeSlider images={images} />
        </div>
      </section>

      <section className="features" data-aos="fade-up">
        <div className="feature-item">
          <h2>Our Story</h2>
          <p>
            Born from a love for timeless fashion and cultural heritage, Indulge began with a vision to create abayas and women's wear that celebrate grace and individuality. Inspired by tradition and crafted with care, each piece reflects modern elegance while honoring our roots. Our passion is bringing sophistication and comfort together, so every woman can feel confident and beautiful.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Home;
