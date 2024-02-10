import React from 'react';
import Footer from '../UI/Footer';
import SoundButton from '../UI/SoundButton';

export const MatchupView = ({ topic, handleChoiceSelect, currentPair, items, onButtonClick }) => {
  
  return (
    <div className="page-view">
      <h2 id="headingMatchup">{topic}</h2>
      <div className="matchup-page-view">
      
      <div className={`matchup-buttons-container`}>
        {currentPair && currentPair.length === 2 && (
          <>
            <SoundButton className="button matchupBtn"  soundName="eatGhost"  id="leftMatchupBtn" onClick={() => onButtonClick(0)}>
              {items[currentPair[0]].name}
            </SoundButton> 
            <p id="versus">  vs  </p> 
            <SoundButton className="button matchupBtn"  id="rightMatchupBtn"  soundName="eatGhost"    onClick={() => onButtonClick(1)}>
              {items[currentPair[1]].name}
            </SoundButton>
          </>
        )}
      </div>
      
      <div className="footer-container matchupFooter">
      <p id="matchupPrompt">Choose the Winner!</p><Footer /> </div> 
      </div>
    </div>
  );
};
