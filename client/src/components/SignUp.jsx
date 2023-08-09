import React, { useState, useEffect } from "react";
import { useMutation } from '@apollo/client';
import { ADD_PROFILE } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import "../index.css";

const SignUp = ({ closeCard, handleLoginToggle }) => {
  const [userFormData, setUserFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [showAlert, setShowAlert] = useState(false);

  const [addProfile, { error }] = useMutation(ADD_PROFILE);
  
  useEffect(() => {
    if(error) {
      setShowAlert(true);
    } else {
      setShowAlert(false);
    }
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  }

  const handleFormSubmit = async (event) =>{
    event.preventDefault();

    try {
      const { data } = await addProfile({
        variables: { ...userFormData }
      });
      console.log(data);
      Auth.login(data.addProfile.token);
    } catch (error) {
      console.error(error);
    }

    setUserFormData({
      username: '',
      email: '',
      password: '',
    });
  }

  return (
    <div className="login-signup-modal fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="login-signup-card absolute z-10 bg-black mt-2 p-4">
        <button onClick={closeCard} className="close-button">
          X
        </button>
        <h2 className="text-white mb-4">Sign Up</h2>
        {/* Add your sign-up form fields here */}
        {/* Example: */}
        <form>
          <div className="mb-4">
            <label className="block text-white mb-2">Username</label>
            <input
              type="username"
              name="username"
              value={userFormData.username}
              onChange={handleInputChange}
              className="w-full p-2 border rounded"
              placeholder="johndoe123"
            />
          </div>
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
          {/* Add more fields as needed (e.g., email, password, etc.) */}
          <button
            type="submit"
            className="bg-white text-black py-2 px-4 rounded"
            onClick={handleFormSubmit}
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-white">
          Already have an account?{" "}
          <Link to="#" onClick={handleLoginToggle}>
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
