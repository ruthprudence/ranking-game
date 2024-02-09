import React from 'react';
import './App.css';
import RankingGame from './RankingGame.js';
import { useLoadSounds} from './features/hooks/useLoadSounds.js';


function App() {
  useLoadSounds();

  return (
    <div className="App">
      <RankingGame />
    </div>
  );
}

export default App;
