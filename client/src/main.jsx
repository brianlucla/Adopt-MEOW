import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import AboutUs from "./components/AboutUs.jsx";
import CatsPage from "./components/CatsPage.jsx"
import DogsPage from "./components/DogsPage.jsx";
import RabbitsPage from "./components/RabbitsPage.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Favorites from "./components/Favorites.jsx";

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/cats" element={<CatsPage />} />
      <Route path="/dogs" element={<DogsPage />} />
      <Route path="/rabbits" element={<RabbitsPage />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  </Router>
);

createRoot(document.getElementById("root")).render(router);
