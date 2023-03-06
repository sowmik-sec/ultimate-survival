import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Google from "../../../assets/images/icons8-google.svg";
import Github from "../../../assets/images/icons8-github.svg";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    console.log(`Confirm Password: ${confirmPassword}`);
    if (password !== confirmPassword) {
      setError("Enter the correct password");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError("");
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="text-3xl font-bold mb-4">Sign up</h1>
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
        <label htmlFor="confirmPassword" className="block mb-2 font-medium">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          className="w-full border border-gray-300 rounded-lg mb-4 px-4 py-2"
        />
        <p className="text-red-500">{error}</p>
        <p>
          Have an Ultimate Survival account? <Link to="/login">Login</Link>
        </p>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Sign up
        </button>
      </form>
      <div className="mt-10 flex flex-col items-center">
        <button className="flex items-center p-2 bg-lime-300 hover:bg-lime-700 rounded-md w-[220px] mb-3">
          <img className="w-7" src={Google} alt="" />
          <p className="ml-3">Sign Up with Google</p>
        </button>
        <button className="flex items-center p-2 bg-lime-300 hover:bg-lime-700 rounded-md w-[220px]">
          <img className="w-7" src={Github} alt="" />
          <p className="ml-3">Sign Up with Github</p>
        </button>
      </div>
    </div>
  );
}

export default SignUp;
