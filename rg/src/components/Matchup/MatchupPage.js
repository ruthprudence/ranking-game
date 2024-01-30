// MatchupPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { setCurrentPage } from '../../features/game/gameSlice';
import { selectChoice, incrementVote, startMatchup, nextPair, handleChoiceSelect} from '../../features/ui/uiSlice';

import { selectCurrentPair } from '../../selectors/matchupSelectors';
import { ERRORS, PAGES } from '../../features/constants';

import { MatchupView } from './MatchupView';

const MatchupPage = () => {
  const dispatch = useDispatch();
  const isComparisonComplete = useSelector((state) => state.ui.isComparisonComplete);
  const currentPair = useSelector(selectCurrentPair);
  const topic = useSelector((state) => state.ui.topic);
  const items = useSelector((state) => state.ui.items);

  useEffect(() => {
    dispatch(startMatchup(items));
  }, [dispatch]);
  
  useEffect(() => {
    if (isComparisonComplete) {
      dispatch(setCurrentPage(PAGES.RESULTS));
    }
  }, [isComparisonComplete, dispatch]);

  const onChoiceSelect = (choiceIndex) => {
    // Use the currentPair from useSelector
    if (currentPair && currentPair.length === 2) {
      const selectedItem = items[currentPair[choiceIndex]];
    
      if (selectedItem) {
        dispatch(incrementVote({ id: selectedItem.id })); 
        dispatch(handleChoiceSelect({ choiceIndex, items }));
      }
    }
  };

  return (
    <MatchupView 
      topic={topic}
      handleChoiceSelect={onChoiceSelect}
      currentPair={currentPair}
      items={items}
    />
  );
};

export default MatchupPage;
