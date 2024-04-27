import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Homebody from "./Bodycomponents/Homebody";
import GenrePage from "./Bodycomponents/GenrePage.js";
import Tvshows from "./Bodycomponents/Tvshows";
import Contact from "./Bodycomponents/Contact";
import Header from "./Header/Header.js";
import Footer from "./Foot/Footer.js";
import MoviePage from "./Bodycomponents/MoviePage.js";
import GenreCategoryList from "./Bodycomponents/GenreCategorylist.js";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const Approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Homebody />,
      },
      {
        path: "/genrepage",
        element: <GenrePage />,
      },
      {
        path: "/tv",
        element: <Tvshows />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/watch/:name",
        element: <MoviePage />,
      },
      {
        path: "/genre/:category",
        element: <GenreCategoryList />,
      },
    ],
  },
]);

root.render(<RouterProvider router={Approuter} />);
