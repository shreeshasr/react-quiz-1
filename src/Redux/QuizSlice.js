import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    time : '',
    stopTimer: false,
    highScores: [{score: 10, scorer: "last"}, {score: 1, scorer: "first"}, {score: 3, scorer: "dff"}, {score: 9, scorer: "fifvrst"}]
}

export const quizSlice = createSlice({
    name: "quiz",
    initialState,
    reducers: {
        setTheInitialTimer: (state, action) => {
            state.time = action.payload;
        },
        startTimer: (state) => {
            if(state.time > 0){
                state.time = parseInt(state.time) - 1
            }
        },
        reduceTime: (state) => {
            if(state.time > 10){
                state.time = parseInt(state.time) - 10
            }
        },
        stopTheTimer: (state) => {
            state.stopTimer = true
        },
        addHighScores: (state, action) => {
            state.highScores.push({score: action.payload.score, scorer: action.payload.scorer})
        },
        clearHighScores: (state) => {
            state.highScores = []
        }
    }
})

export const {startTimer, stopTheTimer, addHighScores, clearHighScores, setTheInitialTimer, reduceTime} = quizSlice.actions;
export default quizSlice.reducer