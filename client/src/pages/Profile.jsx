// import React, elements from React-Bootstrap, Navbar.jsx and img from assets
import React from "react";
import {
  Card,
  Container,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";
import landLady from "../assets/landlady.jpg";
import "../pages/Profile.css";
import axios from 'axios';

const Profile = () => {

  const getProfile = () => {

    const id = "5ff24eadb055a76f5c253581";

    axios
      .get('/api/profile/' + id)
      .then((res) => {
        console.log(res)
      }).catch(err => {
        console.log(err);
      })
  }

  getProfile();

  return (
    <>
      <Navbar />
      <Container>
        <Card className="mainCard" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={landLady} />
          <Card.Body>
            <Card.Title>{ }</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              Joe Shmoe<span></span>
            </ListGroupItem>
            {/* <ListGroupItem>Password:<span id="password-span">{uuid}</span></ListGroupItem> */}
            <ListGroupItem>
              Street: <span id="street-span">123 Main St.</span>
            </ListGroupItem>
            <ListGroupItem>
              City: <span id="city-span">Anytown</span>
            </ListGroupItem>
            <ListGroupItem>
              State: <span id="state-span">Utah</span>
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button variant="dark" type="submit">
              Update Profile
                </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );

}

export default Profile;
