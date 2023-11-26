import "./Foot.css";
function Foot() {
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
        <section>
          Discover the ultimate destination for free movie streaming with
          Movies2Watch! Watch movies online anytime, anywhere, for an unmatched
          cinematic experience.
        </section>
        <div>
          Links: watch anime free online, watch anime free online, free read
          manga onlines
        </div>
      </div>
      <div className="row">
        <div className="col col-6" id="footcol1">
          <p className="colpara">Genre</p>
          <ul className="colul">
            <li>
              <a href="#">Trending</a>
            </li>
            <li>
              <a href="#">A-Z List</a>
            </li>
            <li>
              <a href="#">Recently Updated</a>
            </li>
            <li>
              <a href="#">Most Watched</a>
            </li>
          </ul>
        </div>
        <div className="col col-6" id="footcol2">
          <p className="colpara">Support</p>
          <ul className="colul">
            <a
              href="https://www.linkedin.com/in/vinayakagangavati/"
              style={{ textDecoration: "none", color: "#7b8085" }}
            >
              <li>linkedin</li>
            </a>
            <a
              href="mailto:vinayakagvt22@gmail.com"
              style={{ textDecoration: "none", color: "#7b8085" }}
            >
              <li>Mail</li>
            </a>
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
export default Foot;
