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

  // Sample cultural expressions with images and general information
  const culturalExpressions = [
    {
      english: "The Sinulog Festival",
      cebuano: "Sinulog",
      definiton: "During Sinulog, people perform in the streets to the rhythm of drums.",
      explanation: "The Sinulog Festival is an annual cultural and religious festival held on the third Sunday of January in Cebu City. It is one of the most attended festivals in the Philippines, celebrating the Filipino people's conversion from paganism to Christianity, particularly honoring the Santo Niño, or the Child Jesus.",
      commonMistakes: "A common mistake is to think of the Sinulog as purely a dance festival. While dance is a major component, Sinulog is fundamentally a religious celebration that includes a grand parade, street dancing competitions, and a religious procession.",
      image: Sinulog
    },
    {
      english: "Folk dance",
      cebuano: "Kuradang",
      definiton: "Kuradang is often performed at local festivals and weddings in Cebuano-speaking areas. For example, dancers might say, 'Let's dance the Kuradang to celebrate our community’s traditions.",
      explanation: "Kuradang is a traditional Filipino dance that is particularly popular in Cebuano-speaking areas. It features energetic and intricate steps, typically performed in pairs, reflecting themes of courtship and local celebration. The dance is a vibrant expression of Cebuano cultural identity and community spirit.",
      commonMistakes: "A common mistake is confusing Kuradang with other traditional Filipino dances like the Cariñosa or Balitaw, especially due to their shared festive nature and use in social gatherings.",
      image: Kuradang
    },
    {
      english: "Roast Pork",
      cebuano: "Lechon",
      definiton: "Lechon Cebu is a renowned dish from Cebu known for its savory, crispy skin and tender, flavorful meat, typically prepared by roasting an entire pig over charcoal. This dish is a centerpiece at major Filipino celebrations and gatherings, epitomizing the festive spirit and culinary pride of Cebuano culture.",
      explanation: "The distinctiveness of Lechon Cebu comes from the herbs and spices used in stuffing the pig, such as lemongrass, onions, garlic, and salt, which are all native to the region. This preparation infuses the meat with flavors that are deeply aromatic and satisfying, setting it apart from other variations of lechon found in the Philippines.",
      commonMistakes: "A common mistake is to confuse Lechon Cebu with other regional styles of lechon, which may not feature the same herbs and preparation method that gives Lechon Cebu its distinct taste.",
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
                        Cebuano: {currentExpression.cebuano}
                    </h5>
                    <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}><strong>Definition:</strong> {currentExpression.definiton}</p>
                    <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}><strong>Explanation:</strong> {currentExpression.explanation}</p>

                    {/* Additional Information */}
                    <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}><strong>Common Mistakes:</strong> {currentExpression.commonMistakes}</p>
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