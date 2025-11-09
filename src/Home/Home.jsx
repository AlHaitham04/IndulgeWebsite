import './Home.css';
import { Link } from "react-router-dom";
import { FaInstagram } from 'react-icons/fa';

function Home() {
  return (
    <div className="home-container">
      <h1>Indulge Oman</h1>

      <div className="home-content">
        <p className="intro-text">
          Where elegance meets tradition. Explore our curated collection of abayas and women's wear — designed to bring out your inner grace with timeless style.
        </p>

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
    </div>
  );
}

export default Home;
