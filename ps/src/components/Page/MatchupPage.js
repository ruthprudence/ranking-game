import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../UI/Button';
import { generatePairs, selectChoice, completeMatchup } from '../../features/matchup/matchupSlice';
import { selectCurrentPair } from '../../selectors/matchupSelectors';
import { setCurrentPage } from '../../features/game/gameSlice';

const MatchupPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.game.items);
  const pairs = useSelector((state) => state.matchup.pairs);
  const isComparisonComplete = useSelector((state) => state.matchup.isComparisonComplete); // Add this line
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const currentPair = useSelector(selectCurrentPair);
  const topic = useSelector((state) => state.game.topic);

  useEffect(() => {
    console.log("MatchupPage useEffect - Items:", items);
    if (items.length > 0 && pairs.length === 0) {
      console.log("Dispatching generatePairs with items:", items);
      dispatch(generatePairs(items));
    }
  }, [dispatch, items, pairs.length]);

  const handleChoiceSelect = (choiceIndex) => {
    dispatch(selectChoice(items[choiceIndex].name));
    const nextPairIndex = currentPairIndex + 1;
    if (nextPairIndex >= pairs.length) {
      dispatch(completeMatchup());
    } else {
      setCurrentPairIndex(nextPairIndex);
    }
  };

  if (isComparisonComplete) {
    dispatch(setCurrentPage('RESULTS_PAGE'));
    return <p>Redirecting to results...</p>;
  }

  if (!currentPair || currentPair.length === 0) {
    return <p>No matchups available at this moment.</p>;
  }

  return (
    <div>
      <h3>{topic}</h3>
      <div>
        <Button onClick={() => handleChoiceSelect(currentPair[0])}>{items[currentPair[0]].name}</Button>
        <Button onClick={() => handleChoiceSelect(currentPair[1])}>{items[currentPair[1]].name}</Button>
      </div>
      <p><i>Who Wins?</i></p>
    </div>
  );
};

export default MatchupPage;
