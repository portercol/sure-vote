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
import Navbar from "../components/Navbar.jsx";
// import PresElect from '../components/PresElect';
// import HouseElect from '../components/HouseElect';
// import "../scripts/seed";
// import "./Ballot.css"

const HouseElect = () => {
    
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

export default HouseElect;
