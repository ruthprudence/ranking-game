// MatchupView.js
import React from 'react';
import Button from '../UI/Button';

export const MatchupView = ({ topic, handleChoiceSelect, currentPair, items, onButtonClick }) => {
  return (
    <div>
      {/* <p>Topic</p> */}
      <h3>{topic}</h3>
      <div>
        {currentPair && currentPair.length === 2 && (
          <>
             <Button onClick={() => onButtonClick(0)}>{items[currentPair[0]].name}</Button>
            <Button onClick={() => onButtonClick(1)}>{items[currentPair[1]].name}</Button>
          </>
        )}
      </div>
      <p><i>Who Wins?</i></p>
    </div>
  );
};
