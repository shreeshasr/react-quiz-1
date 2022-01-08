import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { setTheInitialTimer } from '../Redux/QuizSlice';
import './StartModal.css'
function StartModal() {
    let dispatch = useDispatch();

    return (
        
        <div className='startModal'>
            <div className="codingQuizIntroHeading">Coding Quiz Challenge</div>
            <div className="codingQuizIntroFirst">Try to answer to following code-related questions within the time limit.</div>
            <div className="codingQuizIntroSecond">Keep in mind that incorrect answers will penalizeyour scoe/time by ten seconds!</div>
            <Link to="/quiz"><button className="codingQuizIntroButton" onClick={ () => dispatch(setTheInitialTimer(50))}>Start Quiz</button></Link>
        </div>
    )
}

export default StartModal
