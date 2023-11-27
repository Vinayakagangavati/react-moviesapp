import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import App from "./App.js";
import Genre from "./Genre.js";
import Topimbd from "./Topimbd.js";
import TVShows from "./TVShows.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<App />} />
      <Route path="genre" element={<Genre />} />
      <Route path="tvshows" element={<TVShows />} />
      <Route path="topImbd" element={<Topimbd />} />
    </Route>
  )
);
const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
