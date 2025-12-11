import { useState } from "react";
import "./imageSlider.css";

function ImageSlider({ images }) {
    const [current, setCurrent] = useState(0);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const swipeThreshold = 50;

        if (distance > swipeThreshold) nextSlide();
        if (distance < -swipeThreshold) prevSlide();

        setTouchStart(null);
        setTouchEnd(null);
    };

    if (!images || images.length === 0) return null;

    return (
        <div
            className="slider"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <button className="prev" onClick={prevSlide}>
                ❮
            </button>

            <a href={images[current]} target="_blank" rel="noopener noreferrer">
                <img
                    src={images[current]}
                    alt={`slide ${current}`}
                    className="slide-img"
                />
            </a>

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
