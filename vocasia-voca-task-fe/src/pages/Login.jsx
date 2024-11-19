import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { loginUser } from "../api/user";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Setelah login, dapatkan token
  const login = async () => {
    const response = await axios.post("/api/users/login", { email, password });

    if (response.data.success) {
      // Simpan token ke localStorage atau sessionStorage
      localStorage.setItem("authToken", response.data.data.token);
    } else {
      // Tangani error login
      console.error("Login failed");
    }
  };

  // Penggunaan token untuk permintaan berikutnya
  const getProfile = async () => {
    const token = localStorage.getItem("authToken");
    const response = await axios.get("/api/users/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });

    console.log(response.data);
  };

  const handleSignIn = async () => {
    try {
      const data = await loginUser(email, password);

      if (data && data.token) {
        localStorage.setItem("token", data.token);
        alert("Login Success!");
        navigate("/task");
      } else {
        alert("Login Failed: Token not received");
      }
    } catch (error) {
      alert("Login Failed: " + error.message);
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
        label="Email"
        type="email"
        id="email"
        name={email}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your-email@gmail.com"
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
