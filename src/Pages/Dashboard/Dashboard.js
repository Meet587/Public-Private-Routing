import React, { useContext } from "react";
import "./Dashboard.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import MainDash from "../../Components/MainDash/MainDash";
import { Col, Row } from "reactstrap";

const Dashboard = () => {
  return (
    <Row className="AppGlass">
      <Col md="2" className="p-0">
        <Sidebar />
      </Col>
      <Col md="10" className="p-0">
        <MainDash />
      </Col>
    </Row>
  );
};

export default Dashboard;
