import React, { useState } from "react";
import {
  Button,
  Container,
  Card,
  Row,
  Col
} from "react-bootstrap";
import PresElectData from '../seedData/presSeed';
import axios from 'axios';


const PresElect = (props) => {
  
  const [candidate, setCandidate] = useState("");

  console.log(PresElectData);

  const submitVote = (event) => {
    event.preventDefault();
    alert("You voted for " + candidate + ".");
    axios.post('/api/vote', { candidate: candidate })
      .then((res) => {
        console.log(res.data)
      })
      .catch(err => console.log (err));
    };

  return (
    <Container id="pres-elect-card">
      <Card bg="light">
        <Card.Body>
          <h3>{PresElectData[0].office}</h3>
          <hr />

          <Row>
            <Col xs lg={3}></Col>
            <Col xs lg={1}>
                <input
                  type="radio"
                  checked={candidate === "Donald J. Trump"}
                  value="Donald J. Trump"
                  id="candidate1"
                  onChange={(e) => {
                    setCandidate(e.target.value);
                    console.log(e.target.value)
                  }}
                />
            </Col>
            <Col xs lg={4}>
              <form>
                <div className="candidate-select">
                  <div className="candidate-radio">           
                    <label>
                      {PresElectData[0].president[0].party}<br />
                      {PresElectData[0].president[0].candidate}
                      {PresElectData[0].president[0].candidateState}<br />
                      {PresElectData[0].president[0].runningMate}
                      {PresElectData[0].president[0].runningMateState}
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
                  checked={candidate === "Joseph R. Biden"}
                  value="Joseph R. Biden"
                  id="candidate2"
                  onChange={(e) => {
                    setCandidate(e.target.value);
                    console.log(e.target.value)
                  }}
                />
              </Col>
              <Col xs lg={4}>
                <label>
                  {PresElectData[0].president[1].party}<br />
                  {PresElectData[0].president[1].candidate}
                  {PresElectData[0].president[1].candidateState}<br />
                  {PresElectData[0].president[1].runningMate}
                  {PresElectData[0].president[1].runningMateState}
                </label>
              </Col>
              <Col xs lg={4}></Col>
              </Row>
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
  );
};

export default PresElect;
