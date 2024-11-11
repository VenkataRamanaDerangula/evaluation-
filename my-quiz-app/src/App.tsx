// src/App.tsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import QuizSetup from './components/QuizSetup';
import QuizPage from './components/QuizPage';
import Leaderboard from './components/Leaderboard';
import Home from './components/Home';  // Add Home component
import About from './components/About'; // Add About component

// Create the router with routes and future flags
const router = createBrowserRouter(
  [
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
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
