"use client";
import React, { useEffect, useState } from "react";
import "./register.scss";
import axios from "axios";
import Select from "react-select";

const Register = () => {
  const [user, setUser] = useState({
    college: "",
    email: "",
    password: "",
    contact: "",
    city: "",
    role: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      
      const response = await axios.post("/api/users/signup", user);
      // toast.success(response?.data?.message);
      console.log(response.data);
      router.push("/login");
  } catch (error) {
      // toast.error(error?.response?.data?.message);
      console.log(error?.response);
  } 
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const options = [
    { value: "Mumbai", label: "Mumbai" },
    { value: "Delhi", label: "Delhi" },
    { value: "Bangalore", label: "Bangalore" },
    { value: "Hyderabad", label: "Hyderabad" },
    { value: "Ahmedabad", label: "Ahmedabad" },
    { value: "Chennai", label: "Chennai" },
    { value: "Pune", label: "Pune" },
    { value: "Jaipur", label: "Jaipur" },
    { value: "Surat", label: "Surat" },
  ];

  const option2 = [
    {value:"Admin",label:"Admin"},
    {value:"User",label:"User"}
  ]

  return (
    <div className="register-container">
      <div className="register bg-discount-gradient">
        <h1>
          Unlock Your Account
          <span className="text-gradient"> Register and Explore</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="form">
            <div className="left">
              <div className="input">
                <label htmlFor="">
                  College Name
                  <span>
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  name="college"
                  type="text"
                  placeholder="St. Francis Institute of Technology"
                  className="box"
                  required
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>

              <div className="input">
                <label htmlFor="">
                  Email
                  <span>
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="sfedu@sfit.ac.in"
                  className="box"
                  required
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>

              <div className="input">
                <label htmlFor="">
                  Password
                  <span>
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="box"
                  required
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="right">
              <div className="input">
                <label htmlFor="">
                  Contact No.
                  <span>
                    <sup>*</sup>
                  </span>
                </label>
                <input
                  name="contact"
                  type="number"
                  placeholder="9876543210"
                  className="box"
                  required
                  autoComplete="off"
                  onChange={handleChange}
                />
              </div>

              <div className="input">
                <label htmlFor="">
                  City
                  <span>
                    <sup>*</sup>
                  </span>
                </label>

                <Select
                  className="box select"
                  options={options}
                  onChange={(item) => {
                    setUser({...user, city:  item.value});
                  }}
                />
              </div>
              <div className="input">
                <label htmlFor="">
                  User Role
                  <span>
                    <sup>*</sup>
                  </span>
                </label>
                <Select
                  className="box select"
                  name="role"
                  options={option2}
                  required
                  onChange={(item) => {
                    setUser({...user, role:  item.value});
                  }}
                />
              </div>
            </div>
          </div>
          <button className="bg-blue-gradient" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
