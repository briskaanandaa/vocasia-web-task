import React from "react";
import InputField from "../components/InputField";
import BlueButton from "../components/BlueButton";
import CircleImage from "../components/CircleImage";
import Person from "../assets/person.png";

const UpdateProfile = () => {
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
      <InputField
        label="Profile Image URL"
        type="text"
        id="image"
        name="image"
        placeholder="Image URL"
        required={true}
      />
      <InputField
        label="Name"
        type="text"
        id="name"
        name="name"
        placeholder="Briska Ananda"
        required={true}
      />
      <InputField
        label="Email"
        type="email"
        id="email"
        name="email"
        placeholder="briska@gmail.com"
        required={true}
      />
      <InputField
        label="Password"
        type="text"
        id="password"
        name="password"
        placeholder="********"
        required={true}
      />
      <BlueButton text="Submit" link="/task" />
    </div>
  );
};

export default UpdateProfile;
