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
  
  const [radio, setRadio] = useState([]);

  const radios = [
    { name: "Option 1", value: "option1" },
    { name: "Option 2", value: "option2" },
  ];

  console.log(PresElectData);

  const submitVote = (event) => {
    event.preventDefault();
    console.log("hitting the button");
    axios.post('/api/vote')
      .then((res) => setRadio([...radio, res.data]))
      .catch(err => console.log (err));
      console.log(radio);
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
                  checked={radio === "Donald J. Trump"}
                  value="Donald J. Trump"
                  id="radio1"
                  onChange={(e) => {
                    setRadio(e.target.value);
                    console.log(e.target.value)
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
                  checked={radio === "Joseph R. Biden"}
                  value="Joseph R. Biden"
                  id="radio1"
                  onChange={(e) => {
                    setRadio(e.target.value);
                    console.log(e.target.value)
                  }}
                />
              </Col>
              <Col xs lg={5}>
                <label>
                  {PresElectData[0].president[1].party}<br />
                  {PresElectData[0].president[1].candidate}
                  {PresElectData[0].president[1].candidateState}<br />
                  {PresElectData[0].president[1].runningMate}
                  {PresElectData[0].president[1].runningMateState}
                </label>
              </Col>
          <Button 
                variant="secondary" 
                type="submit"
                size="lg" 
                block
                onClick={submitVote}
                >
                Submit
                </Button>
                </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PresElect;
