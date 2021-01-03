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
        <Jumbotron id="main-jumbotron">
                    <h1 className="header">Sign In</h1>
                    <hr />
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="Email"/>
                            <Form.Text className="text-muted">
                              We'll never share your email with anyone.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label></Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                            <Form.Text className="text-muted">
                              We'll never share your password with anyone.
                            </Form.Text>
                        </Form.Group>
                    </Form>
          <div id="userSignIn">
            <ButtonGroup size="lg" className="mr-3">
              <Button href="/" onClick={() => {submitBtn()}} variant="dark"
                type="submit" id='right-button'>Go Back</Button>
            </ButtonGroup>

            <ButtonGroup size="lg" className="mr-3">
              <Button href="/profile" onClick={() => {submitBtn()}} variant="dark"
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