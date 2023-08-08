import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import AboutUs from "./components/AboutUs.jsx";
import CatsPage from "./components/CatsPage.jsx";
import DogsPage from "./components/DogsPage.jsx";
import RabbitsPage from "./components/RabbitsPage.jsx";
import Favorites from "./components/Favorites.jsx";
import LoginSignup from "./components/LoginSignup.jsx";
import ContactUs from "./components/ContactUs.jsx";

const router = (
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/cats" element={<CatsPage />} />
      <Route path="/dogs" element={<DogsPage />} />
      <Route path="/rabbits" element={<RabbitsPage />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/login" element={<LoginSignup />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  </Router>
);
createRoot(document.getElementById("root")).render(router);


