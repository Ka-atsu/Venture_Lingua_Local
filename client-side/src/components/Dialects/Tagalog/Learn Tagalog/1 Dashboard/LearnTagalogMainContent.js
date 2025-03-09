import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LearnTagalogMainContent() {
  const navigate = useNavigate();

  // Navigation functions
  const gotoBasicWords = () => navigate('/tagalogLearn/basicWords');
  const gotoCommonPhrase = () => navigate('/tagalogLearn/commonPhrase');
  const gotoPronounceSentences = () => navigate('/tagalogLearn/pronounce&sentence');
  const gotoVerbsTenses = () => navigate('/tagalogLearn/verbs&tenses');
  const gotoUsefulExpresions = () => navigate('/tagalogLearn/usefulExpressions');

  

  // Hover effect handlers with a smoother transition
  const handleMouseOver = (e) => {
    e.currentTarget.style.transition = 'transform 0.5s ease';
    e.currentTarget.style.transform = 'translateY(-5px)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transition = 'transform 0.5s ease';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  // Inline style for headings to add text shadow for better contrast
  const headerStyle = {
    textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '600',
  };

  return (
    <Container fluid className="vh-100 bg-dark p-5">
      {/* Title and description section */}
      <Row className="text-start mb-4">
        <Col>
          <h1 className="display-4 text-white" style={headerStyle}>
            Welcome, User!
          </h1>
          <p className="lead text-light" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            This is the main content area where you'll learn Tagalog.
          </p>
        </Col>
      </Row>

      {/* Button section aligned horizontally */}
      <Row className="mt-5 d-flex">
        <Col>
          <Button
            variant="secondary"
            size="lg"
            onClick={gotoBasicWords}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="w-100 p-4 rounded-lg shadow-lg border-0 text-left d-flex flex-column align-items-start"
          >
            <strong className="text-light">Basic Words</strong>
            <p className="text-white">
              Learn common words in Tagalog such as greetings, essential nouns, numbers, and more.
            </p>
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            size="lg"
            onClick={gotoCommonPhrase}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="w-100 p-4 rounded-lg shadow-lg border-0 text-left d-flex flex-column align-items-start"
          >
            <strong className="text-light">Common Phrases</strong>
            <p className="text-white">
              Discover everyday phrases like "Kamusta" (How are you?) and "Paalam" (Goodbye).
            </p>
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            size="lg"
            onClick={gotoPronounceSentences}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="w-100 p-4 rounded-lg shadow-lg border-0 text-left d-flex flex-column align-items-start"
          >
            <strong className="text-light">Pronouns and Sentences</strong>
            <p className="text-white">
              Learn basic pronouns and sentence structure to start forming simple sentences.
            </p>
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            size="lg"
            onClick={gotoVerbsTenses}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="w-100 p-4 rounded-lg shadow-lg border-0 text-left d-flex flex-column align-items-start"
          >
            <strong className="text-light">Verbs and Tenses</strong>
            <p className="text-white">
              Understand verb conjugation in different tenses (past, present, future) to form more complex sentences.
            </p>
          </Button>
        </Col>
      </Row>

      {/* Footer section with additional content or button */}
      <Row className="mt-5 d-flex flex-column">
        <Col>
          <Button
            variant="light"
            size="lg"
            onClick={gotoUsefulExpresions}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="w-100 p-4 rounded-lg shadow-lg border-0 text-left d-flex flex-column align-items-start mb-4"
          >
            <strong className="text-dark">Useful Expressions</strong>
            <p className="text-body">
              Learn important expressions like “Salamat” (Thank you) and “Pasensya na” (Sorry).
            </p>
          </Button>
        </Col>
        <Col>
          <Button
            variant="light"
            size="lg"
            onClick={() => alert('Cultural and Contextual Learning Module Clicked')}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            className="w-100 p-4 rounded-lg shadow-lg border-0 text-left d-flex flex-column align-items-start mb-4"
          >
            <strong className="text-dark">Cultural and Contextual Learning</strong>
            <p className="text-body">
              Understand Filipino culture and the contextual use of language in different settings.
            </p>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default LearnTagalogMainContent;