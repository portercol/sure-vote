// import React, elements from React-Bootstrap, Navbar.jsx and img from assets
import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";
// import landLady from "../assets/landlady.jpg";
import "../pages/Profile.css";
import axios from 'axios';
import { CustomPlaceholder } from 'react-placeholder-image';
import { useGlobalContextAuthUser } from "../utils/GlobalContextAuthUser.js";



const Profile = () => {

  const [data, getData] = useState();
  // const [userId, dispatch] = useGlobalContextAuthUser();
  const message = useGlobalContextAuthUser();
  console.log(message);
  // console.log(dispatch);


  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {

    // axios
    //   .get('/api/profile/' + userId)
    //   .then((res) => {
    //     console.log("axios: ", data)
    //     const allData = res.data;
    //     getData(allData);
    //   }).catch(err => {
    //     console.log(err);
    //   })
  }


  if (!data) return (<> </>);

  return (
    <>
      <Navbar />
      <Container id="main-container">
        <Card className="mainCard" style={{ width: "30rem" }}>
          {/* <Card.Img variant="top" src="holder.js/300x300" /> */}
          <CustomPlaceholder width={200} height={400} />
          <ListGroupItem>
            <h6>Upload a Photo</h6>
            <form>
              <input type='file' name='picture' />
              <button>Submit</button>
            </form>
          </ListGroupItem>
          <Card.Body>
            <Card.Title>
              {data.firstName} {data.lastName}
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            {/* <ListGroupItem>Password:<span id="password-span">{uuid}</span></ListGroupItem> */}
            <ListGroupItem>
              <span id="street">Street Address: </span> {data.address1}
            </ListGroupItem>
            <ListGroupItem>
              <span id="city">CITY: </span>{data.city}
            </ListGroupItem>
            <ListGroupItem>
              <span id="state">STATE: </span>{data.state}
            </ListGroupItem>
            <ListGroupItem>
              <span id="zipcode">ZIP CODE: </span>{data.zipCode}
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
