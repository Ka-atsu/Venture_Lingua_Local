import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../Basic Words Tagalog/BasicWordsTagalog.css';

function CommonPharseTagalog() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1); 
    };

    // Grouped phrases (same as your example)
    const phrases = [
        // Group 1: Greeting phrases
        {
            group: 'Greetings',
            phrases: [
                {
                    english: 'Hello (General greeting)',
                    tagalog: 'Mabuhay',
                    example: 'Mabuhay! Kamusta ka? (Hello! How are you?)',
                },
                {
                    english: 'How are you?',
                    tagalog: 'Kamusta ka?',
                    example: 'Kamusta ka? (How are you?)',
                },
                {
                    english: 'Good morning',
                    tagalog: 'Magandang umaga',
                    example: 'Magandang umaga! Kamusta ka? (Good morning! How are you?)',
                },
                {
                    english: 'Good evening',
                    tagalog: 'Magandang gabi',
                    example: 'Magandang gabi, paano ka? (Good evening, how are you?)',
                }
            ]
        },
    
        // Group 2: Name and origin
        {
            group: 'Introductions',
            phrases: [
                {
                    english: 'What’s your name?',
                    tagalog: 'Anong pangalan mo?',
                    example: 'Anong pangalan mo? (What’s your name?)',
                },
                {
                    english: 'My name is ...',
                    tagalog: 'Ang pangalan ko ay ...',
                    example: 'Ang pangalan ko ay Maria. (My name is Maria.)',
                },
                {
                    english: 'Where are you from?',
                    tagalog: 'Tagasaan ka?',
                    example: 'Tagasaan ka? (Where are you from?)',
                },
                {
                    english: 'I’m from ...',
                    tagalog: 'Taga... ako',
                    example: 'Taga Manila ako. (I’m from Manila.)',
                },
                {
                    english: 'Nice to meet you',
                    tagalog: 'Ikinalulugod kong makilala ka',
                    example: 'Ikinalulugod kong makilala ka. (Nice to meet you.)',
                }
            ]
        },
    
        // Group 3: Goodbye phrases
        {
            group: 'Goodbyes',
            phrases: [
                {
                    english: 'Goodbye',
                    tagalog: 'Paalam',
                    example: 'Paalam, magkita tayo muli! (Goodbye, see you again!)',
                },
                {
                    english: 'See you later',
                    tagalog: 'Magkita tayo mamaya',
                    example: 'Magkita tayo mamaya! (See you later!)',
                },
                {
                    english: 'Take care',
                    tagalog: 'Ingat ka',
                    example: 'Ingat ka, ha? (Take care, okay?)',
                },
                {
                    english: 'Good night',
                    tagalog: 'Magandang gabi',
                    example: 'Magandang gabi, matulog na tayo! (Good night, let’s go to sleep!)',
                },
                {
                    english: 'See you tomorrow',
                    tagalog: 'Magkita tayo bukas',
                    example: 'Magkita tayo bukas! (See you tomorrow!)',
                }
            ]
        }
    ];        

    // Setting the current group index
    const [currentSet, setCurrentSet] = useState(0);

    // Handle "flip" of cards
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

    // Flip all cards back
    const flipBackCards = () => {
        const newFlippedIndices = new Set();
        setFlippedIndices(newFlippedIndices); // Reset flip state to flip all cards back
    };

    // Navigate to the next group with a delay after flipping back the cards
    const nextSet = () => {
        flipBackCards(); // Flip all cards back
        setTimeout(() => {
            if (currentSet + 1 < phrases.length) {
                setCurrentSet(currentSet + 1); // Move to the next group
            }
        }, 500); // Delay to allow flip back animation
    };

    // Navigate to the previous group with a delay after flipping back the cards
    const prevSet = () => {
        flipBackCards(); // Flip all cards back
        setTimeout(() => {
            if (currentSet - 1 >= 0) {
                setCurrentSet(currentSet - 1); // Move to the previous group
            }
        }, 500); // Delay to allow flip back animation
    };

    return (
        <Container fluid className="bg-dark p-5 vh-100">
            <div className="tagalog-go-back-icon">
                <FaArrowLeft size={30} color="#fff" onClick={goBack} className="tagalog-go-back-arrow" />
            </div>

            <h1 className="text-center text-white">Common Tagalog Phrases</h1>
            <p className="text-center mb-3 text-white">Click the card to Flip</p>

            <h2 className="text-center text-white mb-5 ">{phrases[currentSet].group}</h2>

            {/* Display phrases for the current group */}
            <Row className="d-flex justify-content-center align-items-center" style={{ height: '65vh' }}>
                {phrases[currentSet].phrases.map((phrase, index) => (
                    <Col md={4} sm={6} key={index}>
                        <div
                            className={`tagalog-flashcard ${flippedIndices.has(index) ? 'flipped' : ''}`}
                            onClick={() => handleFlip(index)}
                        >
                            <div className="tagalog-flashcard-inner">
                                <div className="tagalog-flashcard-front flex-column">
                                    <h3 className="tagalog-word">{phrase.english}</h3>
                                    <p><strong>Tagalog:</strong> {phrase.tagalog}</p>
                                </div>
                                <div className="tagalog-flashcard-back flex-column">
                                    <h3 className="tagalog-word">{phrase.tagalog}</h3>
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
                    >
                        Previous Set
                    </Button>
                </Col>
                <Col xs="auto">
                    <Button 
                        variant="outline-success" 
                        onClick={nextSet} 
                        disabled={currentSet + 1 >= phrases.length} 
                        className="btn-lg rounded-pill mx-2"
                    >
                        Next Set
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default CommonPharseTagalog;