import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from '../utils/auth';
import { Link } from "react-router-dom";
import "../index.css";
import SignUp from "./SignUp";

const LoginSignup = ({ closeCard }) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [userFormData, setUserFormData] = useState({email: '', password: ''});
  const [showAlert, setShowAlert] = useState(false);

  const [login, { error }] = useMutation(LOGIN);

  useEffect(() => {
    if(error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  }, [error]);

  const handleInputChange  = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value});
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;

    try {
      const { data } = await login({
        variables: {
          email: userFormData.email,
          password: userFormData.password,
        },
      });
      console.log("Login data:", data);
      Auth.login(data.login.token);
    } catch (error) {
      console.error(error);
    }

    setUserFormData({
      email: '',
      password: '',
    });  
  } 

  const handleSignUpToggle = () => {
    setShowSignUp(!showSignUp);
  };

  const handleLoginToggle = () => {
    setShowSignUp(false);
  };

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
              name="email"
              value={userFormData.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="john@example.com"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={userFormData.password}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="bg-white text-black py-2 px-4 rounded"
            onClick={handleFormSubmit}
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-white">
          Don't have an account?{" "}
          <Link to="#" onClick={handleSignUpToggle}>
            Sign Up
          </Link>
        </p>
      </div>
      {showSignUp && (
        <SignUp
          closeCard={handleSignUpToggle}
          handleLoginToggle={handleLoginToggle}
        />
      )}
    </div>
  );
};

export default LoginSignup;
