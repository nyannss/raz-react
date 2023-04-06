import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home"
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  }
]);

export default router;