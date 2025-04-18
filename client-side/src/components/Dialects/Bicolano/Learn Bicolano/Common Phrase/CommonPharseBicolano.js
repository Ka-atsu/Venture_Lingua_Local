import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../../../zCSS/learn.css';
import CardSound from '../../../../Sounds/CardSound.mp3';

function CommonPharseBicolano( screenSize ) {
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
            { english: 'Hello (General greeting)', bicolano: 'Kumusta?', example: 'Kumusta, mga tugang? (Hello, everyone?)' },
            { english: 'How are you?', bicolano: 'Kumusta ka?', example: 'Kumusta ka ngunyan? (How are you now?)' },
            { english: 'Good morning', bicolano: 'Marhay na aga', example: 'Marhay na aga saimo! (Good morning to you!)' },
            { english: 'Good evening', bicolano: 'Marhay na banggi', example: 'Marhay na banggi saindo! (Good evening to all of you!)' }
          ]
        },
        {
          group: 'Initial Encounters',
          phrases: [
            { english: 'What’s your name?', bicolano: 'Ano an ngaran mo?', example: 'Ano an ngaran mo? (What’s your name?)' },
            { english: 'My name is ...', bicolano: 'Ako si ... / An ngaran ko si ...', example: 'Ako si Maria. (My name is Maria.)' },
            { english: 'Where are you from?', bicolano: 'Taga sain ka?', example: 'Taga sain ka? (Where are you from?)' },
            { english: 'I’m from ...', bicolano: 'Taga ... ako', example: 'Taga Manila ako. (I’m from Manila.)' },
            { english: 'Nice to meet you', bicolano: 'Marhay na makilala ka', example: 'Marhay na makilala ka. (Nice to meet you.)' }
          ]
        },
        {
          group: 'Goodbyes',
          phrases: [
            { english: 'Goodbye', bicolano: 'Adios', example: 'Adios, magkita pa kita! (Goodbye, we’ll see each other again!)' },
            { english: 'See you later', bicolano: 'Makita kita pag abot madali', example: 'Makita kita pag abot madali! (See you later!)' },
            { english: 'Take care', bicolano: 'Mag-ingat ka', example: 'Mag-ingat ka palan, ha? (Take care, okay?)' },
            { english: 'Good night', bicolano: 'Marhay na banggi', example: 'Marhay na banggi, katurog na kita! (Good night, let’s sleep now!)' },
            { english: 'See you tomorrow', bicolano: 'Makita kita buwas', example: 'Makita kita buwas! (See you tomorrow!)' }
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
                Common Bicolano Phrases
            </h1>
            <p className="text-center mb-3 text-white" style={{ fontSize: 'clamp(1.5rem, 1vw, 5rem)' }}>
                Click the card to Flip
            </p>

            <h2 className="text-center text-white mb-5" style={{ fontSize: 'clamp(1.5rem, 1vw, 5rem)' }}>{phraseGroups[currentSet].group}</h2>
            </div>

            {/* Display phrases for the current group */}
            <Row className="d-flex justify-content-center align-items-center" style={{ height: '60vh' }}>
                {phraseGroups[currentSet].phrases.map((phrase, index) => (
                    <Col className='mb-4' xs={4} key={index}>
                        <div
                            className={`flashcard ${flippedIndices.has(index) ? 'flipped' : ''}`}
                            onClick={() => handleFlip(index)}
                        >
                            <div className="flashcard-inner">
                                <div className="flashcard-front flex-column">
                                    <h3 style={{ fontSize: 'clamp(1rem, 1.5vw, 5rem)' }}>{phrase.english}</h3>
                                    <p style={{ fontSize: 'clamp(1rem, 1vw, 5rem)' }}><strong>Bicolano:</strong> {phrase.bicolano}</p>
                                </div>
                                <div className="flashcard-back flex-column">
                                    <h3 style={{ fontSize: 'clamp(1rem, 1.5vw, 5rem)' }}>{phrase.bicolano}</h3>
                                    <p style={{ fontSize: 'clamp(1rem, 1vw, 5rem)' }}><strong>Example:</strong> {phrase.example}</p>
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

export default CommonPharseBicolano;