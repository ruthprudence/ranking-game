import React from 'react';
import './App.css';
import Audio from './Audio.js';
import RankingGame from './RankingGame.js';




import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import PanelPage from './components/Panel/PanelPage.js';


function App() {

  return (
    <Router basename="/rg">
            <div className="App">
                <Audio />
                <Routes>
                    {/* Define the route for the Panel page */}
                    <Route path="/panel" element={<PanelPage />} />

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
