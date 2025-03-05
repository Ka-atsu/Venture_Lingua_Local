import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LearnTagalogMainContent() {
  const navigate = useNavigate(); // Initialize the navigate function

  const gotoBasicWords = () => {
    navigate('/tagalogLearn/BasicWords'); // Programmatically navigate to the settings page
};
  return (
    <Container fluid className="vh-100 bg-dark p-5">
      {/* Title and description section */}
      <Row className="mt-4">
        <Col>
          <h1 className="text-center font-weight-bold text-white" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '600', color: '#ffffff' }}>
            Welcome User
          </h1>
          <p className="text-center text-light">This is the main content area where you'll learn Tagalog.</p>
        </Col>
      </Row>

      {/* Button section aligned horizontally */}
      <Row className="mt-5 d-flex">
        <Col>
          <Button
            variant="secondary"
            size="lg"
            className="w-100 p-4 rounded-lg shadow-lg border-0 text-left d-flex flex-column align-items-start transition-transform transform-hover"
            onClick={gotoBasicWords}
          >
            <strong className="text-light">Basic Words</strong>
            <p className="text-body">Learn common words in Tagalog such as greetings, essential nouns, numbers, and more.</p>
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            size="lg"
            className="w-100 p-4 rounded-lg shadow-lg border-0 text-left d-flex flex-column align-items-start transition-transform transform-hover"
            onClick={() => alert('Common Phrases Module Clicked')}
          >
            <strong className="text-light">Common Phrases</strong>
            <p className="text-body">Discover everyday phrases like "Kamusta" (How are you?) and "Paalam" (Goodbye).</p>
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            size="lg"
            className="w-100 p-4 rounded-lg shadow-lg border-0 text-left d-flex flex-column align-items-start transition-transform transform-hover"
            onClick={() => alert('Pronouns and Sentence Structure Module Clicked')}
          >
            <strong className="text-light">Pronouns and Sentence Structure</strong>
            <p className="text-body">Learn basic pronouns and sentence structure to start forming simple sentences.</p>
          </Button>
        </Col>
        <Col>
          <Button
            variant="secondary"
            size="lg"
            className="w-100 p-4 rounded-lg shadow-lg border-0 text-left d-flex flex-column align-items-start transition-transform transform-hover"
            onClick={() => alert('Verbs and Tenses Module Clicked')}
          >
            <strong className="text-light">Verbs and Tenses</strong>
            <p className="text-body">Understand verb conjugation in different tenses (past, present, future) to form more complex sentences.</p>
          </Button>
        </Col>
      </Row>

      {/* Footer section with additional content or button */}
      <Row className="mt-5 d-flex flex-column">
        <Col>
          <Button
            variant="light"
            size="lg"
            className="w-100 p-4 rounded-lg shadow-lg border-0 text-left d-flex flex-column align-items-start transition-transform transform-hover mb-4"
            onClick={() => alert('Useful Expressions Module Clicked')}
          >
            <strong className="text-dark">Useful Expressions</strong>
            <p className="text-body">Learn important expressions like “Salamat” (Thank you) and “Pasensya na” (Sorry).</p>
          </Button>
        </Col>
        <Col>
          <Button
            variant="light"
            size="lg"
            className="w-100 p-4 rounded-lg shadow-lg border-0 text-left d-flex flex-column align-items-start transition-transform transform-hover mb-4"
            onClick={() => alert('Cultural and Contextual Learning Module Clicked')}
          >
            <strong className="text-dark">Cultural and Contextual Learning</strong>
            <p className="text-body">Understand Filipino culture and the contextual use of language in different settings.</p>
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default LearnTagalogMainContent;