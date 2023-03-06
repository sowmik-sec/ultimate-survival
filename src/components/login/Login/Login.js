import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center h-screen">
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
          <p>{error}</p>
          <p>
            New to Ultimate Survival? Please <Link to="/signup">Sign Up</Link>
          </p>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Log in
          </button>
        </form>
      </div>
      <div>
        <button className="p-2 bg-lime-300 hover:bg-lime-700 rounded-md">
          <p>
            <FontAwesomeIcon icon={["fab", "google"]} />
            Sign Up with Google
          </p>
        </button>
        <button className="p-2 bg-lime-300 hover:bg-lime-700 rounded-md">
          <p>
            <FontAwesomeIcon icon={["fab", "github"]} />
            Sign Up with Github
          </p>
        </button>
      </div>
    </div>
  );
}

export default Login;
