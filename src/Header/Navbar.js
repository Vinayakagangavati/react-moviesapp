import React, { useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Data from "../DataComp/Data.js";
import tvdata from "../DataComp/DataTv.js";

function Navbar({ onSmash }) {
  const [headerval, setheaderval] = useState("");
  const [searchval, setsearchval] = useState("");
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  function searchfun(e) {
    setsearchval(e.target.value);
  }

  function newfun() {
    const inputValue = searchval.trim().toLowerCase();

    const searchData = Data.find(
      (item) => item.title.toLowerCase() === inputValue
    );
    const tvDataItem = tvdata.find(
      (item) => item.title.toLowerCase() === inputValue
    );
    if (searchData) {
      onSmash(searchData);
    } else if (tvDataItem) {
      onSmash(tvDataItem);
    } else {
      onSmash("alert");
    }
  }

  function searchspace() {
    if (headerval !== "d-none") {
      setheaderval("d-none");
    } else {
      setheaderval("");
    }
  }

  if (headerval === "d-none") {
    return (
      <form className="input-group w-100">
        <input
          type="text"
          className="form-control"
          style={{ height: "52px" }}
          placeholder="Search Here"
          ref={inputRef}
          value={searchval}
          onChange={(e) => searchfun(e)}
        />
        <div
          onClick={() => handleClick()}
          className="btn input-group-text"
          style={{ backgroundColor: "#f24a20" }}
        >
          <button
            type="button"
            className="btn btn-outline-light"
            onClick={() => {
              setheaderval("");
              setsearchval("");
              newfun();
            }}
            style={{
              backgroundColor: "#f24a20",
              border: "1px solid transparent",
            }}
          >
            Search
          </button>
        </div>
      </form>
    );
  }

  return (
    <header className={headerval}>
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
            <li className="nav-item mx-xxl-5 mx-lg-4 mx-md-4 mx-sm-1">
              <NavLink
                to=""
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-danger" : "text-light"}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item mx-xxl-5 mx-lg-4 mx-md-4 mx-sm-1">
              <NavLink
                to="/genre"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-danger" : "text-light"}`
                }
              >
                Genre
              </NavLink>
            </li>
            <li className="nav-item mx-xxl-5 mx-lg-4 mx-md-4 mx-sm-1">
              <NavLink
                to="/tvshows"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-danger" : "text-light"}`
                }
              >
                TVShows
              </NavLink>
            </li>
            <li className="nav-item mx-xxl-5 mx-lg-4 mx-md-4 mx-sm-1">
              <NavLink
                to="/topImbd"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "text-danger" : "text-light"}`
                }
              >
                TopIMDB
              </NavLink>
            </li>
          </ul>
          <form className="d-lg-flex ms-lg-auto d-none">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              ref={inputRef}
              value={searchval}
              onChange={(e) => searchfun(e)}
            />
            <button
              className="btn d-none d-lg-block text-white"
              style={{ backgroundColor: "#f24a20" }}
              type="button"
              onClick={() => {
                handleClick();
                newfun();
              }}
            >
              Search
            </button>
          </form>
          <div
            onClick={searchspace}
            onChange={(e) => {
              searchfun(e);
            }}
            className="btn d-block d-lg-none ms-md-auto ms-5 bg-white"
          >
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

export default Navbar;
