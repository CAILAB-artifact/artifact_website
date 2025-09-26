import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} /> 
        <Route path="/artists" element={<div>Artists Page</div>} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </BrowserRouter>
  );
}
