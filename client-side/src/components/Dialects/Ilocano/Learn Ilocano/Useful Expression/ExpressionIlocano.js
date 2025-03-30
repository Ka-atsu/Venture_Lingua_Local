import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../../../zCSS/learn.css';

function ExpressionIlocano() {

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
      ilocano: "Agyaman",
      example: "Agyaman kami ti tulong yo! (Thank you for your help!)",
      explanation: "This phrase is used to express gratitude to someone who has helped you or done something nice for you.",
      usageTips: "You can use 'Agyamanak' in both formal and informal settings. To sound more respectful, you can say 'Agyamanak po' when speaking to elders or people you respect.",
      commonMistakes: "A common mistake is forgetting to add 'po' when speaking formally. 'Agyamanak po' is a polite and respectful way to say 'thank you.'",
      synonyms: "'Agyamanak unay' (Thank you very much) and 'Salamat' (another common term for thanks) are also used in Ilocano."
    },
    {
      english: "Sorry",
      ilocano: "Pasensya",
      example: "Pasensya, diak kayat ti ag-offend. (Sorry, I didn’t mean to offend.)",
      explanation: "This phrase is used when apologizing for a minor mistake or when you’ve unintentionally caused inconvenience or harm.",
      usageTips: "'Pasensya' can be used informally, but in formal settings or when talking to elders, you should say 'Pasensya po'.",
      commonMistakes: "One mistake is mixing up 'Pasensya' with 'Paumanhin.' 'Paumanhin' is typically used in more serious or formal situations.",
      synonyms: "'Paumanhin' is another word for 'sorry,' used in more formal or serious contexts."
    },
    {
      english: "Excuse me",
      ilocano: "Dumalanak man",
      example: "Dispensarennak, mabalin kadi nga agsaludsodak? (Excuse me, may I ask a question?)",
      explanation: "'Dumalanak man' is used when you want to politely get someone’s attention or ask for permission to interrupt. It's also used when you need to pass through a crowd or ask someone to move aside.",
      usageTips: "'Dumalanak man' is more commonly used in informal settings. For formal situations, use 'Pakawanen' or 'Pakawanen po' when speaking to elders or superiors to show more respect.",
      commonMistakes: "A common mistake is using 'Dumalanak man' too casually in formal settings. Always use 'Pakawanen' or 'Pakawanen po' when addressing elders or superiors.",
      synonyms: "'Pakawanen' (excuse me) is a more formal version and should be used in polite requests or formal situations. 'Pakiusap' (please) is another polite word but is often used for requests rather than interrupting."
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
      Ilocano Useful Expressions
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
              Ilocano: {currentExpression.ilocano}
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

export default ExpressionIlocano;