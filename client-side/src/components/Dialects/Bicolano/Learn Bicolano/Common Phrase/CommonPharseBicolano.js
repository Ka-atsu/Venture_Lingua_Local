import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../Bicolano.css';

function CommonPharseBicolano() {
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
        } else {
            newFlippedIndices.add(index); // Flip
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
            <div className="bikol-go-back-icon">
                <FaArrowLeft size={30} color="#fff" onClick={goBack} className="bikol-go-back-arrow" />
            </div>

            <h1 className="text-center text-white mb-4" style={{ fontWeight: 600, fontSize: '2.5rem' }}>
                Common Bicolano Phrases
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
                            className={`bikol-flashcard ${flippedIndices.has(index) ? 'flipped' : ''}`}
                            onClick={() => handleFlip(index)}
                        >
                            <div className="bikol-flashcard-inner">
                                <div className="bikol-flashcard-front flex-column">
                                    <h3 className="bikol-word">{phrase.english}</h3>
                                    <p><strong>Bicolano:</strong> {phrase.bicolano}</p>
                                </div>
                                <div className="bikol-flashcard-back flex-column">
                                    <h3 className="bikol-word">{phrase.bicolano}</h3>
                                    <p><strong>Example:</strong> {phrase.example}</p>
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