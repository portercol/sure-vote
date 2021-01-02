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
import "bootstrap/dist/css/bootstrap.min.css";

const PresElect = () => {
  const [radio, setRadio] = useState([]);

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
    <Container id="const-amend1-card">
      <Card bg="light">
        <Card.Body>
          <h3>Utah State Constitutional Amendment 2</h3>
          <h6>
            Shall the Utah Constitution be amended to specify that certain
            requirements that a person must meet to be eligible for the office
            of senator or representative in the Utah Legislature apply at the
            time the person is elected or appointed?
          </h6>

          <form>
            <div className="candidate-select">
              <div className="radio">
                <input
                  type="radio"
                  checked={radio === "option1"}
                  value="option1"
                  id="radio1"
                  onChange={(e) => {
                    setRadio(e.target.value);
                  }}
                />
                <label>Yes</label>
              </div>
            </div>

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
                <label>No</label>
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
                  </Button>*/}
        </Card.Body>
      </Card>
    </Container>
  );
};

export default PresElect;
