import React, { useState } from "react";
import {
  Button,
  Container,
  Col,
  Row,
  Card,
} from "react-bootstrap";
import StSenElectData from "../seedData/stsenSeed";
import axios from 'axios';

const StSenElect = () => {

  const [candidate, setCandidate] = useState("");
  const [voted, setVoted] = useState(false);

  console.log(StSenElectData);

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
    <Container id="statesen-elect-card">
      <Card bg="light">
        <Card.Body>
          <h3>{StSenElectData[0].office}</h3>
          <h5>{StSenElectData[0].district}</h5>
          <hr />

          <Row>
            <Col xs lg={3}></Col>
            <Col xs lg={1}>
              <input
                type="radio"
                checked={candidate === "John Johnson"}
                disabled={voted}
                value="John Johnson"
                id="candidate1"
                onChange={(e) => {
                  setCandidate(e.target.value);
                }}
              />
            </Col>
            <Col xs lg={4}>
              <label>
                {StSenElectData[0].stateSenator[0].party}
                <br />
                {StSenElectData[0].stateSenator[0].candidate}
              </label>
            </Col>
            <Col xs lg={4}></Col>
          </Row>

          <Row>
            <Col xs lg={3}></Col>
            <Col xs lg={1}>
              <input
                type="radio"
                checked={candidate === "Katy Owens"}
                disabled={voted}
                value="Katy Owens"
                id="candidate2"
                onChange={(e) => {
                  setCandidate(e.target.value);
                }}
              />
            </Col>
            <Col xs lg={4}>
              <label>
                {StSenElectData[0].stateSenator[1].party}
                <br />
                {StSenElectData[0].stateSenator[1].candidate}
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

export default StSenElect;
