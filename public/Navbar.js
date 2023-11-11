import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState } from 'react';
function Navbar(){
    const [headerval,setheaderval]=useState("");
    const inputRef=useRef(null);
    function handleClick(){
        inputRef.current.focus();
    }
    function searchspace(){
        setheaderval("d-none");
    }
    if(headerval==="d-none"){
        return(
            <form className="input-group w-100">
                <input type="text" className="form-control" placeholder="Search Here" ref={inputRef}/>
                <div onClick={handleClick} className="btn input-group-text bg-white"><img src="https://static.vecteezy.com/system/resources/thumbnails/001/504/972/small/search-icon-free-vector.jpg" width="25px" alt="searchicon"/></div>
            </form>
            );
    }
    return(
        <header className={headerval}>
        <div className="container-fluid bg-dark text-light d-xs-flex">
        <nav className="navbar navbar-expand navbar-light w-100">
        <a className="navbar-brand mx-xxl-5 mx-lg-4 mx-sm-0 text-light" href="#"><img src="https://s3.bunnycdn.ru/assets/sites/movies2watch/logo.png" alt="mainicon" width="90px" style={{backgroundColor:"transparent",position:"relative",bottom:"2px"}}/></a>
        <ul className="navbar-nav mx-md-auto mx-1">
            <li className="nav-item mx-xxl-5 mx-lg-4 mx-md-4 mx-sm-1">
            <a className="nav-link text-light" href="#">Home</a>
            </li>
            <li className="nav-item mx-xxl-5 mx-lg-4 mx-md-4 mx-sm-1">
            <a className="nav-link text-light" href="#">Genre</a>
            </li>
            <li className="nav-item mx-xxl-5 mx-lg-4 mx-md-4 mx-sm-1">
            <a className="nav-link text-light" href="#">Country</a>
            </li>
            <li className="nav-item mx-xxl-5 mx-lg-4 mx-md-4 mx-sm-1">
            <a className="nav-link text-light" href="#">TVShows</a>
            </li>
            <li className="nav-item mx-xxl-5 mx-lg-4 mx-md-4 mx-sm-1">
            <a className="nav-link text-light" href="#">TopIMDB</a>
            </li>
        </ul>
        <form className="d-lg-flex ms-lg-auto d-none">
        <input className="form-control" type="search" placeholder="Search" aria-label="Search" ref={inputRef}/>
        <button className="btn  d-none d-lg-block text-white" style={{backgroundColor:"#f24a20"}} type="button" onClick={handleClick}>Search</button>
        </form>
        <div onClick={searchspace}  className="btn d-block d-lg-none ms-sm-auto bg-white"><img src="https://static.vecteezy.com/system/resources/thumbnails/001/504/972/small/search-icon-free-vector.jpg" width="25px" alt="searchicon"/></div>
        </nav>
        </div>
        </header>
    )
}
export default Navbar;