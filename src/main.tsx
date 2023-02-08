import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MathProvider } from "./hooks/Math";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MathProvider>
      <App />
    </MathProvider>
  </React.StrictMode>
);
