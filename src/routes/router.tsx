import { createBrowserRouter } from "react-router-dom";
import Login from "../Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: "dashboard",
  },
]);

export default router;
