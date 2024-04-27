import { useNavigate } from "react-router-dom";
import "./HomeGenre.css";

function HomeGenre() {
  const nav = useNavigate();
  function genrename(genre) {
    nav(`genre/${genre}`);
  }

  let arrgenre = [
    [
      "Comedy",
      "https://www.adgully.com/img/800/201706/n-comedian-large570.jpg",
    ],
    [
      "Fantasy",
      "https://i.pinimg.com/564x/15/25/c8/1525c8d947fd6893e970c277d61b8b46.jpg",
    ],
    [
      "Crime",
      "https://i.pinimg.com/736x/d9/7d/eb/d97deb9a867b6a2ef7d04f0b77812aef.jpg",
    ],
    [
      "Drama",
      "https://i.pinimg.com/564x/56/e7/33/56e733b72a778ffb327ba19cfa567991.jpg",
    ],
    [
      "Music",
      "https://i.pinimg.com/564x/d4/31/36/d431364c1a72d17bd111bc22a419f4ba.jpg",
    ],
    [
      "Animation",
      "https://i0.wp.com/www.tor.com/wp-content/uploads/2016/07/Dumbo01.jpg?fit=740%2C+9999&crop=0%2C0%2C100%2C435px&ssl=1",
    ],
    [
      "Biopic",
      "https://i.pinimg.com/564x/c1/3b/53/c13b53b0f6b2f0357da20f78362783a6.jpg",
    ],
    [
      "Sci-fi",
      "https://i.pinimg.com/564x/27/7e/3b/277e3bdebe76545e9423daa5eb8a7b6c.jpg",
    ],
  ];

  return (
    <main id="mainsection">
      <div className="fs-1" id="genrename">
        Genres
      </div>
      <section id="section">
        {arrgenre.map((genre, i) => (
          <div
            key={i}
            id="genrel"
            style={{ backgroundImage: `url(${genre[1]})`, objectFit: "cover" }}
            onClick={() => genrename(genre[0])}
          >
            <p id="genret">{genre[0]}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
export default HomeGenre;
