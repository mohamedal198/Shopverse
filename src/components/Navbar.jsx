import { Link } from "react-router-dom";

const Navbar = ({ userRole }) => {
  const handleLogout = () => {
    localStorage.removeItem("userRole");
    window.location.reload(); // make refrsh to the page
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          Shopverse
        </Link>

        <div className="space-x-4">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            Home
          </Link>
          <Link
            to="/cart"
            className="text-gray-700 hover:text-blue-600 font-medium"
          >
            🛒 Cart
          </Link>

          {userRole === "seller" && (
            <Link
              to="/seller-dashboard"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Dashboard
            </Link>
          )}

          {!userRole && (
            <Link
              to="/login"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Login
            </Link>
          )}

          {userRole && (
            <button
              onClick={handleLogout}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
