// import React, elements from React-Bootstrap, Navbar.jsx and img from assets
import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  ListGroup,
  ListGroupItem,
  Button
} from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";
import landLady from "../assets/landlady.jpg";
import "../pages/Profile.css";
import axios from 'axios';

const Profile = () => {

  // const [profileData, setProfileData] = useState();

  // const useEffect

  const getProfile = () => {

  axios
    .get('/api/profile',
      {
        _id: "5ff67acffb1185391c11fdfb",
      }).then((res) => {
        console.log(res)
      }).catch(err => {
        console.log(err);
      })

  }
  
  getProfile();

  return (
    <>
      <Navbar />
      <Container id="main-container">
        <Card className="mainCard" style={{ width: "30rem" }}>
          <Card.Img variant="top" src={landLady} />
          <Card.Body>
            <Card.Title>{ }</Card.Title>
            <Card.Text></Card.Text>
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

// export component from Profile.jsx
export default Profile;
