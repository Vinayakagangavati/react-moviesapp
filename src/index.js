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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<App />} />
      <Route path="genre" element={<Genre />} />
      <Route path="topImbd" element={<Topimbd />} />
    </Route>
  )
);

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      {/* Include the rest of your application components here */}
    </RouterProvider>
  </React.StrictMode>
);
