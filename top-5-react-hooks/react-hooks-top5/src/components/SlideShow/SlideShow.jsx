import { useState } from "react";
import "./SlideShow.css";

function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = ["Slide 1", "Slide 2", "Slide 3"];

  const prevSlide = () => {
    if (currentSlide === 0) return;

    setCurrentSlide(currentSlide - 1);
  };
  const nextSlide = () => {
    if (currentSlide === slides.length - 1) return;
    setCurrentSlide(currentSlide + 1);
  };
  return (
    <div className="slideshow">
      <div className="slide">
        <h1>{slides[currentSlide]}</h1>
      </div>
      <div className="controls">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
}

export default SlideShow;
