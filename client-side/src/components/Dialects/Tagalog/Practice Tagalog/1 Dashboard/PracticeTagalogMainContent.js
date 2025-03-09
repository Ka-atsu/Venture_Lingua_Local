import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function PracticeTagalogMainContent() {
    const navigate = useNavigate();

    // Navigation functions for each level of each challenge
    const gotoChallenge = (category, level) => {
        navigate(`/tagalogPractice/${category}/${level}`);
    };

    // Hover effect handlers with a smoother transition
    const handleMouseOver = (e) => {
        e.currentTarget.style.transition = 'transform 0.5s ease';
        e.currentTarget.style.transform = 'translateY(-5px)';
    };

    const handleMouseOut = (e) => {
        e.currentTarget.style.transition = 'transform 0.5s ease';
        e.currentTarget.style.transform = 'translateY(0)';
    };

    const headerStyle = {
        textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '600',
    };

    const vocabularyStyle = {
        borderRadius: '20px',
        background: 'linear-gradient(135deg, #8b6d4b, #a67d47)',
        borderColor: '#a18d6a',
        color: '#fff',
    };

    const pronunciationStyle = {
        borderRadius: '20px',
        background: 'linear-gradient(135deg, #608c8a, #4d7469)',
        borderColor: '#53745d',
        color: '#fff',
    };

    const sentenceStyle = {
        borderRadius: '20px',
        background: 'linear-gradient(135deg, #c9a854, #b38f2d)',
        borderColor: '#e2b752',
        color: '#fff',
    };

    const translationStyle = {
        borderRadius: '20px',
        background: 'linear-gradient(135deg, #d4985d, #e7a25c)',
        borderColor: '#d18c51',
        color: '#fff',
    };

    const phraseStyle = {
        borderRadius: '20px',
        background: 'linear-gradient(135deg, #d94b3b, #db4433)',
        borderColor: '#c34a40',
        color: '#fff',
    }; 

    return (
        <Container fluid className="d-flex flex-column bg-dark p-5">
            <Row className="text-start mb-4">
                <h1 className="display-4 text-white" style={headerStyle}>
                Practice Tagalog: Challenges
                </h1>  
            </Row>

            {/* Vocabulary Challenge */}
            <Row className="mb-4 justify-content-center">
                <Col sm={12} md={6} className="text-center mb-4 w-100">
                    <h4 className="text-white  mb-5">Vocabulary Challenge</h4>
                    <Row className="justify-content-center">
                        <Col xs={4} className="mb-2">
                            <Button
                                variant="primary"
                                className="w-100 py-4 shadow-lg"
                                style={vocabularyStyle}
                                onClick={() => gotoChallenge('vocabulary', 'easy')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <h6>Easy</h6>
                            </Button>
                        </Col>
                        <Col xs={4} className="mb-2">
                            <Button
                                variant="primary"
                                className="w-100 py-4 shadow-lg"
                                style={vocabularyStyle}
                                onClick={() => gotoChallenge('vocabulary', 'medium')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <h6>Medium</h6>
                            </Button>
                        </Col>
                        <Col xs={4} className="mb-2">
                            <Button
                                variant="primary"
                                className="w-100 py-4 shadow-lg"
                                style={vocabularyStyle}
                                onClick={() => gotoChallenge('vocabulary', 'hard')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <h6>Hard</h6>
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Pronunciation Challenge */}
            <Row className="mb-4 justify-content-center">
                <Col sm={12} md={6} className="text-center mb-4 w-100">
                    <h4 className="text-white  mb-5">Pronunciation Challenge</h4>
                    <Row className="justify-content-center">
                        <Col xs={4} className="mb-2">
                            <Button
                                variant="primary"
                                className="w-100 py-4 shadow-lg"
                                style={pronunciationStyle}
                                onClick={() => gotoChallenge('pronunciationChallenge', 'easy')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <h6>Easy</h6>
                            </Button>
                        </Col>
                        <Col xs={4} className="mb-2">
                            <Button
                                variant="primary"
                                className="w-100 py-4 shadow-lg"
                                style={pronunciationStyle}
                                onClick={() => gotoChallenge('pronunciationChallenge', 'medium')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <h6>Medium</h6>
                            </Button>
                        </Col>
                        <Col xs={4} className="mb-2">
                            <Button
                                variant="primary"
                                className="w-100 py-4 shadow-lg"
                                style={pronunciationStyle}
                                onClick={() => gotoChallenge('pronunciationChallenge', 'hard')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <h6>Hard</h6>
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Sentence Construction Challenge */}
            <Row className="mb-4 justify-content-center">
                <Col sm={12} md={6} className="text-center mb-4 w-100">
                    <h4 className="text-white  mb-5">Sentence Construction Challenge</h4>
                    <Row className="justify-content-center">
                        <Col xs={4} className="mb-2">
                            <Button
                                variant="warning"
                                className="w-100 py-4 shadow-lg"
                                style={sentenceStyle}
                                onClick={() => gotoChallenge('sentenceChallenge', 'easy')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <h6>Easy</h6>
                            </Button>
                        </Col>
                        <Col xs={4} className="mb-2">
                            <Button
                                variant="warning"
                                className="w-100 py-4 shadow-lg"
                                style={sentenceStyle}
                                onClick={() => gotoChallenge('sentenceChallenge', 'medium')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <h6>Medium</h6>
                            </Button>
                        </Col>
                        <Col xs={4} className="mb-2">
                            <Button
                                variant="warning"
                                className="w-100 py-4 shadow-lg"
                                style={sentenceStyle}
                                onClick={() => gotoChallenge('sentenceChallenge', 'hard')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <h6>Hard</h6>
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Translation Challenge */}
            <Row className="mb-4 justify-content-center">
                <Col sm={12} md={6} className="text-center mb-4 w-100">
                    <h4 className="text-white mb-5">Translation Challenge</h4>
                    <Row className="justify-content-center">
                        <Col xs={4} className="mb-2">
                            <Button
                                variant="warning"
                                className="w-100 py-4 shadow-lg"
                                style={translationStyle}
                                onClick={() => gotoChallenge('translationChallenge', 'easy')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <h6>Easy</h6>
                            </Button>
                        </Col>
                        <Col xs={4} className="mb-2">
                            <Button
                                variant="warning"
                                className="w-100 py-4 shadow-lg"
                                style={translationStyle}
                                onClick={() => gotoChallenge('translationChallenge', 'medium')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <h6>Medium</h6>
                            </Button>
                        </Col>
                        <Col xs={4} className="mb-2">
                            <Button
                                variant="warning"
                                className="w-100 py-4 shadow-lg"
                                style={translationStyle}
                                onClick={() => gotoChallenge('translationChallenge', 'hard')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <h6>Hard</h6>
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Common Phrases Challenge */}
            <Row className="justify-content-center">
                <Col sm={12} md={6} className="text-center mb-4 w-100">
                    <h4 className="text-white mb-5">Common Phrases Challenge</h4>
                    <Row className="justify-content-center">
                        <Col xs={4} className="mb-2">
                            <Button
                                variant="danger"
                                className="w-100 py-4 shadow-lg"
                                style={phraseStyle}
                                onClick={() => gotoChallenge('commonPhrasesChallenge', 'easy')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <h6>Easy</h6>
                            </Button>
                        </Col>
                        <Col xs={4} className="mb-2">
                            <Button
                                variant="danger"
                                className="w-100 py-4 shadow-lg"
                                style={phraseStyle}
                                onClick={() => gotoChallenge('commonPhrasesChallenge', 'medium')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <h6>Medium</h6>
                            </Button>
                        </Col>
                        <Col xs={4} className="mb-2">
                            <Button
                                variant="danger"
                                className="w-100 py-4 shadow-lg"
                                style={phraseStyle}
                                onClick={() => gotoChallenge('commonPhrasesChallenge', 'hard')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <h6>Hard</h6>
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    );
}

export default PracticeTagalogMainContent;