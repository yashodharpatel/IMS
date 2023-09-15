"use client"
import React from "react";
// import styles from "../style";
import "./login.scss";
import {webname} from '../../../constant.js'

const Login = () => {
  return (
    <div className="login-container">
      <div className="login bg-discount-gradient">
        <h1>Welcome Back to <span className="text-gradient">{webname}</span></h1>
        <form>
          <input type="text" placeholder="Username"/>
          <input type="Password" placeholder="Password"/>
          <button className="bg-blue-gradient">Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;
