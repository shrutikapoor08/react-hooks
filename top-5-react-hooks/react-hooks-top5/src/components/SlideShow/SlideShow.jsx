import { useEffect, useState, useRef, createContext, useContext } from "react";
import "./SlideShow.css";

const ThemeContext = createContext("light");

function SlideShow() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slides, setSlides] = useState([]);
  const slideRef = useRef(null);
  const [theme, setTheme] = useState("light");

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
    <ThemeContext.Provider value={theme}>
      <header>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Change theme {theme}
        </button>
      </header>
      <div className="slideshow slide-${theme}">
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
    </ThemeContext.Provider>
  );
}

export default SlideShow;
