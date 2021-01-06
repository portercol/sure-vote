import React, { useState } from "react";
import {
  Button,
  Container,
  Col,
  Row,
  Card,
} from "react-bootstrap";
import GovElectData from "../seedData/govSeed";
import axios from 'axios';

const GovElect = () => {

  const [candidate, setCandidate] = useState("");
  const [voted, setVoted] = useState(false);

  console.log(GovElectData);

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

  const votes = {};

  return (
    <Container id="gov-elect-card">
      <Card bg="light">
        <Card.Body>
          <h3>Governor of Utah</h3>
          <hr />

          <Row>
            <Col xs lg={3}></Col>
            <Col xs lg={1}>
              <input
                type="radio"
                checked={candidate === "Spencer Cox"}
                disabled={voted}
                value="Spencer Cox"
                id="candidate1"
                onChange={(e) => {
                  setCandidate(e.target.value);
                }}
              />
            </Col>
            <Col xs lg={4}>
              <form>
                <div className="candidate-select">
                  <div className="candidate-radio">
                    <label>
                      {GovElectData[0].governor[0].party}
                      <br />
                      {GovElectData[0].governor[0].candidate}
                      {GovElectData[0].governor[0].office1}
                      <br />
                      {GovElectData[0].governor[0].runningMate}
                      {GovElectData[0].governor[0].office2}
                    </label>
                    <br />
                  </div>
                </div>
              </form>
            </Col>
            <Col xs lg={4}></Col>
          </Row>

          <Row>
            <Col xs lg={3}></Col>
            <Col xs lg={1}>
              <input
                type="radio"
                checked={candidate === "Chris Peterson"}
                disabled={voted}
                value="Chris Peterson"
                id="candidate2"
                onChange={(e) => {
                  setCandidate(e.target.value);
                }}
              />
            </Col>
            <Col xs lg={4}>
              <label>
                {GovElectData[0].governor[1].party}
                <br />
                {GovElectData[0].governor[1].candidate}
                {GovElectData[0].governor[1].office1}
                <br />
                {GovElectData[0].governor[1].runningMate}
                {GovElectData[0].governor[1].office2}
              </label>
            </Col>
            <Col xs lg={4}></Col>
          </Row>
          <Button 
              variant="dark" 
              type="submit"
              size="lg" 
              block
              disabled={!candidate || voted}
              onClick={submitVote}
            >
              Submit
            </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default GovElect;
