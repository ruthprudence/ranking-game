// SplashPage.js
import React, { useState } from 'react';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
import { useDispatch } from 'react-redux';
import {setTopic, setCurrentPage} from '../../features/game/gameSlice'


// import useSplashPage from '../../hooks/Page/useSplashPage';
// import useHandleTopicSubmit from '../../hooks/Page/functions/input/useHandleTopicSubmit';

const SplashPage = ({ goToInputPage }) => {
    const [localTopic, setLocalTopic] = useState('');
    const dispatch = useDispatch();

    const handleTopicSubmit = () => {
        dispatch(setTopic(localTopic));
        dispatch(setCurrentPage('INPUT_PAGE'));
    };

    return (
        <div>
            <h1>the Ranking Game</h1>
            <InputField value={localTopic} onChange={(e) => setLocalTopic(e.target.value)} placeholder="e.g. Fruits" />
            <Button onClick={handleTopicSubmit}>Submit Topic</Button>
            <p><i>Enter something to Rank</i></p>
        </div>
    );
};

export default SplashPage;
