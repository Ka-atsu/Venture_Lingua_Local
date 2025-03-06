import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import { FaArrowLeft } from 'react-icons/fa'; // Import the Font Awesome icon
import './BasicWordsTagalog.css'; // Import the CSS file for animation

function BasicWordsTagalog() {
    const navigate = useNavigate(); 

    const goBack = () => {
        navigate(-1); // Use navigate(-1) to go back to the previous page
    };

    const words = [
        { tagalog: 'Salamat', english: 'Thank you' },
        { tagalog: 'Kamusta', english: 'Hello' },
        { tagalog: 'Magandang umaga', english: 'Good Morning' },
        { tagalog: 'Magandang hapon', english: 'Good Afternoon' },
        { tagalog: 'Magandang gabi', english: 'Good Evening' },
        { tagalog: 'Magandang gabi', english: 'Good Night' },
        { tagalog: 'Magandang araw', english: 'Good day' },
        { tagalog: 'Masarap', english: 'Delicious' },
        { tagalog: 'Tulog na', english: 'Go to sleep' },
        { tagalog: 'Mahal kita', english: 'I love you' },
        { tagalog: 'Kumusta ka? ', english: 'How are you?' },
        { tagalog: 'Ano pangalan mo? / Ang pangalan ko ay Russel', english: 'What is your name? / My name is Russel' },
    ];

    const [flippedIndices, setFlippedIndices] = useState(new Set());

    const handleFlip = (index) => {
        const newFlippedIndices = new Set(flippedIndices);
        if (newFlippedIndices.has(index)) {
            newFlippedIndices.delete(index); // Remove the card from the flipped set (unflip it)
        } else {
            newFlippedIndices.add(index); // Add the card to the flipped set (flip it)
        }
        setFlippedIndices(newFlippedIndices); // Update the flipped indices set
    };

    return (
        <Container fluid className="bg-dark p-5">
            <div className="tagalog-go-back-icon">
                {/* Clickable Arrow Icon */}
                <FaArrowLeft size={30} color="#fff" onClick={goBack} className="tagalog-go-back-arrow" />
            </div>

            <h1 className="text-center text-white">Basic Tagalog Words</h1>
            <p className="text-center mb-5 text-white"> Click the card to Flip</p>

            <Row>
                {words.map((word, index) => (
                    <Col md={4} sm={6} key={index} className="mb-4">
                        <div
                            className={`tagalog-flashcard ${flippedIndices.has(index) ? 'flipped' : ''}`}
                            onClick={() => handleFlip(index)} // Flip the card on click
                        >
                            <div className="tagalog-flashcard-inner">
                                <div className="tagalog-flashcard-front">
                                    <h2 className="tagalog-word">{word.english}</h2>
                                </div>
                                <div className="tagalog-flashcard-back">
                                    <h2 className="tagalog-word">{word.tagalog}</h2>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default BasicWordsTagalog;