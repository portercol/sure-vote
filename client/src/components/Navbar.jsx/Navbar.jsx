// Import React and bootstrap elements from React-Bootstrap
import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

// Create functional component to hold navbar data
const NavbarFixed = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/profile">SURE VOTE</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Election Info</Nav.Link>
                    <Nav.Link href="#features">Vote</Nav.Link>
                    <Nav.Link href="/">Sign Out</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        </>
    )
};

// Export component out of Navbar.jsx
export default NavbarFixed;