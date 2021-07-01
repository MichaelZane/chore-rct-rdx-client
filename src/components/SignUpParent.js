import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Modal, Form, Button } from "react-bootstrap";
import register from "../action/register";

function Copyright() {
  return (
    <div variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" to="/">
        Trac It
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </div>
  );
}

const Register = (props) => {
  const [register, setRegister] = useState({
    fname: "",
    lname: "",
    email: "",
    username: "",
    password: "",
  });

  function reset() {
    return setRegister({
      fname: "",
      lname: "",
      email: "",
      username: "",
      password: "",
    });
  }

  const changeHandler = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.register(register);
    props.history.push("/login");
    reset();
  };

  return (

    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Sign Up</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={submitForm} >
          <Form.Group controlId="formGroupName">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="First Name"
              onChange={changeHandler}
              value={register.fname}
            />
          </Form.Group>
          <Form.Group controlId="formGroupName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Last Name"
              onChange={changeHandler}
              value={register.lname}
            />
          </Form.Group>
          <Form.Group controlId="formGroupName">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={changeHandler}
              value={register.email}
            />
          </Form.Group>
          <Form.Group controlId="formGroupName">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="username"
              placeholder="Username"
              onChange={changeHandler}
              value={register.username}
            />
          </Form.Group>
          <Form.Group controlId="formGroupName">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={changeHandler}
              value={register.password}
            />
          </Form.Group>
          <Button 
            type="submit"   
            fullWidth variant="outlined" 
            color="primary"
            >
            Sign Up
          </Button>
          <Button
            type="button"
            fullwidth="true"
            variant="contained"
            color="primary"
            onClick={() => props.history.push("/home")}
          >
            Cancel
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
      <Copyright />
      <Button onClick={props.onHide}>Close</Button>
    </Modal.Footer>
    </Modal>

  );
};

export default connect(null, { register })(Register);