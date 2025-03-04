// import React, { useState } from 'react';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

// function Quiz1() {
//     // Define one word with four possible answers
//     const word = { tagalog: 'Kumusta?', english: 'How are you?' };
//     const answers = [
//         { id: 1, option: 'Kumusta?', correct: true },
//         { id: 2, option: 'Salamat', correct: false },
//         { id: 3, option: 'Paalam', correct: false },
//         { id: 4, option: 'Bakit?', correct: false },
//     ];

//     // State variables
//     const [quizEnded, setQuizEnded] = useState(false); // Flag to check if quiz is over
//     const [correctAnswerSelected, setCorrectAnswerSelected] = useState(null); // For showing feedback

//     const checkAnswer = (selectedAnswer) => {
//         // Check if the selected answer is correct
//         if (selectedAnswer.correct) {
//             setScore(1);  // Increase score if correct
//             setCorrectAnswerSelected(true); // Mark answer as correct
//         } else {
//             setCorrectAnswerSelected(false); // Mark answer as incorrect
//         }

//         setQuizEnded(true);  // End quiz after one question
//     };

//     return (
//         <Container>
//             <Card className="mb-10">
//                 <Card.Body>
//                     <Card.Title>What does "{word.english}" mean in Tagalog?</Card.Title>
//                     {answers.map((answer) => (
//                         <Button 
//                             key={answer.id} 
//                             variant="outline-primary" 
//                             onClick={() => checkAnswer(answer)}
//                             className="mb-2"
//                         >
//                             {answer.option}
//                         </Button>
//                     ))}

//                     {correctAnswerSelected !== null && (
//                         <div className="mt-3">
//                             {correctAnswerSelected === true ? (
//                                 <span className="text-success">Correct! "{word.english}" means "{word.tagalog}"</span>
//                             ) : (
//                                 <span className="text-danger">Incorrect. The correct answer is "{word.tagalog}"</span>
//                             )}
//                         </div>
//                     )}
//                 </Card.Body>
//             </Card>

//             {quizEnded && (
//                 <div className="mt-3">
//                     <Button variant="success" >Next Quiz</Button>
//                 </div>
//             )}
//         </Container>
//     );
// }

// export default Quiz1;