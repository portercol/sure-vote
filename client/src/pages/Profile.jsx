// import React, elements from React-Bootstrap, Navbar.jsx and img from assets
import React, { useState, useEffect } from "react";
import {
  Card,
  Container,
  Form,
  ListGroup,
  ListGroupItem
} from "react-bootstrap";
import ImageUploader from 'react-images-upload';
import Navbar from "../components/Navbar.jsx";
import Modal from '../components/Modal.jsx';
import "./Profile.css";
import axios from 'axios';
import { useGlobalContextAuthUser } from "../utils/GlobalContextAuthUser.js";
// import { IsAuthenticated } from "../utils/isAuthenticated.js";

const Profile = () => {
  // console.log(IsAuthenticated());

  const [data, getData] = useState();
  const [userId] = useGlobalContextAuthUser();
  console.log("profile user: ", userId);
  const [picture, setPicture] = useState();


  const uploadPicture = (pic) => {
    let reader = new FileReader();
    // console.log(reader, "READER");
    reader.onload = (e) => {
      setPicture(e.target.result);

      axios
        .post('/api/uploadImage', { id: "5ff9f49cadcf8f122db8f226", profilePic: e.target.result })
        .then((res) => {
          console.log(res)
        }).catch(err => {
          console.log(err);
        })
    };
    reader.readAsDataURL(pic[0]);
  }

  useEffect(() => {
    getProfile(userId);
  }, []);

  const getProfile = (userId) => {

    axios
      .get('/api/profile/' + userId.id)
      .then((res) => {
        console.log("/profile axios: ", res.data)
        const allData = res.data;
        getData(allData);
      }).catch(err => {
        console.log(err);
      })
  }

  if (!data) return (<> <h1>No user logged in</h1></>);

  return (
    <>
      <Navbar />
      <Container id="main-container">
        <Card className="mainCard" style={{ width: "30rem" }}>
          <ListGroupItem>
            <Form>
              {picture ? <img src={picture}></img> :
                <ImageUploader
                  withIcon={true}
                  buttonText='Upload Image'
                  onChange={uploadPicture}
                  imgExtension={['.jpeg', '.jpg', '.gif', '.png', '.gif']}
                  maxFileSize={5242880} />}
            </Form>
          </ListGroupItem>
          <Card.Body>
            <Card.Title id="card-title">
              {data.firstName} {data.lastName}
            </Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
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
            <Modal />
          </Card.Body>
        </Card>
      </Container>

    </>
  );
}

// export Profile component from Profile.jsx
export default Profile;