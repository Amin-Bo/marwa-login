import React, { Component } from "react";
import { Fragment } from "react";
import { Container, Col, Form, Button } from "react-bootstrap";
import "./style/style.css";
import loginImg from './image/login.svg'
class Loginform extends Component {
  render() {
    return (
      <Fragment>
        <Container>
          <Col lg={6} md={6} sm={12} className="p-5 m-auto">
            <div className="LoginBox p-5">
                <img src={loginImg} className="loginImg m-auto" alt=""/>
              <Form className="mt-3">
                <Form.Group className="mb-3" >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="float-left" >
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <a  className="ml-3" href="#">Forgot Password</a>
                <Button className="btn-block" variant="success" type="submit">
                  Login
                </Button>
              </Form>
            </div>
          </Col>
        </Container>
      </Fragment>
    );
  }
}

export default Loginform;
