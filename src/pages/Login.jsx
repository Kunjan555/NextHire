import React, { useState } from 'react';
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

const db = getFirestore();

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});

  const validate = () => {
    let tempErrors = {};
    if (!email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      tempErrors.email = "Email is not valid";
    }
    if (!password) {
      tempErrors.password = "Password is required";
    } else if (password.length < 6) {
      tempErrors.password = "Password must be at least 6 characters";
    }
    setError(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

 const checkUsernameExists = async (email) => {
  // Make sure email is trimmed & lowercase if stored that way
  const cleanEmail = email.trim().toLowerCase();

  const q = query(
    collection(db, "profiles"),
    where("email", "==", cleanEmail)
  );

  const snapshot = await getDocs(q);

  if (!snapshot.empty) {
    // snapshot only contains exact matches from Firestore
    const doc = snapshot.docs[0]; // safe if emails are unique
    const userData = { id: doc.id, ...doc.data() };
    console.log("Matching user:", userData);

    return userData;
  } else {
    console.log("No matching user found");
    return null;
  }
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      const exists = await checkUsernameExists(email);
      if (!exists) {
        setError({ email: "No account found with this email" });
        return;
      }
      console.log("exists",exists)
      console.log("Email", email, "Password", password)
      if(exists.password === password){
        console.log("Login successful");
        // Perform login logic here
      }
      else{
        setError({ password: "Incorrect password" });
      }
    }
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='w-full max-w-md bg-white rounded-2xl shadow-lg p-8'>
        <h2 className='text-2xl font-bold text-center text-gray-800 mb-6'>Login</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className='mb-4'>
            <label className='block text-gray-700 font-medium mb-1'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter your email'
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none 
                ${error.email ? "border-red-500 focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            />
            {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
          </div>
          <div className='mb-8'>
            <label className='block text-gray-700 font-medium mb-1'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter your password'
              className={`w-full px-4 py-2 border rounded-xl focus:outline-none 
                ${error.password ? "border-red-500 focus:ring-2 focus:ring-red-400" : "border-gray-300 focus:ring-2 focus:ring-blue-500"}`}
            />
            {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
          </div>
          <button type='submit' className='w-full mb-4 bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition duration-200'>Login</button>
          <p className='text-center'>Don’t have an account?{" "}
            <a href='/signup' className='text-blue-600 hover:underline'>Register</a>
          </p>
        </form>
      </div>
    </div>
  );
}
