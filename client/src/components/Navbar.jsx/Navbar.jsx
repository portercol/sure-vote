// Import React and bootstrap elements from React-Bootstrap
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FingerPrint from '../../assets/fpNavbar.png'

// Create functional component to hold navbar data
const NavbarFixed = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" expand="lg">
                <LinkContainer to="/profile">
                <Navbar.Brand className="sure-vote">SURE V<img className="fpNavlogo" src={FingerPrint} alt='finger print logo' />TE</Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <LinkContainer to="/election">
                        <Nav.Link>Election Info</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/ballot">
                        <Nav.Link>Ballot</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/vote">
                        <Nav.Link>Vote</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/">
                        <Nav.Link>Sign Out</Nav.Link>
                        </LinkContainer>
                    </Nav>
                    <LinkContainer to="/contact">
                    <Button variant="outline-light">Contact</Button>
                    </LinkContainer>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
};

// Export component out of Navbar.jsx
export default NavbarFixed;