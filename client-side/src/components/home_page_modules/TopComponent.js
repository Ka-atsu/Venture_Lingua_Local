import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

function TopComponent() {
    return (
        <>
        <Navbar bg="light" expand="lg" className="px-3">
            <Container fluid>
                {/* Logo on the left */}
                <Navbar.Brand href="#home">MyLogo</Navbar.Brand>
                
                {/* Button on the right */}
                <Button variant="primary">Click Me</Button>
            </Container>
        </Navbar>
        </>
    );
}

export default TopComponent;
