import React from 'react';
import './App.css';
import Audio from './Audio.js';
import RankingGame from './RankingGame.js';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {

  const basePath = process.env.REACT_APP_BASENAME || '/';

  return (
    <Router basename={basePath}>

            <div className="App">
                <Audio />
                <Routes>

                    {/* Define the default route */}
                    <Route path="/" element={<RankingGame />} />

                    {/* Other routes can be defined here */}
                    {/* <Route path="/some-other-page" element={<SomeOtherPage />} /> */}
                </Routes>
            </div>
        </Router>
  ); 
}

export default App;
