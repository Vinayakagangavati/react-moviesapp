import React, { useState, useEffect } from "react";
import Data from "../DataComp/Data.js";
import "./GenreCategorylist.css";
import { useParams, useNavigate } from "react-router-dom";

function GenreCategoryList() {
  const params = useParams();
  const navigate = useNavigate();
  const genrename = params.category;
  const [hoveredTitle, setHoveredTitle] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [noItemsFound, setNoItemsFound] = useState(false);

  useEffect(() => {
    const filtered = Data.filter((val) =>
      val.genres.includes(params.category)
    ).slice(0, 20);
    if (filtered.length === 0) {
      setNoItemsFound(true);
      navigate(`/genre/${genrename}`);
    } else {
      setFilteredData(filtered);
      setNoItemsFound(false);
    }
  }, [params.category, genrename, navigate]);

  const handleMouseEnter = (title) => {
    setHoveredTitle(title);
  };

  const handleMouseLeave = () => {
    setHoveredTitle(null);
  };

  function moviepagefun(title) {
    navigate(`/watch/${title}`);
  }

  return (
    <>
      <p
        style={{
          color: "#f24a20",
          fontSize: "30px",
          position: "relative",
          top: "10px",
          left: "20px",
        }}
      >
        {!noItemsFound && `Let's dive in to ${genrename} genre`}
      </p>
      <section id="genresec">
        {noItemsFound ? (
          <h1 style={{ color: "#f24a20", fontSize: "30px" }}>
            No items found in this genre
          </h1>
        ) : (
          filteredData.map((val) => (
            <div
              key={val.title}
              id="genrebox"
              onMouseEnter={() => handleMouseEnter(val.title)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={val.thumbnail}
                alt="thumbnail"
                id="genreimg"
                onClick={() => moviepagefun(val.title)}
              />
              <img
                src="https://i.pinimg.com/564x/47/48/64/474864b12b9e8e557fd88fb12c0ba0d5.jpg"
                id="videobtn"
                width="100px"
                alt="proj"
                style={{
                  visibility: val.title === hoveredTitle ? "visible" : "hidden",
                  position: "absolute",
                  top: "40%",
                  right: "35%",
                }}
              />
              <p id="genretitle">{val.title}</p>
              <p id="genreyear">{val.year}</p>
            </div>
          ))
        )}
      </section>
    </>
  );
}

export default GenreCategoryList;
