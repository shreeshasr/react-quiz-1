import { configureStore } from "@reduxjs/toolkit";
import quiz from "./QuizSlice"
export const store = configureStore({
    reducer:{
        quizReducers: quiz
    }
})