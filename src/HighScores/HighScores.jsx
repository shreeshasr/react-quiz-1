import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { clearHighScores, setTheInitialTimer } from '../Redux/QuizSlice';
import './HighScores.css'
function HighScores() {
    let highscores = useSelector( state => state.quizReducers.highScores);
    const dispatch = useDispatch();
    let sortedscores = highscores.slice(0,5).sort( (a, b) => {
        return b.score - a.score;
    });

    useEffect(() => {
        dispatch(setTheInitialTimer(''))
    }, [dispatch])

    return (
        <div className='highscores'>
            <div className="highscoresHeading">Highscores</div>
            <ol>
            {
                
                sortedscores.map( (highscore) => {
                   return(
                        <li>{highscore.scorer} - {highscore.score}</li>
                   )
                })
            }
            </ol>
            <div className="navButtons">
                <Link to="/"><button className='goBack'>Go Back</button></Link>
                <button className='clearHighScores' onClick={ () => dispatch(clearHighScores())}>Clear Highscores</button>
            </div>
            
        </div>
    )
}

export default HighScores
