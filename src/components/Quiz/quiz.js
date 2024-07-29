import React, { useState } from 'react';
import './quiz.css';

const questions = [
  {
    question: "How are you feeling right now?",
    name: "feeling",
    options: ["Happy", "Sad", "Excited", "Bored"],
    type: "radio",
  },
  {
    question: "What pacing do you prefer for your book right now?",
    name: "pacing",
    options: ["Fast-paced", "Slow and steady", "Somewhere in between"],
    type: "radio",
  },
  {
    question: "What type of setting do you enjoy most?",
    name: "setting",
    options: ["Contemporary", "Historical", "Futuristic", "Fantasy worlds", "Real-world locations"],
    type: "radio",
  },
  {
    question: "How much time can you dedicate to reading each day?",
    name: "readingTime",
    options: ["A few minutes", "Half an hour", "An hour", "Several hours"],
    type: "radio",
  },
  {
    question: "Do you have any favorite authors or ones you’d like to explore?",
    name: "favoriteAuthors",
    type: "text",
  },
  {
    question: "What was the last book you really enjoyed?",
    name: "lastBook",
    type: "text",
  },
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({
    feeling: '',
    pacing: '',
    setting: '',
    readingTime: '',
    favoriteAuthors: '',
    lastBook: '',
  });

  const currentQuestion = questions[currentQuestionIndex];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers({
      ...answers,
      [name]: value,
    });
  };

  const handleNext = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const handleBack = () => {
    setCurrentQuestionIndex(currentQuestionIndex - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(answers);
  };

  const isCurrentQuestionAnswered = () => {
    const answer = answers[currentQuestion.name];
    return answer !== '';
  };

  return (
    <>
      <h2 className="form-title">Discover your reading personality!</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h3 className="question-title">{currentQuestion.question}</h3>
          {currentQuestion.type === 'radio' && (
            <div className="options-container">
              {currentQuestion.options.map((option) => (
                <label key={option} className="option-label">
                  <input
                    type="radio"
                    name={currentQuestion.name}
                    value={option}
                    onChange={handleChange}
                    checked={answers[currentQuestion.name] === option}
                  /> {option}
                </label>
              ))}
            </div>
          )}
          {currentQuestion.type === 'text' && (
            <input
              type="text"
              name={currentQuestion.name}
              className="input-text"
              onChange={handleChange}
              value={answers[currentQuestion.name]}
            />
          )}

          <div className="button-container">
            {currentQuestionIndex > 0 && (
              <button type="button" className="button" onClick={handleBack}>Back</button>
            )}
            {currentQuestionIndex < questions.length - 1 && isCurrentQuestionAnswered() && (
              <button type="button" className="button" onClick={handleNext}>Next</button>
            )}
            {currentQuestionIndex === questions.length - 1 && (
              <button type="submit" className="button">Submit</button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default Quiz;