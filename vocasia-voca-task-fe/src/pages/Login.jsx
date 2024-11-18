import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (email, password) => {
    if (email === "briskaananda@gmail.com" && password === "password123") {
      return { data: { token: "fake-jwt-token" } };
    } else {
      throw new Error("Invalid email or password");
    }
  };

  const handleSignIn = async () => {
    try {
      const data = await loginUser(email, password);
      localStorage.setItem("token", data.data.token);
      alert("Login berhasil!");
      navigate("/task");
    } catch (error) {
      alert("Login gagal: " + error.message);
    }
  };

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
        name={name}
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Briska Ananda"
      />
      <InputField
        label="Email"
        type="email"
        id="email"
        name={email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="briskaananda@gmail.com"
      />
      <InputField
        label="Password"
        type="password"
        id="password"
        name={password}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="********"
      />

      <Button
        className="mt-5 px-5 py-2 text-white bg-gradient-to-b from-blue-400 to-blue-500 rounded-[15px] text-center font-semibold text-md transition"
        onClick={handleSignIn}
        title="Sign In"
      >
        Sign In
      </Button>
    </div>
  );
};

export default Login;
