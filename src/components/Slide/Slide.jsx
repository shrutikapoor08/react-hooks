import { forwardRef } from "react";
export default forwardRef(
  props,
  ref
)(function Slide({ image }, ref) {
  return (
    <div className="slide" tabIndex={0} ref={ref}>
      <img src={image.images[0]} alt={image?.title} />
    </div>
  );
});
