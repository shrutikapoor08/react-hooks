import React, { useEffect, useState, useRef } from "react";
import Controls from "../Controls/Controls.jsx";
import Slide from "../Slide/Slide.jsx";
import "./slideshow.css";

const API_URL = "https://dummyjson.com/products";

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      fetch(API_URL)
        .then((res) => res.json())
        .then((data) => {
          setImages(data.products);
        });
    };
    fetchImages();
  }, []);

  const handleNext = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
      ref?.current.focus();
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
      ref?.current.focus();
    }
  };

  return (
    <div className="slideshow">
      {images.length > 0 && <Slide ref={ref} image={images[index]} />}
      {images.length > 0 && (
        <Controls handleNext={handleNext} handlePrev={handlePrev} />
      )}
    </div>
  );
};

export default Slideshow;
