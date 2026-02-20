<<<<<<< HEAD
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const user = {
    email: "iks@gmail.com",
    password: "1234",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handlelogin = (e) => {
    e.preventDefault();
    if (email === user.email && password === user.password) {
      localStorage.setItem("token", "123abcToken");
      setMessage("Login Successfully");
      setTimeout(() => navigate("/home"), 1000);
    } else {
      setMessage("Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      
      {/* Card */}
      <div className="w-96 p-8 rounded-2xl bg-white/10 backdrop-blur-lg shadow-2xl border border-white/20 transition-all duration-500 hover:scale-105">
        
        <h2 className="text-3xl font-bold text-center mb-6 tracking-wide">
          Login
        </h2>

        <form onSubmit={handlelogin} className="space-y-5">
          
          {/* Email */}
          <div className="relative">
            <input
            placeholder=""
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              className="peer w-full px-4 py-2 bg-transparent border-b border-gray-400 focus:border-white outline-none transition-all duration-300"
            />
            <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-white peer-valid:-top-3 peer-valid:text-xs">
              Email- iks@gmail.com
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              className="peer w-full px-4 py-2 bg-transparent border-b border-gray-400 focus:border-white outline-none transition-all duration-300"
            />
            <label className="absolute left-4 top-2 text-gray-400 text-sm transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-white peer-valid:-top-3 peer-valid:text-xs">
              Password- 1234
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-white text-black font-semibold tracking-wide transition-all duration-300 hover:bg-gray-200 active:scale-95"
=======
import {useState} from "react";
import {useNavigate} from "react-router-dom"

function Login() {

  const navigate = useNavigate();

  const user = {
  email: "admin@test.com",
  password: "1234",
};

    const [email ,setEmail] = useState("")
    const [password ,setPassword] = useState("")
    const [message ,setMessage] = useState("")

    const handlelogin = (e)=>{
      e.preventDefault();
      if(email===user.email && password === user.password){
        localStorage.setItem("token","123abcToken");
        setMessage("Login Succesfully")
        navigate("/home")
        
      }else{
        setMessage("Login Faild")
      }
    }
      

  return (

    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-96">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        <form onSubmit={handlelogin} className="space-y-4">
          <div>
            <label className="block text-gray-600 mb-1">Email</label>
            <input
            onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-600 mb-1">Password</label>
            <input
            onChange={(e)=>setPassword(e.target.value)}
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
>>>>>>> 8f59e522c26cbb4c5f985021dc167a76290a282e
          >
            Login
          </button>

<<<<<<< HEAD
          
        </form>

        {/* Message */}
        {message && (
          <p className="text-center mt-4 text-sm animate-pulse">
            {message}
          </p>
        )}
=======
          <p className="text-center text-sm text-gray-500 mt-4 cursor-pointer hover:text-indigo-600">
            Forgot Password?
          </p>
        </form>

        {message && (
          <p className="text-center mt-4 font-medium">
            {message}
          </p>
        )}

>>>>>>> 8f59e522c26cbb4c5f985021dc167a76290a282e
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default Login;
=======
export default Login;
>>>>>>> 8f59e522c26cbb4c5f985021dc167a76290a282e
