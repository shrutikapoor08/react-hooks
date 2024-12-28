import { useEffect, useState, useRef } from "react";
import "./SlideShow.css";

function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);
  const slideRef = useRef(null);

  const API_URL = "https://dummyjson.com/products";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) throw new Error("Failed to fetch data");
        const jsonData = await response.json();
        setSlides(jsonData?.products);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  const prevSlide = () => {
    if (currentSlide === 0) return;
    setCurrentSlide(currentSlide - 1);
    slideRef.current.focus();
  };
  const nextSlide = () => {
    if (currentSlide === slides.length - 1) return;
    setCurrentSlide(currentSlide + 1);
    slideRef.current.focus();
  };
  return (
    <div className="slideshow">
      <div className="slide" ref={slideRef} tabIndex={0}>
        <img
          src={slides[currentSlide]?.thumbnail}
          alt={slides[currentSlide]?.description}
        />
      </div>
      <div className="controls">
        <button onClick={prevSlide}>Previous</button>
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
}

export default SlideShow;
