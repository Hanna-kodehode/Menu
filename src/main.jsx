import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import classes from "./assets/components/index.module.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
