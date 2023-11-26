import Navbar from "./Header/Navbar.js";
import Foot from "./Footer/Foot.js";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Foot />
    </>
  );
}
export default Layout;
