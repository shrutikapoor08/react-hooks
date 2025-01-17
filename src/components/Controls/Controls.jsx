const Controls = ({ handleNext, handlePrev }) => {
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

export default Controls;
