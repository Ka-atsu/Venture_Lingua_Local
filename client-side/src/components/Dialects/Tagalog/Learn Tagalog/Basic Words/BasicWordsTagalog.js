import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import CardSound from '../../../../Sounds/CardSound.mp3'
import '../Tagalog.css';
import kamusta from './basic word sounds/Kamusta.mp3';
import araw from './basic word sounds/Magandang araw.mp3';
import gabi from './basic word sounds/Magandang gabi.mp3';
import hapon from './basic word sounds/Magandang Hapon.mp3';
import umaga from './basic word sounds/Magandang Umaga.mp3';
import aso from './basic word sounds/Aso.mp3';
import bahay from './basic word sounds/Bahay.mp3';
import kaibigan from './basic word sounds/Kaibigan.mp3';
import kotse from './basic word sounds/Kotse.mp3';
import pamilya from './basic word sounds/Pamilya.mp3';
import trabaho from './basic word sounds/Trabaho.mp3';
import isa from './basic word sounds/Isa.mp3';
import dalawa from './basic word sounds/Dalawa.mp3';
import tatlo from './basic word sounds/Tatlo.mp3';
import apat from './basic word sounds/Apat.mp3';
import lima from './basic word sounds/Lima.mp3';
import anim from './basic word sounds/Anim.mp3';
import pito from './basic word sounds/Pito.mp3';
import walo from './basic word sounds/Walo.mp3';
import siyam from './basic word sounds/Siyam.mp3';
import sampu from './basic word sounds/Sampu.mp3';

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
                { tagalog: 'Kamusta', english: 'Hello', sound: kamusta },
                { tagalog: 'Magandang umaga', english: 'Good Morning' , sound: umaga  },
                { tagalog: 'Magandang hapon', english: 'Good Afternoon' , sound: hapon  },
                { tagalog: 'Magandang gabi', english: 'Good Night' , sound: gabi  },
                { tagalog: 'Magandang araw', english: 'Good day' , sound: araw  }
            ]
        },
        // Group 2: Essential Nouns
        {
            group: 'Essential Nouns',
            words: [
                { tagalog: 'Pamilya', english: 'Family' , sound: pamilya },
                { tagalog: 'Bahay', english: 'House' , sound: bahay },
                { tagalog: 'Kaibigan', english: 'Friend' , sound: kaibigan },
                { tagalog: 'Trabaho', english: 'Work' , sound: trabaho },
                { tagalog: 'Kotse', english: 'Car' , sound: kotse },
                { tagalog: 'Aso', english: 'Dog' , sound: aso }
            ]
        },
        // Group 3: Numbers
        {
            group: 'Numbers 1 to 5',
            words: [
                { tagalog: 'Isa', english: 'One' , sound: isa },
                { tagalog: 'Dalawa', english: 'Two' , sound: dalawa },
                { tagalog: 'Tatlo', english: 'Three' , sound: tatlo },
                { tagalog: 'Apat', english: 'Four' , sound: apat },
                { tagalog: 'Lima', english: 'Five' , sound: lima },
            ]
        },
        {
            group: 'Numbers 6 to 10',
            words: [
                { tagalog: 'Anim', english: 'Six' , sound: anim },
                { tagalog: 'Pito', english: 'Seven' , sound: pito },
                { tagalog: 'Walo', english: 'Eight' , sound: walo },
                { tagalog: 'Siyam', english: 'Nine' , sound: siyam },
                { tagalog: 'Sampu', english: 'Ten' , sound: sampu }
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
                        <div className={`tagalog-flashcard ${flippedIndices.has(index) ? 'flipped' : ''}`} onClick={() => handleFlip(index)}>
                            <div className="tagalog-flashcard-inner">
                                <div className="tagalog-flashcard-front" style={{ alignItems: 'center' }}>
                                    <h2 className="tagalog-word">{word.english}</h2>
                                </div>
                                <div className="tagalog-flashcard-back flex-column" style={{ alignItems: 'center' }}>
                                    <h2 className="tagalog-word">{word.tagalog}</h2>
                                    <button 
                                        onClick={(e) => { 
                                            e.stopPropagation(); // Prevent flipping the card when clicking the button
                                            new Audio(word.sound).play();
                                        }} 
                                        className="btn btn-sm btn-light mt-2"
                                    >
                                        🔊
                                    </button>
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