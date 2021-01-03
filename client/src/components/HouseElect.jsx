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
import RepElectData from "../seedData/repSeed";

const HouseElect = () => {
  const [radio, setRadio] = useState([]);

  console.log(RepElectData);

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
    <Container id="rep-elect-card">
      <Card bg="light">
        <Card.Body>
          <h3>{RepElectData[0].office}</h3>
          <h5>{RepElectData[0].district}</h5>

          <form>
            <div className="candidate-select">
              <div className="radio">
                <label>
                  {RepElectData[0].houseRep[0].candidate}
                  {RepElectData[0].houseRep[0].party}
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

            <label>
              {RepElectData[0].houseRep[1].candidate}
              {RepElectData[0].houseRep[1].party}
            </label>
            <div className="candidate-select">
              <div className="radio">
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

export default HouseElect;
