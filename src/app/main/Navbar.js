import React from "react";
import "./style.css";
import { webname } from "../../../constant";

const Navbar = () => {
  // const name = useSelector((state)=>state.user.name)
  const name = "anna";
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="navbarLeft">
          <span className="logo">{webname}</span>
        </div>
        <div className="navbarCenter">
          <div className="search">
            <input
              type="text"
              placeholder="search for something..."
              className="searchInput"
            />
          </div>
        </div>
        <div className="navbarRight">
          <img
            className="avatar"
            src="https://images.pexels.com/photos/3024627/pexels-photo-3024627.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
          <span className="navbarName">{name}</span>
          {/* <ArrowDropDown /> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;