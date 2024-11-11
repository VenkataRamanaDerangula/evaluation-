// src/components/QuizSetup.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './QuizSetup.css'; // Add this import statement


const QuizSetup: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [category, setCategory] = useState('21'); // Default to "Sports" category
  const [difficulty, setDifficulty] = useState('medium');
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
      <h1>Quiz Setup</h1>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </label>

      <label>
        Category:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="9">General Knowledge</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
        </select>
      </label>

      <label>
        Difficulty:
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>

      <label>
        Number of Questions (1-10):
        <input
          type="number"
          value={numQuestions}
          min={1}
          max={10}
          onChange={(e) => setNumQuestions(Math.max(1, Math.min(parseInt(e.target.value) || 1, 10)))}
        />
      </label>

      <button onClick={handleSubmit}>Start Quiz</button>
    </div>
  );
};

export default QuizSetup;
