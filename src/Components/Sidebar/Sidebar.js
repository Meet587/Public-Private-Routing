import React, { useState } from "react";
import { Container } from "reactstrap";
import logo from "../../assets/imgs/logo.jpg";
import { SidebarData } from "../../Data/Data";
import "./Sidebar.css";
import { useNavigate } from "react-router";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const navigate = useNavigate();
  const handleClick = (id, item) => {
    setSelected(id);
    navigate(`${item.path}`);
  };
  return (
    <>
      <Container className="Sidebar m-0 p-0">
        <div className="logo">
          <img className="mt-4" src={logo} alt="logo" />
        </div>
        <div className="menu mt-5">
          {SidebarData.map((item, id) => {
            return (
              <div
                className={
                  selected === id
                    ? "menuLogo  menuItem active"
                    : "menuLogo menuItem"
                }
                key={id}
                // onClick={()=> setSelected(id)}
                onClick={() => handleClick(id, item)}
              >
                <span>
                  <item.icon />
                </span>
                <span>{item.heading}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
};

export default Sidebar;
