import React, { useState } from "react";
import {
  Button,
  Container,
  Col,
  Row,
  Card,
} from "react-bootstrap";
import StRepElectData from '../seedData/strepSeed';
import axios from 'axios';


const PresElect = () => {

  const [candidate, setCandidate] = useState("");
  const [voted, setVoted] = useState(false);

  console.log(StRepElectData);

  const submitVote = (event) => {
    event.preventDefault();
    alert("You voted for " + candidate + ".");
    axios.post('/api/vote', { candidate: candidate })
      .then((res) => {
        console.log(res.data)
        setVoted(true)
      })
      .catch(err => console.log (err));
    };

  return (
    <Container id="staterep-elect-card">
      <Card bg="light">
        <Card.Body>
          <h3><span>Utah </span>{StRepElectData[0].office}</h3>
          <h5>{StRepElectData[0].district}</h5>
          <hr />

          <Row>
            <Col xs lg={3}></Col>
            <Col xs lg={1}>
                <input
                  type="radio"
                  checked={candidate === "Ryan Wilcox"}
                  disabled={voted}
                  value="Ryan Wilcox"
                  id="candidate1"
                  onChange={(e) => {
                    setCandidate(e.target.value);
                  }}
                />
                </Col>
            <Col xs lg={4}>

                <label>
                  {StRepElectData[0].stateHouse[0].party}<br />
                  {StRepElectData[0].stateHouse[0].candidate}
                </label>
                </Col>
            <Col xs lg={4}></Col>
          </Row>

          <Row>
            <Col xs lg={3}></Col>
            <Col xs lg={1}>
                <input
                  type="radio"
                  checked={candidate === "Grant Protzman"}
                  disabled={voted}
                  value="Grant Protzman"
                  id="candidate2"
                  onChange={(e) => {
                    setCandidate(e.target.value);
                  }}
                />
                </Col>
            <Col xs lg={4}>
                <label>
                  {StRepElectData[0].stateHouse[1].party}<br />
                  {StRepElectData[0].stateHouse[1].candidate}
                </label>
                </Col>
            <Col xs lg={4}></Col>
          </Row>

          <Button
            variant="dark"
            type="submit"
            size="lg"
            block
            disabled={voted}
            onClick={submitVote}
          >
            Submit
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PresElect;
