import { forwardRef } from "react";

const Slide = forwardRef(function Slide({ image }, ref) {
  return (
    <div className="slide" tabIndex={0}>
      <a ref={ref} href="#">
        {image?.title}
      </a>
      <img src={image.images[0]} alt={image?.title} />
    </div>
  );
});

export default Slide;
