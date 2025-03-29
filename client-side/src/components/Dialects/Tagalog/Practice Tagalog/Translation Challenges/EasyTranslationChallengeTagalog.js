import React, { useState } from 'react';
import { Container, Button, Row, Col, Card, ProgressBar, Toast } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CorrectBuzzer from '../../../../Sounds/CorrectBuzzer.mp3';
import WrongBuzzer from '../../../../Sounds/WrongBuzzer.mp3';

function EasyTranslationChallengeTagalog() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedWords, setSelectedWords] = useState([]);
    const [score, setScore] = useState(0);
    const [resultMessage, setResultMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [lives, setLives] = useState(3);
    const [showToast, setShowToast] = useState(false);

    const sentences = [
        {
            english: "WHERE SHOULD WE EAT?", 
            correctAnswer: ['SAAN', 'TAYO', 'KAIN'],
            options: ['TAYO', 'SAAN', 'PRE', 'KAIN'],
        },
        {
            english: "ANG GANDA NG TAGPO", 
            correctAnswer: ['TAGPO', 'ANG', 'GANDA', 'NG'],
            options: ['TAGPO', 'GANDA', 'ANG', 'NG'],
        },
        {
            english: "MAY NAKITA AKONG ISDA",
            correctAnswer: ['AKONG', 'ISDA', 'MAY', 'NAKITA'],
            options: ['MAY', 'NAKITA', 'ISDA', 'AKONG'],
        },
        {
            english: "MASAYA AKO SA BUHAY KO",
            correctAnswer: ['MASAYA', 'AKO', 'BAY', 'SA'],
            options: ['MASAYA', 'AKO', 'SA', 'BAY'],
        },
        {
            english: "KUMAIN NA AKO NG PIZZA",
            correctAnswer: ['AKO', 'NG', 'PIZZA', 'KUMAIN'],
            options: ['AKO', 'NG', 'KUMAIN', 'PIZZA'],
        }
    ];

    const handleAnswerSelection = (selectedWord) => {
        if (isSubmitted) return;  // Prevent changes once the answer is submitted

        // If word is already in selectedWords, remove it (unselect)
        if (selectedWords.includes(selectedWord)) {
            setSelectedWords(selectedWords.filter(word => word !== selectedWord));
        } else {
            // Otherwise, add it to selectedWords (select)
            setSelectedWords([...selectedWords, selectedWord]);
        }
    };

    const submitAnswer = () => {
        setIsSubmitted(true);

        if (JSON.stringify(selectedWords) === JSON.stringify(sentences[questionIndex].correctAnswer)) {
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
        } else if (questionIndex < sentences.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setSelectedWords([]);  // Reset selected words for the next question
            setIsSubmitted(false);  // Reset submit status
            setResultMessage('');  // Reset result message
        } 
    };

    const resetGame = () => {
        setShowToast(true);
        setLives(3);
        setScore(0);
        setQuestionIndex(0);
        setSelectedWords([]);
        setIsSubmitted(false);
        setResultMessage('');
    };

    const progress = ((questionIndex + 1) / sentences.length) * 100;

    return (
        <Container fluid className="d-flex flex-column align-items-center bg-dark vh-100 p-4">
            <div className="go-back-icon">
                <FaArrowLeft
                    size={30}
                    color="#fff"
                    onClick={goBack}
                    className="go-back-arrow"
                />
            </div>

            <h2 className="text-center my-4 text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                Complete the Sentence - Tagalog
            </h2>

            {/* Progress Bar */}
            <Row className="w-50 my-4">
                <Col>
                    <ProgressBar now={progress} label={`${Math.round(progress)}%`} variant="success" />
                </Col>
            </Row>

            <Row className="p-4 mb-4 d-flex justify-content-center align-items-center" style={{ height: '70vh'}}>
                <Col>
                    <Card className="shadow-lg rounded-lg bg-light">
                        <Card.Body>
                            <div className="text-center my-4">
                                <h4 className="text-dark" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '500' }}>{sentences[questionIndex].english}</h4>
                            </div>

                            {/* Selected words displayed in order */}
                            <div className="d-flex flex-wrap justify-content-center mb-4">
                                {selectedWords.map((word, index) => (
                                    <Button
                                        key={index}
                                        variant="outline-dark"
                                        className="m-1 py-3 px-5 shadow-sm rounded-pill"
                                        onClick={() => handleAnswerSelection(word)} // Click to deselect
                                    >
                                        {word}
                                    </Button>
                                ))}
                            </div>

                            {/* Options Column */}
                            <div className="d-flex flex-wrap justify-content-center mb-4">
                                {sentences[questionIndex].options.map((word, index) => (
                                    <Button
                                        key={index}
                                        variant={selectedWords.includes(word) ? "dark" : "outline-dark"}
                                        className="m-3 py-3 px-5 shadow-sm rounded-pill"
                                        onClick={() => handleAnswerSelection(word)} // Select or deselect word
                                        disabled={isSubmitted}
                                    >
                                        {word}
                                    </Button>
                                ))}
                            </div>

                            {/* Submit Answer Button */}
                            {selectedWords.length > 0 && !isSubmitted && (
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
                                    <Button 
                                        variant="outline-secondary" 
                                        onClick={questionIndex < sentences.length - 1 ? nextQuestion : goBack} 
                                        className="mt-3"
                                    >
                                        {questionIndex < sentences.length - 1 ? 'Next Question' : 'Finish Challenge'}
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

export default EasyTranslationChallengeTagalog;