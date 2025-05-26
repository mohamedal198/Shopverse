import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home } from "./pages/Home";
import { ProductDetails } from "./pages/ProductDetails";
import { Cart } from "./pages/Cart";
import Login from "./pages/Login";
import { SellerDashboard } from "./pages/SellerDashboard";
import NotFound from "./pages/NotFound";

function App() {
  const [userRole, setUserRole] = useState(null);

  return (
    <BrowserRouter>
      <Navbar userRole={userRole} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login setUserRole={setUserRole} />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
