import React, { useEffect, useState, Component, submitBtn } from "react";
import {
  Button,
  Jumbotron,
  Container,
  Card
} from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";
import PresElect from "../components/PresElect";
import HouseElect from "../components/HouseElect";
import GovElect from "../components/GovElect";
import StSenElect from "../components/StSenElect";
import ScRetain from "../components/ScRetain";
import ConstAmend1 from "../components/ConstAmend1";
import ConstAmend2 from "../components/ConstAmend2";
// import "../scripts/seed";
import "./Ballot.css";

const Ballot = () => {
  const [radio, setRadio] = useState([]);

  const radios = [
    { name: "Option 1", value: "option1" },
    { name: "Option 2", value: "option2" },
  ];

  const submitVote = (event) => {
    event.preventDefault();
    console.log("hitting the button");
  };

  const votes = {};

  return (
    <>
      <Navbar />
      <Container id="main-container">
        <Jumbotron id="main-jumbotron">
          <h1>Ballot</h1>
          <hr />
          <h6>
            Click the radio button for the corresponding option to vote.
            When you are done, click submit.
              </h6>
          <h6>
            Ensure your selections are correct. If you encounter any
            problems, please click the 'Contact' button above.
              </h6>
          <PresElect />
          <HouseElect />
          <GovElect />
          <StSenElect />
          <ScRetain />
          <ConstAmend1 />
          <ConstAmend2 />

          <Card bg="light">
            <Card.Body>
              <h5>Please verify answers and click submit.</h5>
              <br />
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
        </Jumbotron>
      </Container>

    </>
  );
};

export default Ballot;
