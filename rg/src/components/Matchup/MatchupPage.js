// MatchupPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { startMatchup, nextPair } from '../../features/matchup/matchupSlice';
import { selectCurrentPair } from '../../selectors/matchupSelectors';
import { setCurrentPage } from '../../features/game/gameSlice';
import { MatchupView } from './MatchupView';
import { ERRORS, PAGES } from '../../features/constants';
import { selectChoice, incrementVote } from '../../features/ui/uiSlice';

const MatchupPage = () => {
  const dispatch = useDispatch();
  const isComparisonComplete = useSelector((state) => state.matchup.isComparisonComplete, shallowEqual);
  const currentPair = useSelector(selectCurrentPair, shallowEqual);
  const topic = useSelector((state) => state.ui.topic, shallowEqual);
  const items = useSelector((state) => state.ui.items, shallowEqual);

  useEffect(() => {
    dispatch(startMatchup(items));
  }, [dispatch]);
  
  useEffect(() => {
    if (isComparisonComplete) {
      dispatch(setCurrentPage(PAGES.RESULTS));
    }
  }, [isComparisonComplete, dispatch]);

  const handleChoiceSelect = (choiceIndex) => {
    if (currentPair && currentPair.length === 2) {
      const selectedItem = items[currentPair[choiceIndex]];
      if (selectedItem) {
        dispatch(incrementVote(selectedItem)); // Passing the whole item object
        dispatch(nextPair());
      }
    }
  };
  
  
  
  
  
  



  return (
    <MatchupView 
      topic={topic}
      handleChoiceSelect={handleChoiceSelect}
      currentPair={currentPair}
      items={items}
    />
  );
};

export default MatchupPage;
