import React from 'react';
import { Navbar, Button, Container, Nav } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaSignOutAlt, FaBook, FaPencilAlt, FaDiceD6 } from 'react-icons/fa'; // Icons for settings and logout

function IlocanoTopComponent() {
  const navigate = useNavigate(); // Initialize the navigate function
  const location = useLocation(); // Get the current location/path

  const handleLogoutClick = () => {
    navigate('/'); // Navigate to the login page after logout
  };

  const isActive = (path) => location.pathname === path;

  const button = {
    borderRadius: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    fontWeight: '600',
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-3">
      <Container>
        <Button
            variant={isActive('/ilocanoLearn') ? 'primary' : 'light'}
            className={`mb-3 py-3 d-flex align-items-center justify-content-start ${isActive('/ilocanoLearn') ? 'active' : ''}`}
            onClick={() => navigate('/ilocanoLearn')}
            style={button}
          >
            <FaBook className="me-3" />
          </Button>

          <Button
            variant={isActive('/ilocanoPractice') ? 'primary' : 'light'}
            className={`mb-3 py-3 d-flex align-items-center justify-content-start ${isActive('/ilocanoPractice') ? 'active' : ''}`}
            onClick={() => navigate('/ilocanoPractice')}
            style={button}
          >
            <FaPencilAlt className="me-3" />
            
          </Button>

          {/* Additional buttons (Dialect and Logout) */}
          <Button
            variant="light"
            className="mb-3 py-3 d-flex align-items-center justify-content-start"
            onClick={() => navigate('/dialectSelector')}
            style={button}
          >
            <FaDiceD6 className="me-3" />
           
          </Button>

          <Button
            variant="outline-light"
            className="mb-3 py-3 d-flex align-items-center justify-content-start"
            onClick={handleLogoutClick}
            style={button}
          >
            <FaSignOutAlt className="me-3" />
            
          </Button>
        {/* Navbar items (horizontal layout) */}
        <Nav className="ms-auto d-flex align-items-center">
          
        </Nav>
      </Container>
    </Navbar>
  );
}

export default IlocanoTopComponent;
