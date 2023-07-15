import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { TypingContainer } from "./containers/typingContainer";
import { Menu } from "./components/menu";
import { Results } from "./components/results";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
  },
  {
    path: "/typing",
    element: <TypingContainer />,
  },
  {
    path: "results/:accuracy/:wpm",
    element: <Results />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
