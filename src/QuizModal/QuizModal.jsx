import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import AllDone from '../AllDone/AllDone';
import { reduceTime, startTimer, stopTheTimer } from '../Redux/QuizSlice';
import './QuizModal.css'
function QuizModal() {
    const questions = [
        {
          questionText: "Commonly used data types DO NOT include:",
          options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
          answer: "3. alerts",
        },
        {
          questionText: "Arrays in JavaScript can be used to store ______.",
          options: [
            "1. numbers and strings",
            "2. other arrays",
            "3. booleans",
            "4. all of the above",
          ],
          answer: "4. all of the above",
        },
        {
          questionText:
            "String values must be enclosed within _____ when being assigned to variables.",
          options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
          answer: "3. quotes",
        },
        {
          questionText:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
          options: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log",
          ],
          answer: "4. console.log",
        },
        {
          questionText:
            "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
          options: ["1. break", "2. stop", "3. halt", "4. exit"],
          answer: "1. break",
        },
      ];
    
    let time = useSelector( state => state.quizReducers.time);
    let stopTimer = useSelector( state => state.quizReducers.stopTimer);
    useSelector( state => state.quizReducers.stopTimer);
    let dispatch = useDispatch();
    const [index, setIndex] = useState(0);
    const [points, setPoints] = useState(0);
    const [verification, setVerification] = useState("")
    const verifySubmittedAnswer = (submittedAnswer) => {
        if(questions[index].answer === submittedAnswer){
            setVerification("Correct!")
            setPoints(points + 1)
        }
        else{
            setVerification("Incorrect!")
            dispatch(reduceTime())
            points > 0 ? setPoints(points - 1) : setPoints(0);
        }
        if(index<questions.length-1){
            setTimeout( function() { setIndex(index+1); setVerification("")}, 1000);
        }
    }

    if(index === questions.length-1){
        dispatch(stopTheTimer())
    }
    

    const myfunc = () => {
        setInterval( () => {
        if(time > 0 && !stopTimer){
           dispatch(startTimer(time))
        }
        }, 1000)
    }

    useEffect(() => {
        myfunc()
    // eslint-disable-next-line
    }, [])
    
    return (
        (time === 0 || index === questions.length-1) ? 
            <AllDone points={points}/>
        :
        <div className='quizModal'>
             <div className="quizQuestion">{questions[index].questionText}</div>
             <div className="quizOption" onClick={ () => { verifySubmittedAnswer(questions[index].options[0])}}>{questions[index].options[0]}</div>
             <div className="quizOption" onClick={ () => { verifySubmittedAnswer(questions[index].options[1])}}>{questions[index].options[1]}</div>
             <div className="quizOption" onClick={ () => { verifySubmittedAnswer(questions[index].options[2])}}>{questions[index].options[2]}</div>
             <div className="quizOption" onClick={ () => { verifySubmittedAnswer(questions[index].options[3])}}>{questions[index].options[3]}</div>
             <div className='verfiedBoolean'>{verification}</div>
        </div>
        
    )
}

export default QuizModal
