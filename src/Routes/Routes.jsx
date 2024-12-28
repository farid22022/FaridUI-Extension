


import { createHashRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home";

export const router = createHashRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <h3>Error</h3>,
    children: [
      {
        path: '/',
        element: <Home />
      }
    ]
  }
]);
