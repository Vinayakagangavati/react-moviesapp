import Navbar from "./Navbar.js";
import CarouselComponent from "./Carousel.js";
import GenreList from"./GenreLists.js";
import Foot from "./Foot.js";
import Subapp from "./Subapp.js";
function App(){
    return(
        <>
        <Navbar/>
        <CarouselComponent/>
        <GenreList/>
        <Subapp/>
        <Foot/>
        </>
    )
}
export default App;