// SplashView.js
import React from 'react';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
import { PLACEHOLDER_SPLASH, PLACEHOLDER_PROMPT } from '../../utils/constants';

export const SplashView = ({ localTopic, setLocalTopic, handleTopicSubmit }) => {
    return (
        <div>
            <h1>the Ranking Game</h1>
            <InputField value={localTopic} onChange={(e) => setLocalTopic(e.target.value)} placeholder={PLACEHOLDER_SPLASH} />
            <Button onClick={handleTopicSubmit}>Submit Topic</Button>
            <p><i>{PLACEHOLDER_PROMPT}</i></p>
        </div>
    );
};
