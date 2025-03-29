import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../Cebuano.css';

function CommonPharseCebuano() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1); 
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

    // Grouped phrases
    const phraseGroups = [
        {
            group: 'Greetings',
            phrases: [
                { english: 'Hello (General greeting)', cebuano: 'Mabuhay', example: 'Mabuhay! Kamusta ka? (Hello! How are you?)' },
                { english: 'How are you?', cebuano: 'Kamusta ka?', example: 'Kamusta ka? (How are you?)' },
                { english: 'Good morning', cebuano: 'Magandang aga', example: 'Magandang aga! Kamusta ka? (Good morning! How are you?)' },
                { english: 'Good evening', cebuano: 'Magandang gab-i', example: 'Magandang gab-i, paano ka? (Good evening, how are you?)' }
            ]
        },
        {
            group: 'Introductions',
            phrases: [
                { english: 'What’s your name?', cebuano: 'Anong pangalan mo?', example: 'Anong pangalan mo? (What’s your name?)' },
                { english: 'My name is ...', cebuano: 'Ang pangalan ko ay ...', example: 'Ang pangalan ko ay Maria. (My name is Maria.)' },
                { english: 'Where are you from?', cebuano: 'Tagasaan ka?', example: 'Tagasaan ka? (Where are you from?)' },
                { english: 'I’m from ...', cebuano: 'Taga... ako', example: 'Taga Manila ako. (I’m from Manila.)' },
                { english: 'Nice to meet you', cebuano: 'Ikinalulugod kong makilala ka', example: 'Ikinalulugod kong makilala ka. (Nice to meet you.)' }
            ]
        },
        {
            group: 'Goodbyes',
            phrases: [
                { english: 'Goodbye', cebuano: 'Paalam', example: 'Paalam, magkita tayo muli! (Goodbye, see you again!)' },
                { english: 'See you later', cebuano: 'Magkita tayo mamaya', example: 'Magkita tayo mamaya! (See you later!)' },
                { english: 'Take care', cebuano: 'Ingat ka', example: 'Ingat ka, ha? (Take care, okay?)' },
                { english: 'Good night', cebuano: 'Magandang gabi', example: 'Magandang gabi, matulog na tayo! (Good night, let’s go to sleep!)' },
                { english: 'See you tomorrow', cebuano: 'Magkita tayo bukas', example: 'Magkita tayo bukas! (See you tomorrow!)' }
            ]
        }
    ];

    const [currentSet, setCurrentSet] = useState(0);
    const [flippedIndices, setFlippedIndices] = useState(new Set());

    const handleFlip = (index) => {
        const newFlippedIndices = new Set(flippedIndices);
        if (newFlippedIndices.has(index)) {
            newFlippedIndices.delete(index); // Unflip
        } else {
            newFlippedIndices.add(index); // Flip
        }
        setFlippedIndices(newFlippedIndices); // Update state
    };

    const flipBackCards = () => {
        const newFlippedIndices = new Set();
        setFlippedIndices(newFlippedIndices); // Reset flip state to flip all cards back
    };

    const nextSet = () => {
        flipBackCards(); // Flip all cards back
        setTimeout(() => {
            if (currentSet + 1 < phraseGroups.length) {
                setCurrentSet(currentSet + 1); // Move to the next group
            }
        }, 500);
    };

    const prevSet = () => {
        flipBackCards(); // Flip all cards back
        setTimeout(() => {
            if (currentSet - 1 >= 0) {
                setCurrentSet(currentSet - 1); // Move to the previous group
            }
        }, 500);
    };

    return (
        <Container fluid className="bg-dark p-5 vh-100">
            <div className="cebuano-go-back-icon">
                <FaArrowLeft size={30} color="#fff" onClick={goBack} className="cebuano-go-back-arrow" />
            </div>

            <h1 className="text-center text-white mb-4" style={{ fontWeight: 600, fontSize: '2.5rem' }}>
                Common Cebuano Phrases
            </h1>
            <p className="text-center mb-3 text-white" style={{ fontSize: '1.3rem' }}>
                Click the card to Flip
            </p>

            <h2 className="text-center text-white mb-5">{phraseGroups[currentSet].group}</h2>

            {/* Display phrases for the current group */}
            <Row className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
                {phraseGroups[currentSet].phrases.map((phrase, index) => (
                    <Col md={4} sm={6} key={index}>
                        <div
                            className={`cebuano-flashcard ${flippedIndices.has(index) ? 'flipped' : ''}`}
                            onClick={() => handleFlip(index)}
                        >
                            <div className="cebuano-flashcard-inner">
                                <div className="cebuano-flashcard-front flex-column">
                                    <h3 className="cebuano-word">{phrase.english}</h3>
                                    <p><strong>Cebuano:</strong> {phrase.cebuano}</p>
                                </div>
                                <div className="cebuano-flashcard-back flex-column">
                                    <h3 className="cebuano-word">{phrase.cebuano}</h3>
                                    <p><strong>Example:</strong> {phrase.example}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

            {/* Button to navigate between groups */}
            <Row className="d-flex w-100 justify-content-between mt-5">
                <Col xs="auto">
                    <Button
                        variant="outline-light"
                        onClick={prevSet}
                        disabled={currentSet === 0}
                        className="btn-lg rounded-pill mx-2"
                        style={{
                            transition: 'transform 0.3s',
                            transform: 'translateY(0)',
                            padding: '12px 25px',
                            backgroundColor: '#5783db',
                            borderColor: '#5783db',
                            color: '#fff',
                            fontSize: '1.1rem',
                        }}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        Previous Set
                    </Button>
                </Col>
                <Col xs="auto">
                    <Button
                        variant="outline-success"
                        onClick={nextSet}
                        disabled={currentSet + 1 >= phraseGroups.length}
                        className="btn-lg rounded-pill mx-2"
                        style={{
                            transition: 'transform 0.3s',
                            transform: 'translateY(0)',
                            padding: '12px 25px',
                            backgroundColor: '#5adbb5',
                            borderColor: '#5adbb5',
                            color: '#000',
                            fontSize: '1.1rem',
                        }}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        Next Set
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default CommonPharseCebuano;