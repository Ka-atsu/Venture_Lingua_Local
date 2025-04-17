import React from 'react';
import { Navbar, Button, Container } from 'react-bootstrap';
import { useNavigate, useLocation  } from 'react-router-dom';
import { FaSignOutAlt, FaBook, FaPencilAlt, FaDiceD6 } from 'react-icons/fa'; // Icons for settings and logout

function TagalogSideComponent() {
    const navigate = useNavigate(); // Initialize the navigate function
    const location = useLocation(); // Get the current location/path

    // const handleSettingsClick = () => {
    //     navigate('/settings'); // Programmatically navigate to the settings page
    // };

    const handleLogoutClick = () => {
        navigate('/'); // Navigate to the login page after logout
    };

    const isActive = (path) => location.pathname === path;

    const button = {
        borderRadius: '20px', 
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        fontWeight: '600',
    }

    return (
        <Navbar
        bg="dark"
        className="flex-column vh-100 d-flex justify-content-between p-4"
        style={{ width: '100%', overflowX: 'hidden' }}
    >

             {/* Learn and Practice buttons */}
            <Container className="flex-column">
                <Navbar.Brand className="text-white mb-4" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    Lingualocal
                </Navbar.Brand>

                <Button
                    variant={isActive('/tagalogLearn') ? 'primary' : 'light'}
                    className={`w-100 mb-3 py-3 d-flex align-items-center justify-content-start ${isActive('/tagalogLearn') ? 'active' : ''}`} 
                    onClick={() => navigate('/tagalogLearn')}
                    style={button}
                >
                    <FaBook className="me-3" />
                    LEARN
                </Button>

                <Button
                    variant={isActive('/tagalogPractice') ? 'primary' : 'light'}
                    className={`w-100 mb-3 py-3 d-flex align-items-center justify-content-start ${isActive('/tagalogPractice') ? 'active' : ''}`} 
                    onClick={() => navigate('/tagalogPractice')}
                    style={button}
                >
                    <FaPencilAlt className="me-3" />
                    PRACTICE
                </Button>
            </Container>

            {/* Settings and Logout buttons */}
            <Container className="flex-column">
                <Button
                    variant="light"
                    className="w-100 mb-3 py-3 d-flex align-items-center justify-content-start"
                    onClick={() => navigate('/dialectSelector')}
                    style={button}
                >
                    <FaDiceD6 className="me-3" />
                    DIALECT
                </Button>
                {/* <Button
                    variant="light"
                    className="w-100 mb-3 py-3 d-flex align-items-center justify-content-start"
                    onClick={handleSettingsClick}
                    style={button}
                >
                    <FaCog className="me-3" />
                    PROFILE
                </Button> */}

                <Button
                    variant="outline-light"
                    className="w-100 py-3 d-flex align-items-center justify-content-start"
                    onClick={handleLogoutClick}
                    style={button}
                >
                    <FaSignOutAlt className="me-3" />
                    LANDING PAGE
                </Button>
            </Container>
            
        </Navbar>
    );
}

export default TagalogSideComponent;