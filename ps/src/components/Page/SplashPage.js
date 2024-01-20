// SplashPage.js
import React, { useState } from 'react';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
import { useDispatch } from 'react-redux';
import {setTopic, setCurrentPage} from '../../features/game/gameSlice'

const SplashPage = ({ goToInputPage }) => {
    const [localTopic, setLocalTopic] = useState('');
    const dispatch = useDispatch();

    const handleTopicSubmit = () => {
        if (!localTopic.trim()) {
            alert('Please enter a topic.');
            return;
        }
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
