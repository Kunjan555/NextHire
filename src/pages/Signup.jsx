import React, { useState } from "react";
import { auth } from "../firebase";
function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};

    if (!form.name) tempErrors.name = "Name is required";

    if (!form.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Email is not valid";
    }
    if (!form.mobile) {
      tempErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9]{10}$/.test(form.mobile)) {
      tempErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!form.password) {
      tempErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }

    if (!form.confirmPassword) {
      tempErrors.confirmPassword = "Confirm your password";
    } else if (form.password !== form.confirmPassword) {
      tempErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Signup Data:", form);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none 
                ${errors.name ? "border-red-500 focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none 
                ${errors.email ? "border-red-500 focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Enter your 10-digit mobile number"
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none 
                ${errors.mobile ? "border-red-500 focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            />
            {errors.mobile && <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none 
                ${errors.password ? "border-red-500 focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="Re-enter your password"
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none 
                ${errors.confirmPassword ? "border-red-500 focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200">
            Sign Up
          </button>
        </form>

        <p className="text-center text-gray-600 text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
