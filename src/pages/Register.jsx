import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Register = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate registration and auto-login
    if (email && password) {
      onLogin({ email, name: email.split('@')[0] });
      navigate('/');
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#333]">Register</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border rounded focus:outline-none focus:border-[#e67e22]"
            required
          />
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-3 border rounded focus:outline-none focus:border-[#e67e22] w-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm font-bold cursor-pointer"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button
            type="submit"
            className="bg-[#e67e22] text-white py-3 rounded font-bold hover:bg-[#d35400] transition-colors"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account? <Link to="/login" className="text-[#e67e22] font-bold">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;