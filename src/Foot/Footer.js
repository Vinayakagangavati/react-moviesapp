import "./Footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div id="footer">
      <img
        src="	https://s3.bunnycdn.ru/assets/t8/s5/images/introbg.jpg"
        alt="bg"
        id="bg"
      />
      <img
        src="https://s3.bunnycdn.ru/assets/sites/movies2watch/logo.png"
        alt="flogo"
        id="fimg"
      />
      <br />
      <br />
      <div id="main">
        <section className="text-align">
          Discover the ultimate destination for free movie streaming with
          Movies2Watch! Watch movies online anytime, anywhere, for an unmatched
          cinematic experience.
        </section>
        <br />
        <div>
          Links: watch anime free online, watch anime free online, free read
          manga onlines
        </div>
      </div>
      <div className="row">
        <div className="col col-6" id="footcol1">
          <br />
          <p className="colpara">Genre</p>
          <ul className="colul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/genrepage">Genre</Link>
            </li>
            <li>
              <Link to="/tv">Tvshows</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="col col-6" id="footcol2">
          <p className="colpara">Support</p>
          <ul className="colul">
            <Link
              href="https://www.linkedin.com/in/vinayakagangavati/"
              style={{ textDecoration: "none", color: "#7b8085" }}
            >
              <li>linkedin</li>
            </Link>
            <Link
              href="mailto:vinayakagvt22@gmail.com"
              style={{ textDecoration: "none", color: "#7b8085" }}
            >
              <li>Mail</li>
            </Link>
          </ul>
        </div>
      </div>
      <p id="ffinal">
        This site does not store any files on our server, we only linked to the
        media which is hosted on 3rd party services.
      </p>
    </div>
  );
}
export default Footer;
