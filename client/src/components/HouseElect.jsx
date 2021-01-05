import React, { useState } from "react";
import {
  Button,
  Container,
  Col,
  Row,
  Card,
} from "react-bootstrap";
import RepElectData from "../seedData/repSeed";
import axios from 'axios';

const HouseElect = () => {
  const [candidate, setCandidate] = useState("");

  console.log(RepElectData);

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
    <Container id="rep-elect-card">
      <Card bg="light">
        <Card.Body>
          <h3>{RepElectData[0].office}</h3>
          <h5>{RepElectData[0].district}</h5>
          <hr /> 

          <Row>
            <Col xs lg={3}></Col>
            <Col xs lg={1}>
                <input
                  type="radio"
                  checked={candidate === "Blake Moore"}
                  value="Blake Moore"
                  id="candidate1"
                  onChange={(e) => {
                    setCandidate(e.target.value);
                  }}
                />
            </Col>
            <Col xs lg={5}>
                <label>
                  {RepElectData[0].houseRep[0].party}<br />
                  {RepElectData[0].houseRep[0].candidate}
                </label>
                <br />
            </Col>
            <Col xs lg={3}></Col>
            </Row>

            <Row>
              <Col xs lg={3}></Col>
              <Col xs lg={1}>   
                <input
                  type="radio"
                  checked={candidate === "Darren Parry"}
                  value="Darren Parry"
                  id="candidate2"
                  onChange={(e) => {
                    setCandidate(e.target.value);
                  }}
                />
              </Col>
              <Col xs lg={5}>
              <form>
                <div className="candidate-select">
                  <div className="radio">
                  <label>
                    {RepElectData[0].houseRep[1].party}<br />
                    {RepElectData[0].houseRep[1].candidate}
                  </label>
                  </div>
                </div>
              </form>
              </Col>
              </Row>
          <Button 
            variant="secondary" 
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

export default HouseElect;
