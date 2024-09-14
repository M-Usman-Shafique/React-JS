import React, { useState, useEffect } from "react";
import "./Slider.css";

function Slider() {
  const images = [
    "https://farm2.staticflickr.com/1449/24800673529_64272a66ec_z_d.jpg",
    "https://farm4.staticflickr.com/3752/9684880330_9b4698f7cb_z_d.jpg",
    "https://farm9.staticflickr.com/8295/8007075227_dc958c1fe6_z_d.jpg",
    "https://farm2.staticflickr.com/1533/26541536141_41abe98db3_z_d.jpg",
  ];
  const [index, setIndex] = useState(0);
  const [bgDark, setBgDark] = useState(false);

  const handleNext = () => {
    if (index < images.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(images.length - 1);
    }
  };

  const handleReset = () => {
    setIndex(0);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") {
      handleNext();
    } else if (e.key === "ArrowLeft") {
      handlePrev();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [index]);

  const handleToggle = () => {
    setBgDark(!bgDark);    // Flips the current state: true to false & vice versa.
  };

  useEffect(() => {
    document.body.style.backgroundColor = bgDark ? "#282c34" : "";
  }, [bgDark]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="image-slider">
          <div className="image-container">
            {bgDark && <img src={images[index]} className="image-display" alt="slider" />}
          </div>
          <div className="buttons">
            <button onClick={handlePrev} className="btn">
              Prev
            </button>
            <button onClick={handleReset} className="btn btn-reset">
              Reset
            </button>
            <button onClick={handleNext} className="btn">
              Next
            </button>
          </div>
        </div>
      </header>
      <div className="container">
        <label className="toggle-switch">
          <input type="checkbox" onChange={handleToggle} />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
}

export default Slider;
