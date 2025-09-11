import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import P1 from "./pages/p1/P1.tsx";
import P2 from "./pages/p2/P2.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <P1 /> */}
    <P2 />
  </StrictMode>
);
