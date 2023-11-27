import Navbar from "./Header/Navbar.js";
import Foot from "./Footer/Foot.js";
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import Para from "./Para.js";

function Layout() {
  const [searchval, setsearchval] = useState(false);
  const [item, setitem] = useState("");
  const navigate = useNavigate();

  function searchpanelfun(e) {
    if (e !== "alert") {
      console.log(e);
      setitem(e);
      setsearchval(true);
    } else {
      alert("Request not found");
    }
  }

  function navigateHome() {
    setsearchval(false);
    navigate("/");
  }

  return (
    <>
      {!searchval && (
        <>
          <Navbar onSmash={searchpanelfun} />
          <Outlet />
          <Foot />
        </>
      )}
      {searchval && (
        <>
          <button
            onClick={navigateHome}
            style={{
              position: "absolute",
              top: "1px",
              right: "1px",
              height: "25px",
              textAlign: "center",
              color: "#f24a20",
              zIndex: "1",
            }}
          >
            Go Back Home
          </button>
          <Para item={item} />
          <Foot />
        </>
      )}
    </>
  );
}

export default Layout;
