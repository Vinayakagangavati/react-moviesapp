import React, { useState } from "react";
import { Link, useNavigate, NavLink } from "react-router-dom";
import Data from "../DataComp/Data";
import datatv from "../DataComp/DataTv";

function Header() {
  const [searchval, setsearchval] = useState("");
  const nav = useNavigate();

  function searchfun() {
    const inputValue = searchval.trim().toLowerCase();

    if (inputValue === "") {
      alert("Please enter a movie or TV show name.");
      return;
    }

    const searchData = Data.find(
      (item) => item.title.toLowerCase() === inputValue
    );
    if (searchData) {
      const title = searchData.title;
      nav(`watch/${title}`);
    } else if (!searchData) {
      const tvDataItem = datatv.find(
        (item) => item.title.toLowerCase() === inputValue
      );
      if (tvDataItem) {
        const title = tvDataItem.title;
        nav(`watch/${title}`);
      } else {
        alert("No matching movie or show found.");
      }
    }
  }

  return (
    <header>
      <div className="container-fluid bg-dark text-light">
        <nav className="navbar navbar-expand w-100 d-flex justify-content-md-around justify-content-between">
          <Link className="navbar-brand mx-xxl-5 mx-lg-4 mx-md-1 me-sm-0 text-light">
            <img
              src="https://s3.bunnycdn.ru/assets/sites/movies2watch/logo.png"
              alt="mainicon"
              width="90px"
              style={{
                backgroundColor: "transparent",
                position: "relative",
                bottom: "2px",
              }}
            />
          </Link>
          <ul className="navbar-nav mx-md-auto mx-0">
            <li className="nav-item mx-xxl-5 mx-lg-4 mx-md-4 mx-sm-1 mt-2">
              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
                className={({ isActive }) =>
                  `${isActive ? "text-white" : "text-danger"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-xxl-5 mx-lg-4 mx-md-4 mx-sm-1 mt-2">
              <NavLink
                to="/genrepage"
                style={{ textDecoration: "none" }}
                className={({ isActive }) =>
                  `${isActive ? "text-white" : "text-danger"}`
                }
              >
                Genre
              </NavLink>
            </li>
            <li className="nav-item mx-xxl-5 mx-lg-4 mx-md-4 mx-sm-1 mt-2">
              <NavLink
                to="/tv"
                style={{ textDecoration: "none" }}
                className={({ isActive }) =>
                  `${isActive ? "text-white" : "text-danger"}`
                }
              >
                TVShows
              </NavLink>
            </li>
            <li className="nav-item mx-xxl-5 mx-lg-4 mx-md-4 mx-sm-1 mt-2">
              <NavLink
                to="/contact"
                style={{ textDecoration: "none" }}
                className={({ isActive }) =>
                  `${isActive ? "text-white" : "text-danger"}`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <form className={`d-lg-flex ms-lg-auto`} onSubmit={searchfun}>
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              value={searchval}
              onChange={(e) => setsearchval(e.target.value)}
            />
            <button
              className="btn text-white"
              style={{ backgroundColor: "#f24a20" }}
              type="button"
              onClick={searchfun}
            >
              Search
            </button>
          </form>
          <div className={`btn d-block d-lg-none ms-md-auto ms-5`}>
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/001/504/972/small/search-icon-free-vector.jpg"
              width="25px"
              alt="searchicon"
            />
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
