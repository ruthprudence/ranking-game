// MatchupPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startMatchup, nextPair, handleChoice } from '../../features/matchup/matchupSlice';
import { selectCurrentPair } from '../../selectors/matchupSelectors';
import { setCurrentPage } from '../../features/game/gameSlice';
import { MatchupView } from './MatchupView';
import { ERRORS, PAGES } from '../../features/constants';

const MatchupPage = () => {
  const dispatch = useDispatch();
  const isComparisonComplete = useSelector((state) => state.matchup.isComparisonComplete);
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

  const handleChoiceSelect = (choiceIndex) => {
    dispatch(handleChoice(currentPair[choiceIndex].name));
    dispatch(nextPair());
  };

  if (!currentPair) {
    return <p>{ERRORS.MATCHUP}</p>;
  }

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
