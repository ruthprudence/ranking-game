// MatchupPage.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../UI/Button';
import { generatePairs, selectChoice } from '../../features/matchup/matchupSlice';

const MatchupPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.game.items);
  const pairs = useSelector((state) => state.matchup.pairs);
  const [currentPairIndex, setCurrentPairIndex] = useState(0);

  const topic = useSelector((state) => state.game.topic);

  // Dispatch generatePairs when items change
  useEffect(() => {
    dispatch(generatePairs());
  }, [dispatch, items]);

  const currentPair = pairs[currentPairIndex];
  console.log("MatchupPage - Current Pair:", currentPair);
  if (!currentPair || currentPair.length === 0) {
    console.log('MatchupPage: No current pair available');
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
