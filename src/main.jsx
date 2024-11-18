import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { Mainrouter } from "./router/Mainrouter/Mainrouter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={Mainrouter}></RouterProvider>
    </div>
  </StrictMode>
);
