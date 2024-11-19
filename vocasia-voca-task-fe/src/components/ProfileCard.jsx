import React from "react";
import Button from "../components/Button";
import CircleImage from "./CircleImage";

function ProfileCard({ name, avatarUrl, onEditProfile, onSignOut }) {
  return (
    <div className="bg-white flex flex-col items-center justify-center px-10 py-10 rounded-[30px] ">
      <CircleImage link={avatarUrl} />
      <h2 className="text-center">
        Welcome,
        <br /> <strong>{name}</strong>
      </h2>
      <Button
        className="mt-5 px-5 py-2 text-white bg-gradient-to-b from-blue-400 to-blue-500 rounded-[15px] text-center font-semibold text-md"
        onClick={onEditProfile}
        title="Sign In"
      >
        Edit Profile
      </Button>
      <Button
        className="mt-5 px-5 py-2  bg-red-50 text-red-500 rounded-[15px] text-center font-semibold text-md"
        onClick={onSignOut}
        title="Sign Out"
      >
        Sign Out
      </Button>
    </div>
  );
}

export default ProfileCard;
