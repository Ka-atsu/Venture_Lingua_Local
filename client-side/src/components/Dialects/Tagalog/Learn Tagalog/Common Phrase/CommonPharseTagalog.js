import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../../../zCSS/learn.css';
import pangalan from './common phrase sounds/Anong pangalan mo.mp3';
import gabi from './common phrase sounds/gabi.mp3';
import ingat from './common phrase sounds/ingat.mp3';
import Kamusta from './common phrase sounds/Kamusta.mp3';
import magkita from './common phrase sounds/magkita.mp3';
import mamaya from './common phrase sounds/mamaya.mp3';
import Makilala from './common phrase sounds/Makilala.mp3';
import paalam from './common phrase sounds/paalam.mp3';
import Russel from './common phrase sounds/Russel.mp3';
import Taga from './common phrase sounds/Taga saan.mp3';
import umaga from './common phrase sounds/Umaga.mp3';
import Mabuhay from './common phrase sounds/Mabuhay.mp3';
import Manila from './common phrase sounds/Manila.mp3';
import CardSound from '../../../../Sounds/CardSound.mp3';

function CommonPharseTagalog() {
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
                { english: 'Hello (General greeting)', tagalog: 'Mabuhay', example: 'Mabuhay! Kamusta ka? (Hello! How are you?)' , sound: Mabuhay },
                { english: 'How are you?', tagalog: 'Kamusta ka?', example: 'Kamusta ka? (How are you?)' , sound: Kamusta },
                { english: 'Good morning', tagalog: 'Magandang umaga', example: 'Magandang umaga! Kamusta ka? (Good morning! How are you?)' , sound: umaga },
                { english: 'Good evening', tagalog: 'Magandang gabi', example: 'Magandang gabi! Kamusta ka? (Good evening! How are you?)' , sound: gabi }
            ]
        },
        {
            group: 'Introductions',
            phrases: [
                { english: 'What’s your name?', tagalog: 'Anong pangalan mo?', example: 'Anong pangalan mo? (What’s your name?)' , sound: pangalan },
                { english: 'My name is ...', tagalog: 'Ang pangalan ko ay ...', example: 'Ang pangalan ko ay Russel. (My name is Russel.)' , sound: Russel },
                { english: 'Where are you from?', tagalog: 'Tagasaan ka?', example: 'Tagasaan ka? (Where are you from?)' , sound: Taga },
                { english: 'I’m from ...', tagalog: 'Taga... ako', example: 'Taga Manila ako. (I’m from Manila.)' , sound: Manila },
                { english: 'Nice to meet you', tagalog: 'Ikinalulugod ko na makilala ka', example: 'Ikinalulugod ko na makilala ka. (Nice to meet you.)' , sound: Makilala }
            ]
        },
        {
            group: 'Goodbyes',
            phrases: [
                { english: 'Goodbye', tagalog: 'Paalam', example: 'Paalam! magkita tayo muli! (Goodbye! see you again!)' , sound: paalam },
                { english: 'See you later', tagalog: 'Magkita tayo mamaya', example: 'Magkita tayo, mamaya! (See you later!)' , sound: mamaya },
                { english: 'Take care', tagalog: 'Ingat ka', example: 'Ingat ka, ha? (Take care, okay?)' , sound: ingat },
                { english: 'See you tomorrow', tagalog: 'Magkita tayo bukas', example: 'Magkita tayo bukas! (See you tomorrow!)' , sound: magkita }
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
        <Container fluid className="bg-dark p-5 vh-100">
            <div className="go-back-icon">
                <FaArrowLeft size={30} color="#fff" onClick={goBack} className="go-back-arrow" />
            </div>

            <h1 className="text-center text-white mb-4" style={{ fontWeight: 600, fontSize: '2.5rem' }}>
                Common Tagalog Phrases
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
                            className={`flashcard ${flippedIndices.has(index) ? 'flipped' : ''}`}
                            onClick={() => handleFlip(index)}
                        >
                            <div className="flashcard-inner">
                                <div className="flashcard-front flex-column">
                                    <h3 className="word">{phrase.english}</h3>
                                    <p><strong>Tagalog:</strong> {phrase.tagalog}</p>
                                </div>
                                <div className="flashcard-back flex-column align-items-center">
                                    <h3 className="word">{phrase.tagalog}</h3>
                                    <p> {phrase.example}</p>
                                    <button 
                                        onClick={(e) => { 
                                            e.stopPropagation(); // Prevent flipping the card when clicking the button
                                            new Audio(phrase.sound).play();
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

export default CommonPharseTagalog;