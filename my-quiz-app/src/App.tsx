// src/App.tsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QuizSetup from './components/QuizSetup';
import QuizPage from './components/QuizPage';
import Leaderboard from './components/Leaderboard';

// Create the router with routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <QuizSetup />,
  },
  {
    path: "/quiz",
    element: <QuizPage />,
  },
  {
    path: "/leaderboard",
    element: <Leaderboard />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
