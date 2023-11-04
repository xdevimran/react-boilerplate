import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import AuthProvider from "./Providers/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MainRoutes} />
    </AuthProvider>
  </React.StrictMode>
);
