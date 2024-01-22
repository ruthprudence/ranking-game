// SplashView.js
import React from 'react';
import Button from '../UI/Button';
import InputField from '../UI/InputField';

export const SplashView = ({ localTopic, setLocalTopic, handleTopicSubmit }) => {
    return (
        <div>
            <h1>the Ranking Game</h1>
            <InputField value={localTopic} onChange={(e) => setLocalTopic(e.target.value)} placeholder="e.g. Fruits" />
            <Button onClick={handleTopicSubmit}>Submit Topic</Button>
            <p><i>Enter something to Rank</i></p>
        </div>
    );
};
