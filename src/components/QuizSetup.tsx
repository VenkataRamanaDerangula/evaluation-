// src/components/QuizSetup.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizSetup.css';


const QuizSetup: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('0'); // Default to "Sports" category
  const [difficulty, setDifficulty] = useState('easy');
  const [numQuestions, setNumQuestions] = useState(10); // Default max of 10

  const handleSubmit = () => {
    navigate('/quiz', {
      state: {
        name,
        category,
        difficulty,
        numQuestions,
      },
    });
  };

  return (
    <div>
      <h1>Set up your Quiz</h1>
      <label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </label>

      <label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="0">Select Category</option>
          <option value="9">General Knowledge</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
        </select>
      </label>

      <label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="select">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>

      <label>
        Number of Questions:
        <br />
        <input
          type="number"
          value={numQuestions}
          min={1}
          max={10}
          onChange={(e) => setNumQuestions(Math.max(1, Math.min(parseInt(e.target.value) || 1, 10)))}
        />
      </label>

      <button id="sub" onClick={handleSubmit}>START QUIZ</button>
    </div>
  );
};

export default QuizSetup;
