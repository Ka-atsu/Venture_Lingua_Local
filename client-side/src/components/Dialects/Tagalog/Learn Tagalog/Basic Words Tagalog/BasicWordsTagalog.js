import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './BasicWordsTagalog.css';

function BasicWordsTagalog() {
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
                { tagalog: 'Kamusta', english: 'Hello' },
                { tagalog: 'Magandang umaga', english: 'Good Morning' },
                { tagalog: 'Magandang hapon', english: 'Good Afternoon' },
                { tagalog: 'Magandang gabi', english: 'Good Evening' },
                { tagalog: 'Magandang gabi', english: 'Good Night' },
                { tagalog: 'Magandang araw', english: 'Good day' }
            ]
        },
        // Group 2: Essential Nouns
        {
            group: 'Essential Nouns',
            words: [
                { tagalog: 'Pamilya', english: 'Family' },
                { tagalog: 'Bahay', english: 'House' },
                { tagalog: 'Kaibigan', english: 'Friend' },
                { tagalog: 'Trabaho', english: 'Work' },
                { tagalog: 'Kotse', english: 'Car' },
                { tagalog: 'Aso', english: 'Dog' }
            ]
        },
        // Group 3: Numbers
        {
            group: 'Numbers 1 to 5',
            words: [
                { tagalog: 'Isa', english: 'One' },
                { tagalog: 'Dalawa', english: 'Two' },
                { tagalog: 'Tatlo', english: 'Three' },
                { tagalog: 'Apat', english: 'Four' },
                { tagalog: 'Lima', english: 'Five' },
            ]
        },
        {
            group: 'Numbers 6 to 10',
            words: [
                { tagalog: 'Anim', english: 'Six' },
                { tagalog: 'Pito', english: 'Seven' },
                { tagalog: 'Walo', english: 'Eight' },
                { tagalog: 'Siyam', english: 'Nine' },
                { tagalog: 'Sampu', english: 'Ten' }
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
        } else {
            newFlippedIndices.add(index); // Flip the card
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
            <div className="tagalog-go-back-icon">
                {/* Go back icon */}
                <FaArrowLeft size={30} color="#fff" onClick={goBack} className="tagalog-go-back-arrow" />
            </div>

            <h1 className="text-center text-white" style={{ fontWeight: 600, fontSize: '2.5rem' }}>Basic Tagalog Words</h1>
            <p className="text-center mb-3 text-white" style={{ fontSize: '1.3rem' }}>Click the card to Flip</p>

            {/* Group Name */}
            <h2 className="text-center text-white mb-5 ">{wordGroups[currentSet].group}</h2>

            {/* Display words for the current group */}
            <Row className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
                {wordGroups[currentSet].words.map((word, index) => (
                    <Col md={4} sm={6} key={index}>
                        <div
                            className={`tagalog-flashcard ${flippedIndices.has(index) ? 'flipped' : ''}`}
                            onClick={() => handleFlip(index)} // Flip the card on click
                        >
                            <div className="tagalog-flashcard-inner">
                                <div style={{ alignItems: 'center' }} className="tagalog-flashcard-front">
                                    <h2 className="tagalog-word">{word.english}</h2>
                                </div>
                                <div style={{ alignItems: 'center' }} className="tagalog-flashcard-back">
                                    <h2 className="tagalog-word">{word.tagalog}</h2>
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

export default BasicWordsTagalog;