import React from "react";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import { NavItem, Navbar } from "reactstrap";

const Navbar1 = () => {
  return (
    <div className="Navbar">
      <div className="profile_icon ">
        <CgProfile />
      </div>
    </div>
  );
};

export default Navbar1;
