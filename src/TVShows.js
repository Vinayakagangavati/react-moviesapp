import React, { useState } from "react";
import tvdata from "./DataComp/DataTv.js";
import "./Cat.css";

function TVShows({ from }) {
  const [hoveredTitle, setHoveredTitle] = useState(null);
  const tvarr = from === "sub" ? tvdata.slice(0, 15) : tvdata.slice(0, 30);
  const handleMouseEnter = (title) => {
    setHoveredTitle(title);
  };

  const handleMouseLeave = () => {
    setHoveredTitle(null);
  };

  return (
    <>
      <p id="catname" className="me-0">
        {from === "sub" ? "TVShows" : "Deep Dive into TVShows"}
      </p>
      <div id={from === "sub" ? "none" : "none1"}>
        {tvarr.map((val) => (
          <div
            id="listcatcontainer"
            key={val.title}
            onMouseEnter={() => handleMouseEnter(val.title)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={val.thumbnail} alt="thumbnail" id="containerimg" />
            <img
              src="https://i.pinimg.com/564x/47/48/64/474864b12b9e8e557fd88fb12c0ba0d5.jpg"
              id="videobtn"
              width="100px"
              alt="reactpro"
              style={{
                visibility: val.title === hoveredTitle ? "visible" : "hidden",
              }}
            />
            <p id="distitle">{val.title}</p>
            <p id="disyear">{val.year}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default TVShows;
