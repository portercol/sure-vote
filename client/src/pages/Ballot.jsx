import React from 'react';
import {
    Button,
    Jumbotron,
    Container,
    ButtonGroup, 
    Col, 
    Row, 
    Form,
    Card
  } from "react-bootstrap";
import Navbar from "../components/Navbar.jsx";
import '../seed.json';

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
                <h6>Click the radio button for the corresponding option to vote. When you are done, click submit. 
                </h6>
                <h6>
                Ensure your selections are correct. If you encounter any problems, please click the 'Contact' button above.
                </h6>
            </Container>
            <Container>
                <Card>
                    <Card.Body>
                        <h3>
                            President of the United States
                        </h3>
                        <Form>
                            {['radio'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                    type={type}
                                    label="candidate"
                                    id={`${type}`}
                                />
                                <Form.Check
                                    type={type}
                                    label="candidate"
                                    id={`${type}`}
                                />
                                </div>
                            ))}
                        </Form>
                        <Button variant="secondary" size="lg" block>
                            Submit
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
            <Container>
                <Card>
                    <Card.Body>
                        <h3>
                            U.S. House of Representatives
                        </h3>
                        <h5>
                            UTAH 1st District
                        </h5>
                        <Form>
                            {['radio'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check
                                    type={type}
                                    label="candidate"
                                    id={`${type}`}
                                />
                                <Form.Check
                                    type={type}
                                    label="candidate"
                                    id={`${type}`}
                                />
                                </div>
                            ))}
                        </Form>
                        <Button variant="secondary" size="lg" block>
                            Submit
                        </Button>
                    </Card.Body>
                </Card>
            </Container>
            </Jumbotron>
            </Col>
            <Col xs lg={3}></Col>
        </Row>
        </>
    )
}

export default Ballot;