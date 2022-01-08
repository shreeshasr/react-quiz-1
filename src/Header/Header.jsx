import React from 'react'
import { useSelector } from 'react-redux'
import "./Header.css"
function Header() {
    let time = useSelector( state => state.quizReducers.time) 
    
    return (
        <div className='header'>
            <a href={() => false} className='viewHighScores'>View Highscores <i className="fas fa-hand-point-left fa-lg"></i></a>
            <div className="timeCounter">Time: <span className="timer">{time}</span></div>
        </div>
    )
}

export default Header
