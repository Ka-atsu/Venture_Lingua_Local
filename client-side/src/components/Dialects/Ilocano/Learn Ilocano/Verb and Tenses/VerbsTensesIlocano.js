import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../../../zCSS/learn.css';
import CardSound from '../../../../Sounds/CardSound.mp3';

function VerbsTensesIlocano( screenSize ) {
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
      group: 'To eat (kanen)',
      tenses: [
        {
          tense: 'Past Tense',
          conjugated: 'nakannak',
          example: 'Nakannak ni siya ti mangga idi kalman. (He/she ate mango yesterday.)'
        },
        {
          tense: 'Present Tense',
          conjugated: 'agnanannak',
          example: 'Agnanannak ni siya ti almusal ita. (He/she is eating breakfast now.)'
        },
        {
          tense: 'Future Tense',
          conjugated: 'mangan',
          example: 'Mangan ni siya ti hapunan inton rabii. (He/she will eat dinner tonight.)'
        }
      ]
    },
    {
      group: 'To go (mapan)',
      tenses: [
        {
          tense: 'Past Tense',
          conjugated: 'napan',
          example: 'Napan da iti simbahan idi naglabas a lawas. (They went to the church last week.)'
        },
        {
          tense: 'Present Tense',
          conjugated: 'agpapan',
          example: 'Agpapan da iti trabaho ita. (They are going to work now.)'
        },
        {
          tense: 'Future Tense',
          conjugated: 'mapan',
          example: 'Mapan da iti eskuela inton bigat. (They will go to school tomorrow.)'
        }
      ]
    },
    {
      group: 'To read (basa)',
      tenses: [
        {
          tense: 'Past Tense',
          conjugated: 'nabasak',
          example: 'Nabasak ti libro idi kalman. (He/she read a book last night.)'
        },
        {
          tense: 'Present Tense',
          conjugated: 'nagbabasaak',
          example: 'Nagbabasaak ti libro ita. (I am reading a book now.)'
        },
        {
          tense: 'Future Tense',
          conjugated: 'babasakak',
          example: 'Babasakak ti baro nga nobela inton bigat. (I will read a new novel tomorrow.)'
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
    <Container fluid className="bg-dark p-5" style={{ display:'flex' , flexDirection:'column' ,justifyContent: 'space-between', minHeight: screenSize ? '100vh' : 'auto' }}>
      <div className="go-back-icon">
        <FaArrowLeft
          size={30}
          color="#fff"
          onClick={goBack}
          className="go-back-arrow"
        />
      </div>

      <div>
      <h1 className="text-center text-white" style={{ fontWeight: 600, fontSize: 'clamp(1.5rem, 3vw, 5rem)' }}>Ilocano Verb Conjugation</h1>
      <p className="text-center mb-3 text-white" style={{ fontSize: 'clamp(1.5rem, 1vw, 5rem)' }}>Click the card to Flip</p>

      <h2 className="text-center mb-3 text-white" style={{ fontSize: 'clamp(1.5rem, 1vw, 5rem)' }}> {verbTenseGroups[currentSet].group}</h2>
      </div>

      {/* Display tense cards for the current group */}
      <Row className="d-flex justify-content-center align-items-center" >
        {verbTenseGroups[currentSet].tenses.map((item, index) => (
          <Col className='mb-4' xs={7} sm={4} key={item.tense}>
            <div
              className={`flashcard ${flippedIndices[item.tense] ? 'flipped' : ''}`}
              onClick={() => handleFlip(item.tense)}
            >
              <div className="flashcard-inner">
                <div className="flashcard-front flex-column">
                  <h3 style={{ fontSize: 'clamp(1rem, 1.5vw, 5rem)' }}>{item.tense}</h3>
                  <p style={{ fontSize: 'clamp(1rem, 0.5vw, 5rem)' }}>
                    <strong>Base Form:</strong> {verbTenseGroups[currentSet].group.split('(')[1].replace(')', '')}
                  </p>
                </div>
                <div className="flashcard-back flex-column">
                  <h3 style={{ fontSize: 'clamp(1rem, 1.5vw, 5rem)' }}>{item.conjugated}</h3>
                  <p style={{ fontSize: 'clamp(1rem, 0.5vw, 5rem)' }} className="text-start"><strong>Example:</strong> {item.example}</p>
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
            disabled={currentSet + 1 >= verbTenseGroups.length}
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

export default VerbsTensesIlocano;