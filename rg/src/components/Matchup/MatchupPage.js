// MatchupPage.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentPage } from '../../features/game/gameSlice';
import { startMatchup, handleChoiceSelect} from '../../features/ui/uiSlice';

import KeyboardEventHandler from '../UI/KeyboardEventHandler';

import { selectCurrentPair } from '../../features/matchup/matchupSelectors';
import { PAGES } from '../../features/constants';
import { MatchupView } from './MatchupView';
import { playSound } from '../../features/audio/soundPlayer';
import { SOUND_NAME } from '../../features/constants';

const MatchupPage = ({ animationClass }) => {
  const dispatch = useDispatch();
  const muted = useSelector((state) => state.audio.muted);
  const [triggeredByKeyboard, setTriggeredByKeyboard] = useState(false);


  const isComparisonComplete = useSelector((state) => state.ui.isComparisonComplete);
  const currentPair = useSelector(selectCurrentPair);
  const topic = useSelector((state) => state.ui.topic);
  const items = useSelector((state) => state.ui.items);
  const pairs = useSelector((state) => state.ui.pairs);

  const totalPairs = useSelector((state) => state.ui.pairs.length);
  const currentPairIndex = useSelector((state) => state.ui.currentPairIndex);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
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

  const handleChoice = (buttonIndex) => {
    // Play sound
    if (!muted) {
        playSound(SOUND_NAME.EATGHOST); // Replace EATGHOST with actual sound name
    }

    // Logic after choice is made
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
};


const keyMap = {
  's': () => handleChoice(0),
  'ArrowLeft': () => handleChoice(0),
  'k': () => handleChoice(1),
  'ArrowRight': () => handleChoice(1)
};

  return (
    <>
    <KeyboardEventHandler keyMap={keyMap} muted={muted} />
    <MatchupView
      animationClass={animationClass} 
      topic={topic}
      currentPair={currentPair}
      items={items}
      onButtonClick={handleChoice}
      currentPairIndex={currentPairIndex}
      totalPairs={totalPairs}
    />
    </>
  );
};

export default MatchupPage;
