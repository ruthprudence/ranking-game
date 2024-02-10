import React from 'react';
import './App.css';
import RankingGame from './RankingGame.js';
import { preloadAudio } from './features/audio/preloadAudio.js';
import { useLoadSounds } from './features/audio/useLoadSounds.js';



function App() {
  useLoadSounds();
  preloadAudio();

  return (
    <div className="App">
      <RankingGame />
    </div>
  );
}

export default App;
