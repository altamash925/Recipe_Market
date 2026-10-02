function CarouselTrack({
  slides,
  currentSlide,
  isTransitioning,
  onTransitionEnd
}) {
  return (
    <div
      className="carousel-track"
      onTransitionEnd={onTransitionEnd}
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
  );
}

export default CarouselTrack;