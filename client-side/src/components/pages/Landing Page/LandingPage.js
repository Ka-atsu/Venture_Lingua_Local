import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Navbar, Nav  } from 'react-bootstrap';
import { FaUsers, FaRegFileAlt, FaChartLine, FaBars, FaTimes , FaEnvelope, FaFacebook, FaPhone } from 'react-icons/fa';

import Russel from './pictures/Tano.jpg';
import Kent from './pictures/Kent.png';
import Reigne from './pictures/Reign.jpg';
import InfoGraphic from './pictures/DIALECT.png';
import Family from './pictures/Family Communication.jpg';
import Heritage from './pictures/Heritage Pride.jpg';
import { useNavigate } from 'react-router-dom';

// LandingPage Component
function LandingPage() {
    const [activeSection, setActiveSection] = useState('home'); // default to "home" section
  
    return (
      <Container fluid className="p-0" style={{ overflowX: 'hidden' }}>
        <NavigationBar setActiveSection={setActiveSection} />
        
        {activeSection === 'home' && <Hero />}
        {activeSection === 'feature' && <Features />}
        {activeSection === 'about' && <About />}
      </Container>
    );
}
export default LandingPage;

// Navbar Component
function NavigationBar({ setActiveSection }) {
    const navigate = useNavigate(); 
    const [menuOpen, setMenuOpen] = useState(false); 
    const toggleMenu = () => setMenuOpen(!menuOpen);
    return (
    <Navbar expand="lg" style={{ height: '10vh', backgroundColor: '#343a40' }}>
        <Container>
        <Navbar.Brand onClick={() => setActiveSection('home')} className="fw-bold" style={{ cursor: 'pointer' , color:'white' }}>
            LinguaLokal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu}>
          {menuOpen ? <FaTimes style={{ color: 'white' }} /> : <FaBars style={{ color: 'white' }} />}
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" 
            style={{
                display: menuOpen ? 'block' : 'none',
                backgroundColor: '#343a40',
                padding: 'min(1em, 8%)',  
            }}>
            <Nav className="ms-auto">
            <Nav.Link 
                onClick={() => setActiveSection('feature')} 
                style={{ color: 'white' }}>
                Feature
            </Nav.Link>
            <Nav.Link 
                onClick={() => setActiveSection('about')} 
                style={{ color: 'white' }}>
                About
            </Nav.Link>
            <Button 
                variant="light" size="sm" className="ms-3" 
                onClick={() => navigate('/dialectSelector')}>
                Demo
            </Button>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
    );
}

// Hero Section Component
function Hero() {
    const navigate = useNavigate(); 
    return (
        <Container fluid className="hero-section text-white d-flex justify-content-center align-items-center" style={{ height: '90vh', background:'#545454' }} >
            <Row style={{ zIndex: 1 , justifyContent:'space-around' }}>
                <Col style={{ marginRight: '5rem' , marginTop: '4rem' }}>
                    <h1>Learn Philippine Dialects</h1>
                    <p className="mt-4">Interactive, engaging lessons for regional dialects in the Philippines <br /> just like Duolingo, but focused on local languages.</p>
                    <Button className="mt-5" variant="light" size="md" onClick={() => navigate('/dialectSelector')}>
                        Demo
                    </Button>
                </Col>
                <Col>
                <img 
                    src={InfoGraphic}
                    alt="Language Learning" 
                    style={{
                        width: '100%',         
                        maxWidth: '650px',     
                        height: 'auto'         
                    }} 
                />
                </Col>
            </Row>
        </Container>
    );
}

