import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './BasicWordsTagalog.css'; // Import the CSS file for animation

function BasicWordsTagalog() {
    const words = [
        { tagalog: 'Salamat', english: 'Thank you', example: 'Salamat sa tulong mo.' },
        { tagalog: 'Magandang araw', english: 'Good day', example: 'Magandang araw sa iyo!' },
        { tagalog: 'Kamusta', english: 'Hello', example: 'Kamusta, paano ka?' },
        { tagalog: 'Paalam', english: 'Goodbye', example: 'Paalam, magkita tayo muli.' },
        { tagalog: 'Salamat', english: 'Thank you', example: 'Salamat sa tulong mo.' },
        { tagalog: 'Magandang araw', english: 'Good day', example: 'Magandang araw sa iyo!' },
    ];

    // Flashcard-style toggle state to keep track of flipped cards
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
        <Container fluid className="vh-100 bg-dark p-5">
            <h1 className="text-center mb-5" style={{ color: '#ffff' }}>Basic Tagalog Words</h1>

            <Row>
                {words.map((word, index) => (
                    <Col md={6} sm={12} key={index} className="mb-4">
                        {/* Book-like layout */}
                        <div
                            className={`tagalog-flashcard ${flippedIndices.has(index) ? 'flipped' : ''}`}
                            onClick={() => handleFlip(index)} // Flip the card on click
                        >
                            <div className="tagalog-flashcard-inner">
                                <div className="tagalog-flashcard-front">
                                    <h3 className="text-primary">{word.tagalog}</h3>
                                    <p><strong>English:</strong> {word.english}</p>
                                </div>
                                <div className="tagalog-flashcard-back">
                                    <h3 className="text-primary">{word.tagalog}</h3>
                                    <p><strong>Example Sentence:</strong> {word.example}</p>
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