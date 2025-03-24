import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../Cebuano.css';
import Kuradang from '../2 Images/Kuradang.jpg';
import Sinulog from '../2 Images/Sinulog.jpg';
import Lechon from '../2 Images/Lechon.jpg';

function CulturalContextualCebuano() {

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
      english: "The Sinulog Festival",
      cebuano: "Sinulog",
      description: "Sinulog is Cebu’s biggest religious and cultural festival, held every third Sunday of January to honor the Santo Niño (Child Jesus).",
      culturalNote: "More than a street dance, Sinulog is a heartfelt expression of faith — thousands join in procession and dance as an act of devotion.",
      historicalBackground: "Originating in the 16th century after the arrival of Magellan, Sinulog blends pre‑colonial dance rituals with Catholic worship introduced by Spanish missionaries.",
      modernRelevance: "Today it draws over a million pilgrims and tourists annually, boosting Cebu’s economy and preserving its unique cultural identity.",
      image: Sinulog
    },
    {
      english: "Folk dance",
      cebuano: "Kuradang",
      description: "Kuradang is an energetic pair dance from Cebu, traditionally performed at weddings, fiestas, and community gatherings.",
      culturalNote: "It symbolizes courtship, camaraderie, and communal celebration — dancers often improvise steps to show skill and respect.",
      historicalBackground: "Developed during Spanish rule as a social dance, Kuradang incorporates indigenous rhythms with European folk‑dance patterns.",
      modernRelevance: "Kuradang remains a staple in Cebuano cultural shows, school programs, and festival competitions, keeping local heritage alive.",
      image: Kuradang
    },
    {
      english: "Roast Pork",
      cebuano: "Lechon",
      description: "Lechon Cebu is famed for its crackling skin and aromatic, herb‑stuffed meat — the centerpiece of any major Filipino feast.",
      culturalNote: "Serving lechon signifies abundance, generosity, and hospitality; it’s the ultimate symbol of celebration in Cebuano culture.",
      historicalBackground: "Introduced by Spanish colonizers, Cebuano cooks perfected their own version by stuffing pigs with native spices like lemongrass and garlic.",
      modernRelevance: "Lechon Cebu is a must‑try for visitors, exported nationwide, and proudly represents Cebuano culinary craftsmanship.",
      image: Lechon
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
        <div className="cebuano-go-back-icon">
            <FaArrowLeft size={30} color="#fff" onClick={goBack} className="cebuano-go-back-arrow" />
        </div>

        <h1 className="text-center text-white mb-4" style={{ fontWeight: 600, fontSize: '2.5rem' }}>
            Cultural Context in Cebuano
        </h1>
        <p className="text-center mb-4 text-white" style={{ fontSize: '1.3rem' }}>
            Explore Cebuano culture through language and expressions.
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
                        {currentExpression.cebuano}
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
                    <img src={currentExpression.image} alt={currentExpression.cebuano} className="img-fluid rounded" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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

export default CulturalContextualCebuano;