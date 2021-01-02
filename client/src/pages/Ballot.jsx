import React, { useEffect, useState, Component, submitBtn } from "react";
import {
  Button,
  Jumbotron,
  Container,
  Card,
} from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";
import "./Ballot.css"

const Ballot = () => {
  const [radio, setRadio] = useState([]);
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
    <>
      <Navbar />
      
          <Jumbotron id="main-jumbotron" fluid>
            <Container>
              <h1>Ballot</h1>
              <hr/>
              <h6>
                Click the radio button for the corresponding option to vote.
                When you are done, click submit.
              </h6>
              <h6>
                Ensure your selections are correct. If you encounter any
                problems, please click the 'Contact' button above.
              </h6>
              <hr/>
            </Container>
            <Container id="pres-elect-card">
              <Card bg="light">
                <Card.Body>
                  <h3>President of the United States</h3>
                  <form>
                    <div className="candidate-select">
                      <div className="radio">
                      <input
                        type="radio"
                        checked={radio === "option1"}
                        value="option1"
                        id="pres-radio1"
                        onChange={(e) => {
                            setRadio(e.target.value);
                          }}
                          />
                          <label>Donald J. Trump: Republican Party</label>
                        </div>
                    </div>
                    <div className="candidate-select">
                      <div className="radio">
                        <input
                          type="radio"
                          checked={radio === "option2"}
                          value="option2"
                          id="pres-radio2"
                          onChange={(e) => {
                              setRadio(e.target.value);
                            }}
                            />
                          <label>Joseph R. Biden: Democratic Party</label>
                        </div>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </Container>
            <Container id="rep-elect-card">
              <Card bg="light">
                <Card.Body>
                  <h3>US House of Representatives</h3>
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
                          <label>Blake Moore: Republican Party</label>
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
                          <label>Darren Parry: Democratic Party</label>
                        </div>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </Container>
            <Container id="gov-elect-card">
              <Card bg="light">
                <Card.Body>
                  <h3>Governor of Utah</h3>
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
                          <label>Spencer Cox: Republican Party</label>
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
                          <label>Chris Peterson: Democratic Party</label>
                        </div>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </Container>
            <Container id="statesen-elect-card">
              <Card bg="light">
                <Card.Body>
                  <h3>Utah State House, 19th Senate District</h3>
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
                          <label>John Johnson: Republican Party</label>
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
                          <label>Katy Owens: Democratic Party</label>
                        </div>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </Container>
            <Container id="staterep-elect-card">
              <Card bg="light">
                <Card.Body>
                  <h3>Utah State House, 7th Senate District</h3>
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
                          <label>Ryan Wilcox: Republican Party</label>
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
                          <label>Grant Protzman: Democratic Party</label>
                        </div>
                    </div>
                  </form>
                </Card.Body>
              </Card>
            </Container>
            <Container id="scretain-elect-card">
              <Card bg="light">
                <Card.Body>
                  <h3>Utah Supreme Court Retention</h3>
                  <h6>Should John A. Pearce be retained in the Utah Supreme Court?</h6>
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
                </Card.Body>
              </Card>
            </Container>
            <Container id="const-amend1-card">
              <Card bg="light">
                <Card.Body>
                  <h3>Utah State Constitutional Amendment 1</h3>
                  <h6>Shall the Utah Constitution be amended to change words that apply to a single gender (such as the word 'men') to words that are not limited to a single gender (such as the word 'persons')?</h6>
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
                </Card.Body>
              </Card>
            </Container>
            <Container id="const-amend1-card">
              <Card bg="light">
                <Card.Body>
                  <h3>Utah State Constitutional Amendment 2</h3>
                  <h6>Shall the Utah Constitution be amended to specify that certain requirements that a person must meet to be eligible for the office of senator or representative in the Utah Legislature apply at the time the person is elected or appointed?</h6>
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
                </Card.Body>
              </Card>
            </Container>
            <Container id="const-amend1-card">
              <Card bg="light">
                <Card.Body>
                  <h5>Please verify answers and click submit.</h5>
                  <br />
                  <Button 
                    variant="secondary" 
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
          </Jumbotron>
        
    </>
  );
  
};
export default Ballot;