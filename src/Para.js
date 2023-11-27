import "./Para.css";
function Para({ item }) {
  return (
    <>
      <div
        style={{
          widyth: "100vw",
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
        <p id="summary">{item.Summary}</p>
        <button id="watch1">Watch Now</button>
        <button id="add1">Add to List</button>
      </div>
    </>
  );
}
export default Para;
