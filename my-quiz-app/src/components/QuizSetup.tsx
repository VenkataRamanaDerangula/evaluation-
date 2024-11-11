// src/components/QuizSetup.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const QuizSetup: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [numQuestions, setNumQuestions] = useState(10);

  const handleSubmit = () => {
    // Logic to start quiz
    navigate('/quiz');
  };

  return (
    <div>
      <h1>Quiz Setup</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="General Knowledge">General Knowledge</option>
        <option value="Sports">Sports</option>
        <option value="Geography">Geography</option>
      </select>
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <input type="number" value={numQuestions} onChange={(e) => setNumQuestions(parseInt(e.target.value))} />
      <button onClick={handleSubmit}>Start Quiz</button>
    </div>
  );
};

export default QuizSetup;
