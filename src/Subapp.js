import { useState } from "react";
import Maingenre from "./Maingenre.js";
import TrendingSort from "./TrendingSort.js";
import TVShows from "./TVShows.js";
import data from "./DataComp/Data.js";
import tvdata from "./DataComp/DataTv.js";
import "./Subapp.css";

function Subapp({ onsmash }) {
  const [selectedCategory, setSelectedCategory] = useState("movies");

  function handleCategoryChange(category) {
    setSelectedCategory(category);
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col col-8">
            <article>
              <Maingenre
                genre="Thriller"
                genretitle="Crime Thrillers for You..."
                onsmash={onsmash}
              />
              <Maingenre
                genre="Comedy"
                genretitle="Time to Smile..."
                onsmash={onsmash}
              />
            </article>
          </div>
          <div className="col ms-xl-5 ms-lg-3 ms-1 height-auto">
            <section
              style={{ color: "#f24a20", fontSize: "30px", marginLeft: "10px" }}
            >
              Trending...
            </section>
            <nav className="nav my-2">
              <li
                className="nav-item"
                type="button"
                onClick={() => handleCategoryChange("movies")}
                style={
                  selectedCategory === "movies" ? { color: "#f24a20" } : {}
                }
              >
                Movies
              </li>
              <li
                className="nav-item"
                type="button"
                onClick={() => handleCategoryChange("tvshows")}
                style={
                  selectedCategory !== "movies" ? { color: "#f24a20" } : {}
                }
              >
                TVShows
              </li>
            </nav>
            {selectedCategory === "movies" ? (
              <TrendingSort data={data} type={"movies"} />
            ) : (
              <TrendingSort data={tvdata} type={"webseries"} />
            )}
          </div>
        </div>
      </div>
      <Maingenre
        genre="Horror"
        genretitle="Don't Be Scared..."
        onsmash={onsmash}
      />
      <Maingenre
        genre="Drama"
        genretitle="Lot's of Drama..."
        onsmash={onsmash}
      />
      <TVShows from={"sub"} />
    </>
  );
}

export default Subapp;
