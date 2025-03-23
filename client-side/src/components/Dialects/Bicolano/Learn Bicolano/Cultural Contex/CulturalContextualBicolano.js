import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../Bicolano.css';
import Mayon from '../2 Images/Mayon.jpg';
import Pantomina from '../2 Images/Pantomina.jpg';
import Penafrancia from '../2 Images/Penafrancia.jpg';

function CulturalContextualBicolano() {
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
      english: "Mayon Volcano",
      bicolano: "Bulkang Mayon",
      definiton: "The Mayon Volcano is a symbol of strength and culture for the Bicolanos.",
      explanation: "The Mayon Volcano, known for its perfect symmetrical shape, is an important part of the culture and beliefs of the people in Albay. It represents the strength and resilience of the locals as they live around an active volcano.",
      commonMistakes: "A common mistake is to think of the Mayon Volcano only as a tourist attraction, but it is much more than that. It is a cultural treasure that plays a large part in the identity of the Bicolano people.",
      image: Mayon
    },
    {
      english: "Courtship Dance",
      bicolano: "pantomina",
      definiton: "Pantomina is a traditional dance from the Bicol region, often performed at weddings and festivals.",
      explanation: "Pantomina is part of the Bicolano's rich cultural heritage, mimicking the courtship movements of doves, which symbolizes love and affection between couples. It is typically performed during major festivities and particularly at weddings, celebrating new beginnings and the union of families.",
      commonMistakes: "A common mistake is to confuse pantomina with other Philippine folk dances that are faster paced. Pantomina is distinct for its smooth, flowing movements and romantic undertones.",
      image: Pantomina
    },
    {
      english: "The feast of Our Lady of Peñafrancia",
      bicolano: "The Penafrancia Festival",
      definiton: "This is a religious festival held every September in Naga City, where thousands of devotees gather to honor the Our Lady of Penafrancia, the patroness of Bicol.",
      explanation: "The festival is known for its vibrant celebrations, which include a fluvial procession of the image of Our Lady of Peñafrancia on the Naga River, various religious events, and cultural performances. It reflects the deep devotion of the Bicolano people and their strong sense of community and faith.",
      commonMistakes: "A common mistake is to overlook the religious significance of the festival by focusing only on the festivities and entertainment aspects. It's important to recognize and respect that it is primarily a devotional event.",
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
    <Container fluid className="bg-dark p-5 vh-100">
      <div className="bikol-go-back-icon">
        <FaArrowLeft size={30} color="#fff" onClick={goBack} className="bikol-go-back-arrow" />
      </div>

      <h1 className="text-center text-white mb-4" style={{ fontWeight: 600, fontSize: '2.5rem' }}>
        Cultural Context in Bikol
      </h1>
      <p className="text-center mb-4 text-white" style={{ fontSize: '1.3rem' }}>
        Explore Filipino culture through language and expressions.
      </p>

      {/* Display current cultural expression */}
      <Row className="d-flex justify-content-center align-items-center" style={{ height: '65vh' }}>
        <Col md={6}>
          <Card className="bg-light text-dark p-4 shadow-lg rounded">
            <Card.Body>
              <h3 className="mb-3 text-center" style={{ fontWeight: 500, fontSize: '1.8rem' }}>
                {currentExpression.english}
              </h3>
              <h5 className="mb-3 text-center" style={{ color: '#731768', fontSize: '1.5rem' }}>
                Bikol: {currentExpression.bicolano}
              </h5>
              <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}>
                <strong>Definiton:</strong> {currentExpression.definiton}
              </p>
              <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}>
                <strong>Explanation:</strong> {currentExpression.explanation}
              </p>
              {/* Additional Information */}
              {/* <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}>
                <strong>Usage Tips:</strong> {currentExpression.usageTips}
              </p> */}
              <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}>
                <strong>Common Mistakes:</strong> {currentExpression.commonMistakes}
              </p>
              {/* <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}>
                <strong>Synonyms:</strong> {currentExpression.synonyms}
              </p> */}
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-transparent border-0 rounded">
            <Card.Body className="p-0">
              <img src={currentExpression.image} alt={currentExpression.bicolano} className="img-fluid rounded" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
              fontSize: '1.1rem'
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
              fontSize: '1.1rem'
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

export default CulturalContextualBicolano;