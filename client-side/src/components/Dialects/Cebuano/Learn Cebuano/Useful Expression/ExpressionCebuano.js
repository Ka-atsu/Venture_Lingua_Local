import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../../../zCSS/learn.css';

function ExpressionCebuano() {

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

  const expressions = [
    {
      english: "Thank you",
      cebuano: "Salamat",
      example: "Salamat sa imong tabang! (Thank you for your help!)",
      explanation: "This is used to show gratitude when someone helps you.",
      usageTips: "You can use 'Salamat' in both formal and informal settings. If you want to be more polite or respectful, use 'Salamat po'.",
      commonMistakes: "A common mistake is forgetting to say 'po' when speaking to elders or in formal settings.",
      synonyms: "Other words to express thanks include 'Daghang Salamat' (Thank you very much) or 'Salamat kaayo' (Thanks a lot)."
    },
    {
      english: "Sorry",
      cebuano: "Pasayloa ko",
      example: "Pasayloa ko, wala nako tuyo-a. (Sorry, I didn’t mean to.)",
      explanation: "This is used when apologizing for a minor mistake.",
      usageTips: "In formal situations, it’s better to say 'Pasayloa ko, palihug' to show respect. 'Pasensya' is also commonly used in more casual contexts.",
      commonMistakes: "A common mistake is using 'Pasayloa ko' too casually. In formal settings, it’s important to use more polite language like 'Pasayloa ko, palihug'.",
      synonyms: "'Pasensya' (Sorry) can also be used as an informal apology."
    },
    {
      english: "Please",
      cebuano: "Palihug",
      example: "Palihug, pwede ba magpangutana? (Please, may I ask a question?)",
      explanation: "This is used when making a polite request or asking for permission.",
      usageTips: "In formal settings, use 'Palihug' with 'po' to show extra politeness: 'Palihug po.'",
      commonMistakes: "A common mistake is not using 'Palihug' when making a polite request. Always use it when asking for something respectfully.",
      synonyms: "'Pakiusap' (please) is also used in polite requests, but it’s typically more formal and often used in Tagalog."
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
    <Container fluid className="bg-dark p-5 vh-100">
      <div className="go-back-icon">
        <FaArrowLeft size={30} color="#fff" onClick={goBack} className="go-back-arrow" />
      </div>

      <h1 className="text-center text-white mb-4" style={{ fontWeight: 600, fontSize: '2.5rem' }}>
      Cebuano Useful Expressions
      </h1>
      <p className="text-center mb-4 text-white" style={{ fontSize: '1.3rem' }}>
        Learn how to use these useful expressions in everyday conversations.
      </p>

      {/* Display current expression */}
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
              <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}><strong>Example:</strong> {currentExpression.example}</p>
              <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}><strong>Explanation:</strong> {currentExpression.explanation}</p>

              {/* Additional Information */}
              <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}><strong>Usage Tips:</strong> {currentExpression.usageTips}</p>
              <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}><strong>Common Mistakes:</strong> {currentExpression.commonMistakes}</p>
              <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}><strong>Synonyms:</strong> {currentExpression.synonyms}</p>
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

export default ExpressionCebuano;