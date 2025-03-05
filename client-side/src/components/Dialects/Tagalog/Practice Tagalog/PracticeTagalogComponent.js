import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

function PracticeTagalogComponent() {
    // Handle button click for each challenge
    const handleChallengeClick = (challenge) => {
        alert(`Starting ${challenge} challenge...`);
        // Logic to start the selected challenge
    };

    return (
        <Container fluid className="d-flex flex-column justify-content-center bg-dark" style={{ minHeight: '100vh' }}>
            <h2 className="mb-5" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '600', color: '#ffffff' }}>
                Practice Tagalog: Challenges
            </h2>

            {/* Easy Level Challenges */}
            <h3 className="mb-4" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '600', color: '#6f7dff' }}>
                Easy
            </h3>
            <Row className="mb-4 justify-content-center">
                <Col sm={12} md={4} className="mb-4">
                    <Button
                        variant="primary"
                        className="w-100 py-4 d-flex flex-column align-items-center justify-content-center shadow-lg"
                        style={{
                            borderRadius: '20px',
                            background: 'linear-gradient(to right, rgb(32, 0, 82), rgb(123, 0, 77))', 
                            borderColor: '#6255a5',
                            fontWeight: '600',
                            color: '#fff',
                        }}
                        onClick={() => handleChallengeClick('Vowel')}
                    >
                        <h4>Vowel Challenge</h4>
                        <p>Practice the vowels of Tagalog and their pronunciation.</p>
                    </Button>
                </Col>

                <Col sm={12} md={4} className="mb-4">
                    <Button
                        variant="primary"
                        className="w-100 py-4 d-flex flex-column align-items-center justify-content-center shadow-lg"
                        style={{
                            borderRadius: '20px',
                            background: 'linear-gradient(to right, rgb(19, 46, 93), rgb(10, 89, 128))', 
                            borderColor: '#70a1b7',
                            fontWeight: '600',
                            color: '#fff',
                        }}
                        onClick={() => handleChallengeClick('Consonant')}
                    >
                        <h4>Consonant Challenge</h4>
                        <p>Practice the consonants and improve your pronunciation.</p>
                    </Button>
                </Col>
            </Row>

            {/* Medium Level Challenges */}
            <h3 className="text-center mb-4" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '600', color: '#ffbb33' }}>
                Medium
            </h3>
            <Row className="mb-4 justify-content-center">
                <Col sm={12} md={4} className="mb-4">
                    <Button
                        variant="warning"
                        className="w-100 py-4 d-flex flex-column align-items-center justify-content-center shadow-lg"
                        style={{
                            borderRadius: '20px',
                            background: 'linear-gradient(to right, rgb(169, 123, 13), rgb(255, 171, 28))',
                            borderColor: '#fcbf49',
                            fontWeight: '600',
                            color: '#fff',
                        }}
                        onClick={() => handleChallengeClick('Phrase')}
                    >
                        <h4>Phrase Challenge</h4>
                        <p>Practice common Tagalog phrases and sentence construction.</p>
                    </Button>
                </Col>

                <Col sm={12} md={4} className="mb-4">
                    <Button
                        variant="warning"
                        className="w-100 py-4 d-flex flex-column align-items-center justify-content-center shadow-lg"
                        style={{
                            borderRadius: '20px',
                            background: 'linear-gradient(to right, rgb(169, 44, 81), rgb(106, 0, 24))', 
                            borderColor: '#f2a8b3',
                            fontWeight: '600',
                            color: '#fff',
                        }}
                        onClick={() => handleChallengeClick('Question')}
                    >
                        <h4>Question Formation Challenge</h4>
                        <p>Learn to form questions in Tagalog and practice their pronunciation.</p>
                    </Button>
                </Col>
            </Row>

            {/* Hard Level Challenges */}
            <h3 className="text-center mb-4" style={{ fontFamily: 'Roboto, sans-serif', fontWeight: '600', color: '#ff6f61' }}>
                Hard
            </h3>
            <Row className="justify-content-center">
                <Col sm={12} md={4} className="mb-4">
                    <Button
                        variant="danger"
                        className="w-100 py-4 d-flex flex-column align-items-center justify-content-center shadow-lg"
                        style={{
                            borderRadius: '20px',
                            background: 'linear-gradient(to right, rgb(20, 35, 88), rgb(185, 44, 41))', 
                            borderColor: '#f15946',
                            fontWeight: '600',
                            color: '#fff',
                        }}
                        onClick={() => handleChallengeClick('Advanced Dialogue')}
                    >
                        <h4>Advanced Dialogue Challenge</h4>
                        <p>Engage in conversations in Tagalog with complex vocabulary and structure.</p>
                    </Button>
                </Col>

                <Col sm={12} md={4} className="mb-4">
                    <Button
                        variant="danger"
                        className="w-100 py-4 d-flex flex-column align-items-center justify-content-center shadow-lg"
                        style={{
                            borderRadius: '20px',
                            background: 'linear-gradient(to right, rgb(2, 32, 47), rgb(56, 89, 96))', 
                            borderColor: '#f25728',
                            fontWeight: '600',
                            color: '#fff',
                        }}
                        onClick={() => handleChallengeClick('Story Translation')}
                    >
                        <h4>Phrase Translation Challenge</h4>
                        <p>Translate the Statement that is English Into Tagalog.</p>
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default PracticeTagalogComponent;