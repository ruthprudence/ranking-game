import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../UI/Button';
import { selectChoice } from '../../features/matchup/matchupSlice';

const MatchupPage = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.matchup.items);
    const currentPair = useSelector((state) => state.matchup.currentPair);

    const handleLeftChoiceSelect = () => {
        if (currentPair) {
            dispatch(selectChoice(items[currentPair[0]].name));
        }
    };

    const handleRightChoiceSelect = () => {
        if (currentPair) {
            dispatch(selectChoice(items[currentPair[1]].name));
        }
    };

    return (
        <div>
            <h3>{/* topic from Redux store or props */}</h3>
            <div>
                {currentPair && (
                    <>
                        <Button onClick={handleLeftChoiceSelect}>{items[currentPair[0]].name}</Button>
                        <Button onClick={handleRightChoiceSelect}>{items[currentPair[1]].name}</Button>
                    </>
                )}
            </div>
            <p><i>Who Wins?</i></p>
        </div>
    );
};

export default MatchupPage;
