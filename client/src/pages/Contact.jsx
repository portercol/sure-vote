import React from "react";
import {
    Card,
    Button,
    Form,
    Col,
    Row
} from "react-bootstrap";
import './Contact.css'
import Navbar from '../components/Navbar.jsx'

const Contact = () => {

    return (
        <>
            <Navbar />
            <Row>
                <Col xs lg={3}></Col>
                <Col xs lg={6}>
                    <Card id="contactCard">
                        <Card.Header className="header">Contact Us</Card.Header>
                        <Card.Body>
                        <Form>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label className="nameLabel">Name</Form.Label>
                                <Form.Control type="name"/>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="messageLabel">Message</Form.Label>
                                <Form.Control as="textarea" rows={2} />
                            </Form.Group>
                        </Form>
                            <Button variant="dark">Submit</Button>
                        </Card.Body>
                    </Card>
                   
                </Col>
                <Col xs lg={3}></Col>
            </Row>
        </>
    );
};

export default Contact;