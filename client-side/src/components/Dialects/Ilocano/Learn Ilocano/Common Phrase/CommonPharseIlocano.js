import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../../../zCSS/learn.css';
import CardSound from '../../../../Sounds/CardSound.mp3';

function CommonPharseIlocano( screenSize ) {
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
                { english: 'Good morning', ilocano: 'Naimbag a bigat', example: 'Naimbag a bigat, kasano ka? (Good evening, how are you?)' },
                { english: 'Good afternoon', ilocano: '	Naimbag a malem', example: 'Naimbag a malem, kasano ka? (Good evening, how are you?)' },
                { english: 'Good evening', ilocano: 'Naimbag a rabii', example: 'Naimbag a rabii, kasano ka? (Good evening, how are you?)' }
            ]
        },
        {
            group: 'Asking',
            phrases: [
                { english: 'Are you going?', ilocano: 'Mapanka kadi?', example: 'Mapanka kadi iti eskuela? (Are you going to school?)' },
                { english: 'Are you hungry?', ilocano: 'Mabisinka kadi?', example: "Mabisinka kadi ngem awan ti makan? (Are you hungry but there's no food?)" },
                { english: 'Are you mad?', ilocano: 'Nauyongka kadi?', example: 'Nauyongka kadi ta naipagan-anayka? (Are you mad because you were ignored?)' },
                { english: 'Are you serious?', ilocano: 'Seriosoka kadi?', example: 'Seriosoka kadi nga agtrabaho iti dayta? (Are you serious about working on that?)' },
                { english: 'Are you sleeping?', ilocano: 'Matmaturogka kadi?', example: 'Matmaturogka kadi ita? (Are you sleeping right now?)' }
            ]
        },
        {
            group: 'Asking for Permission',
            phrases: [
                { english: 'May I come in?', ilocano: 'Mabalin kadi a sumrekak?', example: 'Mabalin kadi a sumrekak iti balayyo? (May I come in your house?)' },
                { english: 'May I help you?', ilocano: 'Mabalin kadi a tulonganka?', example: 'Mabalin kadi a tulonganka iti trabaho? (May I help you with the work?)' },
                { english: 'May I join you?', ilocano: 'Mabalin kadi a makikaduaak kenka?', example: 'Mabalin kadi a makikaduaak iti kape? (May I join you for coffee?)' },
                { english: 'May I speak?', ilocano: 'Mabalin kadi nga agsaoak?', example: 'Mabalin kadi nga agsaoak ita? (May I speak right now?)' },
                { english: 'May I eat this?', ilocano: 'Mabalin kadi a kanek daytoy?', example: 'Mabalin kadi a kanek daytoy nga adobo? (May I eat this adobo?)' }
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
        <Container fluid className="bg-dark p-5" style={{ display:'flex' , flexDirection:'column' ,justifyContent: 'space-between', minHeight: screenSize ? '100vh' : 'auto' }}>
            <div className="go-back-icon">
                <FaArrowLeft size={30} color="#fff" onClick={goBack} className="go-back-arrow" />
            </div>

            <div>
            <h1 className="text-center text-white mb-4" style={{ fontWeight: 600, fontSize: 'clamp(1.5rem, 3vw, 5rem)' }}>
                Common Ilocano Phrases
            </h1>
            <p className="text-center mb-3 text-white" style={{ fontSize: 'clamp(1.5rem, 1vw, 5rem)' }}>
                Click the card to Flip
            </p>

            <h2 className="text-center text-white mb-5" style={{ fontSize: 'clamp(1.5rem, 1vw, 5rem)' }}>{phraseGroups[currentSet].group}</h2>
            </div>

            {/* Display phrases for the current group */}
            <Row className="d-flex justify-content-center align-items-center">
                {phraseGroups[currentSet].phrases.map((phrase, index) => (
                    <Col className='mb-4' xs={4} key={index}>
                        <div
                            className={`flashcard ${flippedIndices.has(index) ? 'flipped' : ''}`}
                            onClick={() => handleFlip(index)}
                        >
                            <div className="flashcard-inner">
                                <div className="flashcard-front flex-column">
                                    <h3 style={{ fontSize: 'clamp(1rem, 1.5vw, 5rem)' }}>{phrase.english}</h3>
                                    <p style={{ fontSize: 'clamp(1rem, 1vw, 5rem)' }}><strong>Ilocano:</strong> {phrase.ilocano}</p>
                                </div>
                                <div className="flashcard-back flex-column">
                                    <h3 style={{ fontSize: 'clamp(0.9rem, 1.5vw, 5rem)' }}>{phrase.ilocano}</h3>
                                    <p style={{ fontSize: 'clamp(0.9rem, 1vw, 5rem)' }}><strong>Example:</strong> {phrase.example}</p>
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

export default CommonPharseIlocano;