import React from "react";
import "./Register.css";
import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import { Link } from "react-router-dom";
import { registerFormData } from "../../Data/Data";

const Register = () => {
  return (
    <Container>
      <Card className="m-auto registration" style={{ width: "60vw" }}>
        <CardBody>
          <Form className="p-4">
            <Row>
              {registerFormData.map((data, id) => {
                return (
                  <Col md="6" sm="12" key={id}>
                    <FormGroup floating>
                      <Input
                        id={data.id}
                        name={data.name}
                        placeholder={data.placeholder}
                        type={data.type}
                      />
                      <Label for={data.for}>{data.lable}</Label>
                    </FormGroup>
                  </Col>
                );
              })}
            </Row>
            <div className="d-flex justify-content-center mt-4">
              <Button className="mw-50">Register</Button>
            </div>
          </Form>
          <div className="d-flex justify-content-center mt-4 mb-2">
            <Link to={"/login"}>Alredy Register?</Link>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
};

export default Register;

// <Col md="6" sm="12">
// <FormGroup floating>
//   <Input
//     id="lName"
//     name="lName"
//     placeholder="Last Name"
//     type="text"
//   />
//   <Label for="lName">Last Name</Label>
// </FormGroup>
// </Col>
// <Col md="6" sm="12">
// <FormGroup floating>
//   <Input id="cNum" name="cNum" placeholder="cNum" type="text" />
//   <Label for="cNum">Contact Num</Label>
// </FormGroup>
// </Col>
// <Col md="6" sm="12">
// <FormGroup floating>
//   <Input
//     id="exampleEmail"
//     name="email"
//     placeholder="Email"
//     type="email"
//   />
//   <Label for="exampleEmail">Email</Label>
// </FormGroup>
// </Col>
// <Col md="6" sm="12">
// <FormGroup floating>
//   <Input
//     id="examplePassword"
//     name="password"
//     placeholder="Password"
//     type="password"
//   />
//   <Label for="examplePassword">Password</Label>
// </FormGroup>
// </Col>
// <Col md="6" sm="12">
// <FormGroup floating>
//   <Input
//     id="exampleCPassword"
//     name="password"
//     placeholder="Password"
//     type="text"
//   />
//   <Label for="exampleCPassword">Conform Password</Label>
// </FormGroup>
// </Col>
