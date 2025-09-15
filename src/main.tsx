import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/home.tsx";
import P1 from "./pages/p1/P1.tsx";
import P2 from "./pages/p2/P2.tsx";
import P3 from "./pages/p3/P3.tsx";
import P4 from "./pages/p4/P4.tsx";
import P5 from "./pages/p5/P5.tsx";
import P6 from "./pages/p6/P6.tsx";
import P7 from "./pages/p7/P7.tsx";
import P8 from "./pages/p8/P8.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/p1" element={<P1 />} />
        <Route path="/p2" element={<P2 />} />
        <Route path="/p3" element={<P3 />} />
        <Route path="/p4" element={<P4 />} />
        <Route path="/p5" element={<P5 />} />
        <Route path="/p6" element={<P6 />} /> 
        <Route path="/p7" element={<P7 />} /> 
        <Route path="/p8" element={<P8 />} /> 
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
