// MatchupPage.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../UI/Button';
import { generatePairs, selectChoice } from '../../features/matchup/matchupSlice';
import { selectCurrentPair } from '../../selectors/matchupSelectors';

const MatchupPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.game.items); // Correctly accessing items from gameSlice
  const pairs = useSelector((state) => state.matchup.pairs);
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const currentPair = useSelector(selectCurrentPair);
  const topic = useSelector((state) => state.game.topic);

  // Dispatch generatePairs when items change
  useEffect(() => {
    if (pairs.length === 0 && items.length > 0) {
      dispatch(generatePairs(items));
    }
  }, [dispatch, items, pairs.length]);

  console.log("Pairs:", pairs);
  console.log("Current Pair Index:", currentPairIndex);
  console.log("Current Pair:", pairs[currentPairIndex]);

  

  // Logic to handle end of pairs
  if (currentPairIndex >= pairs.length) {
    // Redirect to the results page or show a completion message
    return <p>All matchups completed.</p>;
  }

  if (!currentPair || currentPair.length === 0) {
    return <p>No matchups available at this moment.</p>;
  }

  const handleLeftChoiceSelect = () => {
    dispatch(selectChoice(items[currentPair[0]].name));
    setCurrentPairIndex(currentPairIndex + 1);
  };
  
  const handleRightChoiceSelect = () => {
    dispatch(selectChoice(items[currentPair[1]].name));
    setCurrentPairIndex(currentPairIndex + 1);
  };
  

  return (
    <div>
      <h3>{topic}</h3>
      <div>
        <Button onClick={handleLeftChoiceSelect}>{items[currentPair[0]].name}</Button>
        <Button onClick={handleRightChoiceSelect}>{items[currentPair[1]].name}</Button>
      </div>
      <p><i>Who Wins?</i></p>
    </div>
  );
};

export default MatchupPage;
