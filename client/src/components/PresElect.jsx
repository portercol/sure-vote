import React, { useEffect, useState, Component, submitBtn } from "react";
import {
  Button,
  Container,
  Card,
  Row,
  Col
} from "react-bootstrap";

import PresElectData from '../seedData/presSeed';


const PresElect = () => {
  
  const [radio, setRadio] = useState([]);

  const radios = [
    { name: "Option 1", value: "option1" },
    { name: "Option 2", value: "option2" },
  ];

  console.log(PresElectData);

  const submitVote = (event) => {
    event.preventDefault();
    console.log("hitting the button");
  };

  const votes = {};
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
                  checked={radio === "option1"}
                  value="option1"
                  id="radio1"
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                />
            </Col>
            <Col xs lg={5}>
              <form>
                <div className="candidate-select">
                  <div className="radio">           
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
            <Col xs lg={3}></Col>
            </Row>

            <Row>
              <Col xs lg={3}></Col>
              <Col xs lg={1}>
              <input
                    type="radio"
                    checked={radio === "option2"}
                    value="option2"
                    id="radio2"
                    onChange={(e) => {
                      setRadio(e.target.value);
                    }}
                  />
              </Col>
              <Col xs lg={5}>

            <form>
                <label>
                  {PresElectData[0].president[1].party}<br />
                  {PresElectData[0].president[1].candidate}
                  {PresElectData[0].president[1].candidateState}<br />
                  {PresElectData[0].president[1].runningMate}
                  {PresElectData[0].president[1].runningMateState}
                </label>
                <div className="candidate-select">
              <div className="radio">
                
              </div>
            </div>
          </form>
              </Col>
          {/* <Button 
                variant="secondary" 
                type="submit"
                size="lg" 
                block
                onClick={submitVote}
                >
                Submit
                </Button> */}
                </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PresElect;
