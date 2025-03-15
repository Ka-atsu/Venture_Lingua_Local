import React, { useState, useEffect, useMemo } from 'react';
import { Container, Button, Row, Col, Card, ProgressBar, Toast } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function EasyPronunciationChallengeBicolano() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedSyllables, setSelectedSyllables] = useState([]);
    const [availableSyllables, setAvailableSyllables] = useState([]);
    const [score, setScore] = useState(0);
    const [resultMessage, setResultMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [lives, setLives] = useState(3);
    const [showToast, setShowToast] = useState(false);

    // Use useMemo to ensure the questions array is stable
    const questions = useMemo(() => [
        {
            prompt: "Rearrange the syllables to form the correctly pronounced Bicolano word:",
            word: "Kumusta",
            syllables: ["Ku", "mus", "ta"]
        },
        {
            prompt: "Rearrange the syllables to form the correctly pronounced Bicolano word:",
            word: "Kaon",
            syllables: ["Ka", "on"]
        },
        {
            prompt: "Rearrange the syllables to form the correctly pronounced Bicolano word:",
            word: "Salamat",
            syllables: ["Sa", "la", "mat"]
        },
        {
            prompt: "Rearrange the syllables to form the correctly pronounced Bicolano word:",
            word: "Marhay",
            syllables: ["Mar", "hay"]
        },
        {
            prompt: "Rearrange the syllables to form the correctly pronounced Bicolano word:",
            word: "Kotse",
            syllables: ["Kot", "se"]
        }
    ], []);

    // Helper to shuffle an array (Fisher-Yates)
    const shuffleArray = (array) => {
        let arr = [...array];
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    };

    // Initialize selected and available syllables on question change
    useEffect(() => {
        setSelectedSyllables([]);
        const currentSyllables = questions[questionIndex].syllables;
        setAvailableSyllables(shuffleArray(currentSyllables));
        setIsSubmitted(false);
        setResultMessage('');
    }, [questionIndex, questions]);

    // When a player selects a syllable, add it to the answer and remove from available
    const handleSelectSyllable = (syllable) => {
        setSelectedSyllables([...selectedSyllables, syllable]);
        setAvailableSyllables(availableSyllables.filter((s) => s !== syllable));
    };

    // Allow removal of a selected syllable (tapping it returns it to available)
    const handleRemoveSelected = (index) => {
        const syllable = selectedSyllables[index];
        const newSelected = [...selectedSyllables];
        newSelected.splice(index, 1);
        setSelectedSyllables(newSelected);
        setAvailableSyllables([...availableSyllables, syllable]);
    };

    const submitAnswer = () => {
        setIsSubmitted(true);
        const correctOrder = questions[questionIndex].syllables;
        const isCorrect =
            selectedSyllables.length === correctOrder.length &&
            selectedSyllables.every((s, idx) => s === correctOrder[idx]);
        if (isCorrect) {
            setScore(score + 1);
            setResultMessage('Correct!');
        } else {
            const remainingLives = lives - 1;
            setLives(remainingLives);
            setResultMessage(`Incorrect! You have ${remainingLives} lives remaining.`);
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
        }
    };

    const resetGame = () => {
        setShowToast(true);
        setLives(3);
        setScore(0);
        setQuestionIndex(0);
        setSelectedSyllables([]);
        setIsSubmitted(false);
        setResultMessage('');
    };

    const progress = ((questionIndex + 1) / questions.length) * 100;

    return (
        <Container fluid className="d-flex flex-column align-items-center bg-dark vh-100">
            <div className="bikol-go-back-icon">
                <FaArrowLeft
                    size={30}
                    color="#fff"
                    onClick={goBack}
                    className="bikol-go-back-arrow"
                />
            </div>

            <h2 className="text-center my-5 text-white" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: '600' }}>
                Syllable Scramble Challenge - Bicolano
            </h2>

            {/* Progress Bar */}
            <Row className="w-50 my-4">
                <Col>
                    <ProgressBar now={progress} label={`${Math.round(progress)}%`} variant="success" />
                </Col>
            </Row>

            <Row className="p-4 mb-4 d-flex justify-content-center align-items-center" style={{ height: '70vh', maxWidth: '800px' }}>
                <Col>
                    <Card className="p-4 shadow-sm">
                        <Card.Body>
                            <div className="text-center mb-4">
                                <h4>{questions[questionIndex].prompt}</h4>
                            </div>

                            {/* Display the selected syllables */}
                            <div className="mb-3">
                                <h5 className="text-center">Your Answer:</h5>
                                <div className="d-flex flex-wrap justify-content-center">
                                    {selectedSyllables.map((syllable, index) => (
                                        <Button
                                            key={index}
                                            variant="secondary"
                                            className="m-1 py-3 px-5"
                                            onClick={() => handleRemoveSelected(index)}
                                        >
                                            {syllable}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Display the available syllables */}
                            <div className="mb-3">
                                <h5 className="text-center">Available Syllables:</h5>
                                <div className="d-flex flex-wrap justify-content-center">
                                    {availableSyllables.map((syllable, index) => (
                                        <Button
                                            key={index}
                                            variant="outline-dark"
                                            className="m-2 py-3 px-5"
                                            onClick={() => handleSelectSyllable(syllable)}
                                        >
                                            {syllable}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            {/* Submit Answer Button: only appears when all syllables are selected */}
                            {!isSubmitted && selectedSyllables.length === questions[questionIndex].syllables.length && (
                                <div className="text-center mt-4">
                                    <Button variant="outline-primary" onClick={submitAnswer}>
                                        Submit Answer
                                    </Button>
                                </div>
                            )}

                            {/* Result Message & Next Question Button */}
                            {isSubmitted && (
                                <div className="text-center mt-4">
                                    <h5>{resultMessage}</h5>
                                    {lives > 0 && (
                                        <Button variant="outline-secondary" onClick={questionIndex < questions.length - 1 ? nextQuestion : goBack} className="mt-3">
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

export default EasyPronunciationChallengeBicolano;
