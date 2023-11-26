import React, { useState, useEffect } from "react";
import CarouselData from "./CarouselData";
import "./Carousel.css";

function Carousel() {
  const [current, setCurrent] = useState(0);
  const arrimg = CarouselData;

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((current + 1) % arrimg.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current, arrimg]);

  function prevfun() {
    setCurrent((current - 1 + arrimg.length) % arrimg.length);
  }

  function nextfun() {
    setCurrent((current + 1) % arrimg.length);
  }

  return (
    <div className="mydiv">
      <img src={arrimg[current].thumbnail} id="myimg" alt="carimg" />
      <button id="prev" onClick={prevfun}>
        &lt;
      </button>
      <button id="next" onClick={nextfun}>
        &gt;
      </button>
      <button id="watch">Watch Now</button>
      <button id="add">Add to List</button>
      <p id="title">{arrimg[current].title}</p>
      <p id="year">{arrimg[current].year}</p>
      <p id="genre">{arrimg[current].genres[0]}</p>
      <p id="plot">{arrimg[current].extract}</p>
    </div>
  );
}

export default Carousel;
