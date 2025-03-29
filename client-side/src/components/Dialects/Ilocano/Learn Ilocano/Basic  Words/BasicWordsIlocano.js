import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../Ilocano.css';
import CardSound from '../../../../Sounds/CardSound.mp3';

function BasicWordsIlocano() {
    const navigate = useNavigate(); 

    const goBack = () => {
        navigate(-1); // Use navigate(-1) to go back to the previous page
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

    // Grouping the words
    const wordGroups = [
        // Group 1: Basic Greetings
        {
            group: 'Greetings',
            words: [
                { ilocano: 'Kamusta', english: 'Hello' },
                { ilocano: 'Magandang aga', english: 'Good Morning' },
                { ilocano: 'Magandang hapon', english: 'Good Afternoon' },
                { ilocano: 'Magandang gab-i', english: 'Good Evening' },
                { ilocano: 'Magandang gab-i', english: 'Good Night' },
                { ilocano: 'Magandang aldaw', english: 'Good day' }
            ]
        },
        // Group 2: Essential Nouns
        {
            group: 'Essential Nouns',
            words: [
                { ilocano: 'Pamilya', english: 'Family' },
                { ilocano: 'Balay', english: 'House' },
                { ilocano: 'Kaibahan', english: 'Friend' },
                { ilocano: 'Obra', english: 'Work' },
                { ilocano: 'Kotse', english: 'Car' },
                { ilocano: 'Iro', english: 'Dog' }
            ]
        },
        // Group 3: Numbers
        {
            group: 'Numbers 1 to 5',
            words: [
                { ilocano: 'Isa', english: 'One' },
                { ilocano: 'Dua', english: 'Two' },
                { ilocano: 'Tulo', english: 'Three' },
                { ilocano: 'Apat', english: 'Four' },
                { ilocano: 'Lima', english: 'Five' },
            ]
        },
        {
            group: 'Numbers 6 to 10',
            words: [
                { ilocano: 'Anom', english: 'Six' },
                { ilocano: 'Pito', english: 'Seven' },
                { ilocano: 'Walo', english: 'Eight' },
                { ilocano: 'Siyam', english: 'Nine' },
                { ilocano: 'Sampo', english: 'Ten' }
            ]
        }
    ];

    // State to track current group
    const [currentSet, setCurrentSet] = useState(0);

    // Flip functionality
    const [flippedIndices, setFlippedIndices] = useState(new Set());

    const handleFlip = (index) => {
        const newFlippedIndices = new Set(flippedIndices);
        if (newFlippedIndices.has(index)) {
            newFlippedIndices.delete(index); // Unflip the card
            new Audio(CardSound).play();
        } else {
            newFlippedIndices.add(index); // Flip the card
            new Audio(CardSound).play();
        }
        setFlippedIndices(newFlippedIndices); // Update flipped state
    };

    // Flip all cards back
    const flipBackCards = () => {
        const newFlippedIndices = new Set();
        setFlippedIndices(newFlippedIndices); // Reset flip state to flip all cards back
    };

    // Move to the next group with a delay after flipping back the cards
    const nextSet = () => {
        flipBackCards(); // Flip all cards back
        setTimeout(() => {
            if (currentSet + 1 < wordGroups.length) {
                setCurrentSet(currentSet + 1); // Move to the next group
            }
        }, 500); // Delay to allow flip back animation
    };

    // Move to the previous group with a delay after flipping back the cards
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
            <div className="ilocano-go-back-icon">
                {/* Go back icon */}
                <FaArrowLeft size={30} color="#fff" onClick={goBack} className="ilocano-go-back-arrow" />
            </div>

            <h1 className="text-center text-white" style={{ fontWeight: 600, fontSize: '2.5rem' }}>Basic Ilocano Words</h1>
            <p className="text-center mb-3 text-white" style={{ fontSize: '1.3rem' }}>Click the card to Flip</p>

            {/* Group Name */}
            <h2 className="text-center text-white mb-5 ">{wordGroups[currentSet].group}</h2>

            {/* Display words for the current group */}
            <Row className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
                {wordGroups[currentSet].words.map((word, index) => (
                    <Col md={4} sm={6} key={index}>
                        <div
                            className={`ilocano-flashcard ${flippedIndices.has(index) ? 'flipped' : ''}`}
                            onClick={() => handleFlip(index)} // Flip the card on click
                        >
                            <div className="ilocano-flashcard-inner">
                                <div style={{ alignItems: 'center' }} className="ilocano-flashcard-front">
                                    <h2 className="ilocano-word">{word.english}</h2>
                                </div>
                                <div style={{ alignItems: 'center' }} className="ilocano-flashcard-back">
                                    <h2 className="ilocano-word">{word.ilocano}</h2>
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
                        disabled={currentSet + 1 >= wordGroups.length}
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

export default BasicWordsIlocano;