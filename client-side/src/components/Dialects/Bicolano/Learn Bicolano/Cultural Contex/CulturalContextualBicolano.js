import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../../../zCSS/learn.css';
import Mayon from '../2 Images/Mayon.jpg';
import Pantomina from '../2 Images/Pantomina.jpg';
import Penafrancia from '../2 Images/Penafrancia.jpg';

function CulturalContextualBicolano( screenSize ) {
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
      english: "Mayon Volcano",
      bicolano: "Bulkang Mayon",
      description: "Mayon Volcano is famed for its nearly perfect cone shape and stands as a powerful symbol of pride and resilience for Bicolanos.",
      culturalNote: "Beyond being a natural landmark, Mayon embodies the strength, beauty, and enduring spirit of the Bicolano people who live in its shadow.",
      historicalBackground: "Formed over thousands of years, Mayon has been central to local folklore most famously the legend of Daragang Magayon and has shaped settlement patterns in Albay since pre‑colonial times.",
      modernRelevance: "Today it draws eco‑tourists and pilgrims alike, reinforcing regional identity and fueling Bicol’s economy through tourism and agriculture.",
      image: Mayon
    },
    {
      english: "Courtship Dance",
      bicolano: "Pantomina",
      description: "Pantomina is a graceful Bicolano folk dance that mimics the courtship rituals of doves, symbolizing love and harmony.",
      culturalNote: "Performed at weddings and fiestas, it celebrates new beginnings and the union of families through gentle, flowing movements.",
      historicalBackground: "Developed during Spanish colonial rule, pantomina blends indigenous dance traditions with European influences as a social dance of courtship.",
      modernRelevance: "It remains a staple in Bicol cultural showcases, school programs, and community celebrations keeping local heritage alive.",
      image: Pantomina
    },
    {
      english: "The Feast of Our Lady of Peñafrancia",
      bicolano: "Penafrancia Festival",
      description: "The Penafrancia Festival is Bicol’s largest religious event, honoring Our Lady of Peñafrancia each September with processions, masses, and cultural performances.",
      culturalNote: "It exemplifies the deep faith and communal devotion of Bicolanos, uniting thousands in pilgrimage and celebration.",
      historicalBackground: "Dating back to 1710, the festival began when Spanish missionaries introduced the devotion to Our Lady of Peñafrancia, blending Catholic rites with local traditions.",
      modernRelevance: "Today it attracts over a million devotees and tourists annually, reinforcing Bicol’s spiritual identity and boosting the regional economy.",
      image: Penafrancia
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
    <Container fluid className="bg-dark p-5" style={{ display:'flex' , flexDirection:'column' ,justifyContent: 'space-between', minHeight: screenSize ? '100vh' : 'auto' }}>
      <div className="go-back-icon">
        <FaArrowLeft size={30} color="#fff" onClick={goBack} className="go-back-arrow" />
      </div>

      <div>
      <h1 className="text-center text-white mb-4" style={{ fontWeight: 600, fontSize: 'clamp(1.5rem, 3vw, 5rem)' }}>
        Cultural Context in Bikol
      </h1>
      <p className="text-center mb-4 text-white" style={{ fontSize: 'clamp(1.5rem, 1vw, 5rem)' }}>
        Explore Bicolano culture through language and expressions.
      </p>
      </div>

      {/* Display current cultural expression */}
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={6}>
          <Card className="bg-light text-dark p-4 shadow-lg rounded">
            <Card.Body>
              <h3 className="mb-3 text-center" style={{ fontWeight: 500, fontSize: 'clamp(1rem, 1.5vw, 5rem)' }}>
                {currentExpression.english}
              </h3>
              <h5 className="mb-3 text-center" style={{ color: '#731768', fontSize: 'clamp(1rem, 1.5vw, 5rem)' }}>
                {currentExpression.bicolano}
              </h5>
              <p className="mb-2 text-start" style={{ fontSize: 'clamp(1rem, 1vw, 5rem)' }}><strong>Description:</strong> {currentExpression.description}</p>
              <p className="mb-2 text-start" style={{ fontSize: 'clamp(1rem, 1vw, 5rem)' }}><strong>Cultural Note:</strong> {currentExpression.culturalNote}</p>
              <p className="mb-2 text-start" style={{ fontSize: 'clamp(1rem, 1vw, 5rem)' }}><strong>Historical Background:</strong> {currentExpression.historicalBackground}</p>
              <p className="mb-2 text-start" style={{ fontSize: 'clamp(1rem, 1vw, 5rem)' }}><strong>Modern Relevance:</strong> {currentExpression.modernRelevance}</p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="bg-transparent border-0 rounded">
            <Card.Body className="p-0">
              <img src={currentExpression.image} alt={currentExpression.bicolano} className="img-fluid rounded" style={{ width: '100%', maxWidth: '40rem', height: 'auto', objectFit: 'cover' }} />
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
              padding: '12px',
              backgroundColor: '#5783db',
              borderColor: '#5783db',
              color: '#fff',
              fontSize: 'clamp(1rem, 1.5vw, 5rem)',
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Previous
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
              padding: '12px',
              backgroundColor: '#5adbb5',
              borderColor: '#5adbb5',
              color: '#000',
              fontSize: 'clamp(1rem, 1.5vw, 5rem)',
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default CulturalContextualBicolano;