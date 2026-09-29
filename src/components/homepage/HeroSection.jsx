import pasta from '../../assets/pasta-banner.png';
import pizza from '../../assets/pizza-banner.png';
import dessert from '../../assets/dessert-banner.png';

import "./HeroSection.css";
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  pasta,
  pizza,
  dessert
];

function HeroSection() {
  // Start at 1 because index 0 is the cloned last slide
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const isAnimating = useRef(false);

  // Clone first and last slides
  const slides = [
    banners[banners.length - 1],
    ...banners,
    banners[0]
  ];

  const nextSlide = () => {
    if (isAnimating.current) return;

    isAnimating.current = true;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev + 1);
  };

  const previousSlide = () => {
    if (isAnimating.current) return;

    isAnimating.current = true;
    setIsTransitioning(true);
    setCurrentSlide((prev) => prev - 1);
  };

  // Handle the invisible jump after reaching a cloned slide
  const handleTransitionEnd = () => {
    if (currentSlide === slides.length - 1) {
      setIsTransitioning(false);
      setCurrentSlide(1);

      requestAnimationFrame(() => {
        isAnimating.current = false;
      });

      return;
    }

    if (currentSlide === 0) {
      setIsTransitioning(false);
      setCurrentSlide(banners.length);

      requestAnimationFrame(() => {
        isAnimating.current = false;
      });

      return;
    }

    isAnimating.current = false;
  };

  // Automatic slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-container">
      <section className="hero">

        <div className="hero-image">

          <div
            className="carousel-track"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              transition: isTransitioning
                ? "transform 0.6s ease"
                : "none"
            }}
          >
            {slides.map((banner, index) => (
              <img
                key={index}
                src={banner}
                alt="Recipe banner"
              />
            ))}
          </div>

          {/* Previous */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={previousSlide}
          >
            <ChevronLeft />
          </button>

          {/* Next */}
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={nextSlide}
          >
            <ChevronRight />
          </button>

          {/* Dots */}
          <div className="carousel-dots">
            {banners.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${
                  currentSlide === index + 1 ? "active" : ""
                }`}
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentSlide(index + 1);
                }}
              />
            ))}
          </div>

        </div>

      </section>
    </div>
  );
}

export default HeroSection;