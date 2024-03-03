// MatchupPage.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentPage } from '../../features/game/gameSlice';
import { incrementVote, startMatchup, handleChoiceSelect} from '../../features/ui/uiSlice';

import { selectCurrentPair } from '../../features/matchup/matchupSelectors';
import { PAGES } from '../../features/constants';
import { playSound } from '../../features/audio/audioSlice';


import { MatchupView } from './MatchupView';

const MatchupPage = ({ animationClass }) => {
  const dispatch = useDispatch();
  const isComparisonComplete = useSelector((state) => state.ui.isComparisonComplete);
  const currentPair = useSelector(selectCurrentPair);
  const topic = useSelector((state) => state.ui.topic);
  const items = useSelector((state) => state.ui.items);
  const pairs = useSelector((state) => state.ui.pairs);

  const totalPairs = useSelector((state) => state.ui.pairs.length);
  const currentPairIndex = useSelector((state) => state.ui.currentPairIndex);


  useEffect(() => {
    setTimeout(() => {
      const element = document.getElementById('inputTopicDescription');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 0);
  }, []);

  useEffect(() => {
    // Dispatch SET_TOTAL_SLICES action with the length of pairs
    dispatch({ type: 'SET_TOTAL_SLICES', payload: pairs });
  }, [pairs, dispatch]);
  

  useEffect(() => {
    dispatch(startMatchup(items));
  }, [dispatch]);
  
  useEffect(() => {
    if (isComparisonComplete) {
      dispatch(setCurrentPage(PAGES.RESULTS));
    }
  }, [isComparisonComplete, dispatch]);

  const [clickedButtonIndex, setClickedButtonIndex] = useState(null);

  const onButtonClick = (buttonIndex) => {
    if (currentPair && currentPair.length === 2) {
      const buttons = document.querySelectorAll('.matchupBtn');
      const container = document.querySelector('.matchup-buttons-container');

      buttons[buttonIndex].classList.add('button-clicked');

      container.classList.add('slide-out');

      
      setTimeout(() => {
        buttons[buttonIndex].classList.remove('button-clicked');
        container.classList.remove('slide-out');
      dispatch(handleChoiceSelect({ choiceIndex: buttonIndex, items }));
      dispatch({ type: 'ADD_SLICE' });
      }, 300); 

    }
  };

  return (
    <div className={animationClass}>
    <MatchupView 
      topic={topic}
      currentPair={currentPair}
      items={items}
      onButtonClick={onButtonClick}
      currentPairIndex={currentPairIndex}
      totalPairs={totalPairs}
    />
    </div>
  );
};

export default MatchupPage;
