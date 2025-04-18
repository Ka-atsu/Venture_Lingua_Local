import React, { useState } from 'react';
import { Container, Button, Row, Col, Card, ProgressBar, Toast } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate , useLocation } from 'react-router-dom';
import CorrectBuzzer from '../../../../Sounds/CorrectBuzzer.mp3'
import WrongBuzzer from '../../../../Sounds/WrongBuzzer.mp3'

function EasyPhraseChallengeBicolano( screenSize ) {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const location = useLocation(); 
    // eslint-disable-next-line
    const { category, level, isCompleted  } = location.state || {}; // safely access state
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [resultMessage, setResultMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [lives, setLives] = useState(3);
    const [showToast, setShowToast] = useState(false);

    // Phrase-based challenge questions
    const questions = [
        {
            question: "Is used as a friendly inquiry when greeting someone informally like when you meet a friend, a neighbor, or someone you're familiar with.",
            correctAnswer: 'Kumusta ka?',
            options: ['Kumusta ka?', 'Ingat ka', 'Salamat po', 'Paalam'],
        },
        {
            question: "Which phrase means 'How are you?' in Tagalog?",
            correctAnswer: 'Kamusta ka?',
            options: ['Kamusta ka?', 'Magandang umaga', 'Mahal kita', 'Saan ka pupunta?'],
        },
        {
            question: "How do you say 'I'm sorry' in Tagalog?",
            correctAnswer: 'Pasensya na',
            options: ['Walang anuman', 'Paalam', 'Pasensya na', 'Anong pangalan mo?'],
        },
        {
            question: "Choose the correct translation of 'See you later.'",
            correctAnswer: 'Kita tayo mamaya',
            options: ['Kita tayo mamaya', 'Magandang gabi', 'Tara na', 'Maligayang bati'],
        },
        {
            question: "What is the correct phrase for 'Happy birthday'?",
            correctAnswer: 'Maligayang kaarawan',
            options: ['Maligayang kaarawan', 'Maligayang bati', 'Magandang gabi', 'Maraming salamat'],
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
            resetGame();
        } else if (questionIndex < questions.length - 1) {
            setQuestionIndex(questionIndex + 1);
            setSelectedAnswer(null);
            setIsSubmitted(false);
            setResultMessage('');
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

    const finished = () => { 
        navigate(`/bikolPractice`, {
            state: { category, level, isCompleted: true }  // Passing the completion status
        });
    }

    const progress = ((questionIndex + 1) / questions.length) * 100;

    return (
        <Container fluid className="d-flex flex-column align-items-center bg-dark" style={{ minHeight: screenSize ? '100vh' : 'auto'}}>
            <div className="go-back-icon">
                <FaArrowLeft
                    size={30}
                    color="#fff"
                    onClick={goBack}
                    className="go-back-arrow"
                />
            </div>

            <h2 className="text-center my-5 text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                Easy Phrase Challenge - Tagalog
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
                                        disabled={isSubmitted}
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

                            {/* Result Message & Next Question Button */}
                            {resultMessage && (
                                <div className="text-center mt-4">
                                    <h5>{resultMessage}</h5>
                                    <Button
                                        variant="outline-secondary"
                                        onClick={questionIndex < questions.length - 1 ? nextQuestion : finished}
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

export default EasyPhraseChallengeBicolano;