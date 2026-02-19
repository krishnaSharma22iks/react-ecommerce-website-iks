import {
  ShoppingCart,DollarSign,Package,Users,} from "lucide-react";

const stats = [
  {
    title: "Total Orders",
    value: "1,245",
    icon: <ShoppingCart />,
  },
  {
    title: "Revenue",
    value: "₹2,45,000",
    icon: <DollarSign />,
  },
  {
    title: "Products",
    value: "320",
    icon: <Package />,
  },
  {
    title: "Users",
    value: "98",
    icon: <Users />,
  },
];

const Dashboard = () => {
  return (
    <div className="space-y-8">

      {/* PAGE TITLE */}
      <h1 className="text-2xl font-bold">Dashboard</h1>

      {/* TOP STATS CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 shadow flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-gray-500">{item.title}</p>
              <h2 className="text-2xl font-bold">{item.value}</h2>
            </div>

            <div className="p-3 rounded-lg bg-gray-100 text-black">
              {item.icon}
            </div>
          </div>
        ))}
      </div>

      {/* CHARTS SECTION */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Sales Overview</h2>
          <div className="h-48 flex items-center justify-center text-gray-400">
             Chart Here
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="font-semibold mb-4">Order Status</h2>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span>Pending</span>
              <span>12</span>
            </div>
            <div className="flex justify-between">
              <span>Shipped</span>
              <span>45</span>
            </div>
            <div className="flex justify-between">
              <span>Delivered</span>
              <span>188</span>
            </div>
          </div>
        </div>
      </div>

      {/* RECENT ORDERS */}
      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="font-semibold mb-4">Recent Orders</h2>

        <table className="w-full text-sm">
          <thead className="border-b text-gray-500">
            <tr>
              <th className="text-left py-2">Order ID</th>
              <th className="text-left py-2">Customer</th>
              <th className="text-left py-2">Amount</th>
              <th className="text-left py-2">Status</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-3">#1023</td>
              <td>Rahul</td>
              <td>₹2,499</td>
              <td className="text-green-600">Delivered</td>
            </tr>
            <tr className="border-b">
              <td className="py-3">#1024</td>
              <td>Ankit</td>
              <td>₹1,299</td>
              <td className="text-yellow-600">Pending</td>
            </tr>
            <tr>
              <td className="py-3">#1025</td>
              <td>Neha</td>
              <td>₹3,999</td>
              <td className="text-blue-600">Shipped</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
};

export default Dashboard;
