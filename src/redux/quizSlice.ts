// src/redux/quizSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface QuizState {
  score: number;
}

const initialState: QuizState = {
  score: 0,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    incrementScore: (state) => {
      state.score += 1;
    },
    resetScore: (state) => {
      state.score = 0;
    },
  },
});

export const { incrementScore, resetScore } = quizSlice.actions;
export default quizSlice.reducer;
