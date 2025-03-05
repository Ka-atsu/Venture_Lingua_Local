import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicWordsQuizTagalog() {
    // Define basic Tagalog words and their English translations
    const words = [
        { id: 1, tagalog: 'Kumusta?', english: 'How are you?' },
        { id: 2, tagalog: 'Salamat', english: 'Thank you' },
        { id: 3, tagalog: 'Bakit?', english: 'Why?' },
        { id: 4, tagalog: 'Oo', english: 'Yes' },
        { id: 5, tagalog: 'Hindi', english: 'No' },
        { id: 6, tagalog: 'Magandang umaga', english: 'Good morning' },
        { id: 7, tagalog: 'Paalam', english: 'Goodbye' },
        { id: 8, tagalog: 'Saan?', english: 'Where?' },
        { id: 9, tagalog: 'Anong pangalan mo?', english: 'What is your name?' },
        { id: 10, tagalog: 'Tulong', english: 'Help' },
    ];

    // Larger pool of potential distractors
    const distractors = ['Hello', 'Please', 'Sorry', 'Good evening', 'See you', 'Yes', 'No', 'Maybe'];

    // Randomize words for each quiz
    const randomWord = words[Math.floor(Math.random() * words.length)];
    const [score, setScore] = useState(0);
    const [quizEnded, setQuizEnded] = useState(false);
    const [feedback, setFeedback] = useState('');

    // Function to get three random distractors
    const getRandomDistractors = () => {
        let chosenDistractors = [];
        while (chosenDistractors.length < 3) {
            const randomDistractor = distractors[Math.floor(Math.random() * distractors.length)];
            if (randomDistractor !== randomWord.english && !chosenDistractors.includes(randomDistractor)) {
                chosenDistractors.push(randomDistractor);
            }
        }
        return chosenDistractors;
    };

    // Shuffle answers
    const possibleAnswers = [randomWord.english, ...getRandomDistractors()];
    possibleAnswers.sort(() => Math.random() - 0.5); // Shuffle answers

    const checkAnswer = (selectedAnswer) => {
        if (selectedAnswer === randomWord.english) {
            setScore(score + 1);
            setFeedback('Correct! Great job!');
        } else {
            setFeedback(`Incorrect. The correct answer is "${randomWord.english}"`);
        }

        setQuizEnded(true); // End quiz after one question
    };

    const restartQuiz = () => {
        setScore(0);
        setQuizEnded(false);
        setFeedback('');
    };

    return (
        <Container>
            {/* 
                border-0 This is to remove the border of Card
                shadow-none This is to remove the Shadow of Card
            **/}
            <Card className="border-0 shadow-none">
                <Card.Body className="text-center">
                    <Card.Title className="mb-4 fs-3">What is the meaning of "{randomWord.tagalog}"?</Card.Title>

                    {possibleAnswers.map((answer, index) => (
                        <Button
                            key={index}
                            variant="outline-dark"
                            onClick={() => checkAnswer(answer)}
                            className="w-100 my-1 fs-5 p-3 rounded-pill"
                        >
                            {answer}
                        </Button>
                    ))}

                    {feedback && (
                        <Container className={`mt-3 text-${feedback.includes('Correct') ? 'success' : 'danger'}`}>
                            {feedback}
                        </Container>
                    )}
                </Card.Body>
            </Card>

            {quizEnded && (
                <Container className="mt-3 text-center">
                    <h4>Your score: {score}</h4>
                    <Button variant="success" onClick={restartQuiz} className="mt-3 px-4 py-2 rounded-pill">
                        Restart Quiz
                    </Button>
                </Container>
            )}
        </Container>
    );
}

export default BasicWordsQuizTagalog;