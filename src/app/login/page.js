"use client"
import React, { useState } from "react";
// import styles from "../style";
import "./login.scss";
import {webname} from '../../../constant.js'
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const res = await axios.post("/api/users/login", {
        email,
        password,
      })
      localStorage.setItem("currentUser", JSON.stringify(res.data))
      router.push("/main/analytic");
    } catch (error) {
      setError(error.response.data)
    }
  }

  return (
    <div className="login-container">
      <div className="login bg-discount-gradient">
        <h1>Welcome Back to <span className="text-gradient">{webname}</span></h1>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Username"/>
          <input type="Password" placeholder="Password"/>
          <button className="bg-blue-gradient" type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
