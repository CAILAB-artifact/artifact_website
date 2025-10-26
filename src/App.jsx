import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Artists from "./pages/Artists";
import WorkDetail1 from "./pages/WorkDetail1";
import WorkDetail2 from "./pages/WorkDetail2";
import WorkDetail3 from "./pages/WorkDetail3";
import WorkDetail4 from "./pages/WorkDetail4";
import WorkDetail5 from "./pages/WorkDetail5";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} /> 
        <Route path="/work/1" element={<WorkDetail1 />} />
        <Route path="/work/2" element={<WorkDetail2 />} />
        <Route path="/work/3" element={<WorkDetail3 />} />
        <Route path="/work/4" element={<WorkDetail4 />} />
        <Route path="/work/5" element={<WorkDetail5 />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/about" element={<About />} /> 
      </Routes>
    </BrowserRouter>
  );
}
