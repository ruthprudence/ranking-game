// MatchupPage.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generatePairs, selectChoice, completeMatchup, handleChoice } from '../../features/matchup/matchupSlice';
import { selectCurrentPair } from '../../selectors/matchupSelectors';
import { setCurrentPage } from '../../features/game/gameSlice';
import { MatchupView } from './MatchupView';
import {ERRORS} from '../../features/constants';

const MatchupPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.game.items);
  const pairs = useSelector((state) => state.matchup.pairs);
  const isComparisonComplete = useSelector((state) => state.matchup.isComparisonComplete); // Add this line
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const currentPair = useSelector(selectCurrentPair);
  const topic = useSelector((state) => state.game.topic);

  useEffect(() => {
    if (items.length > 0 && pairs.length === 0) {
      dispatch(generatePairs(items));
    }
  }, [items, pairs.length]); 
  
  useEffect(() => {
    if (currentPairIndex >= pairs.length && pairs.length > 0) {
      dispatch(completeMatchup());
      dispatch(setCurrentPage('RESULTS_PAGE'));
    }
  }, [currentPairIndex, pairs.length]);

  const handleChoiceSelect = (choiceIndex) => {
    dispatch(handleChoice(items[choiceIndex].name));
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
