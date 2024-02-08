import React from 'react';
import Button from '../UI/Button';
import Footer from '../UI/Footer';

// const isLongText = (items, currentPair) => {
//   if (!items || !currentPair || currentPair.length < 2) {
//     return false; // Return false if items or currentPair are not properly defined
//   }
//   return items[currentPair[0]].name.length + items[currentPair[1]].name.length > 15;
// };

export const MatchupView = ({ topic, handleChoiceSelect, currentPair, items, onButtonClick }) => {
  // const verticalLayout = isLongText(items, currentPair);
  
  return (
    <div className="page-view">
      <h2 id="headingMatchup">{topic}</h2>
      <div className="matchup-page-view">
      
      <div className={`matchup-buttons-container`}>
        {currentPair && currentPair.length === 2 && (
          <>
            <Button className="button matchupBtn" id="leftMatchupBtn" onClick={() => onButtonClick(0)}>
              {items[currentPair[0]].name}
            </Button> 
            <p id="versus">  vs  </p> 
            <Button className="button matchupBtn"  id="rightMatchupBtn"  onClick={() => onButtonClick(1)}>
              {items[currentPair[1]].name}
            </Button>
          </>
        )}
      </div>
      
      <div class="footer-container matchupFooter">
      <p id="matchupPrompt">Choose the Winner!</p><Footer /> </div> 
      </div>
    </div>
  );
};