// Features Section Component
function Features() {
    return (
        <Container fluid className="d-flex flex-column justify-content-center align-items-center" style={{ height: 'auto', paddingTop: '50px' }}>
            <Row className="text-center mb-5">
            <h2 style={{ fontSize: '2.5rem', fontWeight: '600', color: '#333' }}>Key Features</h2>
            </Row>
    
            <Row className="text-center mx-5">
            
            <Col md={4} className="mb-4">
                <Card style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} className="feature-card">
                <Card.Body>
                    <FaUsers style={{ fontSize: '2rem', color: '#4E8C4A' }} />
                    <Card.Title className="mt-3" style={{ fontWeight: '500', fontSize: '1.5rem' }}>Bite-Sized Lessons</Card.Title>
                    <Card.Text>
                    Quick lessons that you can complete during your free time. Stay engaged without feeling overwhelmed.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
           
            <Col md={4} className="mb-4">
                <Card style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} className="feature-card">
                <Card.Body>
                    <FaRegFileAlt style={{ fontSize: '2rem', color: '#FF6347' }} />
                    <Card.Title className="mt-3" style={{ fontWeight: '500', fontSize: '1.5rem' }}>Interactive Exercises</Card.Title>
                    <Card.Text>
                    Hands-on activities to enhance your learning experience. Test your knowledge and improve your skills.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>  
            
            <Col md={4} className="mb-4">
                <Card style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} className="feature-card">
                <Card.Body>
                    <FaChartLine style={{ fontSize: '2rem', color: '#FFD700' }} />
                    <Card.Title className="mt-3" style={{ fontWeight: '500', fontSize: '1.5rem' }}>Progress Tracking</Card.Title>
                    <Card.Text>
                    Track your learning journey and see improvements over time. Stay motivated with clear milestones.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            </Row>
            
            <hr style={{ width: '50%', border: '1px solid #ddd', margin: '30px 0' }} />
    
            <Row className="text-center mb-5">
            <h2 style={{ fontSize: '2.5rem', fontWeight: '600', color: '#333' }}>Solution Benefits</h2>
            </Row>

            <Row className="text-center justify-content-around  align-items-center">
                <Col md={3} className="text-center mb-4">
                    <p>Communicate easily with family, strengthen relationships, and preserve cultural heritage.</p>
                </Col>

                <Col md={4} className="text-center mb-4">
                <img 
                    src={Family}
                    alt="Language Learning" 
                    style={{
                        width: '100%',         
                        maxWidth: '650px',     
                        height: 'auto'         
                    }} 
                />
                </Col>
            </Row>

            <Row className="text-center mx-5 justify-content-around align-items-center">
                <Col md={4} className="text-center mb-5">
                <img 
                    src={Heritage}
                    alt="Language Learning" 
                    style={{
                        width: '100%',         
                        maxWidth: '650px',     
                        height: 'auto'         
                    }} 
                />
                </Col>
                <Col md={3} className="text-center mb-5">
                    <p>Feel connected to your heritage, and proud of preserving your native dialect.</p>
                </Col>
            </Row>

            <Row className="text-center mx-5 justify-content-around  align-items-center">
                <Col md={3} className="text-center mb-4">
                    <p>Preserve regional dialects at risk of disappearing and promote linguistic diversity in the Philippines.</p>
                </Col>
                
                <Col md={4} className="text-center mb-4">
                <img 
                    src={InfoGraphic}
                    alt="Language Learning" 
                    style={{
                        width: '100%',         
                        maxWidth: '650px',     
                        height: 'auto'         
                    }} 
                />
                </Col>
            </Row>

        </Container>
    );
}

// About Section Component
function About() {
    return (
        <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: '90vh' }}>
          <Row>
            <Col md={8} className="mx-auto">
                <h2 className="fw-bold mb-4 text-center">About Us</h2>
                <p className="fs-5 text-center">
                Our mission is to provide a localized learning solution for Philippine dialects, addressing the gap left by existing platforms.
                </p>
                <p className="fs-5 text-center">
                At <strong>LinguaLokal</strong>, we are committed to preserving these dialects and empowering individuals to reconnect with their heritage. Our platform offers an intuitive and interactive learning experience that makes mastering regional dialects accessible, engaging, and meaningful.
                </p>
                <p className="fs-5 text-center">
                Join us in preserving the beauty and diversity of the Philippines’ dialects. By learning and speaking these dialects, we ensure that the stories, customs, and practices of our communities live on.
                </p>
            <Container className="mt-5">
                <Row className="justify-content-center">
                    
                    <Col xs={12} sm={2} className="text-center mb-4">
                    <img src={Russel} alt="Russel" className="rounded-circle"
                        style={{ width: '100%', maxWidth: '150px', height: 'auto', objectFit: 'cover', border: '4px solid white' }}
                    />
                    <h5 className="mt-2">Russel</h5>
                    <p>Project Manager & Developer</p>
                    </Col>

                    <Col xs={12} sm={2} className="text-center mb-4">
                    <img src={Kent} alt="Kent" className="rounded-circle"
                        style={{ width: '100%', maxWidth: '150px', height: 'auto', objectFit: 'cover', border: '4px solid white' }}
                    />
                    <h5 className="mt-2">Kent</h5>
                    <p>Lead Developer</p>
                    </Col>

                    <Col xs={12} sm={2} className="text-center mb-4">
                    <img src={Reigne} alt="Reigne" className="rounded-circle"
                        style={{ width: '100%', maxWidth: '150px', height: 'auto', objectFit: 'cover', border: '4px solid white' }}
                    />
                    <h5 className="mt-2">Reigne</h5>
                    <p>UI/UX Designer</p>
                    </Col>
                </Row>
            </Container>
            <Container className="text-start mt-5">
                <h2>Contact Us</h2>
                <p>
                    <a href="mailto:contact@lingualokal.com" className="text-decoration-none text-dark">
                    <FaEnvelope className="me-2" /> 
                    </a>
                    Email: contact@lingualokal.com <br />

                    <a 
                    href="https://www.facebook.com/TRusselKen" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-decoration-none text-dark"
                    >
                    <FaFacebook className="me-2" /> 
                    </a>
                    Facebook: contact@lingualokal.com <br />

                    <FaPhone className="me-2" /> Phone: +123 456 7890
                </p>
            </Container>
            </Col>
          </Row>
        </Container>
    );
}