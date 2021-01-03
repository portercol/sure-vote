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
import GovElectData from "../seedData/govSeed"


const GovElect = () => {

  const [radio, setRadio] = useState([]);

  console.log(GovElectData);

  const radios = [
    { name: "Option 1", value: "option1" },
    { name: "Option 2", value: "option2" },
  ];

  const submitVote = (event) => {
    event.preventDefault();
    console.log("hitting the button")
  }

  const votes = {};

  return (

    <Container id="gov-elect-card">
      <Card bg="light">
        <Card.Body>
          <h3>Governor of Utah</h3>

          <form>

            <div className="candidate-select">
              <div className="radio">
                <label>
                  {GovElectData[0].governor[0].party}<br />
                  {GovElectData[0].governor[0].candidate}
                  {GovElectData[0].governor[0].office1}<br />
                  {GovElectData[0].governor[0].runningMate}
                  {GovElectData[0].governor[0].office2}
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
              {GovElectData[0].governor[1].party}<br />
              {GovElectData[0].governor[1].candidate}
              {GovElectData[0].governor[1].office1}<br />
              {GovElectData[0].governor[1].runningMate}
              {GovElectData[0].governor[1].office2}
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
  )

};

export default GovElect;
