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
import StRepElectData from '../seedData/strepSeed';


const PresElect = () => {
  const [radio, setRadio] = useState([]);

  console.log(StRepElectData);

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
    <Container id="staterep-elect-card">
      <Card bg="light">
        <Card.Body>
          <h3><span>Utah </span>{StRepElectData[0].office}</h3>
          <h5>{StRepElectData[0].district}</h5>
          <hr />
          <form>
            <div className="candidate-select">
              <div className="radio">
                <label>
                  {StRepElectData[0].stateHouse[0].candidate}
                  {StRepElectData[0].stateHouse[0].party}
                </label>
                <br />
                <input
                  type="radio"
                  checked={radio === "option1"}
                  value="option1"
                  id="radio1"
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="candidate-select">
              <div className="radio">
                <label>
                  {StRepElectData[0].stateHouse[1].candidate}
                  {StRepElectData[0].stateHouse[1].party}
                </label>
                <br />
                <input
                  type="radio"
                  checked={radio === "option2"}
                  value="option2"
                  id="radio2"
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                />
              </div>
            </div>
          </form>
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

export default PresElect;
