import { useState, useMemo } from "react";
import Data from "./DataComp/Data.js";
import "./Genrepagelist.css";
import { useNavigate } from "react-router-dom";

function GenrepageList({ genreval }) {
  const [hoveredTitle, setHoveredTitle] = useState(null);
  const filteredData = useMemo(
    () => Data.filter((val) => val.genres.includes(genreval)).slice(0, 20),
    [genreval]
  );

  const handleMouseEnter = (title) => {
    setHoveredTitle(title);
  };

  const handleMouseLeave = () => {
    setHoveredTitle(null);
  };
  const navigate = useNavigate();
  function navigateHome() {
    navigate("/genre");
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
        Let's dive in to {genreval} genre
      </p>

      <button onClick={navigateHome}>Back to Home</button>
      <section id="genresec">
        {filteredData.map((val) => (
          <div
            key={val.title}
            id="genrebox"
            onMouseEnter={() => handleMouseEnter(val.title)}
            onMouseLeave={handleMouseLeave}
          >
            <img src={val.thumbnail} alt="thumbnail" id="genreimg" />
            <img
              src="https://i.pinimg.com/564x/47/48/64/474864b12b9e8e557fd88fb12c0ba0d5.jpg"
              id="videobtn"
              width="100px"
              alt="proj"
              style={{
                visibility: val.title === hoveredTitle ? "visible" : "hidden",
              }}
            />
            <p id="genretitle">{val.title}</p>
            <p id="genreyear">{val.year}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default GenrepageList;
