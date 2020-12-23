// Import React and bootstrap elements from React-Bootstrap
import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

// Create functional component to hold navbar data
const NavbarFixed = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/profile">SURE VOTE</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/election">Election Info</Nav.Link>
                    <Nav.Link href="/vote">Vote</Nav.Link>
                    <Nav.Link href="/">Sign Out</Nav.Link>
                </Nav>
                <Form inline>
                    <Button href="/contact" variant="outline-light">Contact</Button>
                </Form>
            </Navbar>
        </>
    )
};

// Export component out of Navbar.jsx
export default NavbarFixed;