import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import { SlStar } from "react-icons/sl";

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

    const subHeaderStyle = {
        textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '600',
        color: '#697565',
    };

    const iconSize = 30; // Size of the icons in the buttons

    const challengeButtonStyle = {
        borderRadius: '50%', // Makes the button circular
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 8px rgba(0,0,0,0.5)', // Shadow for 3D effect
        border: 'none', // Remove default border
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
                    <h4 className="mb-5" style={subHeaderStyle}>Vocabulary Challenge</h4>
                    <Row className="mb-4 justify-content-center d-flex flex-column">
                        <Col xs={{ span: 6, offset: 5 }} className="d-flex justify-content-start">
                            <Button
                                variant="primary"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#E17564',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('vocabularyChallenge', 'easy')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <FaStar size={iconSize} />
                            </Button>
                        </Col>
                        <Col xs={{ span: 6, offset: 6 }} className="d-flex justify-content-start">
                            <Button
                                variant="primary"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#E17564',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                
                                onClick={() => gotoChallenge('vocabularyChallenge', 'medium')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <FaStar size={iconSize} />
                            </Button>
                        </Col>
                        <Col xs={{ span: 6, offset: 5 }} className="d-flex justify-content-start">
                            <Button
                                variant="primary"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#E17564',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('vocabularyChallenge', 'hard')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <FaStar size={iconSize} />
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Pronunciation Challenge */}
            <Row className="mb-4 justify-content-center">
                <Col sm={12} md={6} className="text-center mb-4 w-100">
                    <h4 className="mb-5" style={subHeaderStyle}>Pronunciation Challenge</h4>
                    <Row className="mb-4 justify-content-center d-flex flex-column">
                        <Col xs={{ span: 6, offset: 6 }} className="d-flex justify-content-start">
                            <Button
                                variant="primary"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#872341',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('pronunciationChallenge', 'easy')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <SlStar size={iconSize}/>
                            </Button>
                        </Col>
                        <Col xs={{ span: 6, offset: 5 }} className="d-flex justify-content-start">
                            <Button
                                variant="primary"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#872341',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('pronunciationChallenge', 'medium')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <SlStar size={iconSize}/>
                            </Button>
                        </Col>
                        <Col xs={{ span: 6, offset: 6 }} className="d-flex justify-content-start">
                            <Button
                                variant="primary"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#872341',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('pronunciationChallenge', 'hard')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <SlStar size={iconSize}/>
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Sentence Construction Challenge */}
            <Row className="mb-4 justify-content-center">
                <Col sm={12} md={6} className="text-center mb-4 w-100">
                    <h4 className="mb-5" style={subHeaderStyle}>Sentence Construction Challenge</h4>
                    <Row className="mb-4 justify-content-center d-flex flex-column">
                        <Col xs={{ span: 6, offset: 5 }} className="d-flex justify-content-start">
                            <Button
                                variant="warning"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#BE3144',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('sentenceChallenge', 'easy')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <SlStar size={iconSize}/>
                            </Button>
                        </Col>
                        <Col xs={{ span: 6, offset: 6 }} className="d-flex justify-content-start">
                            <Button
                                variant="warning"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#BE3144',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('sentenceChallenge', 'medium')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <SlStar size={iconSize}/>
                            </Button>
                        </Col>
                        <Col xs={{ span: 6, offset: 5 }} className="d-flex justify-content-start">
                            <Button
                                variant="warning"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#BE3144',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('sentenceChallenge', 'hard')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <SlStar size={iconSize}/>
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Translation Challenge */}
            <Row className="mb-4 justify-content-center">
                <Col sm={12} md={6} className="text-center mb-4 w-100">
                    <h4 className="mb-5" style={subHeaderStyle}>Translation Challenge</h4>
                    <Row className="mb-4 justify-content-center d-flex flex-column">
                        <Col xs={{ span: 6, offset: 6 }} className="d-flex justify-content-start">
                            <Button
                                variant="warning"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#0A5EB0',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('translationChallenge', 'easy')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <SlStar size={iconSize}/>
                            </Button>
                        </Col>
                        <Col xs={{ span: 6, offset: 5 }} className="d-flex justify-content-start">
                            <Button
                                variant="warning"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#0A5EB0',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('translationChallenge', 'medium')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <SlStar size={iconSize}/>
                            </Button>
                        </Col>
                        <Col xs={{ span: 6, offset: 6 }} className="d-flex justify-content-start">
                            <Button
                                variant="warning"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#0A5EB0',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('translationChallenge', 'hard')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <SlStar size={iconSize}/>
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Common Phrases Challenge */}
            <Row className="justify-content-center">
                <Col sm={12} md={6} className="text-center mb-4 w-100">
                    <h4 className="mb-5" style={subHeaderStyle}>Common Phrases Challenge</h4>
                    <Row className="mb-4 justify-content-center d-flex flex-column">
                        <Col xs={{ span: 6, offset: 5 }} className="d-flex justify-content-start">
                            <Button
                                variant="danger"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#A5158C',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('commonPhrasesChallenge', 'easy')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <SlStar size={iconSize}/>
                            </Button>
                        </Col>
                        <Col xs={{ span: 6, offset: 6 }} className="d-flex justify-content-start">
                            <Button
                                variant="danger"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#A5158C',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('commonPhrasesChallenge', 'medium')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <SlStar size={iconSize}/>
                            </Button>
                        </Col>
                        <Col xs={{ span: 6, offset: 5 }} className="d-flex justify-content-start">
                            <Button
                                variant="danger"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#A5158C',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('commonPhrasesChallenge', 'hard')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                <SlStar size={iconSize}/>
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

        </Container>
    );
}

export default PracticeTagalogMainContent;