import { useState } from "react";
import "./slideshow.css";

const images = [
  {
    url: "https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Blue domes in greece",
  },
  {
    url: "https://images.pexels.com/photos/575362/pexels-photo-575362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Tower bridge in London",
  },
  {
    url: "https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    alt: "Boats in Venice",
  },
];

const Slide = ({ image }) => {
  return (
    <div className="slide">
      <img src={image?.url} alt={image?.alt} />
    </div>
  );
};

const Controls = ({ index, setIndex, totalSlides }) => {
  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const handleNext = () => {
    if (index < totalSlides - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div className="controls">
      <button className="control-btn left" onClick={handlePrev}>
        &#8249;
      </button>
      <button className="control-btn right" onClick={handleNext}>
        &#8250;
      </button>
    </div>
  );
};

const Slideshow = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="slideshow">
      <Slide image={images[index]} />
      <Controls index={index} setIndex={setIndex} totalSlides={images.length} />
    </div>
  );
};

export default Slideshow;
