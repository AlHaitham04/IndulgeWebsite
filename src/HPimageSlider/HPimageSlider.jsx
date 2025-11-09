import { useState, useEffect } from "react";
import "./HPimageSlider.css";

function HomeSlider({ images, interval = 6000 }) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, interval);
        return () => clearInterval(slideInterval);
    }, [images.length, interval]);

    if (!images || images.length === 0) return null;

    return (
        <div className="home-slider">
            {images.map((img, index) => (
                <div
                    key={index}
                    className={`home-slide ${index === current ? "active" : ""}`}
                >
                    <img src={img} alt={`Slide ${index}`} />
                </div>
            ))}

            <div className="home-dots">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === current ? "active" : ""}`}
                        onClick={() => setCurrent(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default HomeSlider;
