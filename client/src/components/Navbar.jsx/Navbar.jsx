// Import React and bootstrap elements from React-Bootstrap
import React from 'react';
// import { Link, Navbar } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';

// Create functional component to hold navbar data
const NavbarFixed = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand class="sure-vote" href="/profile">SURE VOTE</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/election">Election Info</Nav.Link>
                        <Nav.Link href="/ballot">Ballot</Nav.Link>
                        <Nav.Link href="/vote">Vote</Nav.Link>
                        <Nav.Link href="/">Sign Out</Nav.Link>
                    </Nav>
                    <Button href="/contact" variant="outline-light">Contact</Button>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
};

// Export component out of Navbar.jsx
export default NavbarFixed;