import React, { useState } from 'react';
import { Container, Row, Col, Card, ProgressBar, Toast, Button } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import CorrectBuzzer from '../../../../Sounds/CorrectBuzzer.mp3';
import WrongBuzzer from '../../../../Sounds/WrongBuzzer.mp3';

function MediumSentenceChallengeTagalog() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const location = useLocation(); 
    // eslint-disable-next-line
    const { category, level, isCompleted  } = location.state || {}; // safely access state
    const [questionIndex, setQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [lives, setLives] = useState(3);
    const [resultMessage, setResultMessage] = useState('');
    const [showToast, setShowToast] = useState(false);

    // Sentence with unnecessary words (user needs to click the unnecessary word)
    const questions = [
        {
            sentence: 'Si nanay ay umalis ng bahay',
            words: ['Si', 'nanay', 'ay', 'umalis', 'ng', 'bahay'],
            unnecessaryWords: ['ng'],
        },
        {
            sentence: 'Magandang gabi',
            words: ['Magandang', 'gabi'],
            unnecessaryWords: ['gabi'],
        },
        {
            sentence: 'Saan ang banyo?',
            words: ['Saan', 'ang', 'banyo'],
            unnecessaryWords: ['ang'],
        },
        {
            sentence: 'Nagugutom ako',
            words: ['Nagugutom', 'ako'],
            unnecessaryWords: ['ako'],
        },
        {
            sentence: 'Maraming salamat',
            words: ['Maraming', 'salamat'],
            unnecessaryWords: ['salamat'],
        }
    ];

    const handleWordClick = (word) => {
        if (questions[questionIndex].unnecessaryWords.includes(word)) {
            setScore(score + 1);
            setResultMessage('Correct!');
            new Audio(CorrectBuzzer).play();
        } else {
            const remainingLives = lives - 1;
            setLives(remainingLives);
            setResultMessage(`Incorrect! You have ${remainingLives} lives remaining.`);
            new Audio(WrongBuzzer).play();
            if (remainingLives === 0) {
                setResultMessage('Game Over! You lost all lives. Resetting game...');
                setTimeout(resetGame, 2000);
            }
        }
    };

    const nextQuestion = () => {
        if (lives === 0) {
            resetGame();
        } else if (questionIndex < questions.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setResultMessage('');
        } else {
            // If it's the last question, go back
            setTimeout(goBack, 2000);
        }
    };

    const resetGame = () => {
        setShowToast(true);
        setLives(3);
        setScore(0);
        setQuestionIndex(0);
        setResultMessage('');
    };

    const finished = () => { 
        navigate(`/tagalogPractice`, {
            state: { category, level, isCompleted: true }  // Passing the completion status
        });
    }

    const progress = ((questionIndex + 1) / questions.length) * 100;

    return (
        <Container fluid className="d-flex flex-column align-items-center bg-dark vh-100">
            <div className="go-back-icon">
                <FaArrowLeft
                    size={30}
                    color="#fff"
                    onClick={goBack}
                    className="go-back-arrow"
                />
            </div>

            <h2 className="text-center my-5 text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                Sentence Challenge - Tagalog
            </h2>

            {/* Progress Bar */}
            <Row className="w-50 my-4">
                <Col>
                    <ProgressBar now={progress} label={`${Math.round(progress)}%`} variant="success" />
                </Col>
            </Row>

            <Row className="p-4 mb-4 d-flex justify-content-center align-items-center" style={{ height: '70vh', maxWidth: '600px' }}>
                <Col>
                    <Card className="p-5 shadow-sm">
                        <Card.Body>
                            <div className="text-center mb-4">
                                <h4>Click on the unnecessary word:</h4>
                            </div>

                            {/* Sentence with clickable words */}
                            <div className="d-flex justify-content-center flex-wrap">
                                {questions[questionIndex].words.map((word, index) => (
                                    <span
                                        key={index}
                                        onClick={() => handleWordClick(word)}
                                        style={{
                                            cursor: 'pointer',
                                            marginRight: '5px',
                                            borderRadius: '5px',
                                            backgroundColor: 'transparent',
                                            color: '#000000',
                                            fontSize: '2rem',
                                            textDecoration: 'none',
                                        }}
                                        className="word-clickable"
                                    >
                                        {word}
                                    </span>
                                ))}
                            </div>

                            {/* Result Message & Next Question Button */}
                            {resultMessage && (
                                <div className="text-center mt-4">
                                    <h5>{resultMessage}</h5>
                                    {lives > 0 && (
                                        <Button 
                                            variant="outline-secondary" 
                                            onClick={questionIndex < questions.length - 1 ? nextQuestion : finished} 
                                            className="mt-3"
                                        >
                                            {questionIndex < questions.length - 1 ? 'Next Question' : 'Finish Challenge'}
                                        </Button>
                                    )}
                                </div>
                            )}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {/* Score and Lives Display */}
            <div className="text-center w-100 d-flex justify-content-around text-white">
                <h4>Your Score: {score}</h4>
                <h4>Lives: {lives}</h4>
            </div>

            {/* Toast Notification for Game Reset */}
            <Toast
                onClose={() => setShowToast(false)}
                show={showToast}
                delay={3000}
                autohide
                style={{
                    position: 'absolute',
                    top: '50%',
                    backgroundColor: '#28a745',
                    color: '#fff',
                    borderRadius: '10px',
                    padding: '10px',
                    fontWeight: '500',
                }}
            >
                <Toast.Body>Game has been reset! You have 3 lives again.</Toast.Body>
            </Toast>
        </Container>
    );
}

export default MediumSentenceChallengeTagalog;