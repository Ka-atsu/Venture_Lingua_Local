import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../../../zCSS/learn.css';
import CardSound from '../../../../Sounds/CardSound.mp3';

function CommonPharseCebuano( screenSize ) {
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
                { english: 'Hello (General greeting)', cebuano: 'Hello (General greeting)', example: 'Hello! Kamusta ka? (Hello! How are you?)' },
                { english: 'How are you?', cebuano: 'Kamusta ka?', example: 'Kamusta ka? (How are you?)' },
                { english: 'Good morning', cebuano: 'Maayong buntag', example: 'Maayong buntag! Kamusta ka? (Good morning! How are you?)' },
                { english: 'Good evening', cebuano: 'Maayong gabii', example: 'Maayong gabii, kumusta ka? (Good evening, how are you?)' }
            ]
        },
        {
            group: 'Introductions',
            phrases: [
                { english: 'What’s your name?', cebuano: 'Unsa imong ngalan?', example: 'Unsa imong ngalan? (What’s your name?)' },
                { english: 'My name is ...', cebuano: 'Ang akong ngalan kay ...', example: 'Ang akong ngalan kay Maria. (My name is Maria.)' },
                { english: 'Where are you from?', cebuano: 'Asa ka gikan?', example: 'Asa ka gikan? (Where are you from?)' },
                { english: 'I’m from ...', cebuano: 'Gikan ko sa ...', example: 'Gikan ko sa Manila. (I’m from Manila.)' },
                { english: 'Nice to meet you', cebuano: 'Malipayong pagkakita nimo', example: 'Malipayong pagkakita nimo, naglipay ko sa pagkahimamat nimo. (Nice to meet you, I’m happy to meet you.)' }
            ]
        },
        {
            group: 'Goodbyes',
            phrases: [
                { english: 'Goodbye', cebuano: 'Paalam', example: 'Paalam, magkita ta puhon! (Goodbye, see you again soon!)' },
                { english: 'See you later', cebuano: 'Magkita ta unya', example: 'Magkita ta unya! (See you later!)' },
                { english: 'Take care', cebuano: 'Amping', example: 'Amping, ha? (Take care, okay?)' },
                { english: 'Good night', cebuano: 'Maayong gabii', example: 'Maayong gabii, magtulog na ta! (Good night, let’s go to sleep!)' },
                { english: 'See you tomorrow', cebuano: 'Magkita ta ugma', example: 'Magkita ta ugma! (See you tomorrow!)' }
            ]
        }
    ];    

    const [currentSet, setCurrentSet] = useState(0);
    const [flippedIndices, setFlippedIndices] = useState(new Set());

    const handleFlip = (index) => {
        const newFlippedIndices = new Set(flippedIndices);
        if (newFlippedIndices.has(index)) {
            newFlippedIndices.delete(index); // Unflip
            new Audio(CardSound).play();
        } else {
            newFlippedIndices.add(index); // Flip
            new Audio(CardSound).play();
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
        <Container fluid className="bg-dark p-5" style={{ display:'flex' , flexDirection:'column' ,justifyContent: 'space-between', minHeight: screenSize ? '100vh' : 'auto' }}>
            <div className="go-back-icon">
                <FaArrowLeft size={30} color="#fff" onClick={goBack} className="go-back-arrow" />
            </div>

            <h1 className="text-center text-white mb-4" style={{ fontWeight: 600, fontSize: 'clamp(1.5rem, 3vw, 5rem)' }}>
                Common Cebuano Phrases
            </h1>
            <p className="text-center mb-3 text-white" style={{ fontSize: 'clamp(1.5rem, 1vw, 5rem)' }}>
                Click the card to Flip
            </p>

            <h2 className="text-center text-white mb-5" style={{ fontSize: 'clamp(1.5rem, 1vw, 5rem)' }}>{phraseGroups[currentSet].group}</h2>

            {/* Display phrases for the current group */}
            <Row className="d-flex justify-content-center align-items-center">
                {phraseGroups[currentSet].phrases.map((phrase, index) => (
                    <Col className='mb-4' xs={4} key={index}>
                        <div
                            className={`flashcard ${flippedIndices.has(index) ? 'flipped' : ''}`}
                            onClick={() => handleFlip(index)}
                        >
                            <div className="flashcard-inner">
                                <div className="flashcard-front flex-column">
                                    <h3 style={{ fontSize: 'clamp(1rem, 1.5vw, 5rem)' }}>{phrase.english}</h3>
                                    <p style={{ fontSize: 'clamp(1rem, 1vw, 5rem)' }}><strong>Cebuano:</strong> {phrase.cebuano}</p>
                                </div>
                                <div className="flashcard-back flex-column">
                                    <h3 style={{ fontSize: 'clamp(0.9rem, 1.5vw, 5rem)' }}>{phrase.cebuano}</h3>
                                    <p style={{ fontSize: 'clamp(0.9rem, 1vw, 5rem)' }}><strong>Example:</strong> {phrase.example}</p>
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