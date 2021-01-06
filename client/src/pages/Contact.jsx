// import React, components from react-bootstrap, stylesheet and Navbar
import React, { useState } from "react";
import axios from 'axios';
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

    const [nameValue, setNameValue] = useState('');
    const [emailValue, setEmailValue] = useState('');
    const [messageValue, setMessageValue] = useState('');

    const handleSubmit = e => {
        // e.preventDefault()
        axios({
            method: "POST",
            url: "http://localhost:5000/send",
            data: {
                name: nameValue,
                email: emailValue,
                message: messageValue
            }
        }).then((response) => {
            if (response.data.status === 'success') {
                alert("Message Sent.");
                // resetForm()
            } else if (response.data.status === 'fail') {
                alert("Message failed to send.")
            }
        })
    }

    //  resetForm = e => {
    //     nameValue = '';
    //     emailValue = '';
    //     messageValue = '';
    // }

    // return data to the page
    return (
        <>
            <Navbar />
            <Container id="main-container">
                <Jumbotron id="main-jumbotron">
                    <h1 className="header">Contact Us</h1>
                    <hr />
                    <Form id="contact-form">
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label></Form.Label>
                            <Form.Control type="name" placeholder="Name" onChange={(e) => setNameValue(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label></Form.Label>
                            <Form.Control type="email" placeholder="Email" onChange={(e) => setEmailValue(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label></Form.Label>
                            <Form.Control type="message" placeholder="Message" as="textarea" rows={2} onChange={(e) => setMessageValue(e.target.value)} />
                        </Form.Group>
                    </Form>

                    <Button variant="dark" onClick={() => { handleSubmit() }}>Submit</Button>

                </Jumbotron>
            </Container>
        </>
    );
};

// export Contact out of Contact.jsx
export default Contact;