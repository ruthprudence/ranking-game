// SplashView.js
import React from 'react';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
import { PLACEHOLDER_SPLASH, PLACEHOLDER_PROMPT, PLACEHOLDERS, PROMPTS} from '../../features/constants';

export const SplashView = ({ localTopic, setLocalTopic, handleTopicSubmit, isSubmitEnabled }) => {
    return (
        <div>
            <h1>the Ranking Game</h1>
            <InputField value={localTopic} onChange={(e) => setLocalTopic(e.target.value)} placeholder={PLACEHOLDERS.SPLASH} />
            <Button onClick={handleTopicSubmit} disabled={!isSubmitEnabled}>Submit Topic</Button>
            <p><i>{PROMPTS.SPLASH}</i></p>
        </div>
    );
};