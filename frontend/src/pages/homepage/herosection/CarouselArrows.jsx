import { ChevronLeft, ChevronRight } from "lucide-react";

function CarouselArrows({ onPrevious, onNext }) {
  return (
    <>
      <button
        className="carousel-arrow carousel-arrow-left"
        onClick={onPrevious}
      >
        <ChevronLeft />
      </button>

      <button
        className="carousel-arrow carousel-arrow-right"
        onClick={onNext}
      >
        <ChevronRight />
      </button>
    </>
  );
}

export default CarouselArrows;