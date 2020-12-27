import React from 'react';
import {
    Button,
    Jumbotron,
    Container,
    ButtonGroup, 
    Col, 
    Row
  } from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";

const Ballot = () => {
    console.log("hit ballot path");
    return(
        <>
        <Navbar />
            {/* <h1>Ballot Page</h1> */}
        <Row>
            <Col xs lg={3}></Col>
            <Col xs lg={6}>
            <Jumbotron fluid>
            <Container>
                <h1>Ballot</h1>
                <ul>
                <li>
                Click the radio button for the corresponding option to vote. When you are done, click submit. 
                </li>
                <li>
                Ensure your selections are correct. If you encounter any problems, please click the 'Contact' button above.
                </li>
                </ul>
            </Container>
            </Jumbotron>
            </Col>
            <Col xs lg={3}></Col>
        </Row>
        </>
    )
}

export default Ballot;