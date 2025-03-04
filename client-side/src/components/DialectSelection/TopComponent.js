import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom'; 

function TopComponent() {
    const navigate = useNavigate(); // Initialize the navigate function
    // For now this is for testing it can change because it should start from login the landing page
    const userClicked = () => {
        // Logic for handling login
        // After login, navigate to the homepage
        navigate('/login'); // Programmatically navigate to the homepage
    };
    return (
        <>
        <Navbar bg="light" expand="lg" className="px-3">
            <Container fluid>
                {/* Logo on the left */}
                <Navbar.Brand href="#home">MyLogo</Navbar.Brand>
                
                {/* Button on the right */}
                <Button variant="primary" onClick={userClicked}>Click Me</Button>
            </Container>
        </Navbar>
        </>
    );
}

export default TopComponent;
