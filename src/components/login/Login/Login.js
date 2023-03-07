import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Google from "../../../assets/images/icons8-google.svg";
import Github from "../../../assets/images/icons8-github.svg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    login(email, password)
      .then((result) => {
        navigate(from, { replace: true });
        setEmail("");
        setPassword("");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex flex-col justify-start items-center">
      <h1 className="text-3xl font-bold mb-4">Log in</h1>
      <form onSubmit={handleSubmit} className="w-80">
        <label htmlFor="email" className="block mb-2 font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full border border-gray-300 rounded-lg mb-4 px-4 py-2"
        />
        <label htmlFor="password" className="block mb-2 font-medium">
          Password
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="w-full border border-gray-300 rounded-lg mb-4 px-4 py-2"
        />
        <p className="text-red-500">{error}</p>
        <p>
          New to Ultimate Survival? Please <Link to="/signup">Sign Up</Link>
        </p>
        <div className="text-center mt-3">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Log in
          </button>
        </div>
      </form>
      <div className="mt-10 mb-20 flex flex-col items-center justify-start">
        <button className="flex items-center p-2 bg-lime-300 hover:bg-lime-700 rounded-md w-[200px] mb-3">
          <img className="w-7" src={Google} alt="" />
          <p className="ml-3">Log in with Google</p>
        </button>
        <button className="flex items-center p-2 bg-lime-300 hover:bg-lime-700 rounded-md w-[200px]">
          <img className="w-7" src={Github} alt="" />
          <p className="ml-3">Log in with Github</p>
        </button>
      </div>
    </div>
  );
}

export default Login;
