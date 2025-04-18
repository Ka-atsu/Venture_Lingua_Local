import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../../../zCSS/learn.css';
import CardSound from '../../../../Sounds/CardSound.mp3';

function PronounseSentenceIlocano( screenSize ) {
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
            group: 'Adjectives',
            phrases: [
                {
                    english: 'Small',
                    ilocano: 'Bassit',
                    pronunciation: 'Bas-sit',
                    sentence: 'Bassit laeng ti balayda. (Their house is small.)',
                    explanation: 'This word is used to describe something that is small in size or quantity.',
                },
                {
                    english: 'Big',
                    ilocano: 'Dakkel',
                    pronunciation: 'Dak-kel',
                    sentence: 'Dakkel ti trabaho nga aramidenko. (I have a big task to do.)',
                    explanation: 'This word is used to describe something that is large or significant in size or importance.',
                },
                {
                    english: 'Hot',
                    ilocano: 'Napudot',
                    pronunciation: 'Na-pu-dot',
                    sentence: 'Napudot ti init iti rabii. (The heat is intense in the afternoon.)',
                    explanation: 'This word is used to describe something that is hot in temperature or heat.',
                },
                {
                    english: 'Cold',
                    ilocano: 'Nalam-ek',
                    pronunciation: 'Na-lam-ek',
                    sentence: 'Nalam-ek ti panahon ita. (The weather is cold today.)',
                    explanation: 'This word is used to describe something that is cold in temperature or atmosphere.',
                }
            ]
        },        
    
        {
            group: 'Descriptive Adjectives',
            phrases: [
                {
                    english: 'Delicious',
                    ilocano: 'Naimas',
                    pronunciation: 'Nai-mas',
                    sentence: 'Naimas ti makan! (The food is delicious!)',
                    explanation: 'This word is used to describe something that tastes very good or is enjoyable to eat.',
                },
                {
                    english: 'Clean',
                    ilocano: 'Nadalos',
                    pronunciation: 'Na-da-los',
                    sentence: 'Nadalos ti kuarto ko. (My room is clean.)',
                    explanation: 'This word is used to describe something that is free of dirt or impurities, and is neat and organized.',
                },
                {
                    english: 'Dirty',
                    ilocano: 'Narugit',
                    pronunciation: 'Na-ru-git',
                    sentence: 'Narugit ti sapatos ko. (My shoes are dirty.)',
                    explanation: 'This word is used to describe something that is covered with dirt or has not been cleaned.',
                },
                {
                    english: 'Beautiful',
                    ilocano: 'Naimbag',
                    pronunciation: 'Naim-bag',
                    sentence: 'Naimbag ti lugar ditoy. (The place is beautiful here.)',
                    explanation: 'This word is used to describe something that is visually appealing or aesthetically pleasing.',
                }
            ]
        },        
    
        {
            group: 'Common Nouns',
            phrases: [
                {
                    english: 'House',
                    ilocano: 'Balay',
                    pronunciation: 'Ba-lay',
                    sentence: 'Balay ko ket adda iti bungbung. (My house is on the hill.)',
                    explanation: 'This word refers to a building or structure where people live, usually a family home.',
                },
                {
                    english: 'Seat',
                    ilocano: 'Tugaw',
                    pronunciation: 'Tu-gaw',
                    sentence: 'Adda tugaw iti lamesa. (There is a seat at the table.)',
                    explanation: 'This word refers to a place where one can sit, like a chair or a bench.',
                },
                {
                    english: 'Room',
                    ilocano: 'Kwarto',
                    pronunciation: 'Kwar-toh',
                    sentence: 'Adda kwarto nga awan ti gamit. (There is a room with no furniture.)',
                    explanation: 'This word refers to a separate space within a house or building, typically used for a specific purpose.',
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
        <Container fluid className="bg-dark p-5" style={{ display:'flex' , flexDirection:'column' ,justifyContent: 'space-between', minHeight: screenSize ? '100vh' : 'auto' }}>
            <div className="go-back-icon">
                <FaArrowLeft size={30} color="#fff" onClick={goBack} className="go-back-arrow" />
            </div>

            <div>
            <h1 className="text-center text-white" style={{ fontWeight: 600, fontSize: 'clamp(1.5rem, 3vw, 5rem)' }}>Ilocano Pronunciation and Example Sentences</h1>
            <p className="text-center mb-3 text-white" style={{ fontSize: 'clamp(1.5rem, 1vw, 5rem)' }}>Click the card to Flip</p>

            <h2 className="text-center text-white mb-5" style={{ fontSize: 'clamp(1.5rem, 1vw, 5rem)' }}>{pronounceSentenceGroups[currentSet].group}</h2>
            </div>

            {/* Display phrases for the current group */}
            <Row className="d-flex justify-content-center align-items-center">
                {pronounceSentenceGroups[currentSet].phrases.map((phrase, index) => (
                    <Col className='mb-4' xs={4} key={index}>
                        <div
                            className={`flashcard ${flippedIndices.has(index) ? 'flipped' : ''}`}
                            onClick={() => handleFlip(index)}
                        >
                            <div className="flashcard-inner">
                                <div className="flashcard-front flex-column">
                                    <h3 style={{ fontSize: 'clamp(1rem, 1.5vw, 5rem)' , marginBottom: '0' }}>{phrase.english}</h3>
                                    <p style={{ fontSize: 'clamp(1rem, 0.5vw, 5rem)' , marginBottom: '0'  }}><strong>Pronunciation:</strong> {phrase.pronunciation}</p>
                                    <p style={{ fontSize: 'clamp(1rem, 0.5vw, 5rem)' , marginBottom: '1rem'  }}><strong>Ilocano:</strong> {phrase.ilocano}</p>
                                </div>
                                <div className="flashcard-back flex-column">
                                    <h1 style={{fontSize: 'clamp(1rem, 1vw, 5rem)'}}>{phrase.ilocano}</h1>
                                    <p className='text-start' style={{ fontSize: 'clamp(0.5rem, 1vw, 5rem)', marginBottom: '0'}}><strong>Example:</strong> {phrase.sentence}</p>
                                    <p className='text-start' style={{ fontSize: 'clamp(0.5rem, 1vw, 5rem)' }}><strong>Explanation:</strong> {phrase.explanation}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>

            {/* Navigation buttons to move between groups */}
                  <Row className="d-flex w-100 justify-content-between mt-5">
                    <Col xs="auto">
                      <Button
                        onClick={prevSet}
                        disabled={currentSet === 0}
                        className="btn-lg rounded-pill"
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
                        Previous Word
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
                          padding: '12px 25px',
                          backgroundColor: '#5adbb5',
                          borderColor: '#5adbb5',
                          color: '#000',
                          fontSize: '1.1rem',
                        }}
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

export default PronounseSentenceIlocano;