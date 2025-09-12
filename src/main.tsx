import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import P1 from "./pages/p1/P1.tsx";
// import P2 from "./pages/p2/P2.tsx";
// import P3 from "./pages/p3/P3.tsx";
// import P4 from "./pages/p4/P4.tsx";
import P5 from "./pages/p5/P5.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <P1 /> */}
    {/* <P2 /> */}
    {/* <P3/> */}
    {/* <P4/> */}
    <P5/>
  </StrictMode>
);
