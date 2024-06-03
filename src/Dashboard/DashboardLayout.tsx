import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className=" menu p-4 w-64 min-h-full bg-base-200 text-base-content">
          <h1 className="text-3xl font-bold py-5"> Dashboard</h1>
          <Link to="/dashboard/add-project">
            <h1 className=" bg-gray-300 hover:bg-blue-500 hover:text-white p-3 rounded-md">
              Add Project
            </h1>
          </Link>
          <Link to="/dashboard/add-skill">
            <h1 className=" my-2 bg-gray-300 hover:bg-blue-500 hover:text-white p-3 rounded-md">
              Add Skill
            </h1>
          </Link>
          <Link to="/dashboard/add-blog">
            <h1 className=" bg-gray-300 hover:bg-blue-500 hover:text-white p-3 rounded-md">
              Add Blog
            </h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
