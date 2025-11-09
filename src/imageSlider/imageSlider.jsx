import { useState } from "react";
import "./imageSlider.css";

function ImageSlider({ images }) {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    if (!images || images.length === 0) return null;

    return (
        <div className="slider">
            <button className="prev" onClick={prevSlide}>
                ❮
            </button>

            <img src={images[current]} alt={`slide ${current}`} className="slide-img" />

            <button className="next" onClick={nextSlide}>
                ❯
            </button>

            <div className="dots">
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

export default ImageSlider;
