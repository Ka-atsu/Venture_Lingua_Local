import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../../../zCSS/learn.css';
import Atang from '../2 Images/Atang.jpg';
import GulGul from '../2 Images/GulGul.jpg';
import Pinakbet from '../2 Images/Pinakbet.jpeg';

function CulturalContextualIlocano() {

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

  // Sample cultural expressions with images and general information
  const culturalExpressions = [
    {
      english: "Community Offering",
      ilocano: "Atang",
      description: "Atang in Ilocano culture refers to the traditional practice of offering food or gifts as a gesture of gratitude and unity.",
      culturalNote: "This ritual reinforces social bonds by showing hospitality and respect, fostering a strong sense of community among neighbors and family.",
      historicalBackground: "Rooted in indigenous traditions, atang has been passed down through generations as a way to honor both guests and deities in ceremonial gatherings.",
      modernRelevance: "Today, atang is integrated into various cultural festivals and family celebrations, preserving an age‑old custom in a modern setting.",
      image: Atang
    },
    {
      english: "Ritual cleansing after bereavement",
      ilocano: "Gulgul",
      description: "Gulgul is the Ilocano tradition where family members wash their heads in a river or the sea after a loved one’s burial, symbolically cleansing away sickness, bad luck, and grief.",
      culturalNote: "This ritual helps survivors process loss, believe they’re purified of negative energies, and supports emotional healing within the family.",
      historicalBackground: "Rooted in pre‑colonial Ilocano beliefs about death and spiritual purification, gulgul has long served as a communal practice of mourning and renewal.",
      modernRelevance: "Today it continues in many Ilocano communities as a meaningful way to honor the deceased and promote collective healing after loss.",
      image: GulGul
    },    
    {
      english: "Traditional Dish",
      ilocano: "Pinakbet",
      description: "Pinakbet is a celebrated Ilocano vegetable dish, symbolizing the region’s rich culinary tradition and the warmth of sharing a meal.",
      culturalNote: "More than just food, pinakbet represents the spirit of Ilocano hospitality—where preparing and sharing a meal is an expression of care and community.",
      historicalBackground: "Originating from resourceful local cooking methods, pinakbet has evolved over generations, highlighting native produce and traditional flavors.",
      modernRelevance: "Today, pinakbet is enjoyed in homes and featured at food festivals, serving as a delicious reminder of Ilocano heritage and togetherness.",
      image: Pinakbet
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
            Cultural Context in Ilocano
        </h1>
        <p className="text-center mb-4 text-white" style={{ fontSize: '1.3rem' }}>
            Explore Ilocano culture through language and expressions.
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
                    {currentExpression.ilocano}
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
                    <img src={currentExpression.image} alt={currentExpression.ilocano} className="img-fluid rounded" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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

export default CulturalContextualIlocano;