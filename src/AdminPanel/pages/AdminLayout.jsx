import AdminSidebar from "../components/AdminSidebar";
import { Outlet } from "react-router-dom";
import DashBoard from "./DashBoard";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      <AdminSidebar />
      <div className="flex-1 p-6">
        <Outlet />
        <DashBoard/>
      </div>
    </div>
  );
};

export default AdminLayout;
