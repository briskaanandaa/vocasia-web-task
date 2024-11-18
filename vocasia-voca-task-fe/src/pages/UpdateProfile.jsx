import React, { useState, useEffect } from "react";
import InputField from "../components/InputField";
import CircleImage from "../components/CircleImage";
import Button from "../components/Button";
import Person from "../assets/person.png";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSaveProfile = () => {
    if (!name || !email) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    if (!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email)) {
      setErrorMessage("Please enter a valid email.");
      return;
    }

    const profileData = { name, email, photo_url: avatarUrl, password };

    updateUserProfile(token, profileData)
      .then(() => {
        setErrorMessage("");
        alert("Profile updated successfully");
      })
      .catch((error) => {
        console.error("Error updating profile:", error);
        setErrorMessage("Error updating profile");
      });
  };

  return (
    <div className="bg-white px-10 py-10 lg:my-8 rounded-[30px] flex flex-col justify-center items-center">
      <div className="w-full h-10 ">
        <a href="/task">
          <button className="flex text-lg font-medium items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L10.4142 12L15.7071 17.2929C16.0976 17.6834 16.0976 18.3166 15.7071 18.7071C15.3165 19.0976 14.6834 19.0976 14.2929 18.7071L8.46963 12.8839C7.98148 12.3957 7.98148 11.6043 8.46963 11.1161L14.2929 5.29289C14.6834 4.90237 15.3165 4.90237 15.7071 5.29289Z"
                fill="#0f172a"
              />
            </svg>
            Back
          </button>
        </a>
      </div>
      <CircleImage link={Person} />
      <form onSubmit={(e) => e.preventDefault()}>
        <InputField
          label="Image URL"
          type="url"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
          placeholder="<Image URL>"
        />
        <InputField
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Briska Ananda"
        />
        <InputField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="briskaananda@gmail.com"
        />
        <InputField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="********"
        />
        <div className="flex justify-center items-center">
          <Button
            className="mt-5 px-5 py-2  text-white bg-gradient-to-b from-blue-400 to-blue-500 rounded-[15px] text-center font-semibold text-md transition"
            onClick={handleSaveProfile}
            title="Save"
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
