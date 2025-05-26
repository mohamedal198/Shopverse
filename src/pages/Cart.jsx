import { useEffect, useState } from "react";

export const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const getTotal = () =>
    cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);

  const handleCheckout = () => {
    if (cart.length === 0) return alert("Cart is empty");

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];

    const newOrder = {
      id: Date.now(), // use timestamp as fake order ID
      items: cart,
      buyer: "Client User", // later we can use logged in user's name
      date: new Date().toLocaleString(),
    };

    existingOrders.push(newOrder);

    localStorage.setItem("orders", JSON.stringify(existingOrders));
    localStorage.removeItem("cart"); // empty cart
    setCart([]);

    alert("✅ Order placed successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <table className="w-full text-left border">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2">Product</th>
                <th className="p-2">Price</th>
                <th className="p-2">Quantity</th>
                <th className="p-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-t">
                  <td className="p-2">{item.title}</td>
                  <td className="p-2">${item.price}</td>
                  <td className="p-2">{item.quantity}</td>
                  <td className="p-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 text-right">
            <p className="text-xl font-semibold mb-2">Total: ${getTotal()}</p>
            <button
              onClick={handleCheckout}
              className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
            >
              ✅ Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};
