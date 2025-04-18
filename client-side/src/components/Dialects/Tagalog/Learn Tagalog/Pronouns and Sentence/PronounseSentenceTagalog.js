import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../../../zCSS/learn.css';
import CardSound from '../../../../Sounds/CardSound.mp3';
import Ang from './pronouns sounds/Ang pangalan ko ay.mp3';
import Anong from './pronouns sounds/Anong pangalan mo.mp3';
import Ikinalulugod from './pronouns sounds/Ikinalulugod kong makilala ka.mp3';
import Ingat from './pronouns sounds/Ingat Ka.mp3';
import Kamusta from './pronouns sounds/Kamusta.mp3';
import gabi from './pronouns sounds/Magandang gabi.mp3';
import mamaya from './pronouns sounds/Magkita tayo mamaya.mp3';
import umaga from './pronouns sounds/Magandang umaga.mp3';
import Paalam from './pronouns sounds/Paalam.mp3';
import Taga from './pronouns sounds/Taga Manila ako.mp3';
import Tagasaan from './pronouns sounds/Tagasaan ka.mp3';
import bukas from './pronouns sounds/Magkita tayo bukas.mp3';

function PronounceSentenceTagalog( screenSize ) {
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

    // Grouped phrases with pronunciation, example sentences, and explanation
    const pronounceSentenceGroups = [
        // Group 1: Greeting phrases
        {
            group: 'Greetings',
            phrases: [
                {
                    english: 'Hello',
                    tagalog: 'Kamusta',
                    pronunciation: 'Ka-mus-ta',
                    sentence: 'Kamusta ka? (Hello! How are you?)',
                    explanation: 'This is a greeting you use when meeting someone or when checking in with someone to see how they are doing.',
                    sound: Kamusta
                },
                {
                    english: 'Good morning',
                    tagalog: 'Magandang umaga',
                    pronunciation: 'Mah-gan-dang oo-mah-ga',
                    sentence: 'Magandang umaga! Kamusta ka at ang iyong pamilya? (Good morning! How are you and your family?)',
                    explanation: 'This is used to greet someone in the morning and inquire about their well-being.',
                    sound: umaga
                },
                {
                    english: 'Good evening',
                    tagalog: 'Magandang gabi',
                    pronunciation: 'Mah-gan-dang gah-bee',
                    sentence: 'Magandang gabi, paano ka? Matagal na kitang hindi nakita! (Good evening, how are you? It’s been a while since I last saw you!)',
                    explanation: 'This is a greeting used in the evening to ask how someone is doing after the day has passed.',
                    sound: gabi
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
                    pronunciation: 'A-nong pahng-ah-lahn mo?',
                    sentence: 'Anong pangalan mo? Ako si Maria, at ikaw? (What’s your name? I’m Maria, and you?)',
                    explanation: 'This phrase is used when meeting someone for the first time and asking for their name.',
                    sound: Anong
                },
                {
                    english: 'My name is ...',
                    tagalog: 'Ang pangalan ko ay ...',
                    pronunciation: 'Ang pahng-ah-lahn ko ay ...',
                    sentence: 'Ang pangalan ko ay Maria, at ako ay taga Maynila. (My name is Maria, and I’m from Manila.)',
                    explanation: 'This is how you introduce yourself and tell others your name and where you\'re from.',
                    sound: Ang
                },
                {
                    english: 'Where are you from?',
                    tagalog: 'Tagasaan ka?',
                    pronunciation: 'Tah-gah-sah-ahn kah?',
                    sentence: 'Tagasaan ka? Ako ay taga Bicol, ikaw? (Where are you from? I’m from Bicol, how about you?)',
                    explanation: 'This question is used when you want to know where someone is from.',
                    sound: Tagasaan
                },
                {
                    english: 'I’m from ...',
                    tagalog: 'Taga... ako',
                    pronunciation: 'Tah-gah... ah-ko',
                    sentence: 'Taga Manila ako. Nais kong matutunan ang Tagalog nang mas maayos. (I’m from Manila. I want to learn Tagalog more fluently.)',
                    explanation: 'This is used when you are telling someone where you are from.',
                    sound: Taga
                },
                {
                    english: 'Nice to meet you',
                    tagalog: 'Ikinalulugod kong makilala ka',
                    pronunciation: 'I-kee-nah-loo-loo-gohd kong mah-kee-lah-lah kah',
                    sentence: 'Ikinalulugod kong makilala ka. Sana ay maging magkaibigan tayo. (Nice to meet you, I hope we can become friends.)',
                    explanation: 'This is a polite way of expressing happiness when meeting someone for the first time.',
                    sound: Ikinalulugod
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
                    pronunciation: 'Pah-ah-lahm',
                    sentence: 'Paalam, magkita tayo muli sa susunod na linggo. (Goodbye, see you again next week.)',
                    explanation: 'This is the standard way to say goodbye when you expect to see someone again soon.',
                    sound: Paalam
                },
                {
                    english: 'See you later',
                    tagalog: 'Magkita tayo mamaya',
                    pronunciation: 'Mag-kee-tah tah-yo mah-mah-yah',
                    sentence: 'Magkita tayo mamaya pagkatapos ng trabaho. (See you later after work.)',
                    explanation: 'This is used when you are planning to meet someone later in the day after a specific activity.',
                    sound: mamaya
                },
                {
                    english: 'Take care',
                    tagalog: 'Ingat ka',
                    pronunciation: 'Eeng-aht kah',
                    sentence: 'Ingat ka sa daan, mag-ingat sa mga sasakyan. (Take care on the road, be careful with the vehicles.)',
                    explanation: 'This is used when you want to show concern for someone\'s safety as they leave.',
                    sound: Ingat
                },
                {
                    english: 'See you tomorrow',
                    tagalog: 'Magkita tayo bukas',
                    pronunciation: 'Mag-kee-tah tah-yo boo-kahs',
                    sentence: 'Magkita tayo bukas sa mga 10:00 AM. (See you tomorrow at around 10:00 AM.)',
                    explanation: 'This phrase is used when confirming plans to meet someone the following day.',
                    sound: bukas
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
            new Audio(CardSound).play();
        } else {
            newFlippedIndices.add(index); // Flip
            new Audio(CardSound).play();
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
            if (currentSet + 1 < pronounceSentenceGroups.length) {
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
    console.log(screenSize);

    return (
        <Container fluid className="bg-dark p-5" style={{ display:'flex' , flexDirection:'column' ,justifyContent: 'space-between', minHeight: screenSize ? '100vh' : 'auto' }}>
            <div className="go-back-icon">
                <FaArrowLeft size={30} color="#fff" onClick={goBack} className="go-back-arrow" />
            </div>

            <div>
            <h1 className="text-center text-white" style={{ fontWeight: 600, fontSize: 'clamp(1.5rem, 3vw, 5rem)' }}>Tagalog Pronunciation and Example Sentences</h1>
            <p className="text-center mb-3 text-white" style={{ fontSize: 'clamp(1.5rem, 1vw, 5rem)' }}>Click the card to Flip</p>

            <h2 className="text-center text-white mb-5" style={{ fontSize: 'clamp(1.5rem, 1vw, 5rem)' }}>{pronounceSentenceGroups[currentSet].group}</h2>
            </div>

            {/* Display phrases for the current group */}
            <Row className="d-flex justify-content-center align-items-center">
                {pronounceSentenceGroups[currentSet].phrases.map((phrase, index) => (
                    <Col className='mb-4' xs={7} sm={4} key={index}>
                        <div
                            className={`flashcard ${flippedIndices.has(index) ? 'flipped' : ''}`}
                            onClick={() => handleFlip(index)}
                        >
                            <div className="flashcard-inner">
                                <div className="flashcard-front flex-column align-items-center">
                                    <h3 style={{ fontSize: 'clamp(1rem, 1.5vw, 5rem)' , marginBottom: '0' }}>{phrase.english}</h3>
                                    <p style={{ fontSize: 'clamp(1rem, 0.5vw, 5rem)' , marginBottom: '0'  }}>{phrase.tagalog}</p>
                                    <p style={{ fontSize: 'clamp(1rem, 0.5vw, 5rem)' , marginBottom: '1rem'  }}><strong>Pronunciation:</strong> {phrase.pronunciation}</p>
                                    <button 
                                        onClick={(e) => { 
                                            e.stopPropagation(); // Prevent flipping the card when clicking the button
                                            new Audio(phrase.sound).play();
                                        }} 
                                        className="btn btn-sm btn-dark"
                                    >
                                        🔊
                                    </button>
                                </div>
                                <div className="flashcard-back flex-column">
                                    <h1 style={{fontSize: 'clamp(1rem, 1vw, 5rem)'}}>{phrase.tagalog}</h1>
                                    <p className='text-start' style={{ fontSize: 'clamp(0.5rem, 1vw, 5rem)', marginBottom: '0'}}><strong>Example:</strong> {phrase.sentence}</p>
                                    <p className='text-start' style={{ fontSize: 'clamp(0.5rem, 1vw, 5rem)' }}><strong>Explanation:</strong> {phrase.explanation}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

            {/* Navigation buttons to move between groups */}
            <Row className="d-flex w-100 justify-content-between">
            <Col xs="auto">
                <Button
                onClick={prevSet}
                disabled={currentSet === 0}
                className="btn-lg rounded-pill"
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
                onClick={nextSet}
                disabled={currentSet + 1 >= pronounceSentenceGroups.length}
                className="btn-lg rounded-pill"
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

export default PronounceSentenceTagalog;