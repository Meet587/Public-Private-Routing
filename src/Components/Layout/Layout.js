import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { Col, Row } from "reactstrap";
import Navbar1 from "../../Components/Navbar/Navbar";
import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <Row className="AppGlass">
      <Col md="2" className="p-0">
        <Sidebar />
      </Col>
      <Col md="10" className="p-0">
        <Row className="p-0 m-0">
          <Navbar1 />
        </Row>
        <Row className="p-0 m-0">{children}</Row>
      </Col>
    </Row>
  );
};

export default Layout;
