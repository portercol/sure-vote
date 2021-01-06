import React, { useState } from "react";
import { Button, Container, Col, Row, Card } from "react-bootstrap";
import axios from 'axios';
import ConstAmend1Data from '../seedData/const1';

const ConstAmend2 = () => {

  const [answer, setAnswer] = useState("");
  const [voted, setVoted] = useState(false);

  console.log(ConstAmend1Data);


  const submitVote = (event) => {
    event.preventDefault();
    alert("You voted " + answer + " on Constitutional Amendment 2.");
    axios.post('/api/vote', { answer: answer })
      .then((res) => {
        console.log(res.data)
        setVoted(true)
      })
      .catch(err => console.log (err));
    };

  return (
    <Container id="const-amend1-card">
      <Card bg="light">
        <Card.Body>
          <h3>Utah State Constitutional Amendment 2</h3>
          <h6>
          Shall the Utah Constitution be amended to specify that certain requirements that a person must meet to be eligible for the office of senator or representative in the Utah Legislature apply at the time the person is elected or appointed?
          </h6>
          <hr />

          <Row>
            <Col xs lg={5}></Col>
            <Col xs lg={1}>
              <form>
                <input
                  type="radio"
                  checked={answer === "yes"}
                  disabled={voted}
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
                  disabled={voted}
                  value="no"
                  id="answer2"
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
            disabled={!answer || voted}
            onClick={submitVote}
          >
            Submit
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ConstAmend2;
