// import Rreact, elements from React-Bootstrap, SignUp.css
import React from "react";
import { Button, ButtonGroup, Col, Container, Form, Jumbotron } from "react-bootstrap";
import './SignIn.css'

// create functional component to hold sign up page data
const SignIn = () => {

  // create function for submit button 'onclick'
  const submitBtn = () => {
    console.log("submitted sign in credentials");
  }

  return (
    <>
      <Container id="main-container">
        <Jumbotron id="signIn-jumbotron">
          <h1 id="signIn">Sign In</h1>
          <hr />
          <p>Please Enter Your Credentials</p>
          <hr />
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label></Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label></Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                  We'll never share your password with anyone else.
                </Form.Text>
              </Form.Group>
            </Form.Row>
          </Form>

          <div id="userSignIn">
            <ButtonGroup size="lg" className="mr-3">
              <Button href="/" onClick={submitBtn()} variant="dark"
                type="submit" id='right-button'>Go Back</Button>
            </ButtonGroup>

            <ButtonGroup size="lg" className="mr-3">
              <Button href="/profile" onClick={submitBtn()} variant="dark"
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