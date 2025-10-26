import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Artists from "./pages/Artists";
import WorkDetail1 from "./pages/WorkDetail1";
import WorkDetail3 from "./pages/WorkDetail3";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} /> 
        <Route path="/work/1" element={<WorkDetail1 />} />
        <Route path="/work/3" element={<WorkDetail3 />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </BrowserRouter>
  );
}
