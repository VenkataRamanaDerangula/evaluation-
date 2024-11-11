import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './QuizSetup.css';


interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { category, difficulty, numQuestions } = location.state || {};

  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!category || !difficulty || !numQuestions) return;

    fetch(`https://opentdb.com/api.php?amount=${numQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`)
      .then((response) => response.json())
      .then((data) => {
        const formattedQuestions = data.results.map((item: any) => ({
          question: item.question,
          options: [...item.incorrect_answers, item.correct_answer].sort(() => Math.random() - 0.5), // Randomize options
          correctAnswer: item.correct_answer,
        }));
        setQuestions(formattedQuestions);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching questions:', error);
        setLoading(false);
      });
  }, [category, difficulty, numQuestions]);

  const handleOptionClick = (option: string) => {
    setSelectedAnswer(option);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === questions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
  };

  if (loading) {
    return <div>Loading questions...</div>;
  }

  if (quizCompleted) {
    return (
      <div>
        <h2>Quiz Completed!</h2>
        <p>Your score: {score} / {questions.length}</p>
        <button onClick={handleRestartQuiz}>Restart Quiz</button>
        <button onClick={() => navigate('/')}>Go to Setup</button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div id="bg">
    <h2 dangerouslySetInnerHTML={{ __html: currentQuestion.question }} />
      <div id="line">
      <ul>
        {currentQuestion.options.map((option) => (
          <li key={option}>
            <button id="quizb"
              onClick={() => handleOptionClick(option)}
              style={{
                backgroundColor: selectedAnswer === option ? '#55BE87' : '#6153CA',
              }}
              dangerouslySetInnerHTML={{ __html: option }}
            />
          </li>
        ))}
      </ul>
      <button id="next" onClick={handleNextQuestion} disabled={!selectedAnswer}>
        {currentQuestionIndex === questions.length - 1 ? "Finish Quiz" : "Next Question"}
      </button>
      </div>
    </div>
  );
};

export default QuizPage;
