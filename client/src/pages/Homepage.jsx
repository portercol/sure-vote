import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Jumbotron,
  ButtonGroup, 
  Col, 
  Row
} from "react-bootstrap";
import './Homepage.css'
import FingerPrint from '../assets/blkFingerPrint.png'


const Homepage = () => {

const signUpBtn = () => {
  console.log("hit sign up path");
}

const signInBtn = () => {
  console.log("hit sign in path");
}
  return (
      <Row>
          <Col xs lg={3}></Col>
          <Col xs lg={6}>
        <Jumbotron id="main-jumbotron">
        <h1>SURE V<img className="fplogo" src={ FingerPrint } alt='finger print logo'/>TE</h1>
        <hr/>
        <p>
          OUR MISSION:
        </p>
        <p>
          Mobile-friendly voting made safe and secure using 2FA and Face Recognition.
        </p>
        <hr/>
        <br/>
        <ButtonGroup size="lg" className="mr-3">
            <Button href="/signup" onClick={signUpBtn()} variant="dark" id='left-button'>Sign Up</Button>
        </ButtonGroup>
        <ButtonGroup size="lg" className="mr-3">
            <Button href="/signin" onClick={signInBtn()} variant="dark" id='right-button'>Sign In</Button>
        </ButtonGroup>
        </Jumbotron>
        </Col>
        <Col xs lg={3}></Col>

    </Row>
  );
};

export default Homepage;
