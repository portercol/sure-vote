import React, { useState } from "react";
import {
  Button,
  Jumbotron,
  Container,
  Col,
  Row,
  Card,
} from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";
// import "../seed.json";
import "./Ballot.css"

const Ballot = () => {
  const [radio, setRadio] = useState([]);

  const radios = [
    { name: "Option 1", value: "option1" },
    { name: "Option 2", value: "option2" },
  ];

  const submitVote = (event) => {
    event.preventDefault();
    console.log("hitting the button")
  }

  return (
    <>
      <Navbar />
      <Row>
        <Col xs lg={3}></Col>
        <Col xs lg={6}>
          <Jumbotron id="main-jumbotron" fluid>
            <Container>
              <h1>Ballot</h1>
              <hr/>
              <h6>
                Click the radio button for the corresponding option to vote.
                When you are done, click submit.
              </h6>
              <h6>
                Ensure your selections are correct. If you encounter any
                problems, please click the 'Contact' button above.
              </h6>
            </Container>

            <Container id="pres-elect-card">

              <Card bg="light">
                <Card.Body>
                  <h3>President of the United States</h3>
                  <form>
                    <input
                      type="radio"
                      checked={radio === "option1"}
                      value="option1"
                      id="radio1"
                      onChange={(e) => {
                          setRadio(e.target.value);
                        }}
                        />
                        <label>Candidate 1</label>
                    <br />
                    <input
                      type="radio"
                      checked={radio === "option2"}
                      value="option2"
                      id="radio2"
                      onChange={(e) => {
                          setRadio(e.target.value);
                        }}
                        />
                        <label>Candidate 2</label>
                  </form>
                  <Button 
                    variant="dark" 
                    type="submit"
                    size="lg" 
                    block
                    onClick={submitVote}
                  >
                    Submit
                  </Button>
                </Card.Body>
              </Card>
            </Container>
          </Jumbotron>
        </Col>
        <Col xs lg={3}></Col>
      </Row>
    </>
  );
  
};


export default Ballot;
