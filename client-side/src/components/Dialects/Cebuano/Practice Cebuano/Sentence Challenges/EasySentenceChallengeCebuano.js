import React, { useState } from 'react';
import { Container, Button, Row, Col, Card, ProgressBar, Toast } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CorrectBuzzer from '../../../../Sounds/CorrectBuzzer.mp3';
import WrongBuzzer from '../../../../Sounds/WrongBuzzer.mp3';

function EasySentenceChallengeCebuano() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [resultMessage, setResultMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [lives, setLives] = useState(3);
    const [showToast, setShowToast] = useState(false);

    // Sentence construction challenge questions (Jumbled Tagalog words)
    const questions = [
        {
            jumbledWords: ['balay', 'Si', 'nanay', 'sa', 'mihawa'],
            correctAnswer: 'Si nanay mihawa sa balay',
        },
        {
            jumbledWords: ['gabii', 'Maayong'],
            correctAnswer: 'Maayong gabii',
        },
        {
            jumbledWords: ['banyo', 'ang', 'Asa'],
            correctAnswer: 'Asa ang banyo?',
        },
        {
            jumbledWords: ['ko', 'Gigutom'],
            correctAnswer: 'Gigutom ko',
        },
        {
            jumbledWords: ['salamat', 'Daghang'],
            correctAnswer: 'Daghang salamat',
        }        
    ];

    const handleAnswerSelection = (answer) => {
        setSelectedAnswer(answer);
        setIsSubmitted(false);
        setResultMessage('');
    };

    const submitAnswer = () => {
        setIsSubmitted(true);
        // Convert both the selected answer and correct answer to lowercase for comparison
        if (selectedAnswer.trim().toLowerCase() === questions[questionIndex].correctAnswer.toLowerCase()) {
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
                // Automatically reset after 1 second
                setTimeout(resetGame, 2000);
            }
        }
    };

    const nextQuestion = () => {
        if (lives === 0) {
            resetGame();
        } else if (questionIndex < questions.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setSelectedAnswer('');
            setIsSubmitted(false);
            setResultMessage('');
        }
    };

    const resetGame = () => {
        setShowToast(true);
        setLives(3);
        setScore(0);
        setQuestionIndex(0);
        setSelectedAnswer('');
        setIsSubmitted(false);
        setResultMessage('');
    };

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
                Sentence Construction Challenge - Tagalog
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
                            <div className="text-center mb-5">
                                <h4>Arrange the words to form the correct sentence:</h4>
                                <h5>{questions[questionIndex].jumbledWords.join(' ')}</h5>
                            </div>

                            {/* Options Column (User enters the sentence here) */}
                            <div className="d-flex flex-column align-items-center">
                                <input
                                    type="text"
                                    value={selectedAnswer}
                                    onChange={(e) => handleAnswerSelection(e.target.value)}
                                    className="form-control w-100 py-3 mb-4 shadow-sm rounded"
                                    placeholder="Type your answer"
                                    disabled={isSubmitted}
                                />
                            </div>

                            {/* Submit Answer Button */}
                            {selectedAnswer && !isSubmitted && (
                                <div className="text-center mt-4">
                                    <Button variant="outline-dark" onClick={submitAnswer}>
                                        Submit Answer
                                    </Button>
                                </div>
                            )}

                            {/* Result Message & Next Question Button */}
                            {resultMessage && (
                                <div className="text-center mt-4">
                                    <h5>{resultMessage}</h5>
                                    {lives > 0 && (
                                        <Button 
                                            variant="outline-secondary" 
                                            onClick={questionIndex < questions.length - 1 ? nextQuestion : goBack} 
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

export default EasySentenceChallengeCebuano;