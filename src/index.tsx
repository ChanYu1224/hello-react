import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Top from "./pages/Top";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Top/>,
    }
]);


const container = document.getElementById("root");
const root = createRoot(container);
root.render(<RouterProvider router={router}/>);