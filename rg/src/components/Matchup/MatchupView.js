import React from 'react';
import Footer from '../UI/Footer';
import Pie from '../UI/Pie/Pie.js';
import MatchupButton from '../UI/MatchupButton';

export const MatchupView = ({ topic, handleChoiceSelect, currentPair, items, onButtonClick, currentPairIndex, totalPairs }) => {
  
  return (
    <div className="page-view">
      <p id="inputTopicDescription">Your Topic:</p>
      <h2 id="headingMatchup">{topic}</h2>
      <div className="matchup-page-view">
      
      <div className={`matchup-buttons-container`}>
        {currentPair && currentPair.length === 2 && (
          <>
            <MatchupButton className="button matchupBtn"  soundName="eatGhost"  id="leftMatchupBtn" onClick={() => onButtonClick(0)}>
              {items[currentPair[0]].name}
            </MatchupButton> 
            <MatchupButton className="button matchupBtn"  id="rightMatchupBtn"  soundName="eatGhost"    onClick={() => onButtonClick(1)}>
              {items[currentPair[1]].name}
            </MatchupButton>
          </>
        )}
       
      </div>
     <div> <p id="matchupPrompt">Choose the Winner!</p></div> 
      <div className="pie-wrapper">
        <Pie totalSlices={totalPairs} />
      </div>
      
      <div className="footer-container matchupFooter">
<Footer /> </div> 
      </div>
    </div>
  );
};
