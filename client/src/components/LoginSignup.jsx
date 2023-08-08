import React from "react";
import { Link } from "react-router-dom";
import '../index.css';

const LoginSignup = ({ closeCard }) => {
  return (
    <div className="login-signup-modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="login-signup-card absolute z-10 bg-black mt-2 p-4">
        <button onClick={closeCard} className="close-button">
          X
        </button>
        <h2 className="text-white mb-4">Login or Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              placeholder="john@example.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Password</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black py-2 px-4 rounded"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-white">
          Don't have an account? <Link to="#">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
