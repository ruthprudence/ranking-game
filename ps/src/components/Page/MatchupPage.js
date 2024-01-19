import React from 'react';
import Button from '../UI/Button';
import useMatchupPage from '../../hooks/Page/useMatchupPage';
import {useSelector} from 'react-redux';

const MatchupPage = () => {
    const items = useSelector((state) => state.game.items);
    const pairs = useSelector((state) => state.game.pairs);
    const topic = useSelector((state) => state.game.topic);

    const { currentPair, handleLeftChoiceSelect, handleRightChoiceSelect } = useMatchupPage();

    return (
        <div>
            <h3>{topic}</h3>
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
