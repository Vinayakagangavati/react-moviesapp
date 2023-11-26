import CarouselComponent from "./CarouselComp/Carousel.js";
import GenreList from "./GenreLists.js";
import Subapp from "./Subapp.js";
import { useState } from "react";
import GenrepageList from "./Genrepagelist.js";
function App() {
  const [genrereceive, setgenrereceive] = useState(true);
  const [genreval, setgenreval] = useState("");
  const handleClick = (i, genre) => {
    setgenrereceive(false);
    setgenreval(genre);
  };

  return (
    <>
      {genrereceive ? (
        <>
          <CarouselComponent />
          <GenreList onClick={handleClick} />
          <Subapp />
        </>
      ) : (
        <>
          <GenrepageList genreval={genreval} />
        </>
      )}
    </>
  );
}
export default App;
