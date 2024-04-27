import React, { useState } from "react";
import datatv from "../DataComp/DataTv";
import "./Tvshows.css";
import { useNavigate } from "react-router-dom";

function TVShows() {
  const [hoveredTitle, setHoveredTitle] = useState(null);
  const tvarr = datatv;
  const navigate = useNavigate();
  const handleMouseEnter = (title) => {
    setHoveredTitle(title);
  };

  const handleMouseLeave = () => {
    setHoveredTitle(null);
  };

  function moviepagefun(title) {
    console.log("Hi");
    const a = title;
    navigate(`/watch/${a}`);
  }

  return (
    <>
      <p id="catname" className="me-0">
        Deep Dive into TVShows
      </p>
      <div id="none1">
        {tvarr.map((val) => (
          <div
            id="listcatcontainer"
            key={val.title}
            onMouseEnter={() => handleMouseEnter(val.title)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={val.thumbnail}
              alt="thumbnail"
              id="containerimg"
              onClick={() => moviepagefun(val.title)}
            />
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
