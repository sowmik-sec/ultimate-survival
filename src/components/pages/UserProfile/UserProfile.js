import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const UserProfile = () => {
  const [photoURL, setPhotoURL] = useState("");
  const { user, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(user, photoURL);
  };
  const updateUser = (user, photoURL) => {
    updateUserProfile(user.displayName, photoURL)
      .then(() => console.log("user updated"))
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <form onSubmit={handleSubmit} className="w-80">
          <label htmlFor="username" className="block mb-2 font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={user.displayName}
            readOnly
            className="w-full border border-gray-300 rounded-lg mb-4 px-4 py-2"
          />
          <label htmlFor="photoURL" className="block mb-2 font-medium">
            Photo URL: {user.photoURL}
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
            value={user.email}
            readOnly
            className="w-full border border-gray-300 rounded-lg mb-4 px-4 py-2"
          />
          <div className="text-center my-3">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
