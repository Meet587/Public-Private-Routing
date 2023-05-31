import React, { useState } from "react";
import "./Navbar.css";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogout } from "react-icons/ai";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  NavItem,
  Navbar,
} from "reactstrap";

const Navbar1 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="Navbar">
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={"down"}>
        <DropdownToggle caret className="profile_icon ">
          <CgProfile />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Your Profile</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem text>Dropdown Item Text</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>
            <span style={{ color: "red" }}>
              <AiOutlineLogout />
            </span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default Navbar1;
