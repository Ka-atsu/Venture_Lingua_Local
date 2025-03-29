import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../../../zCSS/learn.css';
import BayanihanImage from '../2 Images/Bayanihan.jpg';
import OpoImage from '../2 Images/Opo.png';
import Harana from '../2 Images/Harana.jpg';
import Fiesta from '../2 Images/Fiesta.jpg';

function CulturalContextualTagalog() {

  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  // Hover effect handlers with a smoother transition
  const handleMouseOver = (e) => {
    e.currentTarget.style.transition = 'transform 0.5s ease';
    e.currentTarget.style.transform = 'translateY(-5px)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transition = 'transform 0.5s ease';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  const culturalExpressions = [
    {
      english: "The concept of 'Bayanihan' (Community spirit)",
      tagalog: "Bayanihan",
      description: "Bayanihan refers to the Filipino spirit of communal unity and cooperation, where people voluntarily help one another without expecting anything in return.",
      culturalNote: "More than just helping lift a neighbor’s house, Bayanihan symbolizes deep social solidarity and mutual care ingrained in Filipino communities.",
      historicalBackground: "Originally practiced in rural villages to literally carry homes from one location to another, the term traces back to pre‑colonial communal traditions.",
      modernRelevance: "Today it’s invoked in volunteer disaster relief, neighborhood cleanups, and community projects to rally collective action.",
      image: BayanihanImage
    },
    {
      english: "Respect for elders ('Po' and 'Opo')",
      tagalog: "Paggalang sa matatanda",
      description: "'Po' and 'Opo' are polite particles added when speaking to elders or authority figures to show deference and courtesy.",
      culturalNote: "Using these honorifics reflects the Filipino value of ‘paggalang’ — deep respect for age, wisdom, and hierarchy in relationships.",
      historicalBackground: "Rooted in Austronesian social norms and reinforced during Spanish colonial rule, this linguistic etiquette remains central to Filipino manners.",
      modernRelevance: "Filipinos still instinctively say 'po' and 'opo' in family, school, and professional settings to demonstrate respect.",
      image: OpoImage
    },
    {
      english: "Serenade",
      tagalog: "Harana",
      description: "Harana is a heartfelt nighttime serenade outside someone’s window — a centuries‑old Filipino courtship tradition.",
      culturalNote: "Harana represents patience, respect, and artistry in romance, showing sincere intent without intrusion.",
      historicalBackground: "Introduced during Spanish colonization, it blended Hispanic love songs with indigenous Filipino melodies.",
      modernRelevance: "Though less common today, harana lives on in weddings, cultural festivals, and as a symbol of traditional Filipino romance.",
      image: Harana
    },
    {
      english: "Fiestas and celebrations",
      tagalog: "Pista at pagdiriwang",
      description: "Fiestas are vibrant community celebrations honoring patron saints, historical events, or local traditions through music, dance, food, and parades.",
      culturalNote: "Pista foster a sense of belonging and collective identity — they’re occasions for families and neighbors to reconnect.",
      historicalBackground: "Brought by Spanish missionaries in the 16th century, fiestas merged Catholic feast days with indigenous festivity practices.",
      modernRelevance: "Today fiestas attract millions of tourists, strengthen local economies, and keep Filipino heritage alive both at home and abroad.",
      image: Fiesta
    }
  ];  

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to navigate between expressions
  const nextExpression = () => {
    if (currentIndex + 1 < culturalExpressions.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevExpression = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentExpression = culturalExpressions[currentIndex];

  return (
    <Container fluid className="bg-dark p-5 vh-100">
        <div className="go-back-icon">
            <FaArrowLeft size={30} color="#fff" onClick={goBack} className="go-back-arrow" />
        </div>

        <h1 className="text-center text-white mb-4" style={{ fontWeight: 600, fontSize: '2.5rem' }}>
            Cultural Context in Tagalog
        </h1>
        <p className="text-center mb-4 text-white" style={{ fontSize: '1.3rem' }}>
            Explore Filipino culture through language and expressions.
        </p>

        {/* Display current cultural expression */}
        <Row className="d-flex justify-content-center align-items-center" style={{ height: '65vh' }}>
            <Col md={6}>
                <Card className="bg-light text-dark p-4 shadow-lg rounded">
                    <Card.Body>
                    <h3 className="mb-3" style={{ fontWeight: 500, fontSize: '1.8rem' }}>
                        {currentExpression.english}
                    </h3>
                    <h5 className="mb-3" style={{ color: '#731768', fontSize: '1.5rem' }}>
                        {currentExpression.tagalog}
                    </h5>
                    <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}><strong>Description:</strong> {currentExpression.description}</p>
                    <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}><strong>Cultural Note:</strong> {currentExpression.culturalNote}</p>
                    <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}><strong>Historical Background:</strong> {currentExpression.historicalBackground}</p>
                    <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}><strong>Modern Relevance:</strong> {currentExpression.modernRelevance}</p>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card className="bg-transparent border-0 rounded">
                    <Card.Body className="p-0">
                    <img src={currentExpression.image} alt={currentExpression.tagalog} className="img-fluid rounded" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        {/* Navigation buttons */}
        <Row className="d-flex w-100 justify-content-between mt-5">
            <Col xs="auto">
                <Button
                    onClick={prevExpression}
                    disabled={currentIndex === 0}
                    className="btn-lg rounded-pill"
                    style={{
                    transition: 'transform 0.3s',
                    transform: 'translateY(0)',
                    padding: '12px 25px',
                    backgroundColor: '#5783db',
                    borderColor: '#5783db',
                    color: '#fff',
                    fontSize: '1.1rem',
                    }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    Previous Expression
                </Button>
            </Col>
            <Col xs="auto">
                <Button
                    onClick={nextExpression}
                    disabled={currentIndex + 1 >= culturalExpressions.length}
                    className="btn-lg rounded-pill"
                    style={{
                    transition: 'transform 0.3s',
                    transform: 'translateY(0)',
                    padding: '12px 25px',
                    backgroundColor: '#5adbb5',
                    borderColor: '#5adbb5',
                    color: '#000',
                    fontSize: '1.1rem',
                    }}
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                >
                    Next Expression
                </Button>
            </Col>
        </Row>
    </Container>
  );
}

export default CulturalContextualTagalog;