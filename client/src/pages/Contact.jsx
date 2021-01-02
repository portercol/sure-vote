// import React, components from react-bootstrap, stylesheet and Navbar
import React from "react";
import {
    Container,
    Jumbotron,
    Button,
    Form
} from "react-bootstrap";
import './Contact.css'
import Navbar from '../components/Navbar.jsx'

// create Contact functional component to hold data
const Contact = () => {

    // return data to the page
    return (
        <>
            <Navbar />
            <Container id="main-container">
                <Jumbotron id="main-jumbotron">
                    <h1 className="header">Contact Us</h1>
                    <hr />
                    <Form>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label></Form.Label>
                            <Form.Control type="name" placeholder="Name"/>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label></Form.Label>
                            <Form.Control type="message" placeholder="Message" as="textarea" rows={2} />
                        </Form.Group>
                    </Form>
                    <Button variant="dark">Submit</Button>
                </Jumbotron>
            </Container>
        </>
    );
};

// export Contact out of Contact.jsx
export default Contact;