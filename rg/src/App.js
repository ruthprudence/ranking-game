import React from 'react';
import './App.css';
import Audio from './Audio.js';
import RankingGame from './RankingGame.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <Audio />
                <Routes>
                    <Route path="/" element={<RankingGame />} />
                    {/* Other routes can be defined here */}
                </Routes>
            </div>
        </Router>
    ); 
}

export default App;