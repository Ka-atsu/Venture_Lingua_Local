import React from 'react';
import { Navbar, Button, Container } from 'react-bootstrap';
import { useNavigate, useLocation  } from 'react-router-dom';
import { FaCog, FaSignOutAlt, FaBook, FaPencilAlt, FaDiceD6 } from 'react-icons/fa'; // Icons for settings and logout

function CebuanoSideComponent() {
    const navigate = useNavigate(); // Initialize the navigate function
    const location = useLocation(); // Get the current location/path

    const handleSettingsClick = () => {
        navigate('/settings'); // Programmatically navigate to the settings page
    };

    const handleLogoutClick = () => {
        navigate('/login'); // Navigate to the login page after logout
    };

    const isActive = (path) => location.pathname === path;

    return (
        <Navbar
        bg="dark"
        className="flex-column vh-100 d-flex justify-content-between p-4"
        style={{ width: '100%', overflowX: 'hidden' }}
    >

             {/* Learn and Practice buttons */}
            <Container className="flex-column">
                <Navbar.Brand className="text-white mb-4" style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                    Lingua Local
                </Navbar.Brand>

                <Button
                    variant={isActive('/bikolLearn') ? 'primary' : 'light'}
                    className={`w-100 mb-3 py-3 d-flex align-items-center justify-content-start ${isActive('/bikolLearn') ? 'active' : ''}`} 
                    onClick={() => navigate('/bikolLearn')}
                    style={{ borderRadius: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
                >
                    <FaBook className="me-3" />
                    Learn
                </Button>

                <Button
                    variant={isActive('/bikolPractice') ? 'primary' : 'light'}
                    className={`w-100 mb-3 py-3 d-flex align-items-center justify-content-start ${isActive('/bikolPractice') ? 'active' : ''}`} 
                    onClick={() => navigate('/bikolPractice')}
                    style={{ borderRadius: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
                >
                    <FaPencilAlt className="me-3" />
                    Practice
                </Button>
            </Container>

            {/* Settings and Logout buttons */}
            <Container className="flex-column">
                <Button
                    variant="light"
                    className="w-100 mb-3 py-3 d-flex align-items-center justify-content-start"
                    onClick={() => navigate('/dialectSelector')}
                    style={{ borderRadius: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
                >
                    <FaDiceD6 className="me-3" />
                    Change Dialect
                </Button>
                <Button
                    variant="light"
                    className="w-100 mb-3 py-3 d-flex align-items-center justify-content-start"
                    onClick={handleSettingsClick}
                    style={{ borderRadius: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
                >
                    <FaCog className="me-3" />
                    Settings
                </Button>

                <Button
                    variant="outline-light"
                    className="w-100 py-3 d-flex align-items-center justify-content-start"
                    onClick={handleLogoutClick}
                    style={{ borderRadius: '20px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}
                >
                    <FaSignOutAlt className="me-3" />
                    Logout
                </Button>
            </Container>
            
        </Navbar>
    );
}

export default CebuanoSideComponent;