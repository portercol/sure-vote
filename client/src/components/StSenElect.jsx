import React, { useEffect, useState, Component, submitBtn } from "react";
import {
  Button,
  Jumbotron,
  Container,
  Col,
  Row,
  Form,
  Card,
} from "react-bootstrap";
import StSenElectData from "../seedData/stsenSeed";

const StSenElect = () => {
  const [radio, setRadio] = useState([]);

  console.log(StSenElectData);

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
                checked={radio === "option1"}
                value="option1"
                id="radio1"
                onChange={(e) => {
                  setRadio(e.target.value);
                }}
              />
            </Col>
            <Col xs lg={5}>
              <label>
                {StSenElectData[0].stateSenator[0].party}
                <br />
                {StSenElectData[0].stateSenator[0].candidate}
              </label>
            </Col>
            <Col xs lg={3}></Col>
          </Row>

          <Row>
            <Col xs lg={3}></Col>
            <Col xs lg={1}>
              <input
                type="radio"
                checked={radio === "option1"}
                value="option1"
                id="radio1"
                onChange={(e) => {
                  setRadio(e.target.value);
                }}
              />
            </Col>
            <Col xs lg={5}>
              <label>
                {StSenElectData[0].stateSenator[1].party}
                <br />
                {StSenElectData[0].stateSenator[1].candidate}
              </label>
            </Col>
            <Col xs lg={3}></Col>
          </Row>

          {/* <Button 
                    variant="secondary" 
                    type="submit"
                    size="lg" 
                    block
                    onClick={submitVote}
                  >
                    Submit
                  </Button> */}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default StSenElect;
