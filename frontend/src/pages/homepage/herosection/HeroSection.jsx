import "./HeroSection.css";
import { useEffect, useRef, useState } from "react";

import banners from "./banners";
import CarouselTrack from "./CarouselTrack";
import CarouselArrows from "./CarouselArrows";
import CarouselDots from "./CarouselDots";

function HeroSection() {

  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const isAnimating = useRef(false);

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

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (slideNumber) => {
    setIsTransitioning(true);
    setCurrentSlide(slideNumber);
  };

  return (
    <div className="hero-container">

      <section className="hero">

        <div className="hero-image">

          <CarouselTrack
            slides={slides}
            currentSlide={currentSlide}
            isTransitioning={isTransitioning}
            onTransitionEnd={handleTransitionEnd}
          />

          <CarouselArrows
            onPrevious={previousSlide}
            onNext={nextSlide}
          />

          <CarouselDots
            banners={banners}
            currentSlide={currentSlide}
            onDotClick={handleDotClick}
          />

        </div>

      </section>

    </div>
  );
}

export default HeroSection;