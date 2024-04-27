import React, { useState, useEffect } from "react";
import "./Carousel.css";
import DataCarousel from "../DataComp/Datacarousel";
import { useNavigate } from "react-router-dom";

function Carousel() {
  const [current, setCurrent] = useState(0);
  const arrimg = DataCarousel;
  const navigate = useNavigate();

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

  function moviepagefun() {
    const a = arrimg[current].title;
    navigate(`/watch/${a}`);
  }

  return (
    <div className="mydiv">
      <img
        src={arrimg[current].thumbnail}
        id="myimg"
        alt="carimg"
        onClick={moviepagefun}
      />
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
