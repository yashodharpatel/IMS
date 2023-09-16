"use client"
import React, { useState } from "react";
import "./login.scss";
import {webname} from '../../../constant.js'
import axios from "axios";
import {useRouter} from "next/navigation";
import {toast} from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const[loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    try {
      const res = await axios.post("/api/users/login", {
        email,
        password,
      })
      // localStorage.setItem("currentUser", JSON.stringify(res.data))
      toast.success(response?.data?.message);
      router.push("/main/analytic");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      console.log(error?.response);
    }
    setLoading(false);
  }

  return (
    <div className="login-container">
      {loading ? "Loading..." :
      <div className="login bg-discount-gradient">
        <h1>Welcome Back to <span className="text-gradient">{webname}</span></h1>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" onChange={(e) => {setEmail(e.target.value)}}/>
          <input type="password" placeholder="Password" onChange={(e) => {setPassword(e.target.value)}}/>
          <button className="bg-blue-gradient" type="submit">Login</button>
        </form>
      </div> }
    </div>
  );
};
export default Login;
