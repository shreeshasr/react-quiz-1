import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router';
import './App.css';
import Header from './Header/Header';
import HighScores from './HighScores/HighScores';
import QuizModal from './QuizModal/QuizModal';
import { store } from './Redux/store';
import StartModal from './StartModal/StartModal';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
        <Routes>
          <Route path="/" exact element={<StartModal/>}/>
          <Route path="/quiz" element={<QuizModal/>}/>
          <Route path="/highscores" element={<HighScores/>}/>
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
