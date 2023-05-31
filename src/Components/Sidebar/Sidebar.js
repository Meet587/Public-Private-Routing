import React from "react";
import { Container } from "reactstrap";
import logo from "../../assets/imgs/logo.jpg";
import { SidebarData } from "../../Data/Data";
import './Sidebar.css'

const Sidebar = () => {
  return (
    <>
      <Container className="Sidebar m-0" >
        <div className="logo">
          <img className="mt-4" src={logo} alt="logo" />
        </div>
        <div className="menu mt-5" >
          {SidebarData.map((item, id) => {
            return (
              <div className="menuItem my-4 py-2" key={id}>
                <span className="menuLogo me-2"><item.icon/></span>
                <span className="menuName">{item.heading}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Sidebar;
