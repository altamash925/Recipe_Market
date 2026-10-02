function CarouselDots({
  banners,
  currentSlide,
  onDotClick
}) {
  return (
    <div className="carousel-dots">
      {banners.map((_, index) => (
        <button
          key={index}
          className={`carousel-dot ${
            currentSlide === index + 1 ? "active" : ""
          }`}
          onClick={() => onDotClick(index + 1)}
        />
      ))}
    </div>
  );
}

export default CarouselDots;