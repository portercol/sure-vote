import React, { useState } from "react";
import { Button, Jumbotron, Container, Col, Row, Card } from "react-bootstrap";
import axios from 'axios';
import ConstAmend1Data from '../seedData/const1';

const ConstAmend1 = () => {

  const [answer, setAnswer] = useState("");
  const [voted, setVoted] = useState(false);

  console.log(ConstAmend1Data);

  let constAmend1 = ConstAmend1Data[0].ballotQ.answer1;

  const submitVote = (event) => {
    event.preventDefault();
    alert("You voted " + answer + " on Constitutional Amendment 1.");
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
          <h3>Utah State Constitutional Amendment 1</h3>
          <h6>
            Shall the Utah Constitution be amended to change words that apply to
            a single gender (such as the word 'men') to words that are not
            limited to a single gender (such as the word 'persons')?
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

export default ConstAmend1;
