import React, { useState } from "react";
import Data from "./Data.js";
import "./Cat.css";

function Maingenre(props) {
  const [hoveredTitle, setHoveredTitle] = useState(null);
  const filteredData = Data.filter((val) => val.genres.includes(props.genre)).slice(0, 12);

  const handleMouseEnter = (title) => {
    setHoveredTitle(title);
  };

  const handleMouseLeave = () => {
    setHoveredTitle(null);
  };

  return (
    <>
      <p id="catname" className="me-0">
        {props.genretitle}
      </p>
      <div id={(props.genre === "Horror" || props.genre === "Drama") ? "none" : "listcatsection"}>
        {filteredData.map((val) => (
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

export default Maingenre;
