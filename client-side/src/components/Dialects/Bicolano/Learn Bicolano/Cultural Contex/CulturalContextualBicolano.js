import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import '../Bicolano.css';

function CulturalContextualBicolano() {
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
      bicolano: "Bayanihan",
      example: "Sa Bayanihan, nagtutabang an mga tawo para sa kayuhan kan gabos. (In Bayanihan, people help each other for everyone's benefit.)",
      explanation: "An Bayanihan nagtutudok kan kultura nin pagbuligay, labi na kun may kinahangan. Iton nagpapahayag nin kooperasyon asin pagkakaisa kan komunidad.",
      usageTips: "Gamiton an 'Bayanihan' para ilarawan an bisan ano na porma nin espiritu kan komunidad o pagbuligay, sa baryo man o syudad.",
      commonMistakes: "An komon na sayop iyo an paggamit nin 'Bayanihan' bilang pisikal na buruhaton lamang. Iton nagpapahayag man nin halangkaw na kahalagahan nin pagkakaisa asin pagtutulungan.",
      synonyms: "Mga kasiring konsepto iyo an 'buligay' (mutual help), 'sarong pagkakakilanlan' (shared identity), o 'komunidad' (community).",
      image: ""
    },
    {
      english: "Respect for elders ('Po' and 'Opo')",
      bicolano: "Pagrespeto sa mga matong",
      example: "An 'Po' asin 'Opo' ginagamit para magpakita nin respeto. Halimbawa, 'Opo, Lolo, namamanamit po an kalan-on.' (Yes, grandpa, the food is delicious.)",
      explanation: "An kultura nin Bikol nagpapahiling nin dakulang importansya sa pagrespeto sa mga matong. An 'Po' asin 'Opo' ginagamit bilang tanda nin pagrespeto sa mga nakatatang.",
      usageTips: "Importante an 'Po' asin 'Opo' sa aldaw-araw na estorya kapag nakikipag-istorya sa mga matong o may otoridad. Gamiton ini sa pormal asin respetadong mga konteksto.",
      commonMistakes: "An komon na sayop iyo an pagkalipat gamiton an 'Po' asin 'Opo' kapag nakikipag-istorya sa mga matong o may otoridad, na pwedeng ikonsiderar na kawaray respeto.",
      synonyms: "An pagrespeto pwede man ipahiling pinaagi kan body language, sugad kan 'mano' na hinalo an kamot kan matong at pinipiga sa noo.",
      image: ""
    },
    {
      english: "Filipino hospitality",
      bicolano: "Hospitalidad kan Bikol",
      example: "Paki-sulod! Igwa kami nin kalan-on; pwedeng magpabilin ka kutob san gusto mo! (Common Bikol hospitality to visitors.)",
      explanation: "An hospitalidad kan Bikol kilala sa mainit na pag-abot. Kun may bisita, naglalaom an mga Bikolano na mararamdaman ninda na iyo ninda an sarong matukdo na tahanan, nagpapahiling nin kalan-on, ilimnon, asin lugar para pahingaan.",
      usageTips: "Kun bibisita ka sa sarong Bikol na balay, kinakaipuhan na batonon an mga alok nin kalan-on o ilimnon bilang tanda nin respeto sa host.",
      commonMistakes: "An komon na sayop iyo an pagtanggi sa mga alok nin kalan-on o ilimnon, kay pwedeng ikonsiderar na kawaray respeto.",
      synonyms: "An hospitalidad nin Bikol pwede man ilarawan bilang 'pagkamoot' (compassion) o 'pag-aalaga' (care).",
      image: "https://example.com/hospitality.jpg"
    },
    {
      english: "Fiestas and celebrations",
      bicolano: "Pista asin pagdiriwang",
      example: "An Pista kan Quiapo sarong halimbawa nin dakulang pagtitipon kan mga tawo sa Maynila. (The Quiapo Fiesta is an example of a major gathering in Manila.)",
      explanation: "An mga pista dakula an parte kan kultura nin Bikol, igwang pagselebrar sa patron saints, historikal na pangyayari, o iba pang tradisyones. Iton minamarkahan nin parada sa dalan, musika, sayawan, asin kalan-on.",
      usageTips: "Gamiton an 'pista' pagre-refer sa bisan ano na lokal o relihiyosong selebrasyon. Kadalasan, sinusundan ini nin ngaran kan lugar o santo na pinapahalagahan, sugad kan 'Pista kan Santo Niño.'",
      commonMistakes: "An komon na sayop iyo an pag-isip na an mga pista relihiyoso lamang; dakula an mga sekular na selebrasyon na nagdadara nin mga tawo para sa magkaibang kadahilanan.",
      synonyms: "Iba pang termino iyo an 'salubong' (pagtitipon), 'patronal na pista' (feast day), o 'pagdiriwang' (selebrasyon).",
      image: "https://example.com/fiesta.jpg"
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
      <div className="bikol-go-back-icon">
        <FaArrowLeft size={30} color="#fff" onClick={goBack} className="bikol-go-back-arrow" />
      </div>

      <h1 className="text-center text-white mb-4" style={{ fontWeight: 600, fontSize: '2.5rem' }}>
        Cultural Context in Bikol
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
                Bikol: {currentExpression.bicolano}
              </h5>
              <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}>
                <strong>Example:</strong> {currentExpression.example}
              </p>
              <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}>
                <strong>Explanation:</strong> {currentExpression.explanation}
              </p>
              {/* Additional Information */}
              <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}>
                <strong>Usage Tips:</strong> {currentExpression.usageTips}
              </p>
              <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}>
                <strong>Common Mistakes:</strong> {currentExpression.commonMistakes}
              </p>
              <p className="mb-2 text-start" style={{ fontSize: '1.2rem' }}>
                <strong>Synonyms:</strong> {currentExpression.synonyms}
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="bg-transparent border-0 rounded">
            <Card.Body className="p-0">
              <img src={currentExpression.image} alt={currentExpression.bicolano} className="img-fluid rounded" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
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
              fontSize: '1.1rem'
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
              fontSize: '1.1rem'
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

export default CulturalContextualBicolano;