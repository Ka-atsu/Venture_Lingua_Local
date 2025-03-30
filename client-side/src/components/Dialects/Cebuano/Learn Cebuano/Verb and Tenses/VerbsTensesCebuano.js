import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../../../zCSS/learn.css';
import CardSound from '../../../../Sounds/CardSound.mp3';

function VerbsTensesCebuano() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  // Hover effect handlers with a smoother transition
  const handleMouseOver = (e) => {
    e.currentTarget.style.transition = 'transform 0.5s ease';
    e.currentTarget.style.transform = 'translateY(-5px)';
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.transition = 'transform 0.5s ease';
    e.currentTarget.style.transform = 'translateY(0)';
  };

  const verbTenseGroups = [
    {
      group: 'To eat (kaon)',
      tenses: [
        {
          tense: 'Past Tense',
          conjugated: 'nakaon',
          example: 'Nakaon siya og mangga gahapon. (He/she ate mango yesterday.)'
        },
        {
          tense: 'Present Tense',
          conjugated: 'nagakaon',
          example: 'Nagakaon siya og pamahaw karon. (He/she is eating breakfast now.)'
        },
        {
          tense: 'Future Tense',
          conjugated: 'mokaon',
          example: 'Mokaon siya og panihapon unya. (He/she will eat dinner later.)'
        }
      ]
    },
    {
      group: 'To go (adto)',
      tenses: [
        {
          tense: 'Past Tense',
          conjugated: 'nakaadto',
          example: 'Nakaadto sila sa simbahan niadtong miaging semana. (They went to the church last week.)'
        },
        {
          tense: 'Present Tense',
          conjugated: 'nag-adto',
          example: 'Nag-adto sila sa trabaho karon. (They are going to work now.)'
        },
        {
          tense: 'Future Tense',
          conjugated: 'moadto',
          example: 'Moadto sila sa eskwelahan ugma. (They will go to school tomorrow.)'
        }
      ]
    },
    {
      group: 'To read (basa)',
      tenses: [
        {
          tense: 'Past Tense',
          conjugated: 'nagbasa',
          example: 'Nagbasa siya og libro kagabi-i. (He/she read a book last night.)'
        },
        {
          tense: 'Present Tense',
          conjugated: 'nagabasa',
          example: 'Nagabasa siya og pahayagan kada buntag. (He/she reads the newspaper every morning.)'
        },
        {
          tense: 'Future Tense',
          conjugated: 'mabasa',
          example: 'Mabasa siya og bagong nobela sa sunod nga semana. (He/she will read a new novel next week.)'
        }
      ]
    }
    // Add more groups (verbs) as needed...
  ];

  const [currentSet, setCurrentSet] = useState(0);
  const [flippedIndices, setFlippedIndices] = useState({});

  const handleFlip = (tense) => {
    setFlippedIndices(prev => ({ ...prev, [tense]: !prev[tense] }));
    new Audio(CardSound).play();
  };

  // Flip all cards back when switching groups
  const flipBackCards = () => {
    setFlippedIndices({});
  };

  const nextSet = () => {
    flipBackCards();
    setTimeout(() => {
      if (currentSet + 1 < verbTenseGroups.length) {
        setCurrentSet(currentSet + 1);
      }
    }, 500);
  };

  const prevSet = () => {
    flipBackCards();
    setTimeout(() => {
      if (currentSet - 1 >= 0) {
        setCurrentSet(currentSet - 1);
      }
    }, 500);
  };

  return (
    <Container fluid className="bg-dark p-5 vh-100">
      <div className="go-back-icon">
        <FaArrowLeft
          size={30}
          color="#fff"
          onClick={goBack}
          className="go-back-arrow"
        />
      </div>

      <h1 className="text-center text-white" style={{ fontWeight: 600, fontSize: '2.5rem' }}>Cebuano Verb Conjugation</h1>
      <p className="text-center mb-3 text-white" style={{ fontSize: '1.3rem' }}>Click the card to Flip</p>

      <h2 className="text-center mb-3 text-white"> {verbTenseGroups[currentSet].group}</h2>

      {/* Display tense cards for the current group */}
      <Row className="d-flex justify-content-center align-items-center" style={{ height: '65vh' }}>
        {verbTenseGroups[currentSet].tenses.map((item, index) => (
          <Col md={4} sm={6} key={item.tense}>
            <div
              className={`flashcard ${flippedIndices[item.tense] ? 'flipped' : ''}`}
              onClick={() => handleFlip(item.tense)}
            >
              <div className="flashcard-inner">
                <div className="flashcard-front flex-column">
                  <h3 className="word">{item.tense}</h3>
                  <p>
                    <strong>Base Form:</strong> {verbTenseGroups[currentSet].group.split('(')[1].replace(')', '')}
                  </p>
                </div>
                <div className="flashcard-back flex-column">
                  <h3 className="word">{item.conjugated}</h3>
                  <p className="text-start"><strong>Example:</strong> {item.example}</p>
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
            disabled={currentSet + 1 >= verbTenseGroups.length}
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

export default VerbsTensesCebuano;