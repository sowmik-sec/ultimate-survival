import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import Google from "../../../assets/images/icons8-google.svg";
import Github from "../../../assets/images/icons8-github.svg";
import { toast } from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";

function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const {
    createUser,
    setUserPhoto,
    user,
    setUser,
    updateUserProfile,
    verifyEmail,
    googleSignin,
  } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setError("Enter the correct password");
      return;
    }
    createUser(email, password)
      .then((result) => {
        updateUser(username, photoURL);
        verify();
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setUsername("");
        setPhotoURL("");
        setError("");
        setUserPhoto(photoURL);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const updateUser = (username, photoURL) => {
    updateUserProfile(username, photoURL)
      .then(() => console.log("Profile updated!"))
      .catch((error) => console.error(error));
  };

  const verify = () => {
    verifyEmail()
      .then(() => {
        toast.success("Please verify your email");
      })
      .catch((error) => console.error(error));
  };

  const handleGoogleSignIn = () => {
    googleSignin(googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => setError(error.message));
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <h1 className="text-3xl font-bold mb-4">Sign up</h1>
      <form onSubmit={handleSubmit} className="w-80">
        <label htmlFor="username" className="block mb-2 font-medium">
          Username
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="w-full border border-gray-300 rounded-lg mb-4 px-4 py-2"
        />
        <label htmlFor="photoURL" className="block mb-2 font-medium">
          Photo URL
        </label>
        <input
          type="text"
          id="photoURL"
          value={photoURL}
          onChange={(event) => setPhotoURL(event.target.value)}
          className="w-full border border-gray-300 rounded-lg mb-4 px-4 py-2"
        />
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
        <div className="text-center mt-3">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          >
            Sign up
          </button>
        </div>
      </form>
      <div className="mt-10 mb-14 flex flex-col items-center">
        <button
          onClick={handleGoogleSignIn}
          className="flex items-center p-2 bg-lime-300 hover:bg-lime-700 rounded-md w-[220px] mb-3"
        >
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
