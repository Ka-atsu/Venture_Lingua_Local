import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../Tagalog.css';

function VerbsTensesTagalog() {
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

  // Grouping the verb conjugations similar to your phrases grouping.
  // Each group represents one verb (with its base form in the title)
  // and contains an array of tense cards (Past, Present, Future).
  const verbTenseGroups = [
    {
      group: 'To eat (kain)',
      tenses: [
        {
          tense: 'Past Tense',
          conjugated: 'kumain',
          example: 'Kumain siya ng mangga kahapon.',
          explanation: 'Indicates a completed action in the past.'
        },
        {
          tense: 'Present Tense',
          conjugated: 'kumakain',
          example: 'Kumakain siya ng almusal ngayon.',
          explanation: 'Describes an action that is currently in progress.'
        },
        {
          tense: 'Future Tense',
          conjugated: 'kakain',
          example: 'Kakain siya ng hapunan mamaya.',
          explanation: 'Indicates that the action will happen in the future.'
        }
      ]
    },
    {
      group: 'To go (punta)',
      tenses: [
        {
          tense: 'Past Tense',
          conjugated: 'pumunta',
          example: 'Pumunta sila sa simbahan noong nakaraang linggo.',
          explanation: 'Describes a movement that has been completed.'
        },
        {
          tense: 'Present Tense',
          conjugated: 'pumupunta',
          example: 'Pumupunta sila sa trabaho sa kasalukuyan.',
          explanation: 'Indicates an action that is happening at the moment.'
        },
        {
          tense: 'Future Tense',
          conjugated: 'pupunta',
          example: 'Pupunta sila sa paaralan bukas.',
          explanation: 'Indicates an upcoming movement or action.'
        }
      ]
    },
    {
      group: 'To read (basa)',
      tenses: [
        {
          tense: 'Past Tense',
          conjugated: 'nagbasa',
          example: 'Nagbasa siya ng libro kagabi.',
          explanation: 'Shows that the action of reading was completed in the past.'
        },
        {
          tense: 'Present Tense',
          conjugated: 'nagbabasa',
          example: 'Nagbabasa siya ng pahayagan tuwing umaga.',
          explanation: 'Describes an action that is currently taking place.'
        },
        {
          tense: 'Future Tense',
          conjugated: 'babasa',
          example: 'Babasa siya ng bagong nobela sa susunod na linggo.',
          explanation: 'Indicates that the action is planned for the future.'
        }
      ]
    }
    // Add more groups (verbs) as needed...
  ];

  const [currentSet, setCurrentSet] = useState(0);
  const [flippedIndices, setFlippedIndices] = useState({});

  const handleFlip = (tense) => {
    setFlippedIndices(prev => ({ ...prev, [tense]: !prev[tense] }));
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
      <div className="tagalog-go-back-icon">
        <FaArrowLeft
          size={30}
          color="#fff"
          onClick={goBack}
          className="tagalog-go-back-arrow"
        />
      </div>

      <h1 className="text-center text-white" style={{ fontWeight: 600, fontSize: '2.5rem' }}>Tagalog Verb Conjugation</h1>
      <p className="text-center mb-3 text-white" style={{ fontSize: '1.3rem' }}>Click the card to Flip</p>

      <h2 className="text-center mb-3 text-white"> {verbTenseGroups[currentSet].group}</h2>

      {/* Display tense cards for the current group */}
      <Row className="d-flex justify-content-center align-items-center" style={{ height: '65vh' }}>
        {verbTenseGroups[currentSet].tenses.map((item, index) => (
          <Col md={4} sm={6} key={item.tense}>
            <div
              className={`tagalog-flashcard ${flippedIndices[item.tense] ? 'flipped' : ''}`}
              onClick={() => handleFlip(item.tense)}
            >
              <div className="tagalog-flashcard-inner">
                <div className="tagalog-flashcard-front flex-column">
                  <h3 className="tagalog-word">{item.tense}</h3>
                  <p>
                    <strong>Base Form:</strong> {verbTenseGroups[currentSet].group.split('(')[1].replace(')', '')}
                  </p>
                </div>
                <div className="tagalog-flashcard-back flex-column">
                  <h3 className="tagalog-word">{item.conjugated}</h3>
                  <p className="text-start"><strong>Example:</strong> {item.example}</p>
                  <p className="text-start"><strong>Explanation:</strong> {item.explanation}</p>
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

export default VerbsTensesTagalog;