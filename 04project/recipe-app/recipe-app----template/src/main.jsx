import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import './index.css'
import App from "./App";
import AboutPage from "./Pages/AboutPage"; // Ensure casing matches actual file name
import HomePage from "./Pages/HomePage";   // Ensure casing matches actual file name
import RecipePage from "./Pages/RecipePage"; // Ensure casing matches actual file name

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/recipe/:id" element={<RecipePage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
