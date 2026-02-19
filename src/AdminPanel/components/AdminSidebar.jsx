import { NavLink } from "react-router-dom";
import { LayoutDashboard,Package,ShoppingCart,Users,Tags,Settings,LogOut,} from "lucide-react";

const AdminSidebar = () => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-lg transition
     ${
       isActive
         ? "bg-black text-white"
         : "text-gray-600 hover:bg-gray-100"
     }`;

  return (
    <aside className="w-64 min-h-screen bg-white border-r">
      {/* Logo */}
      <div className="px-6 py-5 border-b">
        <h1 className="text-xl font-bold">IKS Panel</h1>
      </div>

      {/* Menu */}
      <nav className="p-4 space-y-2">
        <NavLink to="/admin" end className={linkClass}>
          <LayoutDashboard size={20} />
          Dashboard
        </NavLink>

        <NavLink to="/admin/products" className={linkClass}>
          <Package size={20} />
          Products
        </NavLink>

        <NavLink to="/admin/orders" className={linkClass}>
          <ShoppingCart size={20} />
          Orders
        </NavLink>

        <NavLink to="/admin/users" className={linkClass}>
          <Users size={20} />
          Users
        </NavLink>

        <NavLink to="/admin/coupons" className={linkClass}>
          <Tags size={20} />
          Coupons
        </NavLink>

        <NavLink to="/admin/settings" className={linkClass}>
          <Settings size={20} />
          Settings
        </NavLink>
      </nav>

      {/* Logout */}
      <div className="mt-auto p-4 border-t">
        <button className="flex items-center gap-3 text-red-500 hover:text-red-600">
          <LogOut size={20} />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSidebar;
