import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import List from "./List/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <List />
  </StrictMode>,
);
