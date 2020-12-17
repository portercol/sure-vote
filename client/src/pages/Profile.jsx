import React from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
  Row,
  Col,
} from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";
import landLady from '../assets/landlady.jpg';

const Profile = () => {
  return (
    <>
      <Navbar />

      <Row>
        <Col xs lg={3}></Col>
        <Col xs lg={6}>
          <Card style={{ width: "24rem" }}>
            <Card.Img variant="top" src={landLady} />
            <Card.Body>
              <Card.Title>Landlady Lady</Card.Title>
              <Card.Text>
                If you're behind on your rent I'll work with you.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>Joe Shmoe<span></span></ListGroupItem>
              <ListGroupItem>Password:<span id="password-span"></span></ListGroupItem>
              <ListGroupItem>Street: <span id="street-span">123 Main St.</span></ListGroupItem>
              <ListGroupItem>City: <span id="city-span">Anytown</span></ListGroupItem>
              <ListGroupItem>State: <span id="state-span">Utah</span></ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Button variant="primary" type="submit">
                Update Profile
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs lg={3}></Col>
      </Row>
    </>
  );
};

export default Profile;
