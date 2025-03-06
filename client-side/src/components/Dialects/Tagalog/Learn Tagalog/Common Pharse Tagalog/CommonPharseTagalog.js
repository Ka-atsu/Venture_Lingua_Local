import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; // Use useNavigate for navigation
import { FaArrowLeft } from 'react-icons/fa'; // Import the Font Awesome icon
import '../Basic Words Tagalog/BasicWordsTagalog.css'; // Import the CSS file for animation

function CommonPharseTagalog() {
    const navigate = useNavigate(); 

    const goBack = () => {
        navigate(-1); // Go back to the previous page
    };

    const phrases = [
        { 
            tagalog: 'Kamusta ka?', 
            english: 'How are you?', 
            example: 'Kamusta ka? Magandang araw!' 
        },
        { 
            tagalog: 'Puwede ba?', 
            english: 'Can I?', 
            example: 'Puwede ba akong magtanong? (Can I ask a question?)' 
        },
        { 
            tagalog: 'Salamat po', 
            english: 'Thank you (polite)', 
            example: 'Salamat po sa inyong tulong. (Thank you for your help.)' 
        },
        { 
            tagalog: 'Saan ang banyo?', 
            english: 'Where is the bathroom?', 
            example: 'Saan ang banyo? Kailangan kong magbanyo. (Where is the bathroom? I need to go.)' 
        },
        { 
            tagalog: 'Pasensya na', 
            english: 'Sorry', 
            example: 'Pasensya na, hindi ko sinasadya. (Sorry, I didn’t mean to.)' 
        },
        { 
            tagalog: 'Magandang umaga', 
            english: 'Good morning', 
            example: 'Magandang umaga! Kamusta ka?' 
        },
        { 
            tagalog: 'Magandang gabi', 
            english: 'Good evening', 
            example: 'Magandang gabi, paano ka?' 
        },
        { 
            tagalog: 'Anong pangalan mo?', 
            english: 'What is your name?', 
            example: 'Anong pangalan mo? (What is your name?)' 
        },
        { 
            tagalog: 'Ang pangalan ko ay [name]', 
            english: 'My name is [name]', 
            example: 'Ang pangalan ko ay Maria. (My name is Maria.)' 
        },
        { 
            tagalog: 'Sige, salamat!', 
            english: 'Alright, thank you!', 
            example: 'Sige, salamat sa iyong tulong! (Alright, thank you for your help!)' 
        },
    ];

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
        <Container fluid className="bg-dark p-5">
            <div className="tagalog-go-back-icon">
                {/* Clickable Arrow Icon */}
                <FaArrowLeft size={30} color="#fff" onClick={goBack} className="tagalog-go-back-arrow" />
            </div>

            <h1 className="text-center text-white mb-5">Common Tagalog Phrases</h1>

            <Row>
                {phrases.map((phrase, index) => (
                    <Col md={4} sm={6} key={index} className="mb-4">
                        <div
                            className={`tagalog-flashcard ${flippedIndices.has(index) ? 'flipped' : ''}`}
                            onClick={() => handleFlip(index)} // Flip the card on click
                        >
                            <div className="tagalog-flashcard-inner">
                                <div className="tagalog-flashcard-front flex-column">
                                    <h2 className="tagalog-word">{phrase.english}</h2>
                                    <p><strong>In Tagalog:</strong> {phrase.tagalog}</p>
                                </div>
                                <div className="tagalog-flashcard-back flex-column">
                                    <h2 className="tagalog-word">{phrase.tagalog}</h2>
                                    <p><strong>Example:</strong> {phrase.example}</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default CommonPharseTagalog;