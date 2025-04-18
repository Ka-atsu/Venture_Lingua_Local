import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../../../zCSS/learn.css';
import CardSound from '../../../../Sounds/CardSound.mp3';

function BasicWordsIlocano( screenSize ) {
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
        // Group 1: Greetings
        {
            group: 'Greetings',
            words: [
                { ilocano: 'Kablaaw', english: 'Hello' },
                { ilocano: 'Naimbag nga bigat', english: 'Good Morning' },
                { ilocano: 'Naimbag nga malem', english: 'Good Afternoon' },
                { ilocano: 'Naimbag nga rabi-i', english: 'Good Evening' },
            ]
        },
        // Group 2: Basic Food
        {
            group: 'Basic Food',
            words: [
                { ilocano: 'Makan', english: 'Food' },
                { ilocano: 'Danum', english: 'Water' },
                { ilocano: 'Bagas', english: 'Rice' },
                { ilocano: 'Karne', english: 'Meat' },
                { ilocano: 'Isda', english: 'Fish' }
            ]
        },
        // Group 3: Easy words
        {
            group: 'Easy words',
            words: [
                { ilocano: 'Baro', english: 'New' },
                { ilocano: 'Nataengan', english: 'Old' },
                { ilocano: 'Ayat', english: 'Love' },
                { ilocano: 'Kasuron', english: 'Hate' },
                { ilocano: 'Isuna', english: 'Yes' },
                { ilocano: 'Saan', english: 'No' }
            ]
        },
        // Group 4: Easy words
        {
            group: 'Easy words',
            words: [
                { ilocano: 'nataengan a lalaki', english: 'Man' },
                { ilocano: 'Babai', english: 'Woman' },
                { ilocano: 'Kusto', english: 'Right' },
                { ilocano: 'Kamali', english: 'Wrong' },
                { ilocano: 'Bassit', english: 'Small' },
                { ilocano: 'Dakkel', english: 'Big' }
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
        <Container fluid className="bg-dark p-5" style={{ display:'flex' , flexDirection:'column' ,justifyContent: 'space-between', minHeight: screenSize ? '100vh' : 'auto' }}>
            <div className="go-back-icon">
                {/* Go back icon */}
                <FaArrowLeft size={30} color="#fff" onClick={goBack} className="go-back-arrow" />
            </div>

            <div>
            <h1 className="text-center text-white" style={{ fontWeight: 600, fontSize: 'clamp(1.5rem, 3vw, 5rem)' }}>Basic Ilocano Words</h1>
            <p className="text-center mb-3 text-white" style={{ fontSize: 'clamp(1.5rem, 1vw, 5rem)' }}>Click the card to Flip</p>

            <h2 className="text-center text-white mb-5" style={{ fontSize: 'clamp(1.5rem, 1vw, 5rem)' }}>{wordGroups[currentSet].group}</h2>
            </div>

            {/* Display words for the current group */}
            <Row className="d-flex justify-content-center align-items-center">
                {wordGroups[currentSet].words.map((word, index) => (
                    <Col className='mb-5' xs={7} sm={4} key={index}>
                        <div
                            className={`flashcard ${flippedIndices.has(index) ? 'flipped' : ''}`}
                            onClick={() => handleFlip(index)} // Flip the card on click
                        >
                            <div className="flashcard-inner">
                                <div style={{ alignItems: 'center' }} className="flashcard-front">
                                    <h2 className="word" style={{ fontSize: 'clamp(1.8rem, 2vw, 5rem)' }}>{word.english}</h2>
                                </div>
                                <div style={{ alignItems: 'center' }} className="flashcard-back">
                                    <h2 className="word" style={{ fontSize: 'clamp(1.8rem, 2vw, 5rem)' }}>{word.ilocano}</h2>
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
                            padding: '12px',
                            backgroundColor: '#5783db',
                            borderColor: '#5783db',
                            color: '#fff',
                            fontSize: 'clamp(1rem, 1.5vw, 5rem)',
                        }}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        Previous
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
                            padding: '12px',
                            backgroundColor: '#5adbb5',
                            borderColor: '#5adbb5',
                            color: '#000',
                            fontSize: 'clamp(1rem, 1.5vw, 5rem)',
                        }}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                    >
                        Next
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default BasicWordsIlocano;