import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUserRole }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("client");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // بيانات وهمية، في المستقبل نربط ب backend
    if (email && password) {
      localStorage.setItem("userRole", role);
      setUserRole(role);

      if (role === "seller") {
        navigate("/seller-dashboard");
      } else {
        navigate("/");
      }
    } else {
      setError("Please enter email and password");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Login</h2>
      {error && <p className="text-red-500 mb-2 text-center">{error}</p>}
      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full border rounded px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">Login as:</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="client">Client</option>
            <option value="seller">Seller</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-800"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
