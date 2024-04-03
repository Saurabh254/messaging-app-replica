import ReactDOM from "react-dom/client";
import React from "react";
import router from "./components/router/root";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import 'remixicon/fonts/remixicon.css';


ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);