import { useEffect, useState } from "react";

export const SellerDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  const handleCancelOrder = (orderId) => {
    const updatedOrders = orders.filter((order) => order.id !== orderId);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Seller Dashboard</h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border shadow-sm rounded-lg ">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3">Order ID</th>
                <th className="p-3">Buyer</th>
                <th className="p-3">Date</th>
                <th className="p-3">Items Count</th>
                <th className="p-3">Total</th>
                <th className="p-3">Actions</th> {/* زر الإلغاء */}
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => {
                const total = order.items.reduce(
                  (sum, item) => sum + item.price * item.quantity,
                  0
                );
                return (
                  <tr key={order.id} className="border-t hover:bg-gray-50">
                    <td className="p-3">{order.id}</td>
                    <td className="p-3">{order.buyer}</td>
                    <td className="p-3">{order.date}</td>
                    <td className="p-3">{order.items.length}</td>
                    <td className="p-3 font-semibold">${total.toFixed(2)}</td>
                    <td className="p-3">
                      <button
                        onClick={() => handleCancelOrder(order.id)}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm"
                      >
                        Cancel Order
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
