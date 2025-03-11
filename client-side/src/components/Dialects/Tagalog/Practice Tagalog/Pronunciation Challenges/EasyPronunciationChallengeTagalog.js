import React, { useState } from 'react';
import { Container, Button, Row, Col, Card, ProgressBar, Toast } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function EasyPronunciationChallengeTagalog() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [resultMessage, setResultMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [lives, setLives] = useState(3);
    const [showToast, setShowToast] = useState(false);

    // Pronunciation-based questions
    const questions = [
        {
            question: "Which pronunciation matches the Tagalog word 'Mahal' (Love)?",
            correctAnswer: 'Ma-hal',
            options: ['Ma-hal', 'Mal', 'Mahaluh', 'Mahal-ay'],
        },
        {
            question: "How do you pronounce 'Salamat' (Thank you)?",
            correctAnswer: 'Sa-la-mat',
            options: ['Sa-lah-mat', 'Sah-lam', 'Sal-mat', 'Sa-la-mat'],
        },
        {
            question: "Which is the correct pronunciation of 'Kaibigan' (Friend)?",
            correctAnswer: 'Ka-i-bi-gan',
            options: ['Kai-bigan', 'Ka-i-bi-gan', 'Kaa-bi-gan', 'Ka-bigan'],
        },
        {
            question: "Choose the correct pronunciation of 'Maganda' (Beautiful):",
            correctAnswer: 'Ma-gan-da',
            options: ['Maan-gan-da', 'Ma-gan-da', 'Magan-duh', 'Mag-dana'],
        },
        {
            question: "How should 'Pamilya' (Family) be pronounced?",
            correctAnswer: 'Pa-mil-ya',
            options: ['Paa-mil-ya', 'Pam-ya', 'Pa-mil-ya', 'Pam-lia'],
        }
    ];

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
        setIsSubmitted(false);
        setResultMessage('');
    };

    const submitAnswer = () => {
        setIsSubmitted(true);
        if (selectedAnswer === questions[questionIndex].correctAnswer) {
            setScore(score + 1);
            setResultMessage('Correct!');
        } else {
            setLives(lives - 1);
            setResultMessage(`Incorrect! You have ${lives - 1} lives remaining.`);
            if (lives - 1 === 0) {
                setResultMessage('Game Over! You lost all lives.');
                setTimeout(resetGame, 2000);
            }
        }
    };

    const nextQuestion = () => {
        if (lives === 0) {
            resetGame();
        } else if (questionIndex < questions.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setSelectedAnswer(null);
            setIsSubmitted(false);
            setResultMessage('');
        } else {
            alert(`Challenge complete! You scored ${score} out of ${questions.length}`);
        }
    };

    const resetGame = () => {
        setShowToast(true);
        setLives(3);
        setScore(0);
        setQuestionIndex(0);
        setSelectedAnswer(null);
        setIsSubmitted(false);
        setResultMessage('');
    };

    const progress = ((questionIndex + 1) / questions.length) * 100;

    return (
        <Container fluid className="d-flex flex-column align-items-center bg-dark vh-100">
            <div className="tagalog-go-back-icon">
                <FaArrowLeft
                    size={30}
                    color="#fff"
                    onClick={goBack}
                    className="tagalog-go-back-arrow"
                />
            </div>

            <h2 className="text-center my-5 text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                Easy Pronunciation Challenge - Tagalog
            </h2>

            {/* Progress Bar */}
            <Row className="w-50 my-4">
                <Col>
                    <ProgressBar now={progress} label={`${Math.round(progress)}%`} variant="success" />
                </Col>
            </Row>

            <Row className="p-4 mb-4 d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
                <Col>
                    <Card className="p-4 shadow-sm">
                        <Card.Body>
                            <div className="text-center mb-4">
                                <h4>{questions[questionIndex].question}</h4>
                            </div>

                            {/* Options Column */}
                            <div className="d-flex flex-column align-items-center">
                                {questions[questionIndex].options.map((word, index) => (
                                    <Button
                                        key={index}
                                        variant={selectedAnswer === word ? 'dark' : 'outline-dark'}
                                        className={`w-100 py-3 mb-3 shadow-sm rounded-pill ${selectedAnswer === word ? 'bg-dark text-white' : ''}`}
                                        onClick={() => handleAnswerSelection(word)}
                                        disabled={isSubmitted}
                                    >
                                        <h5>{word}</h5>
                                    </Button>
                                ))}
                            </div>

                            {/* Submit Answer Button */}
                            {selectedAnswer && !isSubmitted && (
                                <div className="text-center mt-4">
                                    <Button variant="outline-primary" onClick={submitAnswer}>
                                        Submit Answer
                                    </Button>
                                </div>
                            )}

                            {/* Result Message & Next Question Button */}
                            {resultMessage && (
                                <div className="text-center mt-4">
                                    <h5>{resultMessage}</h5>
                                    <Button 
                                        variant="outline-secondary" 
                                        onClick={nextQuestion} 
                                        className="mt-3"
                                    >
                                        {questionIndex < questions.length - 1 ? 'Next Question' : 'Finish Challenge'}
                                    </Button>
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

export default EasyPronunciationChallengeTagalog;