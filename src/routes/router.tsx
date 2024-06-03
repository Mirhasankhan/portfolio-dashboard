import { createBrowserRouter } from "react-router-dom";
import Login from "../Login/Login";
import DashboardLayout from "../Dashboard/DashboardLayout";
import AddSkill from "../Dashboard/AddSkill";
import AddProject from "../Dashboard/AddProject";
import AddBlog from "../Dashboard/AddBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "add-project",
        element: <AddProject></AddProject>,
      },
      {
        path: "add-skill",
        element: <AddSkill></AddSkill>,
      },
      {
        path: "add-blog",
        element: <AddBlog></AddBlog>,
      },
    ],
  },
]);

export default router;
