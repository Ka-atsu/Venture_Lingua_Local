import React, { useState } from 'react';
import { Container, Button, Row, Col, Card, ProgressBar, Toast } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CorrectBuzzer from '../../../../Sounds/CorrectBuzzer.mp3';
import WrongBuzzer from '../../../../Sounds/WrongBuzzer.mp3';

function EasyVocabularyChallengeTagalog() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0); // Keep score
    const [resultMessage, setResultMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [lives, setLives] = useState(3); // Set initial lives to 3
    const [showToast, setShowToast] = useState(false); // State to control toast visibility

    // Sample vocabulary challenge questions
    const questions = [
        {
            question: "What is the Tagalog word for 'Hello'?",
            correctAnswer: 'Kamusta',
            options: ['Kamusta', 'Salamat', 'Pagkain', 'Kotse'],
        },
        {
            question: "What is the Tagalog word for 'Food'?",
            correctAnswer: 'Pagkain',
            options: ['Kamusta', 'Salamat', 'Pagkain', 'Magandang umaga'],
        },
        {
            question: "What is the Tagalog word for 'Thank you'?",
            correctAnswer: 'Salamat',
            options: ['Kamusta', 'Salamat', 'Kotse', 'Pagkain'],
        },
        {
            question: "What is the Tagalog word for 'Good morning'?",
            correctAnswer: 'Magandang umaga',
            options: ['Magandang umaga', 'Salamat', 'Kotse', 'Kamusta'],
        },
        {
            question: "What is the Tagalog word for 'Car'?",
            correctAnswer: 'Kotse',
            options: ['Kamusta', 'Magandang umaga', 'Pagkain', 'Kotse'],
        }
    ];

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
        setIsSubmitted(false);
        setResultMessage('');  // Reset result message when a new answer is selected
    };

    const submitAnswer = () => {
        setIsSubmitted(true);
        if (selectedAnswer === questions[questionIndex].correctAnswer) {
            setScore(score + 1); // Increment the score for correct answers
            setResultMessage('Correct!');
            new Audio(CorrectBuzzer).play();
        } else {
            const remainingLives = lives - 1;
            setLives(remainingLives);
            setResultMessage(`Incorrect! You have ${remainingLives} lives remaining.`);
            new Audio(WrongBuzzer).play();
            if (remainingLives === 0) {
                setResultMessage('Game Over! You lost all lives. Resetting game...');
                // Automatically reset after 2 seconds
                setTimeout(resetGame, 2000);
            }
        }
    };

    const nextQuestion = () => {
        if (lives === 0) {
            // If no lives left, reset the game
            setLives(3);
            setScore(0); // Reset score when game is reset
            setQuestionIndex(0);
            setSelectedAnswer(null);
            setIsSubmitted(false);
            setResultMessage('');
        } else if (questionIndex < questions.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setSelectedAnswer(null); // Reset selected answer for the next question
            setIsSubmitted(false);  // Reset the submit state
            setResultMessage('');
        }
    };

    const resetGame = () => {
        setShowToast(true); // Show the reset notification toast
        setLives(3);
        setScore(0); // Reset score when game is reset
        setQuestionIndex(0);
        setSelectedAnswer(null);
        setIsSubmitted(false);
        setResultMessage('');
    };

    // Progress bar percentage calculation
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
                Easy Vocabulary Challenge - Tagalog
            </h2>

            {/* Progress Bar */}
            <Row className="w-50 my-4">
                <Col>
                    <ProgressBar now={progress} label={`${Math.round(progress)}%`} variant="success" />
                </Col>
            </Row>

            <Row className="p-4 mb-4 d-flex justify-content-center align-items-center" style={{ height: '70vh', maxWidth: '600px' }}>
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
                                        disabled={isSubmitted} // Disable buttons after submission
                                    >
                                        <h5>{word}</h5>
                                    </Button>
                                ))}
                            </div>

                            {/* Submit Answer Button */}
                            {selectedAnswer && !isSubmitted && (
                                <div className="text-center mt-4">
                                    <Button variant="outline-dark" onClick={submitAnswer}>
                                        Submit Answer
                                    </Button>
                                </div>
                            )}

                            {/* Result Message & Next/Finish Button */}
                            {resultMessage && (
                                <div className="text-center mt-4">
                                    <h5>{resultMessage}</h5>
                                    <Button 
                                        variant="outline-secondary" 
                                        onClick={questionIndex < questions.length - 1 ? nextQuestion : goBack} 
                                        className="mt-3"
                                    >
                                        {questionIndex < questions.length - 1 ? 'Next Question' : 'Challenge'}
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
                delay={3000} // Auto-hide after 3 seconds
                autohide
                style={{
                    position: 'absolute',
                    top: '50%',
                    backgroundColor: '#28a745', // Green color for success
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

export default EasyVocabularyChallengeTagalog;