// MatchupPage.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentPage } from '../../features/game/gameSlice';
import { incrementVote, startMatchup, handleChoiceSelect} from '../../features/ui/uiSlice';

import { selectCurrentPair } from '../../features/matchup/matchupSelectors';
import { PAGES } from '../../features/constants';
import { playSound } from '../../features/audio/audioSlice';


import { MatchupView } from './MatchupView';

const MatchupPage = () => {
  const dispatch = useDispatch();
  const isComparisonComplete = useSelector((state) => state.ui.isComparisonComplete);
  const currentPair = useSelector(selectCurrentPair);
  const topic = useSelector((state) => state.ui.topic);
  const items = useSelector((state) => state.ui.items);

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
      buttons[buttonIndex].classList.add('button-clicked');
      
      setTimeout(() => {
        buttons[buttonIndex].classList.remove('button-clicked');
      }, 550); 

      dispatch(handleChoiceSelect({ choiceIndex: buttonIndex, items }));
         
    }
  };
  

  const onChoiceSelect = (choiceIndex) => {
    if (currentPair && currentPair.length === 2) {
      const selectedItem = items[currentPair[choiceIndex]];
    
      if (selectedItem) {
        dispatch(incrementVote({ id: selectedItem.id })); 
        dispatch(handleChoiceSelect({ choiceIndex, items }));
        dispatch({ type: 'ADD_SLICE' });
      }
    }
  };

  return (
    <MatchupView 
      topic={topic}
      handleChoiceSelect={onChoiceSelect}
      currentPair={currentPair}
      items={items}
      onButtonClick={onButtonClick}
      currentPairIndex={currentPairIndex}
      totalPairs={totalPairs}
    />
  );
};

export default MatchupPage;
