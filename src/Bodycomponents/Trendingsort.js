import React from "react";
import "./Trendingsort.css";
import { useNavigate } from "react-router-dom";

function TrendingSort({ data, type }) {
  let navigate = useNavigate();
  let arr = data.slice(0, 23);

  function moviepagefun(title) {
    const a = title;
    navigate(`/watch/${a}`);
  }

  return (
    <div className="container-fluid">
      {arr.map((item, index) => (
        <div className="row" id="maindiv" key={index}>
          <div className="col col-6">
            <div className="mt-1" style={{ color: "#f24a20" }}>
              {type === "movies" ? "Movies" : "TV/WS"}
            </div>
            <div id="ttitle" className="fs-4">
              {item.title}
            </div>
            {type === "movies" ? (
              <>
                <section>
                  <span id="tyear">{item.year}</span>
                  <span id="tgenre">{item.genres[0]}</span>
                </section>
              </>
            ) : (
              <>
                <section>
                  <span id="tyear">{item.year}</span>
                  <span id="trating">&#9734;{item.Ratings}</span>
                  <span id="tgenre">{item.genres}</span>
                </section>
              </>
            )}
          </div>
          <div className="col col-4" id="imgdiv">
            <img
              src={item.thumbnail}
              alt="dp"
              id="timg"
              onClick={() => moviepagefun(item.title)}
            />
          </div>
          <div id="hruler"></div>
        </div>
      ))}
    </div>
  );
}

export default TrendingSort;
