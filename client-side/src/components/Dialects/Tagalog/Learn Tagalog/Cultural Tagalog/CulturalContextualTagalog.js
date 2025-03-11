import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../Basic Words/Tagalog.css';
import BayanihanImage from '../2 Images/Bayanihan.jpg';
import OpoImage from '../2 Images/PoatOPO.jpg';

function CulturalContextualTagalog() {

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

  // Sample cultural expressions with images and general information
  const culturalExpressions = [
    {
      english: "The concept of 'Bayanihan' (Community spirit)",
      tagalog: "Bayanihan",
      example: "Sa Bayanihan, nagtutulungan ang mga tao para sa kapakanan ng iba. (In Bayanihan, people help each other for the welfare of others.)",
      explanation: "Bayanihan refers to the Filipino culture of helping one another, especially in times of need. It embodies the concept of community cooperation and solidarity.",
      usageTips: "Use 'Bayanihan' to describe any form of community spirit or cooperation, whether it's in a rural or urban setting.",
      commonMistakes: "A common mistake is using 'Bayanihan' as just a physical activity. It also represents a deeper cultural value of solidarity and mutual aid.",
      synonyms: "Similar concepts include 'tulong-tulong' (helping each other), 'kapwa' (shared identity), or 'komunidad' (community).",
      image: BayanihanImage
    },
    {
      english: "Respect for elders ('Po' and 'Opo')",
      tagalog: "Paggalang sa matatanda",
      example: "'Po' and 'Opo' are commonly used to show respect. For instance, 'Opo, lolo, masarap po ang pagkain.' (Yes, grandpa, the food is delicious.)",
      explanation: "Filipino culture places great importance on respecting elders. The words 'po' and 'opo' are added when addressing older people as a sign of respect.",
      usageTips: "'Po' and 'Opo' are essential in daily conversations when speaking to someone older or in authority. They should be used in formal and respectful contexts.",
      commonMistakes: "A common mistake is forgetting to use 'po' and 'opo' when addressing elders or people of higher authority, which might be seen as impolite.",
      synonyms: "Respect can also be shown through body language, like the 'mano' gesture where younger people take the hand of an elder and press it to their forehead.",
      image: OpoImage
    },
    {
      english: "Filipino hospitality",
      tagalog: "Hospitalidad ng Pilipino",
      example: "'Please come in! We have food, stay as long as you like!' (Common Filipino hospitality to visitors.)",
      explanation: "Filipino hospitality is known for its warm welcome. When visitors arrive, Filipinos go out of their way to make them feel at home, offering food, drinks, and even their bed.",
      usageTips: "When visiting a Filipino home, it's customary to accept offers of food or drinks as a sign of respect to the host.",
      commonMistakes: "A common mistake is refusing offers of food or drinks, as it may be considered rude in Filipino culture.",
      synonyms: "Filipino hospitality can be described as 'malasakit' (compassion) or 'pag-aalaga' (care).",
      image: "https://example.com/hospitality.jpg" // Add your image URL here
    },
    {
      english: "Fiestas and celebrations",
      tagalog: "Pista at pagdiriwang",
      example: "Ang Pista ng Quiapo ay isang halimbawa ng malaking pagtitipon ng mga tao sa Maynila. (The Quiapo Fiesta is an example of a major gathering of people in Manila.)",
      explanation: "Fiestas are an important part of Filipino culture, celebrating patron saints, historical events, or other cultural traditions. These celebrations are marked by street parades, music, dancing, and food.",
      usageTips: "Use 'fiesta' when referring to any local or religious celebration. It is often followed by the name of the place or the saint it honors, such as 'Pista ng Santo Niño.'",
      commonMistakes: "A common mistake is thinking that fiestas are only religious; many are secular celebrations that bring people together for various causes.",
      synonyms: "Other terms include 'salubong' (gathering), 'patronal fiesta' (feast day), or 'pagdiriwang' (celebration).",
      image: "https://example.com/fiesta.jpg" // Add your image URL here
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to navigate between expressions
  const nextExpression = () => {
    if (currentIndex + 1 < culturalExpressions.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevExpression = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentExpression = culturalExpressions[currentIndex];

  return (
    <Container fluid className="bg-dark p-5 vh-100">
        <div className="tagalog-go-back-icon">
            <FaArrowLeft size={30} color="#fff" onClick={goBack} className="tagalog-go-back-arrow" />
        </div>

        <h1 className="text-center text-white mb-4" style={{ fontWeight: 600, fontSize: '2.5rem' }}>
            Cultural Context in Tagalog
        </h1>
        <p className="text-center mb-4 text-white" style={{ fontSize: '1.3rem' }}>
            Explore Filipino culture through language and expressions.
        </p>

        {/* Display current cultural expression */}
        <Row className="d-flex justify-content-center align-items-center" style={{ height: '65vh' }}>
            <Col md={6}>
                <Card className="bg-light text-dark p-4 shadow-lg rounded">
                    <Card.Body>
                    <h3 className="mb-3" style={{ fontWeight: 500, fontSize: '1.8rem' }}>
                        {currentExpression.english}
                    </h3>
                    <h5 className="mb-3" style={{ color: '#731768', fontSize: '1.5rem' }}>
                        Tagalog: {currentExpression.tagalog}
                    </h5>
                    <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}><strong>Example:</strong> {currentExpression.example}</p>
                    <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}><strong>Explanation:</strong> {currentExpression.explanation}</p>

                    {/* Additional Information */}
                    <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}><strong>Usage Tips:</strong> {currentExpression.usageTips}</p>
                    <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}><strong>Common Mistakes:</strong> {currentExpression.commonMistakes}</p>
                    <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}><strong>Synonyms:</strong> {currentExpression.synonyms}</p>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={6}>
                <Card className="bg-transparent border-0 rounded">
                    <Card.Body className="p-0">
                    <img src={currentExpression.image} alt={currentExpression.tagalog} className="img-fluid rounded" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        {/* Navigation buttons */}
        <Row className="d-flex w-100 justify-content-between mt-5">
            <Col xs="auto">
                <Button
                    onClick={prevExpression}
                    disabled={currentIndex === 0}
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
                    Previous Expression
                </Button>
            </Col>
            <Col xs="auto">
                <Button
                    onClick={nextExpression}
                    disabled={currentIndex + 1 >= culturalExpressions.length}
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
                    Next Expression
                </Button>
            </Col>
        </Row>
    </Container>
  );
}

export default CulturalContextualTagalog;