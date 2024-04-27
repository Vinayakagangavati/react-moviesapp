import React, { useState } from "react";
import Data from "../DataComp/Data.js";
import "./Tvshows.css";
import { useNavigate } from "react-router-dom";

function Maingenre({ genre, genretitle }) {
  const [hoveredTitle, setHoveredTitle] = useState(null);
  const filteredData = Data.filter((val) => val.genres.includes(genre)).slice(
    0,
    12
  );
  const navigate = useNavigate();
  const handleMouseEnter = (title) => {
    setHoveredTitle(title);
  };

  const handleMouseLeave = () => {
    setHoveredTitle(null);
  };

  function moviepagefun(title) {
    const a = title;
    navigate(`/watch/${a}`);
  }
  return (
    <>
      <p id="catname" className="me-0">
        {genretitle}
      </p>
      <div
        id={genre === "Horror" || genre === "Drama" ? "none" : "listcatsection"}
      >
        {filteredData.map((val) => (
          <div
            id="listcatcontainer"
            key={val.title}
            onMouseEnter={() => handleMouseEnter(val.title)}
            onMouseLeave={handleMouseLeave}
            onClick={() => moviepagefun(val.title)}
          >
            <img src={val.thumbnail} alt="thumbnail" id="containerimg" />
            <img
              src="https://i.pinimg.com/564x/47/48/64/474864b12b9e8e557fd88fb12c0ba0d5.jpg"
              id="videobtn"
              width="100px"
              alt="altimg"
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
