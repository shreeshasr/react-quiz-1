import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./Header.css"
function Header() {
    let time = useSelector( state => state.quizReducers.time) 
    
    return (
        <div className='header'>
            <Link to="/highscores" className='viewHighScores'>View Highscores <i className="fas fa-hand-point-left fa-lg"></i></Link>
            <div className="timeCounter">Time: <span className="timer">{time}</span></div>
        </div>
    )
}

export default Header
