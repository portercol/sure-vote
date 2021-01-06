// import React, elements from React-Bootstrap, Navbar.jsx and img from assets
import React from "react";
import {
  Card,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Button,
  Jumbotron,
} from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";
import landLady from "../assets/landlady.jpg";
import "../pages/Profile.css";

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
        <Jumbotron>
          <Container>
            <Row>
              <Col xs lg={4}></Col>
            <Col xs lg={4}>    
          <Card className="mainCard" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={landLady} />
              <Card.Body>
                <Card.Title>{}</Card.Title>
                {/* <Card.Text>
              If you're behind on your rent I'll work with you.
            </Card.Text> */}
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
              </Col> 
              <Col xs lg={4}></Col>
              </Row>
          </Container>
        </Jumbotron>
    </>
  );
};

// export component from Profile.jsx
export default Profile;
