import {useState} from "react";
import {useNavigate} from "react-router-dom"

function Login() {

  const navigate = useNavigate();

  const user = {
  email: "iks@gmail.com",
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
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-500 mt-4 cursor-pointer hover:text-indigo-600">
            Forgot Password?
          </p>
        </form>

        {message && (
          <p className="text-center mt-4 font-medium">
            {message}
          </p>
        )}

      </div>
    </div>
  );
}

export default Login;
