// Navbar.js
import React from 'react';
import { Navbar as BootstrapNavbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Navigation = () => {
return (
    <BootstrapNavbar bg="dark" variant="dark" expand="lg">
    <BootstrapNavbar.Brand href="#">Holistic Health Hub</BootstrapNavbar.Brand>
    <BootstrapNavbar.Toggle aria-controls="navbarNav" />
    <BootstrapNavbar.Collapse id="navbarNav">
        <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/signup">Signup</Nav.Link>
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
        <Nav.Link as={Link} to="/holistic-ai-assistant">Holistic AI Assistant</Nav.Link>
        <Nav.Link as={Link} to="/calendar">Calendar</Nav.Link>
        </Nav>
    </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
);
}

export default Navigation;
