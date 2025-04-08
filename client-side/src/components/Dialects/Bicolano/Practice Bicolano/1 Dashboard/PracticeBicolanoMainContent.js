import React, {useState, useEffect} from 'react';
import { Container, Button, Row, Col, ProgressBar, Card } from 'react-bootstrap';
import { useNavigate, useLocation  } from 'react-router-dom';
import { SlStar } from "react-icons/sl";
import { FaTrophy, FaBullhorn, FaPen, FaStar } from 'react-icons/fa';
import { GiProgression } from "react-icons/gi";

function PracticeBicolanoMainContent() {
    const navigate = useNavigate();
    const location = useLocation();  
    const [showChallenges, setShowChallenges] = useState(true);
    const iconSize = 30; 
    const headerStyle = { textShadow: '1px 1px 2px rgba(0,0,0,0.8)', fontFamily: 'Roboto, sans-serif', fontWeight: '600', };
    const subHeaderStyle = { textShadow: '1px 1px 2px rgba(0,0,0,0.8)', fontFamily: 'Roboto, sans-serif', fontWeight: '600', color: '#697565', };
    const challengeButtonStyle = { borderRadius: '50%', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 8px rgba(0,0,0,0.5)', border: 'none', };

    // Track which challenges are completed
    const [completedChallenges, setCompletedChallenges] = useState({
        vocabularyChallenge: { easy: false, medium: false, hard: false },
        pronunciationChallenge: { easy: false, medium: false, hard: false },
        sentenceChallenge: { easy: false, medium: false, hard: false },
        translationChallenge: { easy: false, medium: false, hard: false },
        commonPhrasesChallenge: { easy: false, medium: false, hard: false },
    });

    // Load saved state from localStorage if it exists
    useEffect(() => {
        const savedState = JSON.parse(localStorage.getItem('completedChallengesBikol'));
        console.log('saves', savedState);
        if (savedState) {
            setCompletedChallenges(savedState);
            // localStorage.removeItem('completedChallenges');
        }
    }, []);

    // Update completion status when the child component returns state via navigate
    useEffect(() => {
        if (location.state && location.state.isCompleted !== undefined) {
            const { category, level, isCompleted } = location.state;

            // Update the specific level for the correct category
            if (category && level) {
                setCompletedChallenges(prevState => {
                    const updatedState = {
                        ...prevState,
                        [category]: {
                            ...prevState[category],  // Retain the other levels (easy, medium, hard)
                            [level]: isCompleted     // Update only the specific level
                        }
                    };
                    localStorage.setItem('completedChallengesBikol', JSON.stringify(updatedState)); // Save to localStorage
                    return updatedState;
                });
            }
        }
    }, [location.state]);  // Trigger this effect when location.state changes

    // Navigation to challenges, passing category and current completion status
    const gotoChallenge = (category, level) => {
        // console.log('Navigating to challenge with current state:', completedChallenges);
        navigate(`/bikolPractice/${category}/${level}`, { 
            state: { category, level, isCompleted: completedChallenges[category] } 
        });
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

    // Function to calculate progress based on true/false for each challenge level
    const getProgress = (category) => {
        const levels = completedChallenges[category];
        const completedLevels = Object.values(levels).filter(value => value === true).length;
        const totalLevels = Object.values(levels).length;
        return (completedLevels / totalLevels) * 100; 
    };

    const ProgressIndicator = ({ category }) => {
        const progress = getProgress(category);  // Get the progress for the category
    
        return (
            <div className='my-3' style={{ width: '100%' }}>
                <ProgressBar 
                    now={progress} 
                    label={`${Math.round(progress)}%`}  // Display percentage inside the bar
                    style={{ 
                        height: '2rem',  // Reduced height of the progress bar
                        backgroundColor: '#f3f3f3', // Background color of the progress bar
                        borderRadius: '5px', // Optional: makes the bar's corners rounded
                    }}
                />
            </div>
        );
    };

    return (
        <Container fluid className="d-flex flex-column bg-dark p-5" style={{minHeight:'100vh'}}>
            <Row className="text-start mb-4">
                <h1 className="display-4 text-white" style={headerStyle}>
                Practice Bicolano: Challenges
                </h1>  
                {/* <Button onClick={resetChallenges}>Reset Challenges</Button> */}
                <div>
                    <Button variant="light" className="my-3" onClick={() => setShowChallenges(!showChallenges)}>
                        {showChallenges ? <GiProgression /> : <FaTrophy />}
                    </Button>
                </div>
            </Row>
            
            {showChallenges ? (
            <>
            {/* Vocabulary Challenge */}
            <Row className="mb-4 justify-content-center">
                <Col sm={12} md={6} className="text-center mb-4 w-100">
                    <h4 className="mb-5" style={subHeaderStyle}>Vocabulary Challenge</h4>
                    <Row className="mb-4 justify-content-center d-flex flex-column">
                        <Col xs={{ span: 6, offset: 5 }} className="d-flex justify-content-start">
                            <Button
                                variant="primary"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#E17564',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('vocabularyChallenge', 'easy')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                {completedChallenges.vocabularyChallenge.easy ? <FaStar size={iconSize} /> : <SlStar size={iconSize} />}
                            </Button>
                        </Col>
                        <Col xs={{ span: 6, offset: 6 }} className="d-flex justify-content-start">
                            <Button
                                variant="primary"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#E17564',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                
                                onClick={() => gotoChallenge('vocabularyChallenge', 'medium')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                {completedChallenges.vocabularyChallenge.medium ? <FaStar size={iconSize} /> : <SlStar size={iconSize} />}
                            </Button>
                        </Col>
                        <Col xs={{ span: 6, offset: 5 }} className="d-flex justify-content-start">
                            <Button
                                variant="primary"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#E17564',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('vocabularyChallenge', 'hard')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                {completedChallenges.vocabularyChallenge.hard ? <FaStar size={iconSize} /> : <SlStar size={iconSize} />}
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Pronunciation Challenge */}
            <Row className="mb-4 justify-content-center">
                <Col sm={12} md={6} className="text-center mb-4 w-100">
                    <h4 className="mb-5" style={subHeaderStyle}>Pronunciation Challenge</h4>
                    <Row className="mb-4 justify-content-center d-flex flex-column">
                        <Col xs={{ span: 6, offset: 6 }} className="d-flex justify-content-start">
                            <Button
                                variant="primary"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#872341',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('pronunciationChallenge', 'easy')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                {completedChallenges.pronunciationChallenge.easy ? <FaStar size={iconSize} /> : <SlStar size={iconSize} />}
                            </Button>
                        </Col>
                        <Col xs={{ span: 6, offset: 5 }} className="d-flex justify-content-start">
                            <Button
                                variant="primary"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#872341',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('pronunciationChallenge', 'medium')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                {completedChallenges.pronunciationChallenge.medium ? <FaStar size={iconSize} /> : <SlStar size={iconSize} />}
                            </Button>
                        </Col>
                        <Col xs={{ span: 6, offset: 6 }} className="d-flex justify-content-start">
                            <Button
                                variant="primary"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#872341',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('pronunciationChallenge', 'hard')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                {completedChallenges.pronunciationChallenge.hard ? <FaStar size={iconSize} /> : <SlStar size={iconSize} />}
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Sentence Construction Challenge */}
            <Row className="mb-4 justify-content-center">
                <Col sm={12} md={6} className="text-center mb-4 w-100">
                    <h4 className="mb-5" style={subHeaderStyle}>Sentence Construction Challenge</h4>
                    <Row className="mb-4 justify-content-center d-flex flex-column">
                        <Col xs={{ span: 6, offset: 5 }} className="d-flex justify-content-start">
                            <Button
                                variant="warning"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#BE3144',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('sentenceChallenge', 'easy')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                {completedChallenges.sentenceChallenge.easy ? <FaStar size={iconSize} /> : <SlStar size={iconSize} />}
                            </Button>
                        </Col>
                        <Col xs={{ span: 6, offset: 6 }} className="d-flex justify-content-start">
                            <Button
                                variant="warning"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#BE3144',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('sentenceChallenge', 'medium')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                {completedChallenges.sentenceChallenge.medium ? <FaStar size={iconSize} /> : <SlStar size={iconSize} />}
                            </Button>
                        </Col>
                        <Col xs={{ span: 6, offset: 5 }} className="d-flex justify-content-start">
                            <Button
                                variant="warning"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#BE3144',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('sentenceChallenge', 'hard')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                {completedChallenges.sentenceChallenge.hard ? <FaStar size={iconSize} /> : <SlStar size={iconSize} />}
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Translation Challenge */}
            <Row className="mb-4 justify-content-center">
                <Col sm={12} md={6} className="text-center mb-4 w-100">
                    <h4 className="mb-5" style={subHeaderStyle}>Translation Challenge</h4>
                    <Row className="mb-4 justify-content-center d-flex flex-column">
                        <Col xs={{ span: 6, offset: 6 }} className="d-flex justify-content-start">
                            <Button
                                variant="warning"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#0A5EB0',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('translationChallenge', 'easy')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                {completedChallenges.translationChallenge.easy ? <FaStar size={iconSize} /> : <SlStar size={iconSize} />}
                            </Button>
                        </Col>
                        <Col xs={{ span: 6, offset: 5 }} className="d-flex justify-content-start">
                            <Button
                                variant="warning"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#0A5EB0',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('translationChallenge', 'medium')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                {completedChallenges.translationChallenge.medium ? <FaStar size={iconSize} /> : <SlStar size={iconSize} />}
                            </Button>
                        </Col>
                        <Col xs={{ span: 6, offset: 6 }} className="d-flex justify-content-start">
                            <Button
                                variant="warning"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#0A5EB0',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('translationChallenge', 'hard')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                {completedChallenges.translationChallenge.hard ? <FaStar size={iconSize} /> : <SlStar size={iconSize} />}
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>

            {/* Common Phrases Challenge */}
            <Row className="justify-content-center">
                <Col sm={12} md={6} className="text-center mb-4 w-100">
                    <h4 className="mb-5" style={subHeaderStyle}>Common Phrases Challenge</h4>
                    <Row className="mb-4 justify-content-center d-flex flex-column">
                        <Col xs={{ span: 6, offset: 5 }} className="d-flex justify-content-start">
                            <Button
                                variant="danger"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#A5158C',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('commonPhrasesChallenge', 'easy')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                {completedChallenges.commonPhrasesChallenge.easy ? <FaStar size={iconSize} /> : <SlStar size={iconSize} />}
                            </Button>
                        </Col>
                        <Col xs={{ span: 6, offset: 6 }} className="d-flex justify-content-start">
                            <Button
                                variant="danger"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#A5158C',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('commonPhrasesChallenge', 'medium')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                {completedChallenges.commonPhrasesChallenge.medium ? <FaStar size={iconSize} /> : <SlStar size={iconSize} />}
                            </Button>
                        </Col>
                        <Col xs={{ span: 6, offset: 5 }} className="d-flex justify-content-start">
                            <Button
                                variant="danger"
                                className="w-100 py-4 shadow-lg"
                                style={{
                                    ...challengeButtonStyle,
                                    margin: '20px',
                                    background: '#A5158C',
                                    color: '#fff',
                                    maxWidth: '5rem', // Ensures the button doesn't grow too large
                                }}
                                onClick={() => gotoChallenge('commonPhrasesChallenge', 'hard')}
                                onMouseOver={handleMouseOver}
                                onMouseOut={handleMouseOut}
                            >
                                {completedChallenges.commonPhrasesChallenge.hard ? <FaStar size={iconSize} /> : <SlStar size={iconSize} />}
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
        ) : (
        <>
        <Row className="mb-4">
            <Col className="text-center">
                <h2 className="text-white" style={{ fontWeight: '600' }}>Track Your Progress</h2>
                <p className="text-white">Keep track of your progress across different Tagalog practice challenges.</p>
            </Col>
        </Row>

        {/* Challenge Progress Indicators */}
        <Row className="mb-4 justify-content-center">
            <Col sm={12} md={6} lg={4} className="text-center mb-4">
                <Card className="p-3 shadow-lg">
                    <Card.Body>
                        <FaTrophy size={40} color="#E17564" />
                        <h5 className="mt-3">Vocabulary Challenge</h5>
                        <ProgressIndicator category="vocabularyChallenge" />
                        <p className="text-muted">Learn and improve your vocabulary in Tagalog.</p>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={4} className="text-center mb-4">
                <Card className="p-3 shadow-lg">
                    <Card.Body>
                        <FaBullhorn size={40} color="#872341" />
                        <h5 className="mt-3">Pronunciation Challenge</h5>
                        <ProgressIndicator category="pronunciationChallenge" />
                        <p className="text-muted">Practice your pronunciation of Tagalog words.</p>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={4} className="text-center mb-4">
                <Card className="p-3 shadow-lg">
                    <Card.Body>
                        <FaPen size={40} color="#BE3144" />
                        <h5 className="mt-3">Sentence Challenge</h5>
                        <ProgressIndicator category="sentenceChallenge" />
                        <p className="text-muted">Build and construct Tagalog sentences with ease.</p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>

        <Row className="mb-4 justify-content-center">
            <Col sm={12} md={6} lg={4} className="text-center mb-4">
                <Card className="p-3 shadow-lg">
                    <Card.Body>
                        <FaTrophy size={40} color="#0A5EB0" />
                        <h5 className="mt-3">Translation Challenge</h5>
                        <ProgressIndicator category="translationChallenge" />
                        <p className="text-muted">Enhance your translation skills for everyday phrases.</p>
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={12} md={6} lg={4} className="text-center mb-4">
                <Card className="p-3 shadow-lg">
                    <Card.Body>
                        <FaBullhorn size={40} color="#A5158C" />
                        <h5 className="mt-3">Common Phrases Challenge</h5>
                        <ProgressIndicator category="commonPhrasesChallenge" />
                        <p className="text-muted">Master commonly used phrases in Tagalog conversations.</p>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </>   
        )}
        </Container>
    );
}

export default PracticeBicolanoMainContent;