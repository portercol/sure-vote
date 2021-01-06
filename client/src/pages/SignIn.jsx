// import Rreact, elements from React-Bootstrap, SignUp.css
import React, { useState } from "react";
import { Button, ButtonGroup, Container, Form, Jumbotron } from "react-bootstrap";
import './SignIn.css'
import axios from "axios";

// create functional component to hold sign up page data
const SignIn = () => {

  const [usernameLogin, setUsernameLogin] = useState('');
  const [passwordLogin, setPasswordLogin] = useState('');

  // create function for submit button 'onclick'
  const submitBtn = () => {
    console.log(usernameLogin);
    console.log(passwordLogin);
    if (usernameLogin === "" || passwordLogin === "") {
      console.log("Missing username or password");
    } else {
      const userLoginObj = {
        username: usernameLogin,
        password: passwordLogin
      }
      console.log(userLoginObj);
      axios.post("/api/login",
        userLoginObj
      ).then((res) => {
        console.log("User authenticated");
      }).catch(err => {
        console.log(err);
      });
    }
  }

  return (
    <>
      <Container id="main-container">
        <Jumbotron id="main-jumbotron">
          <h1 className="header">Sign In</h1>
          <hr />
          <Form id="signIn-form">
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                onChange={e => setUsernameLogin(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label></Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={e => setPasswordLogin(e.target.value)}
              />
              <Form.Text className="text-muted">
                We'll never share your password with anyone.
              </Form.Text>
            </Form.Group>
          </Form>
          <div id="userSignIn">
            <ButtonGroup size="lg" className="mr-3">
              <Button onClick={() => { submitBtn() }} variant="dark"
                type="submit" id='right-button'>Go Back</Button>
            </ButtonGroup>

            <ButtonGroup size="lg" className="mr-3">
              <Button onClick={() => { submitBtn() }} variant="dark"
                type="submit" id='left-button'>Sign In</Button>
            </ButtonGroup>
          </div>
        </Jumbotron>
      </Container>
    </>
  );
};

// export component from SignUp.jsx
export default SignIn;