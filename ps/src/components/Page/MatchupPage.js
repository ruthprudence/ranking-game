import React from 'react';
import Button from '../UI/Button';
import useMatchupPage from '../../trash/useMatchupPage';
import {useSelector} from 'react-redux';



const MatchupPage = () => {
    const dispatch = useDispatch();
    const items = useSelector((state) => state.game.items);
    const currentPair = useSelector((state) => state.game.currentPair);

    const handleLeftChoiceSelect = () => {
        dispatch(selectLeftChoice());
    };

    const handleRightChoiceSelect = () => {
        dispatch(selectRightChoice());
    };
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
