import React, { useState } from "react";
import "./Login.css";
import {
  Button,
  Card,
  CardBody,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <Container>
      <Card className="m-auto login" style={{ width: "40vw" }}>
        <CardBody>
          <Form className="p-4" onSubmit={(e) => handleSubmit(e)}>
            <FormGroup floating>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="Email"
                type="email"
              />
              <Label for="exampleEmail">Email</Label>
            </FormGroup>
            <FormGroup floating>
              <Input
                id="examplePassword"
                name="password"
                placeholder="Password"
                type="password"
              />
              <Label for="examplePassword">Password</Label>
            </FormGroup>
            <div className="d-flex justify-content-center">
              <Button className="w-50 mt-4">Login</Button>
            </div>
          </Form>
          <div className="d-flex justify-content-center mt-4 mb-3">
            <Link to={"/register"} className="text-black ">
              New user?
            </Link>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Login;
