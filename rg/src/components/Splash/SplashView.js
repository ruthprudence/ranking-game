import React from 'react';
import Button from '../UI/Button';
import InputField from '../UI/InputField';
import { PLACEHOLDER_SPLASH, PLACEHOLDER_PROMPT, PLACEHOLDERS, PROMPTS } from '../../features/constants';

export const SplashView = ({ localTopic, setLocalTopic, handleTopicSubmit, isSubmitEnabled }) => {
    return (
        <div className="page-view">
            <h1>the Ranking Game</h1>
            <div className="input-container">
                <InputField value={localTopic} onChange={(e) => setLocalTopic(e.target.value)} placeholder={PLACEHOLDERS.SPLASH} />
            </div>
            <div className="button-container">
                <Button  className="button"  onClick={handleTopicSubmit} disabled={!isSubmitEnabled}>Submit Topic</Button>
            </div>
            <p><i>{PROMPTS.SPLASH}</i></p>
        </div>
    );
};
