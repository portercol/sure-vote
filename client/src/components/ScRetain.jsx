import React, { useState } from "react";
import {
  Button,
  Container,
  Col,
  Row,
  Card,
} from "react-bootstrap";
import ScRetainData from '../seedData/scretainSeed';
import axios from 'axios';


const ScRetain = () => {

  const [answer, setAnswer] = useState("");

  console.log(ScRetainData);

  let scJustice = ScRetainData[0].candidate;

  const submitVote = (event) => {
    event.preventDefault();
    alert("You voted " + answer + " to retain " + scJustice);
    axios.post('/api/vote', { answer: answer })
      .then((res) => {
        console.log(res.data)
      })
      .catch(err => console.log (err));
    };

  return (
    <Container id="scretain-elect-card">
      <Card bg="light">
        <Card.Body>
          <h3>Utah Supreme Court Retention</h3>
          <h6>Should John A. Pearce be retained in the Utah Supreme Court?</h6>
          <hr />

          <Row>
            <Col xs lg={5}></Col>
            <Col xs lg={1}>  
              <form>
                <input
                  type="radio"
                  checked={answer === "yes"}
                  value="yes"
                  id="answer1"
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                />
                </form>
              </Col>
            <Col xs lg={1}>
                <p>Yes</p>
            </Col>
            <Col xs lg={5}></Col>
          </Row>

          <Row>
            <Col xs lg={5}></Col>
            <Col xs lg={1}>  
              <form>
                <input
                  type="radio"
                  checked={answer === "no"}
                  value="no"
                  id="answer1"
                  onChange={(e) => {
                    setAnswer(e.target.value);
                  }}
                />
                </form>
              </Col>
            <Col xs lg={1}>
                <p>No</p>
            </Col>
            <Col xs lg={5}></Col>
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

export default ScRetain;
