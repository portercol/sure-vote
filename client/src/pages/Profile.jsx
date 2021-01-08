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

  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [addressOne, setAddressOne] = useState("");
  // const [city, setCity] = useState("");
  // const [state, setState] = useState("");
  // const [zipCode, setZipCode] = useState("");

  const [data, getData] = useState();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {

    const id = "5ff24eadb055a76f5c253581";

    axios
      .get('/api/profile/' + id)
      .then((res) => {
        console.log(data)
        const allData = res.data;
        getData(allData);
      }).catch(err => {
        console.log(err);
      })
  }

  if (!data) return (<> </>);

  return (
    <>
      <Navbar />
      <Container id="main-container">
        <Card className="mainCard" style={{ width: "30rem" }}>
          <Card.Img variant="top" src={landLady} />
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
