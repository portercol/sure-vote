// import React, elements from React-Bootstrap, Navbar.jsx and img from assets
import React, { useEffect } from "react";
import {
  Card,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";
import landLady from '../assets/landlady.jpg';
import '../pages/Profile.css'

// create functional component to hold profile data
const Profile = () => {

  // useEffect(() => {
  //   async function fetchProfileData(){
  //     try {
  //       const response = await fetch("/api/signup");
  //       const json = await response.json();
  //       console.log({ json });
  //     } catch (err) {
  //       console.log({ err });
  //     }
  //   }

  //   fetchProfileData();
  // }, []);

  return (
    <>
      <Navbar />
      <div className="col d-flex justify-content-center">
        <Card className="mainCard" style={{ width: '18rem' }}>
          <Card.Img variant="top" src={landLady} />
          <Card.Body>
            <Card.Title>{}</Card.Title>
            {/* <Card.Text>
              If you're behind on your rent I'll work with you.
            </Card.Text> */}
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>Joe Shmoe<span></span></ListGroupItem>
            {/* <ListGroupItem>Password:<span id="password-span">{uuid}</span></ListGroupItem> */}
            <ListGroupItem>Street: <span id="street-span">{}</span></ListGroupItem>
            <ListGroupItem>City: <span id="city-span">{}</span></ListGroupItem>
            <ListGroupItem>State: <span id="state-span">{}</span></ListGroupItem>
            <ListGroupItem>Zip Code: <span id="state-span">{}</span></ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Button variant="dark" type="submit">
              Update Profile
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

// export component from Profile.jsx
export default Profile;
