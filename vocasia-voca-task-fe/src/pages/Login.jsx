import React from "react";
import BlueButton from "../components/BlueButton";
import InputField from "../components/InputField";

const Login = () => {
  return (
    <div className="bg-white px-10 py-10 rounded-[30px] flex flex-col justify-center items-center">
      <h1 className="text-slate-950 text-center text-3xl mb-3">
        <span className="text-blue-500 font-bold">VOCA</span>
        <br />
        Task
      </h1>
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
      <BlueButton text="Sign Up" link="/task" />
    </div>
  );
};

export default Login;
