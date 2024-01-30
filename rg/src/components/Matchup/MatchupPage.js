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
  const currentPair = useSelector(selectCurrentPair);
  const topic = useSelector((state) => state.ui.topic, shallowEqual);
  const items = useSelector((state) => state.ui.items);

  console.log(`
  isComparisonComplete: ${isComparisonComplete}
  currentPair: ${currentPair}
  topic: ${topic}
  items: ${items.map(item => JSON.stringify(item, null, 2))}`);

  useEffect(() => {
    dispatch(startMatchup(items));
  }, [dispatch, items]);
  
  useEffect(() => {
    if (isComparisonComplete) {
      dispatch(setCurrentPage(PAGES.RESULTS));
    }
  }, [isComparisonComplete, dispatch]);

  const handleChoiceSelect = (choiceIndex) => {
    console.log(`handleChoiceSelect called with choiceIndex: ${choiceIndex}`);
    
    if (currentPair && currentPair.length === 2) {
      console.log(`currentPair: ${currentPair}`);
      
      const leftItem = items[currentPair[0]];
      const rightItem = items[currentPair[1]];
      console.log(`Item on the left: ${JSON.stringify(leftItem, null, 2)}`);
      console.log(`Item on the right: ${JSON.stringify(rightItem, null, 2)}`);
  
      const selectedItem = items[currentPair[choiceIndex]];
      console.log(`User chose: ${JSON.stringify(selectedItem, null, 2)}`);
      
      if (selectedItem) {
        dispatch(incrementVote(selectedItem)); // Passing the whole item object
        console.log(`incrementVote dispatched with selectedItem: ${JSON.stringify(selectedItem, null, 2)}`);
        
        dispatch(nextPair());
        console.log('nextPair dispatched');
      }

      // Output the items and their votes after the vote
      items.forEach(item => {
        console.log(`Item: ${item.name}, Votes: ${item.votes}`);
      });
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
