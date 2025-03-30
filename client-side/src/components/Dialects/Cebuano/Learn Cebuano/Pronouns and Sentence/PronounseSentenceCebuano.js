import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../../../zCSS/learn.css';
import CardSound from '../../../../Sounds/CardSound.mp3';

function PronounseSentenceCebuano() {
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

    const pronounceSentenceGroups = [
        {
            group: 'Greetings',
            phrases: [
                {
                    english: 'Hello', cebuano: 'Kamusta', pronunciation: 'Ka-mus-ta', sentence: 'Kamusta ka? (Hello! How are you?)',
                    explanation: 'This is a greeting you use when meeting someone or when checking in with someone to see how they are doing.'
                },
                {
                    english: 'Good morning', cebuano: 'Maayong buntag', pronunciation: 'Ma-ay-ong bun-tag', sentence: 'Maayong buntag! Kamusta ka at ang imong pamilya? (Good morning! How are you and your family?)',
                    explanation: 'This is used to greet someone in the morning and inquire about their well-being.'
                },
                {
                    english: 'Good evening', cebuano: 'Maayong gabii', pronunciation: 'Ma-ay-ong ga-bee', sentence: 'Maayong gabii, kumusta ka? (Good evening, how are you?)',
                    explanation: 'This is a greeting used in the evening to ask how someone is doing after the day has passed.'
                }
            ]
        },
    
        {
            group: 'Introductions',
            phrases: [
                {
                    english: 'What’s your name?', cebuano: 'Unsa imong ngalan?', pronunciation: 'Un-sa im-ong nga-lan?', sentence: 'Unsa imong ngalan? (What’s your name?)',
                    explanation: 'This phrase is used when meeting someone for the first time and asking for their name.'
                },
                {
                    english: 'My name is ...', cebuano: 'Ang akong ngalan kay ...', pronunciation: 'Ang a-kong nga-lan kay ...', sentence: 'Ang akong ngalan kay Maria. (My name is Maria.)',
                    explanation: 'This is how you introduce yourself and tell others your name and where you\'re from.'
                },
                {
                    english: 'Where are you from?', cebuano: 'Asa ka gikan?', pronunciation: 'A-sa ka gi-kan?', sentence: 'Asa ka gikan? (Where are you from?)',
                    explanation: 'This question is used when you want to know where someone is from.'
                },
                {
                    english: 'I’m from ...', cebuano: 'Gikan ko sa ...', pronunciation: 'Gi-kan ko sa ...', sentence: 'Gikan ko sa Manila. (I’m from Manila.)',
                    explanation: 'This is used when you are telling someone where you are from.'
                },
                {
                    english: 'Nice to meet you', cebuano: 'Malipayong pagkakita nimo', pronunciation: 'Ma-li-pa-yong pag-ki-ka-ta ni-mo', sentence: 'Malipayong pagkakita nimo. (Nice to meet you.)',
                    explanation: 'This is a polite way of expressing happiness when meeting someone for the first time.'
                }
            ]
        },
    
        {
            group: 'Goodbyes',
            phrases: [
                {
                    english: 'Goodbye', cebuano: 'Paalam', pronunciation: 'Pah-ah-lahm', sentence: 'Paalam, magkita ta puhon! (Goodbye, see you again soon!)',
                    explanation: 'This is the standard way to say goodbye when you expect to see someone again soon.'
                },
                {
                    english: 'See you later', cebuano: 'Magkita ta unya', pronunciation: 'Mag-kee-ta ta un-ya', sentence: 'Magkita ta unya! (See you later!)',
                    explanation: 'This is used when you are planning to meet someone later in the day after a specific activity.'
                },
                {
                    english: 'Take care', cebuano: 'Amping', pronunciation: 'Am-ping', sentence: 'Amping, ha? (Take care, okay?)',
                    explanation: 'This is used when you want to show concern for someone\'s safety as they leave.'
                },
                {
                    english: 'Good night', cebuano: 'Maayong gabii', pronunciation: 'Ma-ay-ong ga-bee', sentence: 'Maayong gabii, magtulog na ta! (Good night, let’s go to sleep!)',
                    explanation: 'This is used when saying goodbye before someone goes to bed.'
                },
                {
                    english: 'See you tomorrow', cebuano: 'Magkita ta ugma', pronunciation: 'Mag-kee-ta ta ug-ma', sentence: 'Magkita ta ugma! (See you tomorrow!)',
                    explanation: 'This phrase is used when confirming plans to meet someone the following day.'
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

    return (
        <Container fluid className="bg-dark p-5 vh-100">
            <div className="go-back-icon">
                <FaArrowLeft size={30} color="#fff" onClick={goBack} className="go-back-arrow" />
            </div>

            <h1 className="text-center text-white" style={{ fontWeight: 600, fontSize: '2.5rem' }}>Cebuano Pronunciation and Example Sentences</h1>
            <p className="text-center mb-3 text-white" style={{ fontSize: '1.3rem' }}>Click the card to Flip</p>

            <h2 className="text-center text-white mb-5 ">{pronounceSentenceGroups[currentSet].group}</h2>

            {/* Display phrases for the current group */}
            <Row className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
                {pronounceSentenceGroups[currentSet].phrases.map((phrase, index) => (
                    <Col md={4} sm={6} key={index}>
                        <div
                            className={`flashcard ${flippedIndices.has(index) ? 'flipped' : ''}`}
                            onClick={() => handleFlip(index)}
                        >
                            <div className="flashcard-inner">
                                <div className="flashcard-front flex-column">
                                    <h3 className="word">{phrase.english}</h3>
                                    <p><strong>Pronunciation:</strong> {phrase.pronunciation}</p>
                                    <p><strong>Cebuano:</strong> {phrase.cebuano}</p>
                                </div>
                                <div className="flashcard-back flex-column">
                                    <h1 className="word">{phrase.cebuano}</h1>
                                    <p className='text-start'><strong>Example:</strong> {phrase.sentence}</p>
                                    <p className='text-start'><strong>Explanation:</strong> {phrase.explanation}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

            {/* Navigation buttons to move between groups */}
            <Row className="d-flex w-100 justify-content-between mt-5">
            <Col xs="auto">
                <Button onClick={prevSet} disabled={currentSet === 0} className="btn-lg rounded-pill"
                style={{ transition: 'transform 0.3s', transform: 'translateY(0)', padding: '12px 25px', backgroundColor: '#5783db', borderColor: '#5783db', color: '#fff', fontSize: '1.1rem', }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                >
                Previous Word
                </Button>
            </Col>
            <Col xs="auto">
                <Button onClick={nextSet} disabled={currentSet + 1 >= pronounceSentenceGroups.length} className="btn-lg rounded-pill"
                style={{ transition: 'transform 0.3s', transform: 'translateY(0)', padding: '12px 25px', backgroundColor: '#5adbb5', borderColor: '#5adbb5', color: '#000', fontSize: '1.1rem', }}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
                >
                Next Word
                </Button>
            </Col>
            </Row>
        </Container>
    );
}

export default PronounseSentenceCebuano;