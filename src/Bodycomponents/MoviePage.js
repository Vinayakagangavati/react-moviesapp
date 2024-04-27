import { useEffect, useState } from "react";
import "./MoviePage.css";
import { useParams } from "react-router-dom";
import dataCarousel from "../DataComp/Datacarousel";
import datatv from "../DataComp/DataTv";
import data from "../DataComp/Data";

function MoviePage() {
  const params = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    let movie = data.find((movie) => movie.title === params.name);
    if (!movie) {
      movie = dataCarousel.find((movie) => movie.title === params.name);
    }
    if (!movie) {
      movie = datatv.find((movie) => movie.title === params.name);
    }

    setItem(movie);
  }, [params.name]);

  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "80vh",
          position: "relative",
          border: "1px solid white",
        }}
      >
        <img
          src={item.thumbnail}
          alt="imgposter"
          style={{ width: "99.9vw", height: "79.8vh", objectFit: "fill" }}
        />
        <p id="title">{item.title}</p>
        <p id="year">{item.year}</p>
        <p id="genre">{item.genres}</p>
        <p id="summary">{item.extract}</p>
        <button className="watch-button">Watch Now</button>
        <button className="add-button">Add to List</button>
      </div>
    </>
  );
}

export default MoviePage;
