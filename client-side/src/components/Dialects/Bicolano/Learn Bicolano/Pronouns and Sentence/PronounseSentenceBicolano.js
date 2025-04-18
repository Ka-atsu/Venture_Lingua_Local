import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../../../zCSS/learn.css';
import CardSound from '../../../../Sounds/CardSound.mp3';

function PronounseSentenceBicolano( screenSize ) {
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

  // Grouped phrases with pronunciation, example sentences, and explanation (in Bicol)
  const pronounceSentenceGroups = [
    {
      group: 'Greetings',
      phrases: [
        {
          english: 'Hello',
          bicolano: 'Kumusta',
          pronunciation: 'Ku-mus-ta',
          sentence: 'Kumusta ka? (Hello! How are you?)',
          explanation:
            'This is a greeting you use when meeting someone or checking in to see how they are doing.'
        },
        {
          english: 'Good morning',
          bicolano: 'Marhay na aga',
          pronunciation: 'Mar-hay nah ah-ga',
          sentence: 'Marhay na aga! Kumusta ka, pati an pamilya mo? (Good morning! How are you and your family?)',
          explanation:
            'Use this in the morning to greet someone and inquire about their well-being.'
        },
        {
          english: 'Good evening',
          bicolano: 'Marhay na banggi',
          pronunciation: 'Mar-hay nah bang-ghee',
          sentence: 'Marhay na banggi, kumusta ka? Dai na ako nakadangog saimo nin matagal! (Good evening, how are you? It’s been a while since I last heard from you!)',
          explanation:
            'A greeting used in the evening to ask about how someone is doing.'
        }
      ]
    },
    {
      group: 'Introductions',
      phrases: [
        {
          english: 'What’s your name?',
          bicolano: 'Ano an ngaran mo?',
          pronunciation: 'Ah-no an ngah-ran mo?',
          sentence: 'Ano an ngaran mo? Ako si Maria, ika? (What’s your name? I’m Maria, and you?)',
          explanation:
            'Used when meeting someone for the first time to ask for their name.'
        },
        {
          english: 'My name is ...',
          bicolano: 'Ako si ... / An ngaran ko si ...',
          pronunciation: 'Ah-ko si ... / An ngah-ran ko si ...',
          sentence: 'Ako si Maria, taga Bicol ako. (My name is Maria, I’m from Bicol.)',
          explanation:
            'This is how you introduce yourself, providing your name and where you are from.'
        },
        {
          english: 'Where are you from?',
          bicolano: 'Taga sain ka?',
          pronunciation: 'Tah-ga sah-in ka?',
          sentence: 'Taga sain ka? Taga Tabaco City ako, ika? (Where are you from? I’m from Tabaco City, how about you?)',
          explanation:
            'Ask this question to find out where someone is from.'
        },
        {
          english: 'I’m from ...',
          bicolano: 'Taga ... ako',
          pronunciation: 'Tah-ga ... ah-ko',
          sentence: 'Taga Legazpi ako. Gusto kong mag-adal nin Bicol nin marhay. (I’m from Legazpi. I want to study Bicol well.)',
          explanation:
            'Use this to say where you come from.'
        },
        {
          english: 'Nice to meet you',
          bicolano: 'Marhay na makilala ka',
          pronunciation: 'Mar-hay nah mah-kee-lah-lah kah',
          sentence: 'Marhay na makilala ka. Sana magkaiba kita nin marhay! (Nice to meet you. I hope we become good friends!)',
          explanation:
            'A polite way to express happiness when meeting someone new.'
        }
      ]
    },
    {
      group: 'Goodbyes',
      phrases: [
        {
          english: 'Goodbye',
          bicolano: 'Adios',
          pronunciation: 'Ah-di-os',
          sentence: 'Adios, magkita pa kita sa sunod na semana. (Goodbye, see you next week!)',
          explanation:
            'A common way to say goodbye when you’ll see each other again soon.'
        },
        {
          english: 'See you later',
          bicolano: 'Makita kita pag-abot madali',
          pronunciation: 'Mah-kee-tah kee-tah pag-ah-bot mah-da-lee',
          sentence: 'Makita kita pag-abot madali pagkatapos kan trabaho. (See you later after work.)',
          explanation:
            'Use this when you plan to meet someone again later in the day.'
        },
        {
          english: 'Take care',
          bicolano: 'Mag-ingat ka',
          pronunciation: 'Mag-eeng-aht ka',
          sentence: 'Mag-ingat ka sa dalan, lalo na sa mga sasakyan. (Take care on the road, especially with vehicles.)',
          explanation:
            'Expresses concern for someone’s safety as they depart.'
        },
        {
          english: 'Good night',
          bicolano: 'Marhay na banggi',
          pronunciation: 'Mar-hay nah bang-ghee',
          sentence: 'Marhay na banggi, maturog ka nin mahimbing. (Good night, sleep well.)',
          explanation:
            'Used before someone goes to bed to wish them a good night.'
        },
        {
          english: 'See you tomorrow',
          bicolano: 'Makita kita buwas',
          pronunciation: 'Mah-kee-tah kee-tah boo-wahs',
          sentence: 'Makita kita buwas sa mga alas dyes nin aga. (See you tomorrow at around 10:00 AM.)',
          explanation:
            'Use this phrase to confirm meeting again the following day.'
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
    flipBackCards(); 
    setTimeout(() => {
      if (currentSet + 1 < pronounceSentenceGroups.length) {
        setCurrentSet(currentSet + 1);
      }
    }, 500);
  };

  // Navigate to the previous group with a delay after flipping back the cards
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
        <FaArrowLeft size={30} color="#fff" onClick={goBack} className="go-back-arrow" />
      </div>

      <div>
      <h1 className="text-center text-white" style={{ fontWeight: 600, fontSize: 'clamp(1.5rem, 3vw, 5rem)' }}>Bikol Pronunciation and Example Sentences</h1>
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
                <div className="flashcard-front flex-column">
                  <h3 style={{ fontSize: 'clamp(1rem, 1.5vw, 5rem)' , marginBottom: '0' }}>{phrase.english}</h3>
                  <p style={{ fontSize: 'clamp(1rem, 0.5vw, 5rem)' , marginBottom: '0'  }}><strong>Pronunciation:</strong> {phrase.pronunciation}</p>
                  <p style={{ fontSize: 'clamp(1rem, 0.5vw, 5rem)' , marginBottom: '1rem'  }}><strong>Bikol:</strong> {phrase.bicolano}</p>
                </div>
                <div className="flashcard-back flex-column">
                  <h1 style={{fontSize: 'clamp(1rem, 1vw, 5rem)'}}>{phrase.bicolano}</h1>
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

export default PronounseSentenceBicolano;