import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../../../zCSS/learn.css';

function ExpressionBicolano( screenSize ) {

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

  // Sample useful expressions with general information (property name changed to bicolano)
  const expressions = [
    {
      english: "Thank you",
      bicolano: "Salamat",
      example: "Salamat sa tulong mo! (Thank you for your help!)",
      explanation: "This is used to show gratitude when someone helps you.",
      usageTips: "You can use 'Salamat' in both formal and informal settings. If you want to be more polite or respectful, use 'Salamat po'.",
      commonMistakes: "A common mistake is forgetting to say 'po' when speaking to elders or in formal settings.",
      synonyms: "Other words to express thanks include 'Maraming Salamat' (Thank you very much) or 'Salamat po' (Formal version)."
    },
    {
      english: "Sorry",
      bicolano: "Pasensya na",
      example: "Pasensya na, hindi ko sinasadya. (Sorry, I didn’t mean to.)",
      explanation: "This is used when apologizing for a minor mistake.",
      usageTips: "In formal situations, it’s better to say 'Pasensya po' to show respect. 'Paumanhin' is also commonly used in more formal contexts.",
      commonMistakes: "Many learners confuse 'Pasensya na' with 'Pasensya po,' which are both used in different contexts. Remember to use 'po' when talking to elders or in formal settings.",
      synonyms: "You can also use 'Paumanhin' for apologies, especially when speaking formally."
    },
    {
      english: "Excuse me",
      bicolano: "Mawalang-galang na po / Paumanhin",
      example: "Mawalang-galang na po, maaari bang magtanong? (Excuse me, may I ask a question?)",
      explanation: "This is used when politely catching someone's attention or asking for permission to pass by. 'Paumanhin' is more formal, while 'Mawalang-galang na' is a more apologetic phrase.",
      usageTips: "'Paumanhin' is respectful and formal, while 'Mawalang-galang na' is used when you want to show extra respect, especially when interrupting or asking a favor.",
      commonMistakes: "A common mistake is using 'Excuse me' too casually in formal settings. Always say 'Mawalang-galang na' or 'Paumanhin po' when addressing elders or superiors.",
      synonyms: "'Pakiusap' (please) can also be used in a polite request, but it is a little different from a mere 'Excuse me.'"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to navigate between expressions
  const nextExpression = () => {
    if (currentIndex + 1 < expressions.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevExpression = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentExpression = expressions[currentIndex];

  return (
    <Container fluid className="bg-dark p-5" style={{ display:'flex' , flexDirection:'column' ,justifyContent: 'space-between', minHeight: screenSize ? '100vh' : 'auto' }}>
      <div className="go-back-icon">
        <FaArrowLeft size={30} color="#fff" onClick={goBack} className="go-back-arrow" />
      </div>

      <div>
      <h1 className="text-center text-white mb-4" style={{ fontWeight: 600, fontSize: 'clamp(1.5rem, 3vw, 5rem)' }}>
        Bikol Useful Expressions
      </h1>
      <p className="text-center mb-4 text-white" style={{ fontSize: 'clamp(1.5rem, 1vw, 5rem)' }}>
        Learn how to use these useful expressions in everyday conversations.
      </p>
      </div>

      {/* Display current expression */}
      <Row className="d-flex justify-content-center align-items-center">
        <Col md={6}>
          <Card className="bg-light text-dark p-4 shadow-lg rounded">
            <Card.Body>
              <h3 className="mb-3" style={{ fontWeight: 500, fontSize: 'clamp(1rem, 1.5vw, 5rem)' }}>
                {currentExpression.english}
              </h3>
              <h5 className="mb-3" style={{ color: '#731768', fontSize: 'clamp(1rem, 1.5vw, 5rem)' }}>
                Bikol: {currentExpression.bicolano}
              </h5>
              <p className="mb-2 text-start" style={{ fontSize: 'clamp(1rem, 0.5vw, 5rem)' }}>
                <strong>Example:</strong> {currentExpression.example}
              </p>
              <p className="mb-2 text-start" style={{ fontSize: 'clamp(1rem, 0.5vw, 5rem)' }}>
                <strong>Explanation:</strong> {currentExpression.explanation}
              </p>
              {/* Additional Information */}
              <p className="mb-2 text-start" style={{ fontSize: 'clamp(1rem, 0.5vw, 5rem)' }}>
                <strong>Usage Tips:</strong> {currentExpression.usageTips}
              </p>
              <p className="mb-2 text-start" style={{ fontSize: 'clamp(1rem, 0.5vw, 5rem)' }}>
                <strong>Common Mistakes:</strong> {currentExpression.commonMistakes}
              </p>
              <p className="mb-2 text-start" style={{ fontSize: 'clamp(1rem, 0.5vw, 5rem)' }}>
                <strong>Synonyms:</strong> {currentExpression.synonyms}
              </p>
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
            disabled={currentIndex + 1 >= expressions.length}
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

export default ExpressionBicolano;