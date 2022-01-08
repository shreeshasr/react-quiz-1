import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { addHighScores } from '../Redux/QuizSlice'
import './AllDone.css'

function AllDone({points}) {
    
    let [value, setValue] = useState("")
    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        setValue(e.target.value)
    }
    return (
        <div className='allDone'>
            <div className="allDoneHeading">All done!</div>
            <div className="finalScore">Your final score is {points}</div>
            <div className="initials">
                <span>Enter Initials : </span>
                <span><input type="text" value={value} onChange={ (e) => handleInputChange(e)}/></span>
                <Link to="/highscores"><button className='submit' onClick={ () => dispatch(addHighScores({scorer:value, score:points}))}>Submit</button></Link>
            </div>
        </div>
    )
}

export default AllDone
